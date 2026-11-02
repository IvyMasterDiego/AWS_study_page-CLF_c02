/* ============================================================
   i18n.js — idioma de la interfaz y del contenido (es / en)
   Depende de js/lang/es.js y js/lang/en.js (cargados antes).
   Para agregar un idioma: crear js/lang/xx.js con las mismas claves y sumarlo a SUPPORTED.
   ============================================================ */

const SUPPORTED = ["es", "en"];

/* Idioma guardado; si no hay, el del navegador; si no lo soportamos, inglés. */
let lang = (function () {
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem("clf-lang")); } catch (e) {}
  if (SUPPORTED.includes(saved)) return saved;
  const nav = ((navigator.languages && navigator.languages[0]) || navigator.language || "en").slice(0, 2).toLowerCase();
  return SUPPORTED.includes(nav) ? nav : "en";
})();

const T = () => LANG[lang];

/* Texto de la interfaz. Si el valor es una función, se llama con los argumentos. Si falta, cae al español. */
function t(key, ...args) {
  let v = T().ui[key];
  if (v === undefined) v = LANG.es.ui[key];
  return typeof v === "function" ? v(...args) : v;
}

/* Fecha corta, ej. "Mar 17 nov" / "Tue Nov 17" */
const fmtDay = d => t("dayFmt", t("dow")[d.getDay()], d.getDate(), t("mon")[d.getMonth()]);

/* Aplica los textos a los elementos marcados con data-i18n / data-i18n-attr */
function applyStatic() {
  document.documentElement.lang = lang;
  document.title = t("pageTitle");
  document.querySelectorAll("[data-i18n]").forEach(el => { el.innerHTML = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-attr]").forEach(el =>
    el.dataset.i18nAttr.split(";").forEach(p => { const [a, k] = p.split(":"); el.setAttribute(a, t(k)); })
  );
  document.querySelectorAll(".dbtn").forEach(b => {
    b.textContent = t("dayLetters")[+b.dataset.d];
    b.title = t("dowFull")[+b.dataset.d];
  });
}

function setLang(l) {
  if (!SUPPORTED.includes(l) || l === lang) return;
  lang = l;
  try { localStorage.setItem("clf-lang", JSON.stringify(l)); } catch (e) {}
  applyStatic();
  renderLangSwitch();
  document.dispatchEvent(new Event("langchange"));
}

/* Selector de idioma: un botón por idioma (ES | EN), con el activo resaltado. Crece solo si se suma otro idioma. */
function renderLangSwitch() {
  const box = document.getElementById("langSw");
  if (!box.children.length) {
    SUPPORTED.forEach(l => {
      const b = document.createElement("button");
      b.type = "button"; b.dataset.lang = l; b.textContent = l.toUpperCase(); b.lang = l;
      b.title = LANG[l].ui.langName;
      b.addEventListener("click", () => setLang(l));
      box.appendChild(b);
    });
  }
  box.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang));
}
