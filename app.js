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

/* ---------- Plan: construir bloques ---------- */
const checks  = store.get("clf-checks") || {};
const blocksEl = document.getElementById("blocks");
const openIdx  = store.get("clf-open");

BLOCKS.forEach((b, bi) => {
  const det = document.createElement("details");
  det.className = "block";
  if (openIdx === null ? bi === 0 : openIdx === bi) det.open = true;

  det.innerHTML =
    `<summary>` +
      `<span class="bdate">${b.d}</span>` +
      `<span class="bcount" data-b="${bi}"></span>` +
      `<span class="btitle">${b.t}</span>` +
    `</summary>` +
    `<ul class="tasks"></ul>`;

  const ul = det.querySelector("ul");

  b.items.forEach(([day, txt], ii) => {
    const id   = `c-${bi}-${ii}`;
    const li   = document.createElement("li");
    const info = INFO[`${bi}-${ii}`];
    const lnk  = LINKS[`${bi}-${ii}`];

    li.innerHTML =
      `<label for="${id}">` +
        `<input type="checkbox" id="${id}">` +
        `<span>${day ? `<span class="day">${day}</span>` : ""}${txt}</span>` +
      `</label>` +
      (info
        ? `<details class="more">` +
            `<summary>Ver explicación${lnk ? " y enlaces" : ""}</summary>` +
            `<div class="info">${info}${linksHTML(`${bi}-${ii}`)}</div>` +
          `</details>`
        : "");

    const cb = li.querySelector("input");
    cb.checked = !!checks[id];
    cb.addEventListener("change", () => {
      checks[id] = cb.checked;
      store.set("clf-checks", checks);
      updateProgress();
    });

    ul.appendChild(li);
  });

  det.addEventListener("toggle", () => { if (det.open) store.set("clf-open", bi); });
  blocksEl.appendChild(det);
});

function updateProgress() {
  let total = 0, done = 0;
  BLOCKS.forEach((b, bi) => {
    let d = 0;
    b.items.forEach((_, ii) => {
      total++;
      if (checks[`c-${bi}-${ii}`]) { done++; d++; }
    });
    const c = document.querySelector(`.bcount[data-b="${bi}"]`);
    c.textContent = `${d}/${b.items.length}`;
    c.classList.toggle("done", d === b.items.length);
  });
  document.getElementById("ptotal").textContent = `${done} / ${total}`;
  document.getElementById("pbar").style.width = (total ? done / total * 100 : 0) + "%";
}

updateProgress();

/* ---------- Cuenta regresiva ---------- */
(function () {
  const now   = new Date();
  const start = new Date(2026, 10, 9);
  const end   = new Date(2026, 10, 12);
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const days  = Math.round((start - today) / 86400000);
  const el    = document.getElementById("countdown");
  if      (days > 1)     el.textContent = `Faltan ${days} días · 9–12 nov`;
  else if (days === 1)   el.textContent = "Mañana empieza la semana del examen";
  else if (today <= end) el.textContent = "Semana del examen · ¡suerte!";
  else                   el.textContent = "Examen: 9–12 nov";
})();

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
