/* ============================================================
   app.js — lógica de la app CLF-C02
   Depende de js/lang/*.js, i18n.js, data.js y planner.js (cargados antes en index.html).
   ============================================================ */

/* ---------- localStorage helper ---------- */
const store = {
  get(k){ try{ return JSON.parse(localStorage.getItem(k)); }catch(e){ return null; } },
  set(k,v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} if (window.cloudSave) cloudSave(k); }
};

/* ---------- Toggle de tema claro / oscuro ---------- */
const themeBtn = document.getElementById("themeBtn");

function setThemeLabel(th) {
  themeBtn.querySelector(".ti").textContent = th === "dark" ? "☀" : "☾";
  themeBtn.querySelector(".tl").textContent = th === "dark" ? t("themeLight") : t("themeDark");
}

function applyTheme(th) {
  document.documentElement.setAttribute("data-theme", th);
  setThemeLabel(th);
  store.set("clf-theme", th);
}

themeBtn.addEventListener("click", () => {
  applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
});

/* ---------- Generador de enlaces y reproductores ---------- */
function linksHTML(k) {
  const L = LINKS_RAW[k], names = T().linkTitles[k];
  if (!L) return "";

  /* iframe de YouTube para cada video del tema */
  const iframes = (L.v || []).map(([s], i) =>
    `<iframe class="yt-embed"
      src="https://www.youtube-nocookie.com/embed/${VID_ID}?start=${s}&rel=0"
      title="${names.v[i]}"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>`
  ).join("");

  /* enlaces de texto al video (abren en nueva pestaña) */
  const v = (L.v || []).map(([s, h], i) =>
    `<a class="lk vid" href="${VID}${s}s" target="_blank" rel="noopener"><span class="ico">&#9654;</span><span>${names.v[i]}<small>${t("videoNote", h)}</small></span></a>`
  ).join("");

  /* enlaces a documentación oficial */
  const d = (L.d || []).map((p, i) =>
    `<a class="lk" href="${p.startsWith("http") ? p : t("docBase") + p}" target="_blank" rel="noopener"><span class="ico">&#8599;</span><span>${names.d[i]}<small>${t(p.includes("skillbuilder.aws") ? "skillBuilderNote" : "officialPage")}</small></span></a>`
  ).join("");

  return `<div class="links">${iframes}${v}${d}</div>`;
}

/* ---------- Plan: configuración y bloques ---------- */
const todayDate = () => { const n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()); };
const toISO   = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const fromISO = s => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
const fmtMin  = m => { const h = Math.floor(m / 60), r = Math.round(m % 60); return h ? (r ? `${h} h ${r}` : `${h} h`) : `${r} min`; };
const weekKey = d => toISO(addDays(d, -((d.getDay() + 6) % 7)));
let TOPICS = {};

/* Ajustes del plan (se guardan en este navegador) */
const S = Object.assign({ exam: null, blocked: [], minWeek: 90, minWeekend: 180, start: null, skip: [] }, store.get("clf-plan") || {});
if (!S.start) S.start = toISO(todayDate());
S.skip = S.skip.filter(k => k in TOPIC_META);   /* descarta temas de versiones anteriores del plan */
const savePlan = () => store.set("clf-plan", S);

const checks   = store.get("clf-checks") || {};
const blocksEl = document.getElementById("blocks");
let view = { weeks: [] }, openWeek = null;

