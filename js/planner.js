/* ============================================================
   planner.js — reparte los temas del plan en días reales
   Depende de data.js e i18n.js. No toca el DOM: solo calcula.
   ============================================================ */

const DAY_MS = 86400000;

function addDays(d, n) { const r = new Date(d); r.setDate(r.getDate() + n); return r; }
function dayDiff(a, b) {
  return Math.round((Date.UTC(b.getFullYear(), b.getMonth(), b.getDate()) -
                     Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())) / DAY_MS);
}

/* Todos los temas en orden (el de TOPIC_META), con su texto en el idioma actual, su tiempo y su prioridad. */
function allTopics() {
  const txt = LANG[lang].topics;
  return Object.keys(TOPIC_META).map(key => ({ key, txt: txt[key], min: TOPIC_META[key].min, pri: TOPIC_META[key].pri }));
}

/* opt: { start: Date, exam: Date|null, blocked: [getDay()], minWeek, minWeekend, skip: [keys] }
   Devuelve { days:[{date, cap, keys, min}], dropped:[keys], needMin, haveMin, overload, noTime } */
function buildPlan(opt) {
  const skip    = new Set(opt.skip || []);
  const topics  = allTopics().filter(t => !skip.has(t.key));
  const blocked = new Set(opt.blocked || []);
  if (blocked.size >= 7) blocked.clear();
  const cap = d => (d.getDay() === 0 || d.getDay() === 6) ? opt.minWeekend : opt.minWeek;
  const res = { days: [], dropped: [], needMin: 0, haveMin: 0, overload: 0, noTime: false };
  const days = [];

  if (opt.exam) {
    const n = dayDiff(opt.start, opt.exam);
    for (let i = 0; i < n; i++) {
      const d = addDays(opt.start, i);
      if (!blocked.has(d.getDay())) days.push({ date: d, cap: cap(d), keys: [] });
    }
    if (!days.length) { res.noTime = true; return res; }

    /* Si no cabe todo, se quitan primero los opcionales y luego los importantes (de atrás hacia adelante). */
    const total    = () => topics.reduce((s, t) => s + t.min, 0);
    const capTotal = days.reduce((s, d) => s + d.cap, 0);
    for (const pri of [3, 2]) {
      while (total() > capTotal) {
        let idx = -1;
        topics.forEach((t, i) => { if (t.pri === pri) idx = i; });
        if (idx < 0) break;
        res.dropped.push(topics[idx].key);
        topics.splice(idx, 1);
      }
    }
    const need = total();
    const r    = capTotal ? need / capTotal : 1;
    res.haveMin = capTotal; res.needMin = need; res.overload = r > 1.05 ? r : 0;

    /* Reparto parejo: cada tema cae en el primer día cuya capacidad acumulada alcanza su punto medio. */
    let acc = 0;
    const cums = days.map(d => (acc += d.cap * r));
    let startMin = 0;
    topics.forEach(t => {
      const mid = startMin + t.min / 2; startMin += t.min;
      let di = cums.findIndex(c => c >= mid - 1e-6);
      if (di < 0 || t.key === "4-2") di = days.length - 1;   /* la víspera va el último día de estudio */
      days[di].keys.push(t.key);
    });
  } else {
    /* Sin fecha: se llena cada día hasta su tiempo disponible, sin dejar huecos. */
    let i = 0, d = new Date(opt.start), guard = 0;
    while (i < topics.length && guard++ < 800) {
      if (!blocked.has(d.getDay())) {
        const c = cap(d), day = { date: new Date(d), cap: c, keys: [] };
        let used = 0;
        while (i < topics.length && (!day.keys.length || used + topics[i].min <= c)) {
          used += topics[i].min; day.keys.push(topics[i++].key);
        }
        days.push(day);
      }
      d = addDays(d, 1);
    }
    res.needMin = topics.reduce((s, t) => s + t.min, 0);
  }

  const byKey = Object.fromEntries(allTopics().map(t => [t.key, t]));
  days.forEach(d => { d.min = d.keys.reduce((s, k) => s + byKey[k].min, 0); });
  res.days = days;
  return res;
}

if (typeof module !== "undefined") module.exports = { buildPlan, allTopics, dayDiff, addDays };
