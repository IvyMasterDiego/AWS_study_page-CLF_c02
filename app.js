/* ============================================================
   app.js — lógica de la app CLF-C02
   Depende de data.js (cargado antes en index.html).
   ============================================================ */

/* ---------- localStorage helper ---------- */
const store = {
  get(k){ try{ return JSON.parse(localStorage.getItem(k)); }catch(e){ return null; } },
  set(k,v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
};

/* ---------- Toggle de tema claro / oscuro ---------- */
const themeBtn = document.getElementById("themeBtn");

function setThemeLabel(t) {
  themeBtn.querySelector(".ti").textContent = t === "dark" ? "☀" : "☾";
  themeBtn.querySelector(".tl").textContent = t === "dark" ? "Claro" : "Oscuro";
}

function applyTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  setThemeLabel(t);
  store.set("clf-theme", t);
}

/* El tema ya fue aplicado por el script inline del <head> para evitar flash.
   Aquí solo sincronizamos el texto del botón con el estado actual. */
const _initialTheme = document.documentElement.getAttribute("data-theme") || "light";
setThemeLabel(_initialTheme);

themeBtn.addEventListener("click", () => {
  applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
});

/* ---------- Generador de enlaces y reproductores ---------- */
function linksHTML(k) {
  const L = LINKS[k];
  if (!L) return "";

  /* iframe de YouTube para cada video del tema */
  const iframes = (L.v || []).map(([t, s]) =>
    `<iframe class="yt-embed"
      src="https://www.youtube-nocookie.com/embed/${VID_ID}?start=${s}&rel=0"
      title="${t}"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>`
  ).join("");

  /* enlaces de texto al video (abren en nueva pestaña) */
  const v = (L.v || []).map(([t, s, h]) =>
    `<a class="lk vid" href="${VID}${s}s" target="_blank" rel="noopener"><span class="ico">&#9654;</span><span>${t}<small>Video en inglés · desde ${h}</small></span></a>`
  ).join("");

  /* enlaces a documentación oficial */
  const d = (L.d || []).map(([t, p]) =>
    `<a class="lk" href="${p.startsWith("http") ? p : DOC + p}" target="_blank" rel="noopener"><span class="ico">&#8599;</span><span>${t}<small>Página oficial de AWS</small></span></a>`
  ).join("");

  return `<div class="links">${iframes}${v}${d}</div>`;
}

/* ---------- Plan: configuración y bloques ---------- */
const DOW = ["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"];
const MON = ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
const todayDate = () => { const n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()); };
const toISO   = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const fromISO = s => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
const fmtDay  = d => `${DOW[d.getDay()]} ${d.getDate()} ${MON[d.getMonth()]}`;
const fmtMin  = m => { const h = Math.floor(m / 60), r = Math.round(m % 60); return h ? (r ? `${h} h ${r}` : `${h} h`) : `${r} min`; };
const weekKey = d => toISO(addDays(d, -((d.getDay() + 6) % 7)));
const TOPICS  = Object.fromEntries(allTopics().map(t => [t.key, t]));

/* Ajustes del plan (se guardan en este navegador) */
const S = Object.assign({ exam: null, blocked: [], minWeek: 90, minWeekend: 180, start: null, skip: [] }, store.get("clf-plan") || {});
if (!S.start) S.start = toISO(todayDate());
const savePlan = () => store.set("clf-plan", S);

const checks   = store.get("clf-checks") || {};
const blocksEl = document.getElementById("blocks");
let view = { weeks: [] }, openWeek = null;