function taskItem(key, withInfo) {
  const id = `c-${key}`, tp = TOPICS[key];
  const info = withInfo && T().info[key], lnk = LINKS_RAW[key], mod = TOPIC_META[key].mod;
  const modBtn = mod ? `<button type="button" class="btn ghost modq">${t("modPractice", mod)}</button>` : "";
  const li = document.createElement("li");
  li.innerHTML =
    `<label for="${id}">` +
      `<input type="checkbox" id="${id}">` +
      `<span>${tp.txt}${withInfo ? `<span class="tmin">~${fmtMin(tp.min)}</span>` : ""}</span>` +
    `</label>` +
    (info
      ? `<details class="more">` +
          `<summary>${t(lnk ? "explainLinks" : "explain")}</summary>` +
          `<div class="info">${info}${linksHTML(key)}${modBtn}</div>` +
        `</details>`
      : "");
  const mb = li.querySelector(".modq");
  if (mb) mb.addEventListener("click", () => practiceModule(mod));
  const cb = li.querySelector("input");
  cb.checked = !!checks[id];
  cb.addEventListener("change", () => {
    checks[id] = cb.checked;
    store.set("clf-checks", checks);
    if (!cb.checked && S.skip.includes(key)) {      /* un tema completado vuelve al plan */
      S.skip = S.skip.filter(k => k !== key);
      savePlan(); renderPlan(); return;
    }
    updateProgress(); updateLate();
  });
  return li;
}

function renderPlan() {
  TOPICS = Object.fromEntries(allTopics().map(tp => [tp.key, tp]));
  const t0   = todayDate();
  const exam = S.exam ? fromISO(S.exam) : null;
  const plan = buildPlan({ start: fromISO(S.start), exam, blocked: S.blocked, minWeek: S.minWeek, minWeekend: S.minWeekend, skip: S.skip });
  const days = plan.days.filter(d => d.keys.length);

  const weeks = [];
  days.forEach((d, i) => {
    d.n = i + 1;
    const k = weekKey(d.date);
    let w = weeks[weeks.length - 1];
    if (!w || w.k !== k) { w = { k, days: [] }; weeks.push(w); }
    w.days.push(d);
  });
  view = { weeks, days, t0 };

  let def = weeks.findIndex(w => w.days.some(d => d.date >= t0));
  if (def < 0) def = 0;
  const open = openWeek !== null && openWeek < weeks.length ? openWeek : def;

  blocksEl.innerHTML = "";
  weeks.forEach((w, wi) => {
    const first = w.days[0], last = w.days[w.days.length - 1];
    const range = exam
      ? (first === last ? fmtDay(first.date) : `${fmtDay(first.date)} – ${fmtDay(last.date)}`)
      : (first === last ? t("dayN", first.n) : t("daysRange", first.n, last.n));
    const det = document.createElement("details");
    det.className = "block";
    det.open = wi === open;
    det.innerHTML =
      `<summary><span class="bdate">${range}</span><span class="bcount" data-b="${wi}"></span>` +
      `<span class="btitle">${t("weekN", wi + 1)}</span></summary><ul class="tasks"></ul>`;
    const ul = det.querySelector("ul");
    w.days.forEach(d => {
      const hdr = document.createElement("li");
      hdr.className = "dayhdr";
      hdr.dataset.keys = d.keys.join(" ");
      hdr.dataset.past = d.date < t0 ? "1" : "";
      hdr.innerHTML =
        `<span>${exam ? fmtDay(d.date) : t("dayN", d.n)}</span>` +
        (+d.date === +t0 ? `<span class="badge">${t("today")}</span>` : "") +
        `<span class="badge late" hidden>${t("lateBadge")}</span>` +
        `<span class="dm">~${fmtMin(d.min)}</span>`;
      ul.appendChild(hdr);
      d.keys.forEach(k => ul.appendChild(taskItem(k, true)));
    });
    det.addEventListener("toggle", () => { if (det.open) openWeek = wi; });
    blocksEl.appendChild(det);
  });

  if (S.skip.length) {
    const det = document.createElement("details");
    det.className = "block";
    det.innerHTML =
      `<summary><span class="bdate">${t("doneDate")}</span><span class="bcount" data-b="skip"></span>` +
      `<span class="btitle">${t("doneTitle")}</span></summary><ul class="tasks"></ul>`;
    S.skip.forEach(k => det.querySelector("ul").appendChild(taskItem(k, false)));
    blocksEl.appendChild(det);
  }

  /* Textos que dependen de la fecha */
  const sum = document.getElementById("planSummary"), warn = document.getElementById("planWarn");
  const dleft = exam ? dayDiff(t0, exam) : null;
  const names = plan.dropped.map(k => TOPICS[k].txt);
  if (plan.noTime)  sum.textContent = t("sumNoTime");
  else if (exam)    sum.textContent = t("sumExam", fmtDay(exam), days.length, fmtMin(plan.haveMin), fmtMin(plan.needMin));
  else              sum.textContent = t("sumNoExam", days.length, fmtMin(plan.needMin));

  let html = "";
  if (plan.overload) {
    html += `<div class="pn-head"><span class="pn-ico">!</span><strong>${t("overloadTitle")}</strong></div>` +
      `<div class="pn-stats"><div><b>${fmtMin(plan.needMin)}</b><small>${t("needLbl")}</small></div>` +
      `<div><b>${fmtMin(plan.haveMin)}</b><small>${t("haveLbl")}</small></div></div>` +
      `<p>${t("overloadAdvice")}</p>`;
  }
  if (names.length) {
    html += `<details class="pn-drop"><summary>${t("droppedSummary", names.length)}</summary>` +
      `<ul>${names.map(n => `<li>${n}</li>`).join("")}</ul>` +
      `<p>${t("droppedNote")}</p></details>`;
  }
  warn.innerHTML = html;
  warn.hidden = !html;

  document.getElementById("blocksLead").textContent = exam ? t("blocksLeadExam", fmtDay(exam)) : t("blocksLeadNo");

  const wk = [1, 2, 3, 4, 5, 6, 0];
  let weekTotal = 0;
  document.getElementById("weekRows").innerHTML = wk.map(g => {
    const off = S.blocked.includes(g), weekend = g === 0 || g === 6, c = weekend ? S.minWeekend : S.minWeek;
    if (!off) weekTotal += c;
    return `<tr><td>${t("dowFull")[g]}</td><td class="num">${off ? "—" : fmtMin(c)}</td><td>${off ? t("weekOff") : t(weekend ? "weekWeekend" : "weekWeekday")}</td></tr>`;
  }).join("");
  document.getElementById("weekLead").textContent = t("weekLead", fmtMin(weekTotal));

  const cd = document.getElementById("countdown");
  if (!exam)            cd.textContent = t("cdNone");
  else if (dleft > 1)   cd.textContent = t("cdDays", dleft, fmtDay(exam));
  else if (dleft === 1) cd.textContent = t("cdTomorrow");
  else if (dleft === 0) cd.textContent = t("cdToday");
  else                  cd.textContent = t("cdPast", fmtDay(exam));

  updateProgress(); updateLate();
}

