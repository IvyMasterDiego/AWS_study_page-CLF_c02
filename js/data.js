/* ============================================================
   data.js — datos del estudio que no dependen del idioma
   (los textos viven en js/lang/es.js y js/lang/en.js)
   ============================================================ */

/* Tiempo estimado (min) y prioridad por tema: 1 = esencial, 2 = importante, 3 = opcional.
   Clave = la misma de js/lang/*.js; mod = módulo del curso AWS Cloud Practitioner Essentials. El orden de esta lista es el orden de estudio.
   Si el tiempo no alcanza, se quitan primero los opcionales. */
const TOPIC_META = {
  "m1":{min:90,pri:1,mod:1},
  "acct":{min:60,pri:2},
  "m2":{min:120,pri:1,mod:2},
  "m3":{min:75,pri:1,mod:3},
  "m4":{min:75,pri:1,mod:4},
  "m5":{min:90,pri:1,mod:5},
  "m6":{min:105,pri:1,mod:6},
  "m7":{min:75,pri:1,mod:7},
  "m8":{min:90,pri:1,mod:8},
  "m9":{min:120,pri:1,mod:9},
  "m10":{min:90,pri:1,mod:10},
  "m11":{min:105,pri:1,mod:11},
  "m12":{min:75,pri:1,mod:12},
  "m13":{min:60,pri:1,mod:13},
  "set1":{min:60,pri:2},
  "x1":{min:150,pri:1},
  "x2":{min:150,pri:2},
  "xx":{min:150,pri:3},
  "rev":{min:60,pri:1},
  "eve":{min:30,pri:1}
};

/* ID del video de freeCodeCamp en YouTube (todas las referencias usan este video) */
const VID_ID = "7HKot-brXFE";
const VID = "https://www.youtube.com/watch?v=" + VID_ID + "&t=";

/* Por tema: v = [segundo_de_inicio, tiempo_legible] por video; d = ruta (relativa a la base de docs) o URL completa */
const LINKS_RAW = {
"m1":{"v":[[530,"0:08:50"],[5001,"1:23:21"]],"d":["what-is-cloud-computing/","types-of-cloud-computing/","compliance/shared-responsibility-model/","https://skillbuilder.aws/learn/94T2BEN85A/aws-cloud-practitioner-essentials-espaol-latam/RX7XZB6CTM"]},
"acct":{"v":[[2663,"0:44:23"]],"d":["free/"]},
"m2":{"v":[[15629,"4:20:29"],[27721,"7:42:01"],[31562,"8:46:02"]],"d":["ec2/pricing/","https://skillbuilder.aws/learn/94T2BEN85A/aws-cloud-practitioner-essentials-espaol-latam/RX7XZB6CTM"]},
"m3":{"v":[[15629,"4:20:29"]],"d":["lambda/","https://skillbuilder.aws/learn/94T2BEN85A/aws-cloud-practitioner-essentials-espaol-latam/RX7XZB6CTM"]},
"m4":{"v":[[5214,"1:26:54"]],"d":["about-aws/global-infrastructure/","https://skillbuilder.aws/learn/94T2BEN85A/aws-cloud-practitioner-essentials-espaol-latam/RX7XZB6CTM"]},
"m5":{"v":[[23311,"6:28:31"]],"d":["vpc/","https://skillbuilder.aws/learn/94T2BEN85A/aws-cloud-practitioner-essentials-espaol-latam/RX7XZB6CTM"]},
"m6":{"v":[[18736,"5:12:16"]],"d":["s3/storage-classes/","https://skillbuilder.aws/learn/94T2BEN85A/aws-cloud-practitioner-essentials-espaol-latam/RX7XZB6CTM"]},
"m7":{"v":[[21167,"5:52:47"]],"d":["products/databases/","https://skillbuilder.aws/learn/94T2BEN85A/aws-cloud-practitioner-essentials-espaol-latam/RX7XZB6CTM"]},
"m8":{"v":[[37870,"10:31:10"]],"d":["products/analytics/","bedrock/","https://skillbuilder.aws/learn/94T2BEN85A/aws-cloud-practitioner-essentials-espaol-latam/RX7XZB6CTM"]},
"m9":{"v":[[28860,"8:01:00"],[45785,"12:43:05"]],"d":["iam/","products/security/","https://skillbuilder.aws/learn/94T2BEN85A/aws-cloud-practitioner-essentials-espaol-latam/RX7XZB6CTM"]},
"m10":{"v":[[9332,"2:35:32"],[37037,"10:17:17"],[33232,"9:13:52"]],"d":["cloudwatch/","https://skillbuilder.aws/learn/94T2BEN85A/aws-cloud-practitioner-essentials-espaol-latam/RX7XZB6CTM"]},
"m11":{"v":[[42476,"11:47:56"]],"d":["aws-cost-management/","premiumsupport/plans/","https://skillbuilder.aws/learn/94T2BEN85A/aws-cloud-practitioner-essentials-espaol-latam/RX7XZB6CTM"]},
"m12":{"v":[[41662,"11:34:22"]],"d":["cloud-adoption-framework/","https://skillbuilder.aws/learn/94T2BEN85A/aws-cloud-practitioner-essentials-espaol-latam/RX7XZB6CTM"]},
"m13":{"v":[[40360,"11:12:40"]],"d":["architecture/well-architected/","https://skillbuilder.aws/learn/94T2BEN85A/aws-cloud-practitioner-essentials-espaol-latam/RX7XZB6CTM"]},
"set1":{"d":["https://skillbuilder.aws/"]}
};