function taskItem(key, withInfo) {
  const id = `c-${key}`, t = TOPICS[key];
  const info = withInfo && INFO[key], lnk = LINKS[key];
  const li = document.createElement("li");
  li.innerHTML =
    `<label for="${id}">` +
      `<input type="checkbox" id="${id}">` +
      `<span>${t.txt}${withInfo ? `<span class="tmin">~${fmtMin(t.min)}</span>` : ""}</span>` +
    `</label>` +
    (info
      ? `<details class="more">` +
          `<summary>Ver explicación${lnk ? " y enlaces" : ""}</summary>` +
          `<div class="info">${info}${linksHTML(key)}</div>` +
        `</details>`
      : "");
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
      : (first === last ? `Día ${first.n}` : `Días ${first.n}–${last.n}`);
    const det = document.createElement("details");
    det.className = "block";
    det.open = wi === open;
    det.innerHTML =
      `<summary><span class="bdate">${range}</span><span class="bcount" data-b="${wi}"></span>` +
      `<span class="btitle">Semana ${wi + 1}</span></summary><ul class="tasks"></ul>`;
    const ul = det.querySelector("ul");
    w.days.forEach(d => {
      const hdr = document.createElement("li");
      hdr.className = "dayhdr";
      hdr.dataset.keys = d.keys.join(" ");
      hdr.dataset.past = d.date < t0 ? "1" : "";
      hdr.innerHTML =
        `<span>${exam ? fmtDay(d.date) : "Día " + d.n}</span>` +
        (+d.date === +t0 ? `<span class="badge">Hoy</span>` : "") +
        `<span class="badge late" hidden>Atrasado</span>` +
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
      `<summary><span class="bdate">Ya hechos</span><span class="bcount" data-b="skip"></span>` +
      `<span class="btitle">Temas completados</span></summary><ul class="tasks"></ul>`;
    S.skip.forEach(k => det.querySelector("ul").appendChild(taskItem(k, false)));
    blocksEl.appendChild(det);
  }

  /* Textos que dependen de la fecha */
  const sum = document.getElementById("planSummary"), warn = document.getElementById("planWarn");
  const dleft = exam ? dayDiff(t0, exam) : null;
  warn.hidden = true;
  const names = plan.dropped.map(k => TOPICS[k].txt);
  if (plan.noTime) {
    sum.textContent = "Con esa fecha y esos días no queda ningún día de estudio. Revisa la fecha o los días que bloqueaste.";
  } else if (exam) {
    sum.textContent = `Examen: ${fmtDay(exam)}. Tienes ${days.length} días de estudio con ≈ ${fmtMin(plan.haveMin)} disponibles; el plan usa ≈ ${fmtMin(plan.needMin)}.`;
  } else {
    sum.textContent = `Sin fecha de examen: el plan completo dura ${days.length} días de estudio (≈ ${fmtMin(plan.needMin)} en total). Cuando tengas fecha, ponla arriba y el plan se reajusta.`;
  }
  let html = "";
  if (plan.overload) {
    html += `<div class="pn-head"><span class="pn-ico">!</span><strong>Plan muy ajustado</strong></div>` +
      `<div class="pn-stats"><div><b>${fmtMin(plan.needMin)}</b><small>necesitas</small></div>` +
      `<div><b>${fmtMin(plan.haveMin)}</b><small>tienes</small></div></div>` +
      `<p>Suma tiempo por día o desbloquea algún día de la semana para que alcance.</p>`;
  }
  if (names.length) {
    html += `<details class="pn-drop"><summary>${names.length} ${names.length === 1 ? "tema opcional quitado" : "temas opcionales quitados"} para que quepa</summary>` +
      `<ul>${names.map(n => `<li>${n}</li>`).join("")}</ul>` +
      `<p>Si te sobra tiempo, hazlos igual: son práctica extra.</p></details>`;
  }
  warn.innerHTML = html;
  warn.hidden = !html;

  document.getElementById("blocksLead").textContent = exam
    ? `Plan hasta tu examen del ${fmtDay(exam)}. Abre la semana y marca cada tema cuando lo domines.`
    : "Plan en orden de estudio, sin fechas. Abre la semana y marca cada tema cuando lo domines.";

  const wk = [1, 2, 3, 4, 5, 6, 0], names7 = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
  let weekTotal = 0;
  document.getElementById("weekRows").innerHTML = wk.map(g => {
    const off = S.blocked.includes(g), c = (g === 0 || g === 6) ? S.minWeekend : S.minWeek;
    if (!off) weekTotal += c;
    return `<tr><td>${names7[g]}</td><td class="num">${off ? "—" : fmtMin(c)}</td><td>${off ? "Descanso" : (g === 0 || g === 6 ? "Consola (Free Tier), preguntas de práctica y repaso de errores" : "Contenido nuevo: video o lectura + notas propias")}</td></tr>`;
  }).join("");
  document.getElementById("weekLead").textContent = `Unas ${fmtMin(weekTotal)} por semana según lo que elegiste arriba.`;

  const cd = document.getElementById("countdown");
  if (!exam)            cd.textContent = "Elige tu fecha de examen";
  else if (dleft > 1)   cd.textContent = `Faltan ${dleft} días · ${fmtDay(exam)}`;
  else if (dleft === 1) cd.textContent = "Mañana es el examen · ¡descansa!";
  else if (dleft === 0) cd.textContent = "Hoy es el examen · ¡suerte!";
  else                  cd.textContent = `Examen: ${fmtDay(exam)}`;

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
  document.getElementById("lateTxt").textContent = `Tienes ${late} ${late === 1 ? "tema atrasado" : "temas atrasados"}.`;
}

document.getElementById("recalc").addEventListener("click", () => {
  S.skip  = allTopics().map(t => t.key).filter(k => checks[`c-${k}`]);
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

renderPlan();

/* ---------- Kit: buscador de servicios ---------- */
const svcList = document.getElementById("svcList");
const norm    = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

function renderSvc(q) {
  const n    = norm(q.trim());
  const rows = SVC.filter(([a, b]) => !n || norm(a + " " + b).includes(n));
  svcList.innerHTML = rows.length
    ? rows.map(([a, b]) =>
        `<div class="row"><span class="q">${a}</span><span class="a">${b}</span></div>`
      ).join("")
    : `<div class="empty">Nada coincide con "${q.replace(/</g, "&lt;")}". Prueba con otra palabra.</div>`;
}

document.getElementById("svcSearch").addEventListener("input", e => renderSvc(e.target.value));
renderSvc("");

/* ---------- Kit: pares que se confunden ---------- */
document.getElementById("pairs").innerHTML =
  PAIRS.map(([a, b]) => `<tr><td class="svc">${a}</td><td>${b}</td></tr>`).join("");

/* ---------- Kit: glosario ---------- */
document.getElementById("gloss").innerHTML =
  GLOSS.map(([a, b, c]) =>
    `<tr><td class="svc">${a}</td><td><i>${b}</i></td><td>${c}</td></tr>`
  ).join("");

/* ---------- Práctica: quiz ---------- */
const quizEl = document.getElementById("quiz");
let qi = 0, score = 0, answered = false;

function renderQ() {
  if (qi >= Q.length) {
    const pct = Math.round(score / Q.length * 100);
    quizEl.innerHTML =
      `<div class="qhead"><span>Resultado</span><span>${Q.length} preguntas</span></div>` +
      `<div class="score">${score}/${Q.length}</div>` +
      `<p>${
        pct >= 80 ? "Vas listo para este nivel. Sigue con exámenes completos." :
        pct >= 70 ? "Cerca. Repasa las que fallaste en la hoja de repaso." :
                    "Repasa los pares que se confunden y la hoja de repaso, y vuelve a intentar."
      }</p>` +
      `<div class="btnrow"><button class="btn" id="again">Empezar de nuevo</button></div>`;
    document.getElementById("again").onclick = () => { qi = 0; score = 0; renderQ(); };
    return;
  }

  answered = false;
  const [text, opts, correct, why] = Q[qi];

  quizEl.innerHTML =
    `<div class="qhead"><span>Pregunta ${qi + 1} de ${Q.length}</span><span>Aciertos: ${score}</span></div>` +
    `<div class="qtext">${text}</div>` +
    `<div class="opts">${
      opts.map((o, i) =>
        `<button class="opt" data-i="${i}">${String.fromCharCode(65 + i)}) ${o}</button>`
      ).join("")
    }</div>` +
    `<div id="exp"></div>` +
    `<div class="btnrow"><button class="btn" id="next" disabled>Siguiente</button></div>`;

  quizEl.querySelectorAll(".opt").forEach(b => b.onclick = () => {
    if (answered) return;
    answered = true;
    const i  = +b.dataset.i;
    const ok = i === correct;
    if (ok) score++;
    quizEl.querySelectorAll(".opt").forEach((x, j) => {
      x.disabled = true;
      if (j === correct) x.classList.add("right");
      else if (j === i)  x.classList.add("wrong");
    });
    document.getElementById("exp").innerHTML =
      `<div class="explain"><b>${ok ? "Correcto." : "No es esa."}</b> ${why}</div>`;
    const nx = document.getElementById("next");
    nx.disabled = false;
    nx.textContent = qi === Q.length - 1 ? "Ver resultado" : "Siguiente";
    nx.focus();
  });

  document.getElementById("next").onclick = () => { qi++; renderQ(); };
}

renderQ();

/* ---------- Navegación por pestañas ---------- */
const TABS = ["plan", "kit", "practica"];

function show(name) {
  if (!TABS.includes(name)) name = "plan";
  TABS.forEach(t => {
    document.getElementById(t).hidden = t !== name;
    document.getElementById("tab-" + t).setAttribute("aria-selected", t === name);
  });
  store.set("clf-tab", name);
}

TABS.forEach(t =>
  document.getElementById("tab-" + t).addEventListener("click", () => {
    show(t);
    window.scrollTo({ top: 0 });
  })
);

show((location.hash || "").slice(1) || store.get("clf-tab") || "plan");