/* Días pasados con temas sin marcar: se avisa y se ofrece recalcular desde hoy */
function updateLate() {
  let late = 0;
  document.querySelectorAll(".dayhdr").forEach(h => {
    const n = h.dataset.keys.split(" ").filter(k => !checks[`c-${k}`]).length;
    const isLate = !!h.dataset.past && n > 0;
    h.querySelector(".late").hidden = !isLate;
    if (isLate) late += n;
  });
  const box = document.getElementById("planLate");
  box.hidden = !late;
  document.getElementById("lateTxt").textContent = t("lateCount", late);
}

document.getElementById("recalc").addEventListener("click", () => {
  S.skip  = allTopics().map(tp => tp.key).filter(k => checks[`c-${k}`]);
  S.start = toISO(todayDate());
  openWeek = null;
  savePlan(); renderPlan();
});

function updateProgress() {
  let total = 0, done = 0;
  view.weeks.forEach((w, wi) => {
    let wt = 0, wd = 0;
    w.days.forEach(d => d.keys.forEach(k => { wt++; if (checks[`c-${k}`]) wd++; }));
    total += wt; done += wd;
    const c = document.querySelector(`.bcount[data-b="${wi}"]`);
    if (c) { c.textContent = `${wd}/${wt}`; c.classList.toggle("done", wd === wt); }
  });
  let sd = 0;
  S.skip.forEach(k => { if (checks[`c-${k}`]) sd++; });
  total += S.skip.length; done += sd;
  const sc = document.querySelector('.bcount[data-b="skip"]');
  if (sc) { sc.textContent = `${sd}/${S.skip.length}`; sc.classList.toggle("done", sd === S.skip.length); }
  document.getElementById("ptotal").textContent = `${done} / ${total}`;
  document.getElementById("pbar").style.width = (total ? done / total * 100 : 0) + "%";
}

