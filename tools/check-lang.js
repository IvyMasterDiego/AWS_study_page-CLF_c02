/* Comprueba que js/lang/es.js y js/lang/en.js tengan las mismas claves. Uso (desde la raíz): node tools/check-lang.js */
const fs = require("fs"), vm = require("vm");
const ctx = { window: {} }; vm.createContext(ctx);
["js/lang/es.js", "js/lang/en.js"].forEach(f => vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f }));
const [es, en] = [ctx.window.LANG.es, ctx.window.LANG.en];
const meta = {}; vm.createContext(meta);
vm.runInContext(fs.readFileSync("js/data.js", "utf8") + "\nthis.K=Object.keys(TOPIC_META);this.R=LINKS_RAW;", meta);
let bad = 0;
const diff = (name, a, b) => {
  const A = Object.keys(a), B = Object.keys(b);
  A.filter(k => !B.includes(k)).forEach(k => { console.log(`✗ ${name}: "${k}" está en es pero falta en en`); bad++; });
  B.filter(k => !A.includes(k)).forEach(k => { console.log(`✗ ${name}: "${k}" está en en pero falta en es`); bad++; });
};
["ui", "topics", "info", "linkTitles"].forEach(n => diff(n, es[n], en[n]));
meta.K.forEach(k => { for (const L of [es, en]) if (!L.topics[k]) { console.log(`✗ topics: falta "${k}"`); bad++; } });
Object.entries(meta.R).forEach(([k, r]) => ["es", "en"].forEach(l => {
  const t = (l === "es" ? es : en).linkTitles[k] || {};
  if ((r.v || []).length !== (t.v || []).length || (r.d || []).length !== (t.d || []).length) { console.log(`✗ linkTitles[${k}] (${l}): no coincide con LINKS_RAW`); bad++; }
}));
["svc", "pairs"].forEach(n => { if (es[n].length !== en[n].length) { console.log(`✗ ${n}: es ${es[n].length} filas, en ${en[n].length}`); bad++; } });
if (es.q.length !== en.q.length) { console.log("✗ q: distinta cantidad de preguntas"); bad++; }
es.q.forEach((q, i) => { const e = en.q[i]; if (e && (e[2] !== q[2] || e[1].length !== q[1].length)) { console.log(`✗ q[${i}]: respuesta correcta u opciones distintas`); bad++; } });
console.log(bad ? `\n${bad} problema(s)` : "OK: es y en tienen las mismas claves");
process.exit(bad ? 1 : 0);
