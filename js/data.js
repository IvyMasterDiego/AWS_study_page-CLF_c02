/* ============================================================
   data.js — datos del estudio que no dependen del idioma
   (los textos viven en js/lang/es.js y js/lang/en.js)
   ============================================================ */

/* Tiempo estimado (min) y prioridad por tema: 1 = esencial, 2 = importante, 3 = opcional.
   Clave = "bloque-tema" (la misma de js/lang/*.js). El orden de esta lista es el orden de estudio.
   Si el tiempo no alcanza, se quitan primero los opcionales. */
const TOPIC_META = {
  "0-0":{min:60,pri:1}, "0-1":{min:60,pri:1}, "0-2":{min:60,pri:1}, "0-3":{min:90,pri:1}, "0-4":{min:60,pri:2}, "0-5":{min:45,pri:2},
  "1-0":{min:90,pri:1}, "1-1":{min:90,pri:1}, "1-2":{min:90,pri:1}, "1-3":{min:90,pri:1}, "1-4":{min:90,pri:1}, "1-5":{min:120,pri:1}, "1-6":{min:60,pri:2},
  "2-0":{min:90,pri:1}, "2-1":{min:90,pri:1}, "2-2":{min:90,pri:1},
  "3-0":{min:60,pri:2}, "3-1":{min:150,pri:1}, "3-2":{min:150,pri:2},
  "4-0":{min:150,pri:3}, "4-1":{min:60,pri:1}, "4-2":{min:30,pri:1}
};

/* ID del video de freeCodeCamp en YouTube (todas las referencias usan este video) */
const VID_ID = "7HKot-brXFE";
const VID = "https://www.youtube.com/watch?v=" + VID_ID + "&t=";

/* Por tema: v = [segundo_de_inicio, tiempo_legible] por video; d = ruta (relativa a la base de docs) o URL completa */
const LINKS_RAW = {
"0-0":{"v":[[5001,"1:23:21"],[530,"0:08:50"]],"d":["what-is-cloud-computing/"]},
"0-1":{"v":[[530,"0:08:50"]],"d":["types-of-cloud-computing/"]},
"0-2":{"v":[[5214,"1:26:54"]],"d":["about-aws/global-infrastructure/"]},
"0-3":{"v":[[40360,"11:12:40"],[41662,"11:34:22"]],"d":["architecture/well-architected/","cloud-adoption-framework/"]},
"0-4":{"v":[[2663,"0:44:23"]],"d":["free/"]},
"0-5":{"d":["https://skillbuilder.aws/"]},
"1-0":{"v":[[15629,"4:20:29"],[27721,"7:42:01"]],"d":["ec2/pricing/"]},
"1-1":{"v":[[18736,"5:12:16"]],"d":["s3/storage-classes/"]},
"1-2":{"v":[[23311,"6:28:31"]],"d":["vpc/"]},
"1-3":{"v":[[21167,"5:52:47"]],"d":["products/databases/"]},
"1-4":{"v":[[37870,"10:31:10"],[31562,"8:46:02"]],"d":["products/analytics/"]},
"1-5":{"v":[[9332,"2:35:32"],[37037,"10:17:17"]],"d":["cloudformation/"]},
"2-0":{"v":[[14492,"4:01:32"],[28860,"8:01:00"]],"d":["compliance/shared-responsibility-model/","iam/"]},
"2-1":{"v":[[45785,"12:43:05"],[33232,"9:13:52"]],"d":["products/security/"]},
"2-2":{"v":[[42476,"11:47:56"]],"d":["aws-cost-management/","premiumsupport/plans/"]}
};