/* Controles de configuración */
(function () {
  const examEl = document.getElementById("examDate"), noEl = document.getElementById("noDate");
  const mw = document.getElementById("minWeek"), me = document.getElementById("minWeekend");
  const opts = [30, 45, 60, 90, 120, 150, 180, 240, 300];
  [mw, me].forEach(sel => sel.innerHTML = opts.map(m => `<option value="${m}">${fmtMin(m)}</option>`).join(""));
  mw.value = String(S.minWeek); me.value = String(S.minWeekend);
  if (!mw.value) { S.minWeek = 90; mw.value = "90"; }
  if (!me.value) { S.minWeekend = 180; me.value = "180"; }
  examEl.min = toISO(addDays(todayDate(), 1));
  examEl.value = S.exam || "";
  noEl.checked = !S.exam;
  examEl.disabled = noEl.checked;
  const btns = [...document.querySelectorAll(".dbtn")];
  const syncBtns = () => btns.forEach(b => b.setAttribute("aria-pressed", S.blocked.includes(+b.dataset.d)));
  syncBtns();

  const change = () => { openWeek = null; savePlan(); renderPlan(); };
  examEl.addEventListener("change", () => {
    S.exam = examEl.value || null;
    if (S.exam) noEl.checked = false;
    if (S.exam && fromISO(S.exam) <= fromISO(S.start)) S.start = toISO(todayDate());
    change();
  });
  noEl.addEventListener("change", () => {
    examEl.disabled = noEl.checked;
    if (noEl.checked) { S.exam = null; examEl.value = ""; } else examEl.focus();
    change();
  });
  mw.addEventListener("change", () => { S.minWeek = +mw.value; change(); });
  me.addEventListener("change", () => { S.minWeekend = +me.value; change(); });
  btns.forEach(b => b.addEventListener("click", () => {
    const g = +b.dataset.d;
    if (S.blocked.includes(g)) S.blocked = S.blocked.filter(x => x !== g);
    else if (S.blocked.length < 6) S.blocked = S.blocked.concat(g);   /* al menos un día libre para estudiar */
    syncBtns(); change();
  }));
})();

/* ---------- Kit: buscador de servicios ---------- */
const svcList = document.getElementById("svcList");
const svcSearch = document.getElementById("svcSearch");
const norm    = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

function renderSvc(q) {
  const n    = norm(q.trim());
  const rows = T().svc.filter(([a, b]) => !n || norm(a + " " + b).includes(n));
  svcList.innerHTML = rows.length
    ? rows.map(([a, b]) =>
        `<div class="row"><span class="q">${a}</span><span class="a">${b}</span></div>`
      ).join("")
    : `<div class="empty">${t("svcEmpty", q.replace(/</g, "&lt;"))}</div>`;
}

svcSearch.addEventListener("input", e => renderSvc(e.target.value));

/* ---------- Kit: pares que se confunden y glosario ---------- */
function renderKit() {
  renderSvc(svcSearch.value);
  document.getElementById("pairs").innerHTML =
    T().pairs.map(([a, b]) => `<tr><td class="svc">${a}</td><td>${b}</td></tr>`).join("");
  document.getElementById("gloss").innerHTML =
    T().gloss.map(([a, b, c]) =>
      `<tr><td class="svc">${a}</td><td><i>${b}</i></td><td>${c}</td></tr>`
    ).join("");
}

/* ---------- Práctica: quiz por módulo ---------- */
/* Cada pregunta: [enunciado, opciones, correcta (índice, o lista si hay que elegir varias),
   [por qué la correcta, razón de cada opción, pista], módulo].
   Cada ronda toma PER_MOD preguntas al azar por módulo, priorizando las que no salieron en la ronda anterior. */
