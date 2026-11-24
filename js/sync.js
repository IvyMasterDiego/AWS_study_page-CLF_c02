/* ============================================================
   sync.js — cuenta simple (usuario + contraseña) y avance en la nube
   Usa Firebase Auth (correo/contraseña) y Firestore.
   El usuario "diego" se convierte por dentro en "diego@clf-c02.app";
   nunca se usa ni se verifica ese correo.
   Cada cuenta guarda un documento progress/{uid} con el avance.
   Depende de i18n.js y de js/firebase-config.js (cargados antes).
   ============================================================ */

const SYNC_KEYS = ["clf-plan", "clf-checks", "clf-qmod", "clf-qlast"];
const USER_DOMAIN = "@clf-c02.app";

const cloud = { on: false, auth: null, db: null, user: null, timer: null };

/* app.js llama a esto cada vez que guarda algo */
function cloudSave(key) {
  if (!cloud.user || !SYNC_KEYS.includes(key)) return;
  try { localStorage.setItem("clf-sync-at", String(Date.now())); } catch (e) {}
  clearTimeout(cloud.timer);
  cloud.timer = setTimeout(upload, 1500);
}

(function () {
  const cfg = window.FIREBASE_CONFIG || {};
  const btn = document.getElementById("authBtn");
  if (!cfg.apiKey || !window.firebase) { btn.hidden = true; return; }

  firebase.initializeApp(cfg);
  cloud.on = true;
  cloud.auth = firebase.auth();
  cloud.db = firebase.firestore();

  const dlg = document.getElementById("authDlg"), form = document.getElementById("authForm");
  const uIn = document.getElementById("authUser"), pIn = document.getElementById("authPass");
  const msg = document.getElementById("authMsg");
  const say = (k, ...a) => { msg.textContent = k ? t(k, ...a) : ""; };

  const nameOf = u => (u && u.email ? u.email.replace(USER_DOMAIN, "") : "");

  function renderBtn() {
    btn.querySelector(".tl").textContent = cloud.user ? nameOf(cloud.user) : t("authLogin");
    btn.title = cloud.user ? t("authAs", nameOf(cloud.user)) : t("authLogin");
    document.getElementById("authOut").hidden = !cloud.user;
    document.getElementById("authIn").hidden = !!cloud.user;
    document.getElementById("authWho").textContent = cloud.user ? t("authAs", nameOf(cloud.user)) : "";
  }

  btn.addEventListener("click", () => { say(); renderBtn(); dlg.showModal(); });
  document.getElementById("authClose").addEventListener("click", () => dlg.close());
  document.addEventListener("langchange", renderBtn);

  function readForm() {
    const u = uIn.value.trim().toLowerCase(), p = pIn.value;
    if (!/^[a-z0-9._-]{3,30}$/.test(u)) { say("authBadUser"); return null; }
    if (p.length < 6) { say("authShortPass"); return null; }
    return [u + USER_DOMAIN, p];
  }

  function errText(e) {
    const c = (e && e.code) || "";
    if (c.includes("email-already-in-use")) return "authTaken";
    if (c.includes("invalid-credential") || c.includes("wrong-password") || c.includes("user-not-found")) return "authWrong";
    if (c.includes("network")) return "authNet";
    if (c.includes("too-many-requests")) return "authMany";
    return "authErr";
  }

  form.addEventListener("submit", async ev => {
    ev.preventDefault();
    const create = ev.submitter && ev.submitter.id === "authCreate";
    const v = readForm(); if (!v) return;
    say("authWait");
    try {
      if (create) await cloud.auth.createUserWithEmailAndPassword(...v);
      else await cloud.auth.signInWithEmailAndPassword(...v);
      pIn.value = "";
      dlg.close();
    } catch (e) { say(errText(e)); }
  });

  document.getElementById("authLogout").addEventListener("click", async () => {
    clearTimeout(cloud.timer);
    if (cloud.user) await upload();
    await cloud.auth.signOut();
    dlg.close();
  });

  cloud.auth.onAuthStateChanged(async u => {
    cloud.user = u;
    renderBtn();
    if (u) await pull();
  });
})();

/* ---------- Subir / bajar el avance ---------- */
const docRef = () => cloud.db.collection("progress").doc(cloud.user.uid);

function localData() {
  const d = {};
  SYNC_KEYS.forEach(k => { const v = localStorage.getItem(k); if (v !== null) d[k] = v; });
  return d;
}

async function upload() {
  if (!cloud.user) return;
  const at = +localStorage.getItem("clf-sync-at") || Date.now();
  try {
    await docRef().set({ data: localData(), updated: at });
    localStorage.setItem("clf-sync-at", String(at));
    localStorage.setItem("clf-sync-uid", cloud.user.uid);
  } catch (e) { console.warn("No se pudo guardar el avance en la nube", e); }
}

function apply(remote) {
  const data = remote.data || {};
  let changed = false;
  SYNC_KEYS.forEach(k => {
    const v = k in data ? data[k] : null;
    if (localStorage.getItem(k) !== v) {
      changed = true;
      if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v);
    }
  });
  localStorage.setItem("clf-sync-at", String(remote.updated || Date.now()));
  localStorage.setItem("clf-sync-uid", cloud.user.uid);
  if (changed) location.reload();
}

/* Al entrar (o al abrir la página ya con sesión): gana el avance más reciente.
   La primera vez en un dispositivo que ya tiene avance, se pregunta cuál usar. */
async function pull() {
  let snap;
  try { snap = await docRef().get(); }
  catch (e) { console.warn("No se pudo leer el avance de la nube", e); return; }

  const hasLocal = Object.keys(localData()).some(k => k === "clf-checks" || k === "clf-plan");
  if (!snap.exists) { if (!localStorage.getItem("clf-sync-at")) localStorage.setItem("clf-sync-at", String(Date.now())); return upload(); }

  const remote = snap.data();
  if (localStorage.getItem("clf-sync-uid") !== cloud.user.uid) {
    if (hasLocal && confirm(t("authKeepLocal"))) {
      localStorage.setItem("clf-sync-at", String(Date.now()));
      return upload();
    }
    return apply(remote);
  }

  const localAt = +localStorage.getItem("clf-sync-at") || 0;
  if ((remote.updated || 0) > localAt) apply(remote);
  else if (localAt > (remote.updated || 0)) upload();
}