const quizEl = document.getElementById("quiz");
const qModEl = document.getElementById("qMod");
const PER_MOD = 5;
let qMod = +store.get("clf-qmod") || 0;          /* 0 = todos los módulos */
let round = [], qi = 0, score = 0, sel = [], answered = false, perm = null;   /* perm = orden mezclado de las opciones */

const shuffle = arr => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

function newRound() {
  const Q = T().q, last = new Set(store.get("clf-qlast") || []);
  const mods = qMod ? [qMod] : t("mods").map((_, i) => i + 1);
  const pick = [];
  mods.forEach(m => {
    const idx = Q.map((q, i) => i).filter(i => Q[i][4] === m);
    const order = shuffle(idx.filter(i => !last.has(i))).concat(shuffle(idx.filter(i => last.has(i))));
    pick.push(...order.slice(0, PER_MOD));
  });
  round = shuffle(pick);
  store.set("clf-qlast", round);
  qi = 0; score = 0; sel = []; answered = false; perm = null;
}

function renderQFilter() {
  const mods = t("mods");
  qModEl.innerHTML =
    `<option value="0">${t("qAllMods", mods.length * PER_MOD)}</option>` +
    mods.map((name, i) => `<option value="${i + 1}">${t("qModOpt", i + 1, name, PER_MOD)}</option>`).join("");
  qModEl.value = String(qMod);
  const bank = T().q.filter(q => !qMod || q[4] === qMod).length;
  document.getElementById("qSession").textContent = t("qSession", round.length, bank);
}

function restartQuiz() { newRound(); renderQFilter(); renderQ(); }

qModEl.addEventListener("change", () => {
  qMod = +qModEl.value;
  store.set("clf-qmod", qMod);
  restartQuiz();
});
document.getElementById("qRestart").addEventListener("click", restartQuiz);

/* Desde el plan: abrir la práctica de un módulo */
function practiceModule(m) {
  qMod = m; store.set("clf-qmod", m);
  restartQuiz();
  show("practica");
  window.scrollTo({ top: 0 });
}

function renderQ() {
  const Q = T().q;
  if (qi >= round.length) {
    const pct = Math.round(score / round.length * 100);
    quizEl.innerHTML =
      `<div class="qhead"><span>${t("qResult")}</span><span>${t("qCount", round.length)}</span></div>` +
      `<div class="score">${score}/${round.length}</div>` +
      `<p>${t(pct >= 80 ? "qHigh" : pct >= 70 ? "qMid" : "qLow")}</p>` +
      `<div class="btnrow"><button class="btn" id="again">${t("qRestart")}</button></div>`;
    document.getElementById("again").onclick = restartQuiz;
    return;
  }

  const [text, opts, correct, [why, reasons, tip], mod] = Q[round[qi]];
  const multi = Array.isArray(correct);
  const right = multi ? correct : [correct];
  if (!perm || perm.length !== opts.length) perm = shuffle(opts.map((_, i) => i));
  const letter = oi => String.fromCharCode(65 + perm.indexOf(oi));
  const label = oi => `${letter(oi)}) ${opts[oi]}`;
  const byPos = list => list.slice().sort((a, b) => perm.indexOf(a) - perm.indexOf(b));

  quizEl.innerHTML =
    `<div class="qhead"><span>${t("qOf", qi + 1, round.length)}</span><span>${t("qHits", score)}</span></div>` +
    `<div class="qtag">${t("qModTag", mod, t("mods")[mod - 1])}</div>` +
    `<div class="qtext">${text}</div>` +
    (multi ? `<p class="qhint">${t("qPickHint", right.length)}</p>` : "") +
    `<div class="opts">${
      perm.map(oi => `<button class="opt" data-i="${oi}" aria-pressed="false">${label(oi)}</button>`).join("")
    }</div>` +
    `<div id="exp"></div>` +
    `<div class="btnrow">` +
      (multi ? `<button class="btn" id="check" disabled>${t("qCheck")}</button>` : "") +
      `<button class="btn" id="next" hidden>${t(qi === round.length - 1 ? "qSee" : "qNext")}</button>` +
    `</div>`;

  const btns = [...quizEl.querySelectorAll(".opt")];   /* en orden de pantalla; data-i = índice original */
  const syncSel = () => {
    btns.forEach(b => b.setAttribute("aria-pressed", sel.includes(+b.dataset.i)));
    const ck = document.getElementById("check");
    if (ck) ck.disabled = sel.length !== right.length;
  };

  /* Corrección: por qué la correcta, por qué fallaste, por qué no las otras y una pista.
     También se usa al cambiar de idioma con la pregunta ya respondida. */
  const showAnswer = () => {
    const ok = sel.length === right.length && sel.every(j => right.includes(j));
    btns.forEach(x => {
      const j = +x.dataset.i;
      x.disabled = true;
      if (right.includes(j)) x.classList.add("right");
      else if (sel.includes(j)) x.classList.add("wrong");
    });
    const yours = byPos(sel.filter(j => !right.includes(j)));
    const others = byPos(opts.map((_, i) => i).filter(j => !right.includes(j) && !sel.includes(j)));
    const list = items => `<ul>${items.map(j => `<li><b>${label(j)}:</b> ${reasons[j]}</li>`).join("")}</ul>`;
    const rightTxt = byPos(right).map(label).join(` ${t("qAnd")} `);
    document.getElementById("exp").innerHTML =
      `<div class="explain ${ok ? "ok" : "bad"}">` +
        `<div class="exhead">${t(ok ? "qRight" : "qWrong")}${ok ? "" : " " + t("qRightIs", right.length, rightTxt)}</div>` +
        `<p><b>${t("qWhyOk", right.length)}</b> ${why}</p>` +
        (yours.length ? `<div><b>${t("qYours", yours.length)}</b>${list(yours)}</div>` : "") +
        (others.length ? `<div><b>${t("qWhyNot")}</b>${list(others)}</div>` : "") +
        `<p class="qtip"><b>${t("qTip")}</b> ${tip}</p>` +
      `</div>`;
    const ck = document.getElementById("check");
    if (ck) ck.hidden = true;
    document.getElementById("next").hidden = false;
    return ok;
  };

  const answer = () => {
    answered = true;
    if (showAnswer()) score++;
    quizEl.querySelector(".qhead span:last-child").textContent = t("qHits", score);
    document.getElementById("next").focus();
  };

  btns.forEach(b => b.onclick = () => {
    const j = +b.dataset.i;
    if (answered) return;
    if (!multi) { sel = [j]; answer(); return; }
    sel = sel.includes(j) ? sel.filter(x => x !== j) : sel.concat(j);
    syncSel();
  });
  if (multi) document.getElementById("check").onclick = () => { if (!answered) answer(); };

  document.getElementById("next").onclick = () => { qi++; sel = []; answered = false; perm = null; renderQ(); };
  syncSel();
  if (answered) showAnswer();
}

newRound();

/* ---------- Idioma: pintar todo ---------- */
function renderAll() {
  setThemeLabel(document.documentElement.getAttribute("data-theme") || "light");
  renderPlan();
  renderKit();
  renderQFilter();
  renderQ();
}

document.addEventListener("langchange", renderAll);

applyStatic();
renderLangSwitch();
renderAll();

/* ---------- Navegación por pestañas ---------- */
const TABS = ["plan", "kit", "practica"];

function show(name) {
  if (!TABS.includes(name)) name = "plan";
  TABS.forEach(tb => {
    document.getElementById(tb).hidden = tb !== name;
    document.getElementById("tab-" + tb).setAttribute("aria-selected", tb === name);
  });
  store.set("clf-tab", name);
}

TABS.forEach(tb =>
  document.getElementById("tab-" + tb).addEventListener("click", () => {
    show(tb);
    window.scrollTo({ top: 0 });
  })
);

show((location.hash || "").slice(1) || store.get("clf-tab") || "plan");
