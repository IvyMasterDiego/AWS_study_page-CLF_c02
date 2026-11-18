/* ============================================================
   js/lang/es.js — textos y contenido en español
   Mismas claves que en.js (ver tools/check-lang.js).
   ============================================================ */

(window.LANG = window.LANG || {}).es = {
  ui: {
    pageTitle: "Cloud Practitioner CLF-C02",
    eyebrow: "AWS · CLF-C02 · en español",
    themeAria: "Cambiar tema claro/oscuro", themeTitle: "Cambiar tema",
    themeDark: "Oscuro", themeLight: "Claro",
    langGroupAria: "Idioma", langName: "Español",
    chipQuestions: "65 preguntas · 90 min", chipPass: "Aprueba con 700/1000",
    tabsAria: "Secciones", tabPlan: "Plan", tabKit: "Kit", tabPractice: "Práctica",

    dow: ["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"],
    dowFull: ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],
    dayLetters: ["D","L","M","X","J","V","S"],
    mon: ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],
    dayFmt: (w, d, m) => `${w} ${d} ${m}`,

    setupH: "Arma tu plan",
    examDateLbl: "Fecha de tu examen",
    noDateLbl: "Aún no tengo fecha",
    blockedLbl: "Días que <b>no</b> puedes estudiar",
    minWeekLbl: "Tiempo por día, lunes a viernes",
    minWeekendLbl: "Tiempo por día, sábado y domingo",

    progressTitle: "Tu avance",
    progressHelp: "Abre un bloque, toca <b>+ Ver explicación y enlaces</b> para estudiar cada tema (con video y página oficial) y marca la casilla cuando lo domines. Las casillas se guardan en este dispositivo.",
    blocksH: "Bloques de estudio",
    recalc: "Recalcular desde hoy",

    weekH: "Horario semanal",
    thDay: "Día", thTime: "Tiempo", thDo: "Qué hacer",
    weekRule: "Regla: si un set de preguntas da menos de 70 %, repasa ese tema antes de avanzar.",

    domH: "Dominios del examen",
    thDomain: "Dominio", thWeight: "Peso", thQuestions: "Preguntas",
    domRows: `<tr><td>3 · Tecnología y servicios</td><td class="num">34 %</td><td class="num">~17</td></tr>
        <tr><td>2 · Seguridad y cumplimiento</td><td class="num">30 %</td><td class="num">~15</td></tr>
        <tr><td>1 · Conceptos de la nube</td><td class="num">24 %</td><td class="num">~12</td></tr>
        <tr><td>4 · Facturación, precios y soporte</td><td class="num">12 %</td><td class="num">~6</td></tr>`,
    domNote: "De las 65 preguntas, 15 no puntúan y no sabes cuáles son. Opción múltiple (1 de 4) y respuesta múltiple (2+ de 5+). La certificación dura 3 años.",

    resH: "Recursos",
    thResource: "Recurso", thFor: "Para qué", thCost: "Costo",
    resRows: `<tr><td class="svc">Skill Builder: Cloud Practitioner Essentials</td><td>Curso base oficial (los 13 módulos del plan)</td><td>Gratis</td></tr>
        <tr><td class="svc">Official Practice Question Set</td><td>Preguntas oficiales, en español</td><td>Gratis</td></tr>
        <tr><td class="svc">AWS Cloud Quest: Cloud Practitioner</td><td>Práctica guiada en la consola</td><td>Gratis</td></tr>
        <tr><td class="svc"><a href="https://www.youtube.com/watch?v=7HKot-brXFE" target="_blank" rel="noopener">freeCodeCamp: curso completo 2026</a></td><td>Video de 13 h en inglés; los enlaces de cada tema saltan a su minuto</td><td>Gratis</td></tr>
        <tr><td class="svc"><a href="https://www.youtube.com/watch?v=O1EqUGkUVPE" target="_blank" rel="noopener">Vikingos de Cloud: curso CLF-C02</a></td><td>Curso en español en YouTube</td><td>Gratis</td></tr>
        <tr><td class="svc">Tutorials Dojo</td><td>Exámenes completos para la etapa final</td><td>Bajo costo</td></tr>
        <tr><td class="svc">Official Practice Exam</td><td>Simulacro final más parecido al real</td><td>Suscripción</td></tr>`,
    resOfficial: `<a href="https://aws.amazon.com/certification/certified-cloud-practitioner/" target="_blank" rel="noopener">Página oficial de la certificación</a>`,

    kitLangH: "Rendir en español",
    kitLangList: `<li>Al agendar, elige <b>Español (Latinoamérica)</b>. En el examen hay un botón para ver cada pregunta en inglés.</li>
      <li>Los nombres de servicios no se traducen: verás "Amazon EC2", "AWS Shield". Estúdialos en inglés.</li>
      <li>Los conceptos sí se traducen. El glosario de abajo te da los dos nombres.</li>
      <li>El Official Practice Question Set está gratis y en español en AWS Skill Builder.</li>
      <li>Rindiendo en tu idioma no aplica la extensión de 30 minutos: tienes 90.</li>`,
    searchH: "Si la pregunta dice… es…",
    searchLead: "Busca por palabra o servicio.",
    searchPh: "Ej.: DDoS, NoSQL, costo, API…",
    searchAria: "Buscar en la hoja de repaso",
    svcEmpty: q => `Nada coincide con "${q}". Prueba con otra palabra.`,
    pairsH: "Pares que más se confunden",
    thPair: "Par", thDiff: "Diferencia",
    supportH: "Planes de soporte",
    supportNote: "AWS renombró sus planes a fines de 2025 (Basic, Business Support+, Enterprise, Unified Operations). El examen probablemente pregunta por los anteriores: estudia esta tabla.",
    thPlan: "Plan", thFastest: "Más rápido", thDistinct: "Lo distingue",
    supportRows: `<tr><td class="svc">Basic</td><td class="num">—</td><td>Gratis; solo facturación y cuenta; Trusted Advisor básico</td></tr>
        <tr><td class="svc">Developer</td><td class="num">&lt; 12 h</td><td>Correo en horario laboral; pruebas y desarrollo</td></tr>
        <tr><td class="svc">Business</td><td class="num">&lt; 1 h</td><td>24/7 teléfono y chat; Trusted Advisor completo</td></tr>
        <tr><td class="svc">Enterprise On-Ramp</td><td class="num">&lt; 30 min</td><td>Grupo de TAMs compartido</td></tr>
        <tr><td class="svc">Enterprise</td><td class="num">&lt; 15 min</td><td>TAM designado, Concierge</td></tr>`,
    supportHint: "Pista: un TAM designado siempre es Enterprise.",
    listsH: "Listas que se preguntan tal cual",
    listsCard: `<div><h3>Well-Architected · 6 pilares</h3><p>Excelencia operativa, seguridad, fiabilidad, eficiencia del rendimiento, optimización de costos, sostenibilidad.</p></div>
      <div><h3>Cloud Adoption Framework · 6 perspectivas</h3><p>Negocio, personas, gobernanza, plataforma, seguridad, operaciones.</p></div>
      <div><h3>Migración · las 7 R</h3><p>Retire, retain, rehost, relocate, replatform, repurchase, refactor.</p></div>
      <div><h3>6 ventajas de la nube</h3><p>Pago por uso, economías de escala, no adivinar capacidad, agilidad, alcance global en minutos, dejar de gastar en data centers.</p></div>`,
    figuresH: "Cifras clave",
    figuresRows: `<tr><td>Durabilidad de S3</td><td class="num">99,999999999 %</td></tr>
      <tr><td>Instancias de spot</td><td>Hasta 90 % menos; se interrumpen</td></tr>
      <tr><td>Reservadas / Savings Plans</td><td>Hasta 72 % menos; 1 o 3 años</td></tr>
      <tr><td>On-Demand</td><td>Sin compromiso; cargas cortas</td></tr>
      <tr><td>Dedicated Hosts</td><td>Servidor físico; licencias o cumplimiento</td></tr>
      <tr><td>Usuario root</td><td>MFA, sin claves de acceso, no para el día a día</td></tr>`,
    glossH: "Glosario español–inglés",
    glossTh1: "Español", glossTh2: "Inglés", glossTh3: "Qué es",
    examdayH: "El día del examen",
    examdayList: `<li>Responde todo: no se resta por error.</li>
      <li>Marca las dudosas y vuelve al final; tienes unos 80 segundos por pregunta.</li>
      <li>Busca la palabra clave: "más rentable", "menor esfuerzo operativo", "alta disponibilidad".</li>
      <li>En respuesta múltiple, elige exactamente la cantidad que pide.</li>
      <li>Si rindes online: escritorio despejado y prueba del sistema el día antes.</li>`,
    practiceH: "Preguntas de práctica",
    practiceLead: "Preguntas originales al estilo de las evaluaciones de cada módulo del curso AWS Cloud Practitioner Essentials. Cada ronda toma preguntas al azar del banco; después de responder verás por qué es la correcta y por qué no las demás.",
    footer: `Fuentes: <a href="https://aws.amazon.com/certification/certified-cloud-practitioner/" target="_blank" rel="noopener">AWS</a> · <a href="https://aws.amazon.com/es/blogs/aws-spanish/examenes-practicos-gratuitos-y-100-en-espanol-para-que-obtenga-su-certificacion/" target="_blank" rel="noopener">Blog de AWS en español</a> · <a href="https://tutorialsdojo.com/aws-support-plans/" target="_blank" rel="noopener">Tutorials Dojo</a>. Datos a octubre de 2026.`,

    docBase: "https://aws.amazon.com/es/",
    explain: "Ver explicación", explainLinks: "Ver explicación y enlaces",
    videoNote: h => `Video en inglés · desde ${h}`,
    officialPage: "Página oficial de AWS",
    skillBuilderNote: "Curso oficial gratuito en AWS Skill Builder",

    cdNone: "Elige tu fecha de examen",
    cdDays: (n, d) => `Faltan ${n} días · ${d}`,
    cdTomorrow: "Mañana es el examen · ¡descansa!",
    cdToday: "Hoy es el examen · ¡suerte!",
    cdPast: d => `Examen: ${d}`,
    sumNoTime: "Con esa fecha y esos días no queda ningún día de estudio. Revisa la fecha o los días que bloqueaste.",
    sumExam: (d, days, have, need) => `Examen: ${d}. Tienes ${days} días de estudio con ≈ ${have} disponibles; el plan usa ≈ ${need}.`,
    sumNoExam: (days, need) => `Sin fecha de examen: el plan completo dura ${days} días de estudio (≈ ${need} en total). Cuando tengas fecha, ponla arriba y el plan se reajusta.`,
    blocksLeadExam: d => `Plan hasta tu examen del ${d}. Abre la semana y marca cada tema cuando lo domines.`,
    blocksLeadNo: "Plan en orden de estudio, sin fechas. Abre la semana y marca cada tema cuando lo domines.",
    weekN: n => `Semana ${n}`,
    dayN: n => `Día ${n}`,
    daysRange: (a, b) => `Días ${a}–${b}`,
    doneDate: "Ya hechos", doneTitle: "Temas completados",
    today: "Hoy", lateBadge: "Atrasado",
    lateCount: n => `Tienes ${n} ${n === 1 ? "tema atrasado" : "temas atrasados"}.`,
    overloadTitle: "Plan muy ajustado", needLbl: "necesitas", haveLbl: "tienes",
    overloadAdvice: "Suma tiempo por día o desbloquea algún día de la semana para que alcance.",
    droppedSummary: n => `${n} ${n === 1 ? "tema opcional quitado" : "temas opcionales quitados"} para que quepa`,
    droppedNote: "Si te sobra tiempo, hazlos igual: son práctica extra.",
    weekOff: "Descanso",
    weekWeekend: "Consola (Free Tier), preguntas de práctica y repaso de errores",
    weekWeekday: "Contenido nuevo: video o lectura + notas propias",
    weekLead: total => `Unas ${total} por semana según lo que elegiste arriba.`,

    qResult: "Resultado",
    qCount: n => `${n} preguntas`,
    qHigh: "Vas listo para este nivel. Sigue con exámenes completos.",
    qMid: "Cerca. Repasa las que fallaste en la hoja de repaso.",
    qLow: "Repasa los pares que se confunden y la hoja de repaso, y vuelve a intentar.",
    qAgain: "Empezar de nuevo",
    qOf: (i, n) => `Pregunta ${i} de ${n}`,
    qHits: s => `Aciertos: ${s}`,
    qNext: "Siguiente", qSee: "Ver resultado",
    qRight: "Correcto.", qWrong: "No es esa.",
    mods: ["Introducción a la nube","Computación en la nube","Servicios de computación","Infraestructura global","Redes","Almacenamiento","Bases de datos","IA/ML y análisis de datos","Seguridad","Supervisión, cumplimiento y gobernanza","Precios y soporte","Migración a AWS","Soluciones Well-Architected"],
    qFilterLbl: "Practicar",
    qAllMods: n => `Todos los módulos (${n} preguntas)`,
    qModOpt: (i, name, n) => `Módulo ${i} · ${name} (${n})`,
    qModTag: (i, name) => `Módulo ${i} · ${name}`,
    qCheck: "Comprobar",
    qPickHint: n => `Elige ${n} opciones y pulsa Comprobar.`,
    modPractice: i => `Practicar las preguntas del módulo ${i}`,
    qRightIs: (n, list) => n > 1 ? `Las correctas son ${list}.` : `La correcta es ${list}.`,
    qWhyOk: n => n > 1 ? "Por qué son las correctas:" : "Por qué es la correcta:",
    qYours: n => n > 1 ? "Tus respuestas incorrectas:" : "Tu respuesta:",
    qWhyNot: "Por qué no las otras:",
    qTip: "Pista para el examen:",
    qRestart: "Reiniciar con preguntas nuevas",
    qAnd: "y",
    qSession: (n, bank) => `Esta ronda: ${n} preguntas al azar de un banco de ${bank}. Al reiniciar salen otras.`
  },


  /* Texto de cada tema del plan (clave = módulo o práctica, ver TOPIC_META en js/data.js) */
  topics: {
    "m1": "Módulo 1 · Introducción a la nube: qué es, beneficios, modelos de servicio y despliegue, responsabilidad compartida",
    "acct": "Práctica: cuenta Free Tier, MFA en root y alerta de facturación",
    "m2": "Módulo 2 · Computación en la nube: EC2, tipos y precios de instancias, escalado, Elastic Load Balancing, mensajería y colas",
    "m3": "Módulo 3 · Servicios de computación: serverless, Lambda, contenedores (ECS, EKS, Fargate) y otros servicios",
    "m4": "Módulo 4 · Infraestructura global: regiones, zonas de disponibilidad, edge locations e infraestructura como código",
    "m5": "Módulo 5 · Redes: VPC, subredes, security groups y NACLs, Route 53, CloudFront, VPN y Direct Connect",
    "m6": "Módulo 6 · Almacenamiento: EBS, almacén de instancias, S3 y sus clases, EFS, FSx, Storage Gateway, recuperación ante desastres",
    "m7": "Módulo 7 · Bases de datos: RDS, Aurora, DynamoDB, ElastiCache, Redshift y otras bases de datos",
    "m8": "Módulo 8 · IA/ML y análisis de datos: SageMaker, servicios de IA, IA generativa (Bedrock, Q) y canalizaciones de datos",
    "m9": "Módulo 9 · Seguridad: IAM, usuario root, Shield, WAF, KMS, GuardDuty, Inspector, Macie, Security Hub",
    "m10": "Módulo 10 · Supervisión, cumplimiento y gobernanza: CloudWatch, CloudTrail, Config, Artifact, Organizations, AWS Health, Trusted Advisor",
    "m11": "Módulo 11 · Precios y soporte: modelos de precios, herramientas de costos, planes de soporte, Marketplace y socios",
    "m12": "Módulo 12 · Migración a AWS: Cloud Adoption Framework, las 7 estrategias, DMS y transferencia de datos",
    "m13": "Módulo 13 · Soluciones Well-Architected: los 6 pilares y servicios especializados",
    "set1": "Official Practice Question Set en Skill Builder (oficial y gratis)",
    "x1": "Examen completo #1 cronometrado y revisión de errores",
    "x2": "Examen completo #2 y hoja de errores",
    "xx": "Exámenes completos extra (#3 en adelante, uno cada 2–3 días) con revisión de errores; meta: 80 % o más",
    "rev": "Repaso final: flashcards, pares que se confunden, hoja de errores",
    "eve": "Día anterior: repaso ligero y dormir bien"
  },

  /* Explicación de cada tema */
  info: {
"m1":`<h4>¿Qué es cloud computing?</h4>
  <p>Es la entrega <b>bajo demanda</b> de recursos de TI (servidores, almacenamiento, bases de datos, redes, software) <b>por internet</b>, con <b>pago por uso</b>. En lugar de comprar y mantener tu propio data center, "alquilas" capacidad a un proveedor como AWS y la usas solo cuando la necesitas.</p>
  <p>Ejemplo: una tienda online que en Black Friday recibe 10 veces más visitas. On-premises tendría que comprar servidores para ese pico y dejarlos sin usar el resto del año. En la nube agrega servidores ese día y los apaga después; paga solo esas horas.</p>
<h4>Las 6 ventajas de la nube (se preguntan con estas palabras)</h4>
  <ul>
  <li><b>Cambiar gasto de capital por gasto variable</b> (CapEx → OpEx): no inviertes dinero por adelantado en hardware; pagas mes a mes lo que consumes.</li>
  <li><b>Beneficiarse de economías de escala masivas:</b> como AWS tiene cientos de miles de clientes, compra a enorme volumen y sus costos por unidad son menores. Esos ahorros se traducen en precios más bajos para ti (AWS ha bajado precios más de 100 veces).</li>
  <li><b>Dejar de adivinar la capacidad:</b> on-premises tienes que estimar cuántos servidores necesitarás; si te quedas corto, la app se cae; si te pasas, pagas equipos ociosos. En la nube ajustas según la demanda real.</li>
  <li><b>Aumentar la velocidad y la agilidad:</b> un servidor nuevo está listo en minutos en vez de semanas. Eso permite experimentar barato: pruebas una idea y, si no sirve, la apagas.</li>
  <li><b>Dejar de gastar dinero en mantener data centers:</b> no pagas electricidad, refrigeración, seguridad física ni personal de racks. Tu equipo se concentra en lo que diferencia a tu negocio.</li>
  <li><b>Ser global en minutos:</b> despliegas tu app en otras regiones del mundo con unos clics, para dar baja latencia a usuarios de otros países.</li>
  </ul>
<h4>Conceptos relacionados que aparecen</h4>
  <ul>
  <li><b>Elasticidad:</b> aumentar <i>y reducir</i> recursos automáticamente según la demanda (ej.: Auto Scaling).</li>
  <li><b>Escalabilidad:</b> capacidad de crecer para soportar más carga. <b>Vertical</b> = una máquina más grande; <b>horizontal</b> = más máquinas.</li>
  <li><b>Alta disponibilidad:</b> el sistema sigue disponible aunque falle una parte (se logra con varias zonas de disponibilidad).</li>
  <li><b>Tolerancia a fallos:</b> el sistema sigue funcionando <i>sin interrupción</i> aunque falle un componente.</li>
  <li><b>TCO (costo total de propiedad):</b> comparar todo lo que cuesta on-premises (hardware, energía, personal, espacio) contra la nube.</li>
  </ul>
<h4>Modelos de servicio: ¿cuánto administras tú?</h4>
  <ul>
  <li><b>IaaS (infraestructura como servicio):</b> AWS te da los bloques básicos: servidores virtuales, red y almacenamiento. Tú instalas y mantienes el sistema operativo, el software y los parches. Máximo control y máxima responsabilidad. Ejemplos: <b>Amazon EC2</b>, Amazon VPC, Amazon EBS.</li>
  <li><b>PaaS (plataforma como servicio):</b> AWS administra la infraestructura y el sistema operativo; tú solo te ocupas de tu código y tus datos. Ejemplos: <b>AWS Elastic Beanstalk</b>, Amazon RDS (en parte), AWS Lambda.</li>
  <li><b>SaaS (software como servicio):</b> usas un producto terminado, normalmente desde el navegador. No administras nada técnico. Ejemplos: Gmail, Salesforce, Amazon WorkMail, Amazon Chime.</li>
  </ul>
  <p>Regla para recordar: IaaS → tú manejas casi todo; PaaS → solo tu app; SaaS → solo lo usas.</p>
<h4>Modelos de despliegue</h4>
  <ul>
  <li><b>Nube (cloud / all-in):</b> toda la aplicación corre en la nube. Puede construirse desde cero allí o migrarse.</li>
  <li><b>Híbrido:</b> parte en tu data center y parte en la nube, conectadas. Típico cuando hay sistemas antiguos difíciles de mover o datos que por ley deben quedarse en tu país/empresa. Servicios que lo habilitan: <b>Direct Connect</b>, <b>VPN</b>, <b>Storage Gateway</b>, <b>AWS Outposts</b> (racks de AWS instalados en tu propio data center).</li>
  <li><b>On-premises (nube privada):</b> todo en tus propios equipos, usando tecnología de virtualización. No aprovecha las ventajas de la nube pública.</li>
  </ul>
<h4>Modelo de responsabilidad compartida (el tema más preguntado)</h4>
  <p><b>AWS es responsable de la seguridad DE la nube:</b> todo lo físico y la infraestructura que ejecuta los servicios.</p>
  <ul>
  <li>Data centers: seguridad física, guardias, control de acceso, energía, refrigeración.</li>
  <li>Hardware, red global, regiones, AZ y edge locations.</li>
  <li>Software de virtualización (hipervisor).</li>
  <li>En servicios administrados, también el sistema operativo y los parches del motor (ej.: RDS, Lambda, DynamoDB).</li>
  <li>Destruir de forma segura los discos que se retiran.</li>
  </ul>
  <p><b>El cliente es responsable de la seguridad EN la nube:</b> lo que pones y configuras.</p>
  <ul>
  <li>Tus <b>datos</b> y su <b>cifrado</b> (decidir si cifras y cómo).</li>
  <li><b>Usuarios, permisos y contraseñas</b> (IAM, MFA).</li>
  <li>Sistema operativo y parches <b>en EC2</b>, y el software que instalas.</li>
  <li>Configuración de <b>security groups</b>, NACLs y del firewall.</li>
  <li>Configuración de los servicios (ej.: dejar un bucket S3 público es culpa del cliente).</li>
  </ul>
  <p><b>Controles compartidos</b> (cada uno en su capa): gestión de parches (AWS parchea la infraestructura, tú tus sistemas), gestión de configuración, y concientización y capacitación (AWS capacita a sus empleados, tú a los tuyos).</p>
  <p>La responsabilidad cambia según el tipo de servicio: en <b>EC2 (IaaS)</b> tú haces casi todo por encima del hardware; en <b>RDS</b> AWS parchea el SO y el motor; en <b>Lambda o S3</b> AWS maneja casi todo y tú solo tus datos, código y permisos.</p>
<p class="trap"><b>Trampa típica:</b> "Reducir recursos cuando baja la demanda" es <b>elasticidad</b>. "Pagar solo lo que usas" es <b>gasto variable / pago por uso</b>. Seguridad física y hardware → <b>AWS</b>; datos, permisos y configuración → <b>cliente</b>. "Parte en su data center y parte en la nube" → <b>híbrido</b>.</p>`,

"acct":`<h4>Crear la cuenta</h4>
  <p>Entra a aws.amazon.com/free y regístrate con un correo, una tarjeta (para verificación) y un teléfono. La <b>capa gratuita</b> tiene 3 tipos de ofertas:</p>
  <ul>
  <li><b>Siempre gratis:</b> nunca vencen (ej.: 1 millón de solicitudes de Lambda al mes).</li>
  <li><b>12 meses gratis:</b> desde que creas la cuenta (ej.: 750 horas al mes de EC2 t2/t3.micro).</li>
  <li><b>Pruebas gratuitas:</b> por tiempo limitado al activar un servicio.</li>
  </ul>
<h4>Alerta de facturación</h4>
  <p>En <b>AWS Budgets</b> crea un presupuesto de costo (ej.: 5 USD) con alerta por correo al 80 %. Si te pasas, te avisa. También puedes usar la plantilla "Zero spend budget", que avisa ante cualquier cobro.</p>
<h4>Práctica en la consola</h4>
  <p>Lanza una instancia EC2 t2/t3.micro con Amazon Linux, mira sus métricas en CloudWatch y termínala. Crea un bucket S3, sube un archivo, prueba el versionado y borra todo. Ver los servicios en la consola fija mucho los conceptos.</p>
<p class="trap"><b>Trampa típica:</b> la primera acción tras crear la cuenta es <b>activar MFA en root</b>. Para el día a día, usa usuarios o roles de IAM.</p>`,

"m2":`<h4>Amazon EC2 (Elastic Compute Cloud)</h4>
  <p>Servidores virtuales ("instancias") que lanzas en minutos. Eliges sistema operativo (imagen <b>AMI</b>), tamaño (tipo de instancia), red y almacenamiento. Es <b>IaaS</b>: tú parcheas el sistema operativo.</p>
  <p>Familias de instancias: <b>uso general</b> (equilibradas, ej.: servidores web), <b>optimizadas para cómputo</b> (mucho CPU, ej.: videojuegos, modelado), <b>optimizadas para memoria</b> (mucha RAM, ej.: bases de datos en memoria), <b>computación acelerada</b> (GPU, ej.: machine learning), <b>optimizadas para almacenamiento</b> (mucho disco rápido).</p>
<h4>Modelos de compra de EC2 (muy preguntado)</h4>
  <ul>
  <li><b>On-Demand:</b> pagas por segundo u hora, sin compromiso. Para cargas cortas, impredecibles o pruebas. El más caro por hora.</li>
  <li><b>Reserved Instances:</b> te comprometes a 1 o 3 años con un tipo de instancia; hasta <b>72 %</b> de descuento. Para cargas estables (ej.: una base de datos que corre 24/7). Pago total, parcial o sin pago adelantado (más adelantado = más descuento).</li>
  <li><b>Savings Plans:</b> te comprometes a gastar X USD por hora durante 1 o 3 años; hasta 72 % de descuento. <b>Más flexible</b>: puedes cambiar de tipo de instancia, región, e incluso usar Fargate y Lambda.</li>
  <li><b>Spot Instances:</b> capacidad sobrante de AWS con hasta <b>90 %</b> de descuento, pero AWS puede <b>quitártela con 2 minutos de aviso</b>. Para trabajos que toleran interrupciones: procesamiento por lotes, análisis de datos, renderizado.</li>
  <li><b>Dedicated Hosts:</b> un servidor físico entero solo para ti. Para licencias de software por socket o núcleo, o requisitos de cumplimiento. El más caro.</li>
  <li><b>Dedicated Instances:</b> tus instancias corren en hardware que no comparte con otros clientes, pero no controlas el servidor físico.</li>
  <li><b>Capacity Reservations:</b> reservas capacidad en una AZ para tenerla garantizada.</li>
  </ul>
<h4>Formas de acceder a AWS</h4>
  <ul>
  <li><b>Consola de administración:</b> interfaz web, ideal para aprender y tareas puntuales.</li>
  <li><b>CLI (línea de comandos):</b> comandos de texto, sirve para automatizar con scripts.</li>
  <li><b>SDK:</b> librerías para usar AWS desde tu código (Python, Java, JavaScript…).</li>
  <li><b>Infraestructura como código:</b> plantillas con CloudFormation o AWS CDK.</li>
  </ul>
<h4>Escalado y balanceo</h4>
  <ul>
  <li><b>Amazon EC2 Auto Scaling:</b> agrega instancias cuando sube la carga y las quita cuando baja (elasticidad). Defines mínimo, deseado y máximo. También reemplaza instancias que fallan.</li>
  <li><b>Elastic Load Balancing (ELB):</b> reparte el tráfico entre varias instancias y AZ, y deja de enviar tráfico a las que fallan. Tipos: <b>Application Load Balancer</b> (HTTP/HTTPS, capa 7), <b>Network Load Balancer</b> (TCP/UDP, ultra rendimiento, capa 4), <b>Gateway Load Balancer</b> (para appliances de seguridad).</li>
  </ul>
<h4>Integración de aplicaciones</h4>
  <ul>
  <li><b>Amazon SQS:</b> <b>cola</b> de mensajes. Un componente deja mensajes y otro los procesa a su ritmo: así se <b>desacoplan</b> las partes de una app (si una se cae, los mensajes esperan en la cola). Modelo de "extracción" (pull).</li>
  <li><b>Amazon SNS:</b> <b>publicar/suscribir</b>: un mensaje llega a muchos suscriptores a la vez (correo, SMS, Lambda, SQS). Modelo de "envío" (push).</li>
  <li><b>Amazon EventBridge:</b> bus de eventos que conecta servicios de AWS, tus apps y SaaS; también programa tareas.</li>
  <li><b>AWS Step Functions:</b> coordina pasos de un flujo de trabajo (ej.: varias Lambda en orden).</li>
  <li><b>Amazon MQ:</b> broker de mensajes administrado (ActiveMQ, RabbitMQ) para migrar apps que ya los usan.</li>
  <li><b>Amazon API Gateway:</b> crea y publica APIs que pueden llamar a Lambda u otros servicios.</li>
  </ul>
<p class="trap"><b>Trampa típica:</b> "Puede interrumpirse" → <b>Spot</b>. "Estable 24/7 por 1 o 3 años" → <b>Reserved</b> o <b>Savings Plans</b>. "Licencias por socket" → <b>Dedicated Hosts</b>. "Agregar y quitar instancias según la carga" → <b>Auto Scaling</b>. "Repartir tráfico" → <b>ELB</b>. "Cola para desacoplar" → <b>SQS</b>; "notificar a muchos" → <b>SNS</b>.</p>`,

"m3":`<h4>Serverless: qué significa</h4>
<p><b>Serverless</b> (sin servidor) no quiere decir que no existan servidores, sino que <b>tú no los ves ni los administras</b>: AWS aprovisiona, escala, parchea y mantiene la infraestructura. Tú solo te ocupas de tu código o tus contenedores, y pagas por lo que realmente se ejecuta.</p>
<ul>
<li><b>Con EC2</b> administras el servidor: eliges el sistema operativo, lo parcheas y decides cuándo escalar.</li>
<li><b>Con serverless</b> (Lambda, Fargate, DynamoDB, S3) no hay servidores que administrar, escala solo y no pagas por capacidad ociosa.</li>
</ul>
<p>Contenedores: empaquetan tu aplicación con todo lo que necesita para correr igual en cualquier lugar. Un <b>orquestador</b> (ECS o EKS) decide dónde y cuántos contenedores correr; Fargate o EC2 ponen la capacidad de cómputo.</p>
<h4>Otros servicios de cómputo</h4>
  <ul>
  <li><b>AWS Lambda:</b> ejecutas código en respuesta a eventos (subir un archivo a S3, una solicitud a una API) sin servidores. Pagas por número de solicitudes y milisegundos de ejecución. Límite de <b>15 minutos</b> por ejecución. Escala automáticamente.</li>
  <li><b>Amazon ECS:</b> orquestador de contenedores Docker de AWS. <b>Amazon EKS:</b> lo mismo, pero con Kubernetes.</li>
  <li><b>AWS Fargate:</b> motor serverless para ECS y EKS: corres contenedores sin administrar servidores.</li>
  <li><b>Amazon ECR:</b> registro donde guardas tus imágenes de contenedor.</li>
  <li><b>AWS Elastic Beanstalk:</b> subes tu código y AWS crea todo (EC2, balanceador, Auto Scaling, monitoreo). Tú sigues teniendo acceso a los recursos.</li>
  <li><b>Amazon Lightsail:</b> servidor virtual sencillo con precio mensual fijo; para sitios pequeños, WordPress o principiantes.</li>
  <li><b>AWS Batch:</b> ejecuta miles de trabajos por lotes.</li>
  </ul>
<p class="trap"><b>Trampa típica:</b> "Ejecutar código sin servidores por evento" → <b>Lambda</b> (máx. 15 min). "Contenedores sin administrar servidores" → <b>Fargate</b>. "Kubernetes" → <b>EKS</b>. "Subir el código y que AWS cree todo" → <b>Elastic Beanstalk</b>. "Servidor simple a precio fijo" → <b>Lightsail</b>.</p>`,

"m4":`<h4>Región</h4>
  <p>Una ubicación geográfica del mundo donde AWS tiene un grupo de data centers (ej.: <i>sa-east-1</i> São Paulo, <i>us-east-1</i> Virginia del Norte). Cada región está <b>aislada</b> de las demás: tus datos <b>no salen de una región</b> salvo que tú lo configures.</p>
  <p>Cómo elegir una región (4 factores que pregunta el examen):</p>
  <ul>
  <li><b>Cumplimiento y leyes:</b> si la ley exige que los datos queden en un país, eliges esa región. Este factor manda sobre los demás.</li>
  <li><b>Cercanía a los usuarios:</b> más cerca = menor latencia.</li>
  <li><b>Servicios disponibles:</b> no todos los servicios nuevos están en todas las regiones.</li>
  <li><b>Precio:</b> el mismo servicio cuesta distinto según la región.</li>
  </ul>
<h4>Zona de disponibilidad (AZ)</h4>
  <p>Uno o más data centers independientes dentro de una región, con su propia energía, red y refrigeración, separados por kilómetros pero conectados con enlaces de muy baja latencia. Cada región tiene <b>como mínimo 3 AZ</b>.</p>
  <p>Si pones tu aplicación en <b>dos o más AZ</b> y una se cae (incendio, corte eléctrico), la otra sigue atendiendo: eso es <b>alta disponibilidad</b>. Es la buena práctica que AWS recomienda siempre.</p>
<h4>Edge locations (ubicaciones de borde)</h4>
  <p>Cientos de puntos de presencia en ciudades de todo el mundo, más numerosos que las regiones. Los usan:</p>
  <ul>
  <li><b>Amazon CloudFront</b> (CDN): guarda copias (caché) de tu contenido cerca del usuario.</li>
  <li><b>Amazon Route 53</b> (DNS).</li>
  <li><b>AWS Global Accelerator</b> y <b>S3 Transfer Acceleration</b>: aceleran el tráfico usando la red de AWS.</li>
  </ul>
<h4>Otros términos de infraestructura</h4>
  <ul>
  <li><b>Local Zones:</b> extensiones de una región en una ciudad grande, para latencia de milisegundos de un dígito.</li>
  <li><b>Wavelength:</b> infraestructura de AWS dentro de redes 5G de operadores móviles.</li>
  <li><b>AWS Outposts:</b> hardware de AWS instalado en tu propio data center.</li>
  </ul>
  <p>Alcance de los servicios: algunos son <b>globales</b> (IAM, Route 53, CloudFront), otros <b>regionales</b> (S3, Lambda, DynamoDB) y otros de <b>zona</b> (una instancia EC2 o un volumen EBS viven en una AZ).</p>
<h4>Infraestructura y automatización</h4>
<ul>
<li><b>AWS CloudFormation:</b> describes tu infraestructura en una plantilla (JSON/YAML) y AWS la crea igual cada vez, en cualquier región o cuenta. Es la base de la <b>infraestructura como código</b>.</li>
<li><b>AWS CDK:</b> defines la infraestructura con lenguajes de programación (Python, TypeScript) y se convierte en CloudFormation.</li>
<li><b>AWS Elastic Beanstalk:</b> subes el código y AWS crea el entorno completo por ti.</li>
<li><b>AWS Outposts</b> y <b>Local Zones</b> llevan la infraestructura de AWS más cerca: a tu data center o a una ciudad grande.</li>
</ul>
<p class="trap"><b>Trampa típica:</b> "Alta disponibilidad" → varias <b>AZ</b>. "Recuperación ante desastres de una región entera" → varias <b>regiones</b>. "La ley exige que los datos queden en el país" → elegir la <b>región</b> por cumplimiento. "Baja latencia con contenido en caché" → <b>edge locations / CloudFront</b>. "Infraestructura repetible con plantillas" → <b>CloudFormation</b>.</p>`,

"m5":`<h4>Amazon VPC (Virtual Private Cloud)</h4>
  <p>Tu propia <b>red privada y aislada</b> dentro de AWS, donde lanzas tus recursos. Defines el rango de direcciones IP y la divides en <b>subredes</b>. Cada subred vive en <b>una AZ</b>.</p>
  <ul>
  <li><b>Subred pública:</b> tiene una ruta a un <b>Internet Gateway</b>, así que sus recursos pueden recibir tráfico de internet (ej.: servidores web, balanceadores).</li>
  <li><b>Subred privada:</b> sin acceso directo desde internet; ahí van bases de datos y servidores internos.</li>
  <li><b>Internet Gateway:</b> la "puerta" entre la VPC e internet.</li>
  <li><b>NAT Gateway:</b> deja que recursos de una subred privada <b>salgan</b> a internet (ej.: para descargar parches) sin que nadie de afuera pueda entrar.</li>
  <li><b>VPC Peering:</b> conecta dos VPC de forma privada.</li>
  <li><b>AWS Transit Gateway:</b> un concentrador para conectar muchas VPC y redes on-premises.</li>
  </ul>
<h4>Security groups vs. NACLs (muy preguntado)</h4>
  <ul>
  <li><b>Security group:</b> firewall virtual a nivel de <b>instancia</b>. Es <b>con estado (stateful)</b>: si permites la entrada de una solicitud, la respuesta sale automáticamente. Solo tiene reglas de <b>permitir</b>; por defecto bloquea toda entrada y permite toda salida.</li>
  <li><b>Network ACL:</b> firewall a nivel de <b>subred</b>. Es <b>sin estado (stateless)</b>: debes permitir la entrada y la salida por separado. Tiene reglas de <b>permitir y denegar</b>; la NACL por defecto permite todo.</li>
  </ul>
<h4>DNS y entrega de contenido</h4>
  <ul>
  <li><b>Amazon Route 53:</b> servicio DNS administrado: traduce nombres de dominio (ejemplo.com) a direcciones IP. También registra dominios y hace <b>chequeos de salud</b> y enrutamiento (por latencia, geolocalización, conmutación por error).</li>
  <li><b>Amazon CloudFront:</b> red de entrega de contenido (CDN). Guarda en caché tu contenido en <b>edge locations</b> cerca de los usuarios: menor latencia y menos carga en tu servidor. Se integra con Shield y WAF.</li>
  <li><b>AWS Global Accelerator:</b> mejora el rendimiento de apps globales enviando el tráfico por la red de AWS en vez de internet público.</li>
  </ul>
<h4>Conectar tu oficina con AWS</h4>
  <ul>
  <li><b>AWS Site-to-Site VPN:</b> conexión <b>cifrada por internet</b> entre tu red y la VPC. Rápida de configurar y barata, pero depende de internet.</li>
  <li><b>AWS Client VPN:</b> para que usuarios individuales se conecten desde sus computadoras.</li>
  <li><b>AWS Direct Connect:</b> línea <b>física dedicada y privada</b> entre tu data center y AWS, sin pasar por internet. Más ancho de banda, latencia constante, más segura. Tarda semanas en instalarse y es más cara.</li>
  </ul>
<p class="trap"><b>Trampa típica:</b> "Con estado, nivel instancia" → <b>security group</b>. "Sin estado, nivel subred, puede denegar" → <b>NACL</b>. "Conexión privada que no pasa por internet" → <b>Direct Connect</b>. "Cifrada por internet" → <b>VPN</b>. "DNS" → <b>Route 53</b>. "Salir a internet desde una subred privada" → <b>NAT Gateway</b>.</p>`,

"m6":`<h4>Amazon S3 (Simple Storage Service)</h4>
  <p>Almacenamiento de <b>objetos</b> (archivos con sus metadatos) en contenedores llamados <b>buckets</b>. Capacidad ilimitada; cada objeto puede pesar hasta 5 TB. Durabilidad de <b>99,999999999 % (11 nueves)</b>: los datos se copian en varias AZ automáticamente. Es un servicio <b>regional</b>, pero el nombre del bucket debe ser único en todo el mundo.</p>
  <p>Usos: archivos estáticos de sitios web (puede alojar un sitio estático completo), backups, data lakes, imágenes y videos.</p>
  <p>Funciones que aparecen: <b>versionado</b> (guarda versiones anteriores, protege contra borrados accidentales), <b>políticas de ciclo de vida</b> (mueven objetos a clases más baratas automáticamente tras X días), <b>replicación entre regiones</b>, <b>cifrado</b> (activado por defecto), <b>Block Public Access</b> (bloquea acceso público por defecto).</p>
<h4>Clases de almacenamiento de S3 (de más cara a más barata)</h4>
  <ul>
  <li><b>S3 Standard:</b> datos de acceso frecuente. Sin costo por recuperar.</li>
  <li><b>S3 Intelligent-Tiering:</b> mueve los objetos solo entre niveles según su uso. Ideal si <b>no sabes</b> el patrón de acceso.</li>
  <li><b>S3 Standard-IA</b> (acceso poco frecuente): más barata de guardar, pero cobra por recuperar. Copias en varias AZ.</li>
  <li><b>S3 One Zone-IA:</b> como la anterior, pero en <b>una sola AZ</b> (más barata, menos resistente). Para datos que puedes regenerar.</li>
  <li><b>S3 Glacier Instant Retrieval:</b> archivo con recuperación en milisegundos.</li>
  <li><b>S3 Glacier Flexible Retrieval:</b> archivo con recuperación de minutos a 12 horas.</li>
  <li><b>S3 Glacier Deep Archive:</b> la más barata; recuperación en 12–48 horas. Para datos que se guardan años por ley (ej.: registros de 7 años).</li>
  </ul>
<h4>Otros tipos de almacenamiento</h4>
  <ul>
  <li><b>Amazon EBS (Elastic Block Store):</b> almacenamiento en <b>bloques</b>, el "disco duro" de una instancia EC2. Vive en <b>una sola AZ</b>; persiste aunque apagues la instancia. Puedes hacer <b>snapshots</b> (copias de seguridad) que se guardan en S3.</li>
  <li><b>Instance Store:</b> disco físico de la máquina anfitriona, muy rápido pero <b>temporal</b>: se borra al detener la instancia.</li>
  <li><b>Amazon EFS (Elastic File System):</b> sistema de <b>archivos</b> compartido para Linux; miles de instancias lo usan a la vez, en varias AZ. Crece y se reduce solo.</li>
  <li><b>Amazon FSx:</b> sistemas de archivos administrados especializados (FSx for Windows File Server, FSx for Lustre para cómputo de alto rendimiento).</li>
  <li><b>AWS Storage Gateway:</b> conecta tus servidores on-premises con almacenamiento en AWS (híbrido). Ej.: tus backups locales se guardan en S3.</li>
  <li><b>AWS Backup:</b> administra copias de seguridad de muchos servicios en un solo lugar.</li>
  </ul>
<h4>Ciclo de vida de los datos y recuperación ante desastres</h4>
<ul>
<li><b>Snapshots de EBS:</b> copias de seguridad incrementales de un volumen, guardadas en S3. Sirven para restaurar o crear volúmenes en otra AZ o región.</li>
<li><b>Amazon Data Lifecycle Manager:</b> automatiza crear, retener y borrar snapshots de EBS.</li>
<li><b>Ciclo de vida de S3:</b> reglas que mueven objetos a clases más baratas o los borran tras X días.</li>
<li><b>AWS Backup:</b> administra copias de seguridad de muchos servicios desde un solo lugar.</li>
<li><b>AWS Elastic Disaster Recovery:</b> replica servidores (on-premises o en la nube) a AWS de forma continua y permite recuperarlos en minutos si hay un desastre.</li>
</ul>
<p class="trap"><b>Trampa típica:</b> Objetos/archivos estáticos → <b>S3</b>. Disco de una instancia → <b>EBS</b>. Compartido entre muchas instancias Linux → <b>EFS</b>. Temporal y muy rápido → <b>almacén de instancias</b>. Archivo barato por años → <b>Glacier Deep Archive</b>. Patrón de acceso desconocido → <b>Intelligent-Tiering</b>. Híbrido → <b>Storage Gateway</b>.</p>`,

"m7":`<h4>Relacional vs. NoSQL</h4>
  <p><b>Relacional (SQL):</b> datos en tablas con filas y columnas, relaciones entre tablas y un esquema fijo. Para transacciones (ventas, inventario). <b>NoSQL:</b> esquema flexible (clave-valor, documentos, grafos), escala horizontal enorme y muy baja latencia.</p>
<h4>Bases de datos relacionales</h4>
  <ul>
  <li><b>Amazon RDS:</b> bases relacionales <b>administradas</b> con motores MySQL, PostgreSQL, MariaDB, Oracle, SQL Server y Db2. AWS se encarga de instalar, parchear, hacer backups automáticos y del hardware. Tú administras tus datos, usuarios y tablas. Opciones clave: <b>Multi-AZ</b> (copia en espera en otra AZ para alta disponibilidad y conmutación automática) y <b>réplicas de lectura</b> (para repartir lecturas y mejorar rendimiento).</li>
  <li><b>Amazon Aurora:</b> la base relacional creada por AWS, compatible con MySQL y PostgreSQL. Hasta 5 veces más rápida que MySQL estándar, guarda 6 copias de los datos en 3 AZ. Tiene versión <b>Aurora Serverless</b>.</li>
  </ul>
  <p>Si quieres control total del motor o del sistema operativo, puedes instalar la base de datos tú mismo en EC2 (pero entonces tú la administras toda).</p>
<h4>NoSQL y otros tipos</h4>
  <ul>
  <li><b>Amazon DynamoDB:</b> NoSQL clave-valor y documentos, <b>serverless</b>, latencia de <b>milisegundos de un dígito</b> a cualquier escala, replicada en 3 AZ. <b>DAX</b> le agrega caché en memoria (microsegundos). <b>Global Tables</b> la replica en varias regiones.</li>
  <li><b>Amazon ElastiCache:</b> caché en memoria con <b>Redis</b> o <b>Memcached</b>. Se pone delante de una base de datos para responder lecturas repetidas en microsegundos y reducir carga.</li>
  <li><b>Amazon MemoryDB:</b> base de datos en memoria compatible con Redis y duradera.</li>
  <li><b>Amazon Redshift:</b> <b>data warehouse</b>: analítica y reportes sobre petabytes de datos históricos (OLAP), no para transacciones.</li>
  <li><b>Amazon DocumentDB:</b> base de documentos compatible con <b>MongoDB</b>.</li>
  <li><b>Amazon Neptune:</b> base de <b>grafos</b>: relaciones complejas como redes sociales, recomendaciones, detección de fraude.</li>
  <li><b>Amazon Keyspaces:</b> compatible con Apache Cassandra.</li>
  <li><b>Amazon Timestream:</b> datos de series temporales (sensores IoT).</li>
  <li><b>Amazon QLDB:</b> libro mayor inmutable y verificable (historial de cambios que no se puede alterar).</li>
  </ul>
<p class="trap"><b>Trampa típica:</b> "Relacional administrada" → <b>RDS</b>. "Relacional de alto rendimiento compatible con MySQL/PostgreSQL" → <b>Aurora</b>. "NoSQL, milisegundos a cualquier escala, serverless" → <b>DynamoDB</b>. "Data warehouse" → <b>Redshift</b>. "Caché en memoria" → <b>ElastiCache</b>. "Alta disponibilidad de RDS" → <b>Multi-AZ</b>.</p>`,

"m8":`<h4>Machine learning e IA</h4>
  <ul>
  <li><b>Amazon SageMaker:</b> plataforma completa para <b>construir, entrenar y desplegar</b> tus propios modelos de machine learning.</li>
  <li><b>Amazon Bedrock:</b> acceso a modelos de IA generativa (modelos fundacionales) mediante API.</li>
  <li><b>Amazon Q:</b> asistente de IA generativa para empresas y desarrolladores.</li>
  </ul>
  <p>Servicios de IA listos para usar (no necesitas saber de ML):</p>
  <ul>
  <li><b>Rekognition:</b> analiza imágenes y video (rostros, objetos, contenido inapropiado).</li>
  <li><b>Comprehend:</b> procesamiento de lenguaje natural: sentimiento, temas y entidades en un texto.</li>
  <li><b>Lex:</b> crea <b>chatbots</b> de voz y texto (la tecnología de Alexa).</li>
  <li><b>Polly:</b> convierte <b>texto en voz</b>.</li>
  <li><b>Transcribe:</b> convierte <b>voz en texto</b>.</li>
  <li><b>Translate:</b> traducción automática de idiomas.</li>
  <li><b>Textract:</b> extrae texto y datos de documentos escaneados y formularios.</li>
  <li><b>Kendra:</b> búsqueda inteligente en documentos de la empresa.</li>
  <li><b>Personalize:</b> recomendaciones personalizadas (como "también te puede gustar").</li>
  <li><b>Forecast:</b> pronósticos de series temporales.</li>
  </ul>
<h4>IA generativa en AWS</h4>
<p>La <b>IA generativa</b> crea contenido nuevo (texto, imágenes, código) a partir de <b>modelos fundacionales</b> entrenados con enormes cantidades de datos.</p>
<ul>
<li><b>Amazon Bedrock:</b> acceso a modelos fundacionales de varias empresas mediante una sola API, sin administrar infraestructura. Puedes personalizarlos con tus datos.</li>
<li><b>Amazon Q:</b> asistente de IA generativa. <b>Q Business</b> responde preguntas con los datos de tu empresa; <b>Q Developer</b> ayuda a programar y a trabajar con AWS.</li>
<li><b>Amazon SageMaker AI:</b> para construir, entrenar y desplegar tus propios modelos (también ofrece modelos listos para empezar).</li>
</ul>
<p>Diferencia clave: <b>servicios de IA</b> (Rekognition, Comprehend…) = listos para usar; <b>SageMaker</b> = construyes tu modelo; <b>Bedrock</b> = usas modelos fundacionales ya entrenados.</p>
<h4>Analítica</h4>
  <ul>
  <li><b>Amazon Athena:</b> consultas <b>SQL directamente sobre archivos en S3</b>, serverless; pagas por los datos escaneados. Ideal para analizar logs sin cargar nada en una base.</li>
  <li><b>Amazon Kinesis:</b> recoge y procesa datos <b>en tiempo real</b> (streaming): clics de un sitio, telemetría, logs. <b>Kinesis Data Firehose</b> (Amazon Data Firehose) los entrega a S3 o Redshift.</li>
  <li><b>AWS Glue:</b> servicio <b>ETL</b> serverless: descubre, prepara y transforma datos. Su <b>Data Catalog</b> describe dónde están y cómo son tus datos.</li>
  <li><b>Amazon EMR:</b> clústeres de big data con Hadoop y Spark.</li>
  <li><b>Amazon QuickSight:</b> <b>dashboards</b> e informes de inteligencia de negocios (BI).</li>
  <li><b>Amazon OpenSearch Service:</b> búsqueda y análisis de logs.</li>
  <li><b>AWS Lake Formation:</b> crea un data lake seguro en S3.</li>
  <li><b>Amazon MSK:</b> Apache Kafka administrado.</li>
  </ul>
<h4>Canalizaciones de datos</h4>
<p>Una canalización mueve los datos por etapas. Ejemplo de cada etapa en AWS:</p>
<ul>
<li><b>Ingesta:</b> Kinesis (tiempo real), Amazon Data Firehose, AWS DataSync.</li>
<li><b>Almacenamiento:</b> S3 como data lake; Redshift como data warehouse.</li>
<li><b>Procesamiento (ETL):</b> AWS Glue, Amazon EMR.</li>
<li><b>Análisis y visualización:</b> Athena (SQL sobre S3), QuickSight (dashboards), OpenSearch.</li>
</ul>
<p class="trap"><b>Trampa típica:</b> "Entrenar tus propios modelos" → <b>SageMaker</b>. "Modelos fundacionales por API" → <b>Bedrock</b>. "Asistente de IA para la empresa" → <b>Amazon Q</b>. "SQL sobre S3" → <b>Athena</b>. "Tiempo real" → <b>Kinesis</b>. "ETL" → <b>Glue</b>. "Dashboards" → <b>QuickSight</b>. Voz→texto <b>Transcribe</b>; texto→voz <b>Polly</b>.</p>`,

"m9":`<h4>AWS IAM (Identity and Access Management)</h4>
  <p>Controla <b>quién</b> puede entrar a tu cuenta (autenticación) y <b>qué</b> puede hacer (autorización). Es <b>global</b> y gratuito.</p>
  <ul>
  <li><b>Usuario:</b> una persona o aplicación, con credenciales permanentes (contraseña para la consola, claves de acceso para CLI/SDK).</li>
  <li><b>Grupo:</b> conjunto de usuarios que comparten permisos (ej.: grupo "Desarrolladores"). Asignar permisos a grupos, no a cada usuario. Un grupo no puede contener otros grupos.</li>
  <li><b>Rol:</b> identidad con permisos <b>temporales</b> que se "asume". Úsalo para que un <b>servicio</b> acceda a otro (ej.: una EC2 que lee de S3, sin guardar claves en el servidor), para acceso entre cuentas o para usuarios federados.</li>
  <li><b>Política:</b> documento <b>JSON</b> que define permisos (permitir o denegar acciones sobre recursos). Por defecto todo está denegado; una denegación explícita gana sobre un permiso.</li>
  </ul>
  <p>Buenas prácticas: <b>mínimo privilegio</b> (solo los permisos necesarios), <b>MFA</b> para todos, rotar claves de acceso, usar roles en vez de claves guardadas, no compartir credenciales, revisar permisos con <b>IAM Access Analyzer</b> y el informe de credenciales.</p>
  <ul>
  <li><b>IAM Identity Center</b> (antes AWS SSO): inicio de sesión único para varias cuentas de AWS y aplicaciones, conectado a tu directorio corporativo.</li>
  <li><b>Amazon Cognito:</b> inicio de sesión para los <b>usuarios de tu aplicación</b> (web o móvil), incluso con Google o Facebook.</li>
  <li><b>AWS Directory Service:</b> Microsoft Active Directory administrado.</li>
  </ul>
<h4>El usuario root</h4>
  <p>Es la identidad creada con el correo de registro y tiene <b>acceso total</b> a la cuenta, incluida la facturación y cerrar la cuenta. Buenas prácticas que se preguntan:</p>
  <ul>
  <li>Activar <b>MFA</b> (autenticación multifactor) de inmediato.</li>
  <li><b>No crear claves de acceso</b> para root.</li>
  <li>No usarlo para el día a día: crea un usuario administrador en IAM o IAM Identity Center.</li>
  <li>Usar una contraseña fuerte y no compartirla.</li>
  </ul>
  <p>Tareas que <b>solo</b> root puede hacer: cambiar la configuración de la cuenta (correo, contraseña de root), cerrar la cuenta, cambiar el plan de soporte, restaurar permisos de IAM si te quedaste sin acceso.</p>
<h4>Protección de red y aplicaciones</h4>
  <ul>
  <li><b>AWS Shield:</b> protección contra ataques <b>DDoS</b>. <b>Standard:</b> gratis y automática para todos. <b>Advanced:</b> de pago, protección ampliada, equipo de respuesta DDoS 24/7 y <b>protección de costos</b> (te reembolsa el gasto extra por escalado durante un ataque).</li>
  <li><b>AWS WAF:</b> firewall de aplicaciones web: filtra tráfico malicioso en la capa 7, como <b>inyección SQL</b> y <b>cross-site scripting (XSS)</b>, o bloquea IPs y países. Se usa con CloudFront, ALB y API Gateway.</li>
  <li><b>AWS Firewall Manager:</b> administra reglas de WAF y Shield en muchas cuentas.</li>
  <li><b>AWS Network Firewall:</b> firewall para tu VPC.</li>
  </ul>
<h4>Detección de amenazas y vulnerabilidades</h4>
  <ul>
  <li><b>Amazon GuardDuty:</b> detecta <b>amenazas</b> de forma inteligente analizando logs (CloudTrail, VPC Flow Logs, DNS) con machine learning: accesos sospechosos, minería de criptomonedas, cuentas comprometidas.</li>
  <li><b>Amazon Inspector:</b> escanea <b>vulnerabilidades</b> de software y exposición de red en instancias EC2, imágenes de contenedor y funciones Lambda.</li>
  <li><b>Amazon Macie:</b> usa ML para encontrar <b>datos sensibles</b> (datos personales, números de tarjeta) en S3.</li>
  <li><b>Amazon Detective:</b> investiga la <b>causa raíz</b> de un hallazgo de seguridad.</li>
  <li><b>AWS Security Hub:</b> panel <b>central</b> que reúne los hallazgos de GuardDuty, Inspector, Macie y otros, y revisa buenas prácticas.</li>
  </ul>
<h4>Cifrado y secretos</h4>
  <ul>
  <li><b>AWS KMS (Key Management Service):</b> crea y administra <b>claves de cifrado</b>; se integra con casi todos los servicios para cifrar datos en reposo.</li>
  <li><b>AWS CloudHSM:</b> módulo de hardware dedicado para claves, cuando necesitas control total del hardware.</li>
  <li><b>AWS Secrets Manager:</b> guarda <b>contraseñas</b>, claves de API y credenciales de bases de datos, y las <b>rota automáticamente</b>.</li>
  <li><b>AWS Certificate Manager (ACM):</b> certificados SSL/TLS gratuitos para HTTPS (cifrado en tránsito).</li>
  </ul>
<p class="trap"><b>Trampa típica:</b> "Una EC2 necesita acceder a S3" → <b>rol de IAM</b>. "Permisos para un equipo" → <b>grupo</b>. DDoS → <b>Shield</b>. SQL/XSS → <b>WAF</b>. Amenazas → <b>GuardDuty</b>. Vulnerabilidades → <b>Inspector</b>. Datos sensibles en S3 → <b>Macie</b>. Claves → <b>KMS</b>. Contraseñas rotadas → <b>Secrets Manager</b>.</p>`,

"m10":`<h4>Monitoreo y gestión</h4>
  <ul>
  <li><b>Amazon CloudWatch:</b> monitorea el <b>rendimiento</b>: métricas (CPU, tráfico), <b>alarmas</b> (ej.: avisar o escalar si la CPU pasa de 80 %), <b>logs</b> y dashboards. También puede crear alarmas de facturación.</li>
  <li><b>AWS CloudTrail:</b> registra <b>quién hizo qué, cuándo y desde dónde</b> (cada llamada a la API). Es para auditoría (lo verás en seguridad).</li>
  <li><b>AWS CloudFormation:</b> <b>infraestructura como código</b>: describes tus recursos en una plantilla JSON/YAML y AWS los crea igual cada vez, en cualquier región o cuenta. Sin costo extra (pagas los recursos creados).</li>
  <li><b>AWS CDK:</b> definir infraestructura con lenguajes de programación (Python, TypeScript), que genera CloudFormation.</li>
  <li><b>AWS Systems Manager:</b> administra muchas instancias a la vez: aplica parches, ejecuta comandos, accede sin SSH (<b>Session Manager</b>), guarda parámetros de configuración (<b>Parameter Store</b>).</li>
  <li><b>AWS Trusted Advisor:</b> revisa tu cuenta y da <b>recomendaciones</b> en 5 categorías: <b>optimización de costos, rendimiento, seguridad, tolerancia a fallos y límites de servicio</b>. Con Basic y Developer solo tienes los chequeos básicos; con Business o superior, todos.</li>
  <li><b>AWS Health Dashboard:</b> muestra el estado de los servicios de AWS y avisos personalizados de eventos que <b>afectan a tus recursos</b> (ej.: mantenimiento programado).</li>
  <li><b>AWS Compute Optimizer:</b> recomienda el tamaño correcto de tus instancias.</li>
  <li><b>AWS Service Catalog:</b> catálogo de productos aprobados que los empleados pueden lanzar.</li>
  <li><b>AWS License Manager:</b> administra licencias de software.</li>
  </ul>
<h4>Auditoría y cumplimiento</h4>
  <ul>
  <li><b>AWS CloudTrail:</b> registro de <b>toda la actividad de la API</b>: quién hizo qué, cuándo y desde qué IP. Clave para auditoría e investigar incidentes.</li>
  <li><b>AWS Config:</b> inventario e <b>historial de configuración</b> de tus recursos, y verifica si cumplen tus reglas (ej.: "todos los buckets deben estar cifrados").</li>
  <li><b>AWS Artifact:</b> portal para <b>descargar los informes de cumplimiento de AWS</b> (ISO, SOC, PCI DSS) y aceptar acuerdos (como BAA de salud).</li>
  <li><b>AWS Audit Manager:</b> recopila evidencia continua para <b>auditar tu propio uso</b> frente a estándares.</li>
  <li><b>AWS Organizations + SCP:</b> las políticas de control de servicios limitan lo que pueden hacer las cuentas de la organización (lo verás en facturación).</li>
  <li><b>AWS Control Tower:</b> configura y gobierna un entorno multicuenta seguro siguiendo buenas prácticas.</li>
  </ul>
  <p>Otros recursos: <b>AWS Abuse team</b> (reportar uso abusivo de AWS, ej.: spam o ataques desde una IP de AWS), <b>Centro de seguridad / Knowledge Center</b>, y la página de cumplimiento de AWS.</p>
<h4>AWS Organizations</h4>
  <p>Administra <b>varias cuentas</b> de AWS de forma centralizada:</p>
  <ul>
  <li><b>Facturación consolidada:</b> una sola factura para todas las cuentas y <b>descuentos por volumen combinados</b> (el uso de todas suma para llegar a precios más bajos). Gratis.</li>
  <li><b>Unidades organizativas (OU):</b> agrupan cuentas (ej.: Producción, Desarrollo).</li>
  <li><b>SCP (políticas de control de servicios):</b> limitan los servicios y acciones que pueden usar las cuentas, incluso a sus administradores.</li>
  </ul>
<p class="trap"><b>Trampa típica:</b> "Métricas y alarmas" → <b>CloudWatch</b>. "Quién hizo qué" → <b>CloudTrail</b>. "Historial de configuración y reglas" → <b>Config</b>. "Informes de cumplimiento de AWS" → <b>Artifact</b>. "Varias cuentas y SCP" → <b>Organizations</b>. "Eventos de AWS que afectan mis recursos" → <b>AWS Health</b>. "Recomendaciones" → <b>Trusted Advisor</b>.</p>`,

"m11":`<h4>Principios de precios de AWS</h4>
  <ul>
  <li><b>Pago por uso</b>, sin contratos largos ni licencias complejas.</li>
  <li><b>Ahorra al reservar</b> (Reserved, Savings Plans).</li>
  <li><b>Paga menos por más uso</b>: descuentos por volumen (ej.: S3 cobra menos por GB a mayor volumen).</li>
  <li>La <b>transferencia de datos entrante</b> a AWS es gratis; la <b>saliente</b> a internet se cobra.</li>
  <li>Servicios sin costo propio: IAM, VPC, CloudFormation, Auto Scaling, Elastic Beanstalk, Organizations (pagas los recursos que crean).</li>
  </ul>
<h4>Herramientas de costos (muy preguntado)</h4>
  <ul>
  <li><b>AWS Pricing Calculator:</b> <b>estima</b> el costo de una arquitectura <b>antes de construirla</b>.</li>
  <li><b>AWS Billing Dashboard:</b> resumen de tu factura del mes, gasto por servicio y pronóstico.</li>
  <li><b>AWS Cost Explorer:</b> visualiza y analiza tu <b>gasto pasado</b> con gráficos y filtros, y <b>pronostica</b> el gasto de los próximos meses. Da recomendaciones de Reserved Instances y Savings Plans.</li>
  <li><b>AWS Budgets:</b> defines un presupuesto de costo o uso y te <b>alerta</b> cuando el gasto real o pronosticado lo supera. Puede ejecutar acciones automáticas.</li>
  <li><b>AWS Cost and Usage Report (CUR):</b> el reporte <b>más detallado</b> (hora a hora, por recurso), para analizar con Athena o QuickSight.</li>
  <li><b>Cost Anomaly Detection:</b> detecta gastos inusuales con ML.</li>
  <li><b>Etiquetas de asignación de costos (cost allocation tags):</b> etiquetas como "proyecto=web" para saber cuánto gasta cada equipo o proyecto.</li>
  </ul>
<h4>Alerta de facturación</h4>
  <p>En <b>AWS Budgets</b> crea un presupuesto de costo (ej.: 5 USD) con alerta por correo al 80 %. Si te pasas, te avisa. También puedes usar la plantilla "Zero spend budget", que avisa ante cualquier cobro.</p>
<h4>Planes de soporte</h4>
  <ul>
  <li><b>Basic (gratis):</b> soporte de cuenta y facturación, documentación, foros (re:Post), Trusted Advisor con chequeos básicos, Health Dashboard. Sin soporte técnico.</li>
  <li><b>Developer:</b> soporte técnico por <b>correo en horario laboral</b>; respuesta en &lt;24 h (general) y &lt;12 h (sistema afectado). Para pruebas y desarrollo.</li>
  <li><b>Business:</b> soporte técnico <b>24/7</b> por teléfono, chat y correo; &lt;1 h si producción está caída; <b>todos los chequeos de Trusted Advisor</b>; soporte de software de terceros.</li>
  <li><b>Enterprise On-Ramp:</b> &lt;30 min si un sistema crítico está caído; <b>grupo de TAMs</b> compartido; Concierge de facturación.</li>
  <li><b>Enterprise:</b> &lt;<b>15 min</b> si un sistema crítico está caído; <b>TAM designado</b> (Technical Account Manager); <b>Concierge</b>; Infrastructure Event Management; revisiones de arquitectura.</li>
  </ul>
  <p>Nota: AWS renombró los planes en 2025 (Business Support+, Enterprise, Unified Operations), pero las preguntas del examen todavía usan los nombres de arriba.</p>
<h4>AWS Marketplace y socios</h4>
  <ul>
  <li><b>AWS Marketplace:</b> catálogo para comprar software de terceros que corre en AWS.</li>
  <li><b>AWS Partner Network (APN):</b> empresas consultoras y de tecnología certificadas que te ayudan.</li>
  <li><b>AWS Professional Services:</b> equipo de expertos de AWS para proyectos grandes (ej.: migraciones).</li>
  <li><b>AWS IQ:</b> conecta con expertos independientes certificados para trabajos puntuales.</li>
  </ul>
<p class="trap"><b>Trampa típica:</b> "Antes de construir" → <b>Pricing Calculator</b>. "Gasto pasado" → <b>Cost Explorer</b>. "Alerta si me paso" → <b>Budgets</b>. "Lo más detallado" → <b>CUR</b>. "Una factura y descuento por volumen" → <b>facturación consolidada</b>. "TAM designado" → <b>Enterprise</b>. "24/7 más barato" → <b>Business</b>. "Software de terceros" → <b>Marketplace</b>.</p>`,

"m12":`<h4>AWS Cloud Adoption Framework (CAF)</h4>
  <p>Guía para que una <b>empresa</b> (no solo el equipo técnico) organice su paso a la nube. Tiene 6 perspectivas:</p>
  <ul>
  <li><b>Negocio:</b> que la inversión en la nube apoye los objetivos del negocio.</li>
  <li><b>Personas:</b> capacitación, cultura y cambio organizacional.</li>
  <li><b>Gobernanza:</b> gestión de riesgos, costos y programas.</li>
  <li><b>Plataforma:</b> diseñar la arquitectura y la infraestructura en la nube.</li>
  <li><b>Seguridad:</b> confidencialidad, integridad y disponibilidad de datos y cargas.</li>
  <li><b>Operaciones:</b> que los servicios funcionen al nivel acordado.</li>
  </ul>
  <p>Las 3 primeras son de negocio; las 3 últimas, técnicas. Beneficios que menciona el CAF: menor riesgo, mejor desempeño ESG, más ingresos y más eficiencia operativa.</p>
<h4>Las 7 R de migración</h4>
  <ul>
  <li><b>Retire (retirar):</b> apagar aplicaciones que ya nadie usa.</li>
  <li><b>Retain (retener):</b> dejarlas on-premises por ahora (no conviene o no se puede mover).</li>
  <li><b>Rehost ("lift and shift"):</b> mover la app tal cual a EC2, sin cambios. Lo más rápido.</li>
  <li><b>Relocate:</b> mover servidores virtuales (ej.: VMware) a la nube sin comprar hardware nuevo ni cambiar la app.</li>
  <li><b>Replatform ("lift, tinker and shift"):</b> pequeños ajustes para aprovechar la nube, ej.: pasar tu base de datos a RDS.</li>
  <li><b>Repurchase ("drop and shop"):</b> cambiar a un producto distinto, normalmente SaaS. Ej.: tu CRM propio por Salesforce.</li>
  <li><b>Refactor / re-architect:</b> rediseñar la app para la nube (microservicios, serverless). Más caro y lento, pero aprovecha todo.</li>
  </ul>
<h4>Herramientas de migración</h4>
  <ul>
  <li><b>AWS Snow Family:</b> dispositivos físicos que AWS te envía, cargas los datos y los devuelves. <b>Snowcone</b> (pequeño, TB), <b>Snowball Edge</b> (decenas de TB, también procesa datos en sitio). Úsalo cuando la red es lenta o los datos son enormes.</li>
  <li><b>AWS DMS (Database Migration Service):</b> migra bases de datos con la base original funcionando durante la migración. Con <b>Schema Conversion Tool</b> puedes cambiar de motor (ej.: Oracle → Aurora).</li>
  <li><b>AWS Application Migration Service:</b> automatiza el rehost de servidores a AWS.</li>
  <li><b>AWS Migration Hub:</b> un panel para seguir todas las migraciones.</li>
  </ul>
<h4>Transferencia de datos a AWS</h4>
<ul>
<li><b>En línea:</b> <b>AWS DataSync</b> (copia y sincroniza grandes volúmenes desde tu almacenamiento a S3, EFS o FSx), <b>AWS Transfer Family</b> (SFTP/FTPS/FTP directo a S3 o EFS), <b>Direct Connect</b> (conexión dedicada) y <b>S3 Transfer Acceleration</b>.</li>
<li><b>Sin conexión:</b> <b>AWS Snow Family</b>: dispositivos físicos que AWS te envía, los cargas y los devuelves. Úsalo cuando hay muchos datos y la red es lenta o cara.</li>
</ul>
<p>Regla rápida: si subir los datos por internet tardaría semanas, la respuesta es <b>Snow Family</b>.</p>
<p class="trap"><b>Trampa típica:</b> "Mover sin cambios" → <b>rehost</b>. "Pequeños ajustes" (ej.: pasar a RDS) → <b>replatform</b>. "Cambiar a SaaS" → <b>repurchase</b>. "Rediseñar para la nube" → <b>refactor</b>. "Petabytes con internet lento" → <b>Snow Family</b>. "Migrar una base de datos funcionando" → <b>DMS</b>. "Transformación organizacional" → <b>CAF</b>.</p>`,

"m13":`<h4>AWS Well-Architected Framework: 6 pilares</h4>
  <ul>
  <li><b>Excelencia operativa:</b> operar y monitorear bien, automatizar cambios, hacer cambios pequeños y frecuentes, aprender de los errores. Ej.: infraestructura como código con CloudFormation.</li>
  <li><b>Seguridad:</b> proteger datos y sistemas: mínimo privilegio, cifrado, trazabilidad (CloudTrail), seguridad en todas las capas.</li>
  <li><b>Fiabilidad:</b> recuperarse de fallas automáticamente y escalar para cumplir la demanda. Ej.: varias AZ, backups, Auto Scaling.</li>
  <li><b>Eficiencia del rendimiento:</b> usar los recursos adecuados y ajustarlos a medida que cambia la demanda o salen nuevas tecnologías. Ej.: elegir el tipo de instancia correcto, usar serverless.</li>
  <li><b>Optimización de costos:</b> no pagar por lo que no usas: elegir el modelo de precio correcto, apagar recursos ociosos, medir el gasto.</li>
  <li><b>Sostenibilidad:</b> minimizar el impacto ambiental: maximizar el uso de los recursos y reducir el desperdicio.</li>
  </ul>
  <p>Herramienta: <b>AWS Well-Architected Tool</b>, revisa tu arquitectura contra estos pilares de forma gratuita.</p>
<h4>Servicios especializados de AWS</h4>
<ul>
<li><b>AWS IoT Core:</b> conecta y administra millones de dispositivos de Internet de las cosas (sensores, máquinas).</li>
<li><b>Amazon Connect:</b> centro de contacto (call center) en la nube.</li>
<li><b>Amazon WorkSpaces:</b> escritorios virtuales en la nube para tus empleados.</li>
<li><b>Amazon AppStream 2.0:</b> transmite aplicaciones de escritorio al navegador.</li>
<li><b>AWS Amplify:</b> crea y aloja aplicaciones web y móviles completas rápidamente.</li>
<li><b>Amazon SES:</b> envío de correos electrónicos a gran escala.</li>
<li><b>AWS Ground Station:</b> controla satélites y procesa sus datos sin tener antenas propias.</li>
<li><b>Amazon Braket:</b> experimenta con computación cuántica.</li>
</ul>
<h4>Herramientas para desarrolladores</h4>
  <ul>
  <li><b>CodeCommit</b> (repositorio Git), <b>CodeBuild</b> (compila y prueba), <b>CodeDeploy</b> (despliega a EC2, Lambda u on-premises), <b>CodePipeline</b> (automatiza todo el flujo CI/CD).</li>
  <li><b>AWS X-Ray:</b> rastrea solicitudes en apps distribuidas para encontrar cuellos de botella.</li>
  <li><b>AWS CloudShell:</b> terminal en el navegador ya autenticada.</li>
  <li><b>AWS AppConfig:</b> despliega configuraciones de forma segura.</li>
  </ul>
<p class="trap"><b>Trampa típica:</b> "Recuperarse de fallas" → <b>fiabilidad</b>. "Usar los recursos adecuados" → <b>eficiencia del rendimiento</b>. "Automatizar y mejorar operaciones" → <b>excelencia operativa</b>. "Reducir impacto ambiental" → <b>sostenibilidad</b>. "Revisar tu arquitectura contra los pilares" → <b>Well-Architected Tool</b>. Dispositivos conectados → <b>IoT Core</b>; call center → <b>Connect</b>.</p>`,

"set1":`<p>Usa el <b>Official Practice Question Set</b> en Skill Builder (gratis, en español). Al terminar:</p>
<ul>
<li>Revisa <b>todas</b> las preguntas, no solo las falladas: también las que acertaste dudando.</li>
<li>Anota en una "hoja de errores" el concepto que resolvía cada una (ej.: "elasticidad ≠ escalabilidad").</li>
<li>Si una explicación te sorprende, vuelve al módulo correspondiente aquí mismo.</li>
</ul>
<p>Esa hoja de errores es lo que vas a repasar la semana del examen.</p>`,

"x1":`<p>Haz 65 preguntas en 90 minutos, sin pausas, como en el examen real. Después revisa <b>cada</b> pregunta: las falladas y las que acertaste dudando. Anota el concepto en tu hoja de errores y repasa el resumen del tema aquí mismo.</p>`,

"x2":`<p>Haz otro examen completo, distinto al anterior. Compara los resultados por dominio: si un tema sigue saliendo mal, ese es el que repasas la semana del examen.</p>`,

"xx":`<p>La meta es sacar <b>80 % o más</b> de forma constante en los exámenes de práctica. Así el examen real, que pide alrededor de 70 %, queda con margen.</p>`,

"rev":`<p>No estudies nada nuevo: repasa tu hoja de errores, la tabla de pares que se confunden y las listas (pilares, perspectivas, 7 R, planes de soporte).</p>`,

"eve":`<p>Haz un repaso ligero de 30–45 minutos y duerme temprano. Si rindes online, prueba la cámara y el sistema el día antes y deja el escritorio despejado.</p>`
  },

  /* Títulos de los enlaces de cada tema (mismos índices que LINKS_RAW) */
  linkTitles: {
    "m1": {"v":["Conceptos de la nube","Beneficios de la nube"],"d":["¿Qué es la computación en la nube?","Tipos de computación en la nube","Modelo de responsabilidad compartida","Curso en Skill Builder: módulo 1"]},
    "acct": {"v":["Primeros pasos"],"d":["Capa gratuita de AWS"]},
    "m2": {"v":["Cómputo","Modelos de precios de EC2","Integración de aplicaciones"],"d":["Precios de EC2","Curso en Skill Builder: módulo 2"]},
    "m3": {"v":["Cómputo"],"d":["AWS Lambda","Curso en Skill Builder: módulo 3"]},
    "m4": {"v":["Infraestructura global"],"d":["Infraestructura global de AWS","Curso en Skill Builder: módulo 4"]},
    "m5": {"v":["Redes"],"d":["Amazon VPC","Curso en Skill Builder: módulo 5"]},
    "m6": {"v":["Almacenamiento"],"d":["Clases de almacenamiento de S3","Curso en Skill Builder: módulo 6"]},
    "m7": {"v":["Bases de datos"],"d":["Bases de datos en AWS","Curso en Skill Builder: módulo 7"]},
    "m8": {"v":["ML, IA y big data"],"d":["Analítica en AWS","Amazon Bedrock","Curso en Skill Builder: módulo 8"]},
    "m9": {"v":["Identidad (IAM)","Seguridad"],"d":["AWS IAM","Seguridad en AWS","Curso en Skill Builder: módulo 9"]},
    "m10": {"v":["Herramientas de gestión","Logging","Gobernanza"],"d":["Amazon CloudWatch","Curso en Skill Builder: módulo 10"]},
    "m11": {"v":["Facturación, precios y soporte"],"d":["Administración de costos","Planes de soporte","Curso en Skill Builder: módulo 11"]},
    "m12": {"v":["TCO y migración"],"d":["Cloud Adoption Framework","Curso en Skill Builder: módulo 12"]},
    "m13": {"v":["Well-Architected"],"d":["Well-Architected Framework","Curso en Skill Builder: módulo 13"]},
    "set1": {"d":["AWS Skill Builder"]}
  },

  svc: [
    ["Servidores virtuales con control del sistema operativo","Amazon EC2"],
    ["Ejecutar código sin servidores, por evento","AWS Lambda"],
    ["Desplegar una app web sin gestionar infraestructura","AWS Elastic Beanstalk"],
    ["Servidor virtual simple a precio fijo mensual","Amazon Lightsail"],
    ["Contenedores sin administrar servidores","AWS Fargate (con ECS o EKS)"],
    ["Almacenamiento de objetos, archivos estáticos, backups","Amazon S3"],
    ["Archivado a largo plazo, muy barato","S3 Glacier (Deep Archive)"],
    ["Disco para una instancia EC2","Amazon EBS"],
    ["Sistema de archivos compartido entre instancias","Amazon EFS"],
    ["Base de datos relacional administrada","Amazon RDS (Aurora si piden alto rendimiento)"],
    ["NoSQL clave-valor, milisegundos a cualquier escala","Amazon DynamoDB"],
    ["Data warehouse, analítica sobre muchos datos","Amazon Redshift"],
    ["Consultar datos en S3 con SQL sin servidores","Amazon Athena"],
    ["Caché en memoria","Amazon ElastiCache"],
    ["Red privada aislada","Amazon VPC"],
    ["DNS, nombres de dominio","Amazon Route 53"],
    ["Entregar contenido con baja latencia en el mundo (CDN)","Amazon CloudFront"],
    ["Conexión privada y dedicada desde tu oficina","AWS Direct Connect"],
    ["Mover petabytes sin internet","AWS Snowball (Snow Family)"],
    ["Migrar bases de datos","AWS DMS"],
    ["Crear infraestructura con plantillas (infraestructura como código)","AWS CloudFormation"],
    ["Métricas, alarmas y logs","Amazon CloudWatch"],
    ["Quién hizo qué en la cuenta (llamadas a la API, auditoría)","AWS CloudTrail"],
    ["Historial de configuración y cumplimiento de reglas","AWS Config"],
    ["Recomendaciones de costo, seguridad y rendimiento","AWS Trusted Advisor"],
    ["Desacoplar componentes con una cola","Amazon SQS"],
    ["Enviar notificaciones (correo, SMS) a muchos","Amazon SNS"],
    ["Protección contra DDoS","AWS Shield (Advanced: soporte 24/7)"],
    ["Bloquear inyección SQL o XSS (firewall web)","AWS WAF"],
    ["Detección inteligente de amenazas","Amazon GuardDuty"],
    ["Escaneo de vulnerabilidades","Amazon Inspector"],
    ["Encontrar datos personales o sensibles en S3","Amazon Macie"],
    ["Administrar claves de cifrado","AWS KMS"],
    ["Guardar y rotar contraseñas","AWS Secrets Manager"],
    ["Descargar informes de cumplimiento de AWS (ISO, SOC, PCI)","AWS Artifact"],
    ["Administrar varias cuentas, políticas SCP, facturación consolidada","AWS Organizations"],
    ["Estimar el costo antes de construir","AWS Pricing Calculator"],
    ["Analizar el gasto pasado","AWS Cost Explorer"],
    ["Alertas cuando el gasto supera un límite","AWS Budgets"],
    ["Reporte de costos más detallado","AWS Cost and Usage Report"],
    ["Comprar software de terceros","AWS Marketplace"],
    ["Ayuda de expertos para migrar","AWS Professional Services / AWS Partner Network"]
  ],

  pairs: [
    ["CloudTrail · CloudWatch · Config","Quién hizo qué (API) · métricas y logs · historial de configuración"],
    ["Security group · NACL","Instancia, con estado, solo permitir · subred, sin estado, permite y deniega"],
    ["Shield · WAF","DDoS · tráfico web malicioso (SQL, XSS)"],
    ["GuardDuty · Inspector · Macie","Amenazas en la cuenta · vulnerabilidades · datos sensibles en S3"],
    ["Trusted Advisor · Cost Explorer · Budgets","Recomendaciones · gasto pasado · alertas de gasto futuro"],
    ["RDS · DynamoDB · Redshift","Relacional · NoSQL · data warehouse"],
    ["Reservadas · Savings Plans · Spot","Compromiso por instancia · compromiso de gasto flexible · capacidad sobrante interrumpible"],
    ["Artifact · Audit Manager","Informes de cumplimiento de AWS · auditar tu propio uso"]
  ],

  gloss: [
    ["Modelo de responsabilidad compartida","Shared responsibility model","AWS protege la nube; tú lo que pones en ella"],
    ["Región","Region","Zona geográfica con varias AZ"],
    ["Zona de disponibilidad","Availability Zone","Data centers aislados dentro de una región"],
    ["Ubicación de borde","Edge location","Punto de CloudFront cerca del usuario"],
    ["Alta disponibilidad","High availability","Sigue funcionando si falla un componente"],
    ["Tolerancia a fallos","Fault tolerance","Sin interrupción ante una falla"],
    ["Elasticidad","Elasticity","Sube y baja recursos según la demanda"],
    ["Escalabilidad","Scalability","Capacidad de crecer con la carga"],
    ["Agilidad","Agility","Probar y lanzar más rápido"],
    ["Gasto de capital / operativo","CapEx / OpEx","Comprar por adelantado / pagar por uso"],
    ["Pago por uso","Pay-as-you-go","Pagas solo lo que consumes"],
    ["Economías de escala","Economies of scale","Precios bajos por volumen de AWS"],
    ["Mínimo privilegio","Least privilege","Solo los permisos necesarios"],
    ["Autenticación multifactor","MFA","Contraseña + segundo factor"],
    ["Cifrado en reposo / en tránsito","At rest / in transit","Datos guardados / viajando por la red"],
    ["Facturación consolidada","Consolidated billing","Una factura para varias cuentas"],
    ["Instancias reservadas","Reserved Instances","Descuento por 1 o 3 años"],
    ["Instancias de spot","Spot Instances","Capacidad sobrante, interrumpible"],
    ["Infraestructura como código","Infrastructure as code","Recursos desde plantillas"],
    ["Sin servidor","Serverless","No administras servidores"],
    ["Servicio administrado","Managed service","AWS hace parches y backups"],
    ["Menor esfuerzo operativo","Least operational overhead","Pista: servicio administrado o serverless"],
    ["Más rentable","Most cost-effective","Pista: lo más barato que cumpla"]
  ],

  /* Banco de preguntas originales, 10 por módulo: [enunciado, opciones, correcta (índice o lista si son varias), [por qué la correcta, razón por opción ("" en las correctas), pista], módulo] */
  q: [
    ["Una empresa quiere dejar de comprar servidores por adelantado y pagar solo por los recursos que consume cada mes. ¿Qué beneficio de la nube describe esto?",["Beneficiarse de economías de escala masivas","Cambiar gasto de capital por gasto variable","Ser global en minutos","Aumentar la velocidad y la agilidad"],1,["En la nube no compras servidores por adelantado (gasto de capital, CapEx): pagas mes a mes solo lo que consumes (gasto variable, OpEx). Eso es exactamente lo que describe la pregunta.",["Las economías de escala explican por qué AWS puede bajar sus precios (compra a gran volumen), no el cambio de pagar por adelantado a pagar por uso.","","Ser global en minutos es desplegar en otras regiones del mundo rápidamente; no tiene que ver con cómo pagas.","La velocidad y la agilidad se refieren a tener recursos listos en minutos para experimentar, no a la forma de pago."],"\"Dejar de pagar por adelantado\" o \"pagar solo lo que consumes\" = cambiar gasto de capital por gasto variable."],1],
    ["Una empresa usa una aplicación de correo en el navegador y no administra servidores, sistema operativo ni software. ¿Qué modelo de servicio está usando?",["IaaS","PaaS","SaaS","On-premises"],2,["En SaaS usas un producto terminado, normalmente desde el navegador. El proveedor administra los servidores, el sistema operativo, la aplicación y sus actualizaciones; tú solo lo usas.",["En IaaS el proveedor te da servidores, red y almacenamiento, pero tú instalas y mantienes el sistema operativo y el software.","En PaaS el proveedor administra la plataforma, pero tú sigues desarrollando y desplegando tu propia aplicación.","","On-premises significa que todo está en tus propios equipos y lo administras tú; es lo contrario de lo que describe la pregunta."],"\"Solo lo usa, no administra nada técnico\" = SaaS."],1],
    ["Según el modelo de responsabilidad compartida, ¿qué tareas son responsabilidad del cliente? (Elige DOS.)",["Mantener la seguridad física de los data centers","Configurar los security groups de sus instancias EC2","Administrar el hipervisor","Administrar usuarios y permisos de IAM","Reemplazar discos dañados en los servidores de AWS"],[1,3],["El cliente es responsable de la seguridad EN la nube: lo que configura y pone en ella. Los security groups de sus instancias y los usuarios y permisos de IAM son configuraciones del cliente.",["La seguridad física de los data centers (guardias, acceso, cámaras) es responsabilidad de AWS.","","El hipervisor es la capa de virtualización que corre en el hardware de AWS; lo administra AWS.","","Reemplazar discos del hardware de AWS es parte de la infraestructura física, que mantiene AWS."],"Lo físico y la virtualización son de AWS; datos, permisos y configuración son del cliente."],1],
    ["Una empresa mantiene sus sistemas antiguos en su propio data center y conecta nuevas aplicaciones que corren en AWS. ¿Qué modelo de despliegue usa?",["Nube (all-in)","Híbrido","On-premises","SaaS"],1,["Un despliegue híbrido combina recursos en tu propio data center con recursos en la nube, conectados entre sí. Es típico cuando hay sistemas antiguos difíciles de mover.",["En el modelo de nube (all-in) toda la aplicación corre en la nube; aquí una parte sigue en el data center de la empresa.","","On-premises es tener todo en tus propios equipos; aquí también se usan aplicaciones en AWS.","SaaS es un modelo de servicio (usar un producto terminado), no un modelo de despliegue."],"\"Parte en su data center y parte en AWS, conectados\" = híbrido."],1],
    ["Una tienda online necesita más servidores en Black Friday y menos el resto del año, sin pagar por capacidad ociosa. ¿Qué concepto describe esto?",["Elasticidad","Tolerancia a fallos","Alta disponibilidad","Economías de escala"],0,["La elasticidad es la capacidad de aumentar y también reducir recursos automáticamente según la demanda, para no pagar por capacidad ociosa.",["","La tolerancia a fallos es seguir funcionando sin interrupción aunque falle un componente; no trata de ajustar la capacidad a la demanda.","La alta disponibilidad es mantener el sistema disponible si falla una parte (por ejemplo, con varias AZ), no subir y bajar recursos.","Las economías de escala explican por qué AWS tiene precios bajos; no describen cómo se ajustan tus recursos."],"\"Crecer y reducir según la demanda\" = elasticidad. Si solo dice \"crecer\", suele ser escalabilidad."],1],
    ["AWS puede ofrecer precios más bajos porque combina el uso de cientos de miles de clientes y compra a enorme volumen. ¿Qué beneficio de la nube describe esto?",["Cambiar gasto de capital por gasto variable","Beneficiarse de economías de escala masivas","Dejar de adivinar la capacidad","Ser global en minutos"],1,["Al sumar el uso de muchísimos clientes, AWS consigue costos por unidad más bajos y los traslada en precios más bajos. Eso son las economías de escala.",["Cambiar gasto de capital por variable trata de cómo pagas tú (por uso en vez de por adelantado), no de por qué AWS es más barato.","","Dejar de adivinar la capacidad es ajustar los recursos a la demanda real; no explica los precios bajos.","Ser global en minutos es desplegar en otras regiones rápido; no tiene que ver con el precio."],"\"Muchos clientes\" + \"precios más bajos\" = economías de escala."],1],
    ["Un equipo quiere probar una idea nueva: necesita servidores hoy, y si la idea no funciona los apagará mañana sin costo adicional. ¿Qué beneficio de la nube aprovecha?",["Aumentar la velocidad y la agilidad","Economías de escala","Alta disponibilidad","Cambiar gasto variable por gasto de capital"],0,["En la nube los recursos están listos en minutos y se apagan cuando quieres, así que experimentar es rápido y barato. Eso es velocidad y agilidad.",["","Las economías de escala explican los precios bajos de AWS, no la rapidez para probar ideas.","La alta disponibilidad es mantener un sistema funcionando si falla una parte; no trata de experimentar rápido.","Está al revés: la nube cambia gasto de capital por gasto variable, no al contrario."],"\"Probar rápido\", \"experimentar\" o \"en minutos\" = velocidad y agilidad."],1],
    ["Una startup no sabe cuántos usuarios tendrá el primer mes y no quiere comprar servidores de más ni quedarse corta. ¿Qué beneficio de la nube resuelve esto?",["Ser global en minutos","Dejar de adivinar la capacidad","Economías de escala","Dejar de gastar en mantener data centers"],1,["En la nube no tienes que estimar por adelantado cuántos servidores necesitarás: ajustas los recursos según la demanda real, hacia arriba o hacia abajo.",["Ser global en minutos es llegar a otros países rápido; no resuelve el problema de estimar la capacidad.","","Las economías de escala explican los precios bajos de AWS, no el problema de calcular cuántos servidores comprar.","Dejar de gastar en data centers es no pagar electricidad, refrigeración ni personal; no trata de estimar capacidad."],"\"No sabe cuánta capacidad necesitará\" = dejar de adivinar la capacidad."],1],
    ["Un equipo de desarrollo solo quiere ocuparse de su código. El proveedor debe administrar los servidores, el sistema operativo y la plataforma donde corre la aplicación. ¿Qué modelo de servicio busca?",["IaaS","PaaS","SaaS","On-premises"],1,["En PaaS el proveedor administra la infraestructura, el sistema operativo y la plataforma; el equipo solo desarrolla y despliega su aplicación. Elastic Beanstalk es un ejemplo.",["En IaaS el equipo tendría que administrar el sistema operativo y el software, justo lo que quiere evitar.","","En SaaS se usa un producto terminado; el equipo no desplegaría su propio código.","On-premises significa administrar todo en equipos propios."],"\"Solo me ocupo de mi código\" = PaaS. \"Solo lo uso\" = SaaS."],1],
    ["En Amazon RDS, ¿qué tareas son responsabilidad de AWS? (Elige DOS.)",["Aplicar parches al motor de base de datos","Crear las tablas y cargar los datos","Mantener el hardware donde corre la base de datos","Definir qué usuarios pueden acceder a la base de datos","Decidir si los datos se cifran"],[0,2],["RDS es un servicio administrado: AWS se encarga del hardware y del sistema operativo, y también de parchear el motor de base de datos. Por eso estas dos tareas son de AWS.",["","Las tablas y los datos son del cliente: AWS no decide qué guardas.","","Definir quién accede (usuarios y permisos) es responsabilidad del cliente.","Decidir si cifrar los datos y con qué claves lo decide el cliente; AWS solo ofrece las herramientas."],"En servicios administrados AWS hace más (parches, hardware), pero los datos, el acceso y el cifrado siguen siendo del cliente."],1],
    ["Una empresa ejecuta trabajos de análisis que pueden interrumpirse y reanudarse sin problema. ¿Qué opción de compra de EC2 es la más rentable?",["On-Demand","Instancias reservadas","Instancias de spot","Dedicated Hosts"],2,["Las instancias de spot usan capacidad sobrante de AWS con hasta 90 % de descuento sobre On-Demand. A cambio, AWS puede recuperarlas con 2 minutos de aviso. Como estos trabajos se pueden interrumpir y reanudar, esa desventaja no importa y Spot es la opción más barata.",["On-Demand no se interrumpe y no exige compromiso, pero pagas el precio completo: no es lo más rentable.","Las instancias reservadas dan hasta 72 % de descuento, pero exigen un compromiso de 1 o 3 años; convienen para cargas estables que corren todo el tiempo.","","Dedicated Hosts es un servidor físico completo solo para ti: la opción más cara, pensada para licencias o cumplimiento."],"\"Puede interrumpirse\" + \"más rentable\" = Spot."],2],
    ["Una base de datos corre en EC2 las 24 horas, todo el año, y la empresa no planea cambiarla en 3 años. ¿Qué opciones reducen más el costo? (Elige DOS.)",["On-Demand","Instancias de spot","Instancias reservadas","Savings Plans","Dedicated Instances"],[2,3],["Para una carga estable que corre 24/7 durante años, las Reserved Instances y los Savings Plans dan hasta 72 % de descuento a cambio de un compromiso de 1 o 3 años. Savings Plans además permite cambiar de tipo de instancia o región.",["On-Demand no tiene compromiso, pero es el precio completo: para algo que corre siempre, pagarías de más.","Spot es muy barato, pero AWS puede interrumpirla; una base de datos que debe estar siempre disponible no puede depender de eso.","","","Dedicated Instances corren en hardware no compartido con otros clientes; sirven por requisitos de aislamiento, no para ahorrar."],"\"Estable, 24/7, 1 o 3 años\" = Reserved Instances o Savings Plans."],2],
    ["Una aplicación necesita agregar instancias EC2 automáticamente cuando sube el tráfico y quitarlas cuando baja. ¿Qué servicio lo hace?",["Elastic Load Balancing","Amazon EC2 Auto Scaling","Amazon CloudWatch","AWS Lambda"],1,["EC2 Auto Scaling agrega instancias cuando sube la carga y las quita cuando baja, según los mínimos, máximos y políticas que definas. Además reemplaza las instancias que fallan.",["Elastic Load Balancing reparte el tráfico entre las instancias que ya existen, pero no crea ni elimina instancias.","","CloudWatch mide métricas y lanza alarmas (que Auto Scaling puede usar), pero no agrega instancias por sí mismo.","Lambda ejecuta código sin servidores; no administra la cantidad de instancias EC2."],"\"Agregar y quitar instancias según la demanda\" = Auto Scaling. \"Repartir tráfico\" = ELB."],2],
    ["Un pedido entra a una aplicación y debe esperar hasta que otro componente pueda procesarlo, aunque ese componente esté caído un rato. ¿Qué servicio desacopla los componentes?",["Amazon SNS","Amazon SQS","Elastic Load Balancing","Amazon Route 53"],1,["Amazon SQS es una cola de mensajes: el pedido queda guardado en la cola hasta que el otro componente pueda procesarlo, aunque esté caído un rato. Así las partes de la aplicación quedan desacopladas.",["SNS envía (push) un mensaje a muchos suscriptores al instante; si el receptor no está disponible, no es una cola donde el mensaje espere a ser procesado.","","Elastic Load Balancing reparte tráfico entre instancias sanas, pero no guarda los pedidos para procesarlos después.","Route 53 es el servicio de DNS: traduce nombres de dominio, no guarda mensajes."],"\"Desacoplar\" o \"que los mensajes esperen\" = SQS. \"Notificar a muchos a la vez\" = SNS."],2],
    ["Una empresa necesita instancias con mucha memoria RAM para una base de datos en memoria. ¿Qué familia de instancias EC2 debe elegir?",["Optimizadas para cómputo","Optimizadas para memoria","De uso general","Optimizadas para almacenamiento"],1,["Las instancias optimizadas para memoria están diseñadas para cargas que procesan grandes conjuntos de datos en memoria, como bases de datos en memoria o análisis en tiempo real.",["Las optimizadas para cómputo dan mucha CPU (videojuegos, modelado, procesamiento por lotes), no mucha RAM.","","Las de uso general equilibran CPU, memoria y red; sirven para servidores web, pero no son las mejores cuando se necesita mucha RAM.","Las optimizadas para almacenamiento dan mucho disco local rápido, no mucha memoria."],"Mucha RAM = optimizadas para memoria. Mucha CPU = cómputo. Mucho disco local = almacenamiento."],2],
    ["Una aplicación corre en varias instancias EC2 y necesita repartir el tráfico entre ellas y dejar de enviarlo a las que fallan. ¿Qué servicio usa?",["Amazon EC2 Auto Scaling","Elastic Load Balancing","Amazon SQS","Amazon CloudWatch"],1,["Elastic Load Balancing reparte el tráfico entre varias instancias (y varias AZ) y hace chequeos de salud para dejar de enviarlo a las que fallan.",["Auto Scaling agrega o quita instancias según la carga, pero no reparte el tráfico entre ellas.","","SQS es una cola de mensajes para desacoplar componentes; no distribuye tráfico web entre instancias.","CloudWatch monitorea métricas; no dirige tráfico."],"\"Repartir tráfico\" = ELB. \"Agregar o quitar instancias\" = Auto Scaling."],2],
    ["Cuando un cliente hace un pedido, la aplicación debe avisar al mismo tiempo por correo, por SMS y a una función Lambda. ¿Qué servicio usa?",["Amazon SQS","Amazon SNS","Elastic Load Balancing","Amazon EventBridge Scheduler"],1,["Amazon SNS funciona como publicar/suscribir: un solo mensaje llega al mismo tiempo a muchos suscriptores, como correo, SMS, Lambda o colas SQS.",["SQS guarda mensajes en una cola para que un consumidor los procese; no envía el mismo mensaje a varios destinos a la vez.","","ELB reparte tráfico entre instancias; no envía notificaciones.","EventBridge Scheduler programa tareas en horarios; no es la forma de enviar un mensaje a muchos suscriptores."],"\"Notificar a muchos a la vez\" = SNS (push). \"Cola\" = SQS (pull)."],2],
    ["Un equipo necesita una instancia EC2 durante unas horas para una prueba corta e impredecible que no puede interrumpirse, y no quiere ningún compromiso. ¿Qué opción de compra usa?",["Instancias de spot","On-Demand","Instancias reservadas","Savings Plans"],1,["On-Demand se paga por segundo u hora, sin compromiso y sin interrupciones. Es ideal para cargas cortas, impredecibles o pruebas.",["Spot es más barato, pero AWS puede interrumpirla; la prueba no puede interrumpirse.","","Las instancias reservadas exigen un compromiso de 1 o 3 años; no tiene sentido para unas horas.","Savings Plans también exige un compromiso de gasto de 1 o 3 años."],"\"Corto\", \"impredecible\" y \"sin compromiso\" = On-Demand."],2],
    ["Una empresa tiene licencias de software que se cobran por socket del servidor físico y necesita controlar en qué servidor corren sus instancias. ¿Qué opción de EC2 elige?",["Dedicated Hosts","Instancias de spot","On-Demand","Savings Plans"],0,["Con Dedicated Hosts tienes un servidor físico completo solo para ti y visibilidad de sus sockets y núcleos, lo que permite usar licencias por socket o por núcleo.",["","Las instancias de spot corren en hardware compartido y pueden interrumpirse; no dan control del servidor físico.","On-Demand corre en hardware compartido; no te da visibilidad de los sockets.","Savings Plans es un modelo de descuento, no un tipo de hardware dedicado."],"\"Licencias por socket o núcleo\" o \"servidor físico\" = Dedicated Hosts."],2],
    ["¿Qué formas existen para crear y administrar recursos de AWS? (Elige DOS.)",["La Consola de administración de AWS","La interfaz de línea de comandos (AWS CLI)","Amazon Route 53","AWS Artifact","Amazon Macie"],[0,1],["Puedes administrar AWS desde la Consola (interfaz web), desde la AWS CLI (comandos de texto), desde los SDK en tu código o con infraestructura como código (CloudFormation).",["","","Route 53 es un servicio de DNS, no una forma de administrar recursos.","Artifact es un portal de informes de cumplimiento.","Macie es un servicio que busca datos sensibles en S3."],"Formas de acceder a AWS: Consola, CLI, SDK e infraestructura como código."],2],
    ["Una empresa quiere ejecutar código cada vez que se sube una imagen a un bucket de S3, sin administrar servidores. ¿Qué servicio debe usar?",["Amazon EC2","AWS Lambda","Amazon Lightsail","AWS Batch"],1,["AWS Lambda ejecuta tu código en respuesta a eventos, como subir un archivo a S3, sin que aprovisiones ni administres servidores. Pagas solo por las solicitudes y el tiempo de ejecución.",["Con EC2 tendrías que mantener un servidor encendido esperando las subidas y administrarlo; no cumple \"sin administrar servidores\".","","Lightsail es un servidor virtual sencillo a precio fijo: sigue siendo un servidor que administras.","AWS Batch ejecuta grandes cantidades de trabajos por lotes; no está pensado para reaccionar a cada evento de S3."],"\"Ejecutar código cuando ocurre algo\" + \"sin servidores\" = Lambda."],3],
    ["Un equipo quiere ejecutar contenedores sin aprovisionar ni administrar servidores EC2. ¿Qué servicio cumple este requisito?",["AWS Fargate","Amazon ECR","Amazon EC2","AWS Elastic Beanstalk"],0,["AWS Fargate es el motor serverless para contenedores: corre los contenedores de ECS o EKS sin que tengas que aprovisionar ni administrar instancias EC2.",["","Amazon ECR es el registro donde guardas las imágenes de contenedor; no las ejecuta.","Con EC2 tendrías que administrar los servidores donde corren los contenedores, justo lo que se quiere evitar.","Elastic Beanstalk despliega aplicaciones creando instancias EC2 por ti, pero esas instancias siguen existiendo en tu cuenta."],"\"Contenedores sin administrar servidores\" = Fargate."],3],
    ["Una empresa ya usa Kubernetes en su data center y quiere un servicio administrado en AWS que use la misma tecnología. ¿Cuál elige?",["Amazon ECS","Amazon EKS","AWS Lambda","Amazon Lightsail"],1,["Amazon EKS es Kubernetes administrado por AWS: la empresa puede seguir usando las mismas herramientas y configuraciones de Kubernetes que ya conoce.",["Amazon ECS es el orquestador de contenedores propio de AWS; no es Kubernetes.","","Lambda ejecuta funciones sin servidores; no ejecuta clústeres de Kubernetes.","Lightsail ofrece servidores virtuales sencillos; no es un servicio de Kubernetes."],"\"Kubernetes\" = EKS. Orquestador de contenedores propio de AWS = ECS."],3],
    ["¿Cuáles son características de AWS Lambda? (Elige DOS.)",["Se paga por el tiempo de ejecución del código","Hay que parchear el sistema operativo","Escala automáticamente según las solicitudes","Cada ejecución puede durar varios días","Requiere elegir un tipo de instancia"],[0,2],["Con Lambda pagas por la cantidad de solicitudes y por el tiempo que tu código se ejecuta (en milisegundos), y el servicio escala automáticamente según las solicitudes que lleguen.",["","En Lambda no hay sistema operativo que parchear: AWS administra toda la infraestructura.","","Cada ejecución de Lambda dura como máximo 15 minutos; para procesos largos se usan otras opciones (EC2, Batch, Fargate).","En Lambda no eliges tipo de instancia; solo configuras la memoria de la función."],"Lambda: pagas por ejecución, escala sola, máximo 15 minutos por ejecución."],3],
    ["Un desarrollador quiere subir el código de su aplicación web y que AWS cree las instancias, el balanceador y el escalado automáticamente. ¿Qué servicio usa?",["AWS CloudFormation","AWS Elastic Beanstalk","Amazon EKS","AWS Outposts"],1,["Elastic Beanstalk toma tu código y crea por ti el entorno completo: instancias EC2, balanceador de carga, escalado automático y monitoreo. Tú sigues teniendo acceso a esos recursos si los necesitas.",["CloudFormation también crea recursos, pero tienes que escribir la plantilla con toda la infraestructura; no basta con subir el código.","","EKS ejecuta contenedores con Kubernetes; no crea un entorno completo a partir del código de una aplicación web.","Outposts lleva hardware de AWS a tu propio data center; no despliega aplicaciones."],"\"Subo el código y AWS crea todo\" = Elastic Beanstalk. \"Escribo una plantilla\" = CloudFormation."],3],
    ["Un emprendedor quiere publicar un sitio WordPress pequeño con un precio mensual fijo y fácil de configurar. ¿Qué servicio es el más adecuado?",["Amazon EC2 con Auto Scaling","Amazon Lightsail","Amazon EKS","AWS Batch"],1,["Amazon Lightsail ofrece servidores virtuales sencillos con precio mensual fijo y plantillas listas (como WordPress). Es ideal para sitios pequeños y principiantes.",["EC2 con Auto Scaling es potente, pero más complejo de configurar y no tiene precio fijo mensual.","","EKS ejecuta contenedores con Kubernetes; es demasiado complejo para un WordPress pequeño.","Batch ejecuta trabajos por lotes; no aloja sitios web."],"\"Simple\" + \"precio mensual fijo\" = Lightsail."],3],
    ["Un equipo necesita un lugar en AWS para guardar y versionar las imágenes de sus contenedores Docker. ¿Qué servicio usa?",["Amazon ECS","Amazon ECR","AWS Fargate","Amazon S3 Glacier"],1,["Amazon ECR (Elastic Container Registry) es el registro administrado donde guardas, versionas y compartes tus imágenes de contenedor.",["ECS ejecuta y orquesta contenedores, pero las imágenes se guardan en un registro como ECR.","","Fargate ejecuta contenedores sin servidores; no es un registro de imágenes.","S3 Glacier es almacenamiento de archivo de bajo costo; no es un registro de contenedores."],"\"Guardar imágenes de contenedor\" = ECR."],3],
    ["Una empresa debe ejecutar miles de trabajos de procesamiento por lotes cada noche y quiere que AWS administre la capacidad de cómputo necesaria. ¿Qué servicio usa?",["AWS Batch","Amazon Lightsail","Amazon SNS","Elastic Load Balancing"],0,["AWS Batch planifica y ejecuta grandes cantidades de trabajos por lotes, y aprovisiona automáticamente la capacidad de cómputo que necesitan.",["","Lightsail ofrece servidores sencillos a precio fijo; no planifica miles de trabajos.","SNS envía notificaciones; no ejecuta trabajos.","ELB reparte tráfico; no ejecuta trabajos por lotes."],"\"Miles de trabajos por lotes\" = AWS Batch."],3],
    ["¿Qué significa que un servicio sea serverless?",["Que no existen servidores físicos","Que AWS administra los servidores y tú no los aprovisionas ni los parcheas","Que solo funciona con contenedores","Que siempre es más caro que EC2"],1,["Serverless no significa que no haya servidores: significa que tú no los ves ni los administras. AWS los aprovisiona, escala y parchea, y tú pagas por lo que se ejecuta.",["Los servidores existen; simplemente los administra AWS.","","Hay servicios serverless de contenedores (Fargate), pero también de funciones (Lambda), bases de datos (DynamoDB) y más.","No es necesariamente más caro: como no pagas por capacidad ociosa, a menudo resulta más barato."],"Serverless = no administras servidores y no pagas por capacidad ociosa."],3],
    ["¿Qué servicios de cómputo son serverless? (Elige DOS.)",["AWS Lambda","Amazon EC2","AWS Fargate","Amazon Lightsail","Amazon EC2 Dedicated Hosts"],[0,2],["Lambda ejecuta funciones y Fargate ejecuta contenedores, y en ambos casos AWS administra toda la infraestructura: no aprovisionas ni parcheas servidores.",["","Con EC2 administras tus servidores virtuales: eliges el sistema operativo y lo parcheas.","","Lightsail es un servidor virtual sencillo, pero sigue siendo un servidor que administras.","Dedicated Hosts es un servidor físico completo; es lo opuesto a serverless."],"Serverless de cómputo = Lambda y Fargate."],3],
    ["Una empresa debe guardar los datos de sus clientes dentro de su país por ley. ¿Qué factor es el más importante al elegir la región de AWS?",["Precio","Cercanía a los clientes","Cumplimiento de normas y leyes","Cantidad de servicios disponibles"],2,["Cuando la ley exige que los datos se queden en un país, ese requisito de cumplimiento manda sobre los demás: solo puedes elegir regiones dentro de ese país.",["El precio importa, pero no puede estar por encima de una obligación legal.","La cercanía reduce la latencia, pero si la región cercana está fuera del país no cumplirías la ley.","","La cantidad de servicios disponibles es un factor, pero nunca por encima de una obligación legal."],"Si la pregunta menciona leyes o soberanía de datos, el factor decisivo es el cumplimiento."],4],
    ["¿Qué es una zona de disponibilidad (AZ)?",["Un data center de un cliente conectado a AWS","Uno o más data centers aislados dentro de una región","Un punto de presencia para caché de contenido","Una región sin conexión a internet"],1,["Una zona de disponibilidad es uno o más data centers independientes dentro de una región, con su propia energía, red y refrigeración, conectados con las otras AZ por enlaces de baja latencia.",["Un data center del cliente conectado a AWS es parte de una arquitectura híbrida, no una AZ.","","Un punto de presencia para caché de contenido es una edge location, no una AZ.","Las regiones y sus AZ están conectadas a internet; esa definición no existe."],"Región = zona geográfica; AZ = data centers aislados dentro de la región; edge location = punto de caché."],4],
    ["Una aplicación debe seguir funcionando aunque falle un data center completo. ¿Cuál es la mejor práctica?",["Usar una instancia más grande","Desplegar en varias zonas de disponibilidad","Usar una sola AZ con backups diarios","Usar edge locations"],1,["Desplegar la aplicación en varias AZ hace que, si un data center completo falla, las otras AZ sigan atendiendo. Eso es alta disponibilidad, y es la buena práctica que recomienda AWS.",["Una instancia más grande sigue estando en un solo lugar: si ese data center falla, la aplicación se cae igual.","","Con una sola AZ, si esa zona falla la aplicación se detiene hasta restaurar los backups; eso es recuperación, no alta disponibilidad.","Las edge locations guardan contenido en caché cerca de los usuarios; no ejecutan tu aplicación principal."],"\"Que siga funcionando si falla un data center\" = varias AZ."],4],
    ["Una empresa quiere crear la misma infraestructura en varias regiones de forma repetible, usando plantillas. ¿Qué servicio usa?",["AWS CloudFormation","Amazon CloudWatch","AWS Config","AWS Systems Manager"],0,["CloudFormation es infraestructura como código: describes los recursos en una plantilla y AWS los crea igual cada vez, en cualquier región o cuenta.",["","CloudWatch monitorea métricas y logs; no crea infraestructura.","AWS Config registra la configuración de tus recursos y verifica si cumplen reglas, pero no los crea.","Systems Manager administra instancias que ya existen (parches, comandos); no crea infraestructura repetible a partir de plantillas."],"\"Plantillas\" o \"infraestructura como código\" = CloudFormation."],4],
    ["¿Qué servicios usan las edge locations de AWS? (Elige DOS.)",["Amazon CloudFront","Amazon RDS","Amazon Route 53","Amazon EBS","Amazon EFS"],[0,2],["CloudFront (red de entrega de contenido) y Route 53 (DNS) usan las edge locations para estar cerca de los usuarios y responder con baja latencia.",["","RDS es un servicio regional: tus bases de datos viven en las AZ de una región, no en edge locations.","","Un volumen EBS vive en una sola AZ; no usa edge locations.","EFS es un sistema de archivos regional; no usa edge locations."],"Edge locations = CloudFront y Route 53 (también Global Accelerator)."],4],
    ["¿Qué componente de la infraestructura global de AWS guarda copias en caché del contenido cerca de los usuarios para reducir la latencia?",["Región","Zona de disponibilidad","Edge location","AWS Outposts"],2,["Las edge locations son puntos de presencia en cientos de ciudades. CloudFront las usa para guardar copias en caché del contenido cerca de los usuarios.",["Una región es una zona geográfica con varias AZ donde corren tus recursos; no es un punto de caché cercano a cada usuario.","Una AZ es uno o más data centers dentro de una región; no es un punto de caché.","","Outposts lleva hardware de AWS a tu propio data center; no es una red de caché."],"\"Caché cerca del usuario\" = edge location (CloudFront)."],4],
    ["Una empresa necesita ejecutar servicios de AWS dentro de su propio data center por requisitos de baja latencia con sus sistemas locales. ¿Qué servicio usa?",["AWS Local Zones","AWS Outposts","AWS Wavelength","AWS Direct Connect"],1,["AWS Outposts son racks de hardware de AWS instalados en tu propio data center, que ejecutan servicios de AWS localmente y se administran igual que en la nube.",["Local Zones acercan AWS a una ciudad grande, pero siguen estando en instalaciones de AWS, no en tu data center.","","Wavelength pone infraestructura de AWS dentro de las redes 5G de operadores móviles.","Direct Connect es una conexión dedicada hacia AWS; no ejecuta servicios en tu data center."],"\"Servicios de AWS en mi propio data center\" = Outposts."],4],
    ["Los usuarios de una aplicación están principalmente en Brasil y ninguna ley obliga a guardar los datos en un país concreto. ¿Qué región conviene elegir para dar la menor latencia?",["La región con más servicios disponibles","La región más cercana a los usuarios","Siempre la región más barata","Cualquiera, porque la latencia no depende de la región"],1,["Sin restricciones legales, la cercanía es lo que más reduce la latencia: cuanto más cerca esté la región de los usuarios, más rápido responde la aplicación.",["Tener más servicios no reduce la latencia; solo importa si necesitas un servicio que la región cercana no tiene.","","El precio es un factor, pero la pregunta pide la menor latencia.","La latencia sí depende de la distancia entre los usuarios y la región."],"\"Menor latencia\" = la región más cercana a los usuarios (si la ley lo permite)."],4],
    ["¿Cuántas zonas de disponibilidad tiene, como mínimo, cada región de AWS?",["1","2","3","10"],2,["Cada región de AWS tiene como mínimo 3 zonas de disponibilidad, aisladas entre sí, para que puedas diseñar aplicaciones de alta disponibilidad.",["Con una sola AZ no podrías tener alta disponibilidad dentro de la región.","AWS diseña cada región con al menos 3 AZ, no 2.","","Algunas regiones tienen más de 3, pero el mínimo no es 10."],"Región = mínimo 3 AZ."],4],
    ["¿Qué factores se deben considerar al elegir una región de AWS? (Elige DOS.)",["El cumplimiento de las leyes sobre los datos","La cercanía a los usuarios","La cantidad de usuarios de IAM de la cuenta","El navegador que usan los clientes","Cuántos buckets de S3 ya tienes"],[0,1],["Los cuatro factores para elegir región son cumplimiento, cercanía a los usuarios, servicios disponibles y precio. De las opciones, cumplimiento y cercanía son dos de ellos.",["","","IAM es global; la cantidad de usuarios no depende de la región.","El navegador del cliente no influye en qué región elegir.","Los buckets existentes no son un criterio para elegir región."],"Elegir región: cumplimiento, cercanía, servicios disponibles y precio."],4],
    ["¿Qué componente permite que los recursos de una subred pública reciban tráfico de internet?",["NAT Gateway","Internet Gateway","Virtual Private Gateway","VPC Peering"],1,["El Internet Gateway conecta la VPC con internet. Una subred es pública precisamente porque tiene una ruta hacia un Internet Gateway, y así sus recursos pueden recibir tráfico de internet.",["El NAT Gateway solo deja que recursos de subredes privadas salgan a internet; no permite que el tráfico de internet entre.","","El Virtual Private Gateway es el extremo de AWS para una VPN o Direct Connect con tu red, no la conexión a internet.","VPC Peering conecta dos VPC entre sí de forma privada; no da acceso a internet."],"Entrar desde internet = Internet Gateway. Salir desde una subred privada = NAT Gateway."],5],
    ["Un administrador necesita bloquear una dirección IP específica para toda una subred. ¿Qué debe usar?",["Security group","Network ACL","Rol de IAM","AWS Shield"],1,["Las Network ACL trabajan a nivel de subred y admiten reglas de permitir y de denegar. Por eso son la forma de bloquear una IP específica para toda la subred.",["Los security groups trabajan a nivel de instancia y solo tienen reglas de permitir: no puedes denegar una IP con ellos.","","Un rol de IAM da permisos para usar servicios de AWS; no filtra tráfico de red por dirección IP.","Shield protege contra ataques DDoS; no sirve para escribir una regla que bloquee una IP en una subred."],"\"Denegar una IP\" o \"nivel de subred\" = NACL."],5],
    ["¿Qué afirmación describe correctamente a un security group?",["Es sin estado y trabaja a nivel de subred","Es con estado y trabaja a nivel de instancia","Solo admite reglas de denegar","Por defecto permite todo el tráfico entrante"],1,["Un security group es un firewall virtual a nivel de instancia y es con estado: si permites una solicitud de entrada, la respuesta sale automáticamente. Por defecto bloquea toda la entrada y permite toda la salida.",["Sin estado y a nivel de subred describe a una Network ACL, no a un security group.","","Es al revés: los security groups solo admiten reglas de permitir.","Por defecto un security group bloquea todo el tráfico entrante hasta que agregues reglas."],"Security group = instancia, con estado, solo permitir. NACL = subred, sin estado, permitir y denegar."],5],
    ["Una empresa necesita una conexión privada y dedicada entre su data center y AWS que no pase por internet. ¿Qué servicio usa?",["AWS Site-to-Site VPN","AWS Direct Connect","Amazon CloudFront","AWS Client VPN"],1,["Direct Connect es una línea física dedicada y privada entre tu data center y AWS que no pasa por internet. Da un ancho de banda alto y una latencia constante.",["La VPN Site-to-Site es privada porque va cifrada, pero viaja por internet: no cumple \"que no pase por internet\".","","CloudFront entrega contenido a los usuarios desde edge locations; no conecta tu data center con AWS.","Client VPN conecta a usuarios individuales desde sus equipos, y también viaja por internet."],"\"Dedicada\" o \"no pasa por internet\" = Direct Connect. \"Cifrada por internet\" = VPN."],5],
    ["Una empresa quiere que sus usuarios de todo el mundo descarguen videos con baja latencia y que su dominio se resuelva con DNS administrado. ¿Qué servicios usa? (Elige DOS.)",["Amazon CloudFront","Amazon Route 53","AWS Direct Connect","Amazon VPC","AWS Transit Gateway"],[0,1],["CloudFront guarda copias del contenido (como los videos) en edge locations cerca de los usuarios para que lo descarguen con baja latencia, y Route 53 es el DNS administrado que resuelve el dominio.",["","","Direct Connect conecta tu data center con AWS; no sirve para entregar contenido a usuarios de todo el mundo.","Una VPC es tu red privada en AWS; no acelera la entrega a usuarios ni resuelve DNS.","Transit Gateway conecta muchas VPC y redes on-premises entre sí; no entrega contenido a usuarios."],"Contenido rápido para usuarios globales = CloudFront. DNS = Route 53."],5],
    ["Unas instancias en una subred privada necesitan descargar parches de internet, pero nadie desde internet debe poder iniciar conexiones hacia ellas. ¿Qué usa la empresa?",["Internet Gateway asociado a la subred privada","NAT Gateway","VPC Peering","Una Network ACL que permita todo"],1,["El NAT Gateway permite que los recursos de una subred privada salgan a internet (por ejemplo, para descargar parches) sin que nadie desde afuera pueda iniciar conexiones hacia ellos.",["Si la subred privada tuviera ruta al Internet Gateway, dejaría de ser privada y podría recibir tráfico de internet.","","VPC Peering conecta dos VPC entre sí; no da salida a internet.","Una NACL que permite todo no da salida a internet y además reduce la seguridad."],"\"Salir a internet desde una subred privada\" = NAT Gateway."],5],
    ["¿Dónde debe colocarse una base de datos que nunca debe ser accesible directamente desde internet?",["En una subred pública","En una subred privada","En una edge location","Detrás de un Internet Gateway"],1,["Una subred privada no tiene ruta directa a internet, así que los recursos que contiene (como bases de datos y servidores internos) no pueden ser alcanzados desde afuera.",["Una subred pública tiene ruta al Internet Gateway, así que sus recursos pueden ser alcanzados desde internet.","","Las edge locations son para caché de contenido; no alojan tus bases de datos.","El Internet Gateway es justamente la conexión con internet; ahí no quieres la base de datos."],"Bases de datos y servidores internos = subred privada."],5],
    ["Los empleados de una empresa trabajan desde sus casas y necesitan conectarse de forma segura a la VPC desde sus computadoras. ¿Qué servicio usan?",["AWS Site-to-Site VPN","AWS Client VPN","AWS Direct Connect","AWS Transit Gateway"],1,["AWS Client VPN permite que usuarios individuales se conecten de forma segura (cifrada) a la VPC desde sus propios equipos, estén donde estén.",["Site-to-Site VPN conecta una red completa (por ejemplo, la oficina) con la VPC, no a cada empleado desde su casa.","","Direct Connect es una línea dedicada entre un data center y AWS; no sirve para empleados en sus casas.","Transit Gateway conecta muchas VPC y redes; no da acceso a usuarios individuales."],"\"Usuarios individuales desde sus equipos\" = Client VPN. \"Red de la oficina\" = Site-to-Site VPN."],5],
    ["Una empresa tiene 30 VPC y varias redes on-premises, y quiere conectarlas todas a través de un concentrador central en vez de muchas conexiones punto a punto. ¿Qué servicio usa?",["VPC Peering","AWS Transit Gateway","NAT Gateway","Internet Gateway"],1,["AWS Transit Gateway funciona como un concentrador central: cada VPC y cada red on-premises se conecta una sola vez a él y todas quedan comunicadas.",["VPC Peering conecta pares de VPC uno a uno; con 30 VPC necesitarías cientos de conexiones.","","NAT Gateway da salida a internet a una subred privada; no conecta VPC entre sí.","Internet Gateway conecta una VPC con internet; no conecta VPC entre sí."],"\"Muchas VPC y redes con un concentrador\" = Transit Gateway."],5],
    ["¿Qué características tiene una Network ACL? (Elige DOS.)",["Trabaja a nivel de subred","Es con estado","Admite reglas de permitir y de denegar","Se aplica a una sola instancia","Se configura dentro del sistema operativo de la instancia"],[0,2],["Una Network ACL es un firewall a nivel de subred, sin estado, que admite reglas de permitir y de denegar.",["","Las NACL son sin estado: hay que permitir la entrada y la salida por separado. Los security groups son los que tienen estado.","","Las NACL se aplican a toda la subred; el firewall a nivel de instancia es el security group.","Se configura en la VPC, no dentro del sistema operativo."],"NACL = subred, sin estado, permitir y denegar."],5],
    ["Una aplicación necesita un disco persistente para una sola instancia EC2 que se conserve aunque la instancia se detenga. ¿Qué servicio usa?",["Almacén de instancias","Amazon EBS","Amazon S3 Glacier","Amazon EFS"],1,["Amazon EBS es almacenamiento en bloque persistente: funciona como el disco duro de una instancia EC2 y los datos se conservan aunque la detengas.",["El almacén de instancias es muy rápido, pero temporal: los datos se pierden al detener la instancia.","","S3 Glacier es almacenamiento de archivo para datos que casi no se consultan; no es un disco para una instancia.","EFS es un sistema de archivos compartido entre muchas instancias; para el disco de una sola instancia lo indicado es EBS."],"Disco de una instancia = EBS. Compartido entre muchas = EFS. Temporal = almacén de instancias."],6],
    ["Una empresa guarda registros que debe conservar 7 años por ley y casi nunca consulta. ¿Qué clase de almacenamiento es la más barata?",["S3 Standard","S3 Standard-IA","S3 Glacier Deep Archive","S3 Intelligent-Tiering"],2,["S3 Glacier Deep Archive es la clase de almacenamiento más barata de S3, pensada para datos que se guardan durante años y casi nunca se consultan. La recuperación tarda horas, lo cual no importa en este caso.",["S3 Standard es para datos de acceso frecuente; es la clase más cara para guardar.","Standard-IA es más barata que Standard, pero mucho más cara que Deep Archive para guardar datos durante años.","","Intelligent-Tiering es útil cuando no sabes cómo se accederá a los datos; aquí sabes que casi nunca se leen, así que Deep Archive sale más barato."],"\"Años\" + \"casi nunca se consultan\" + \"más barato\" = Glacier Deep Archive."],6],
    ["Cientos de instancias EC2 Linux necesitan leer y escribir en el mismo sistema de archivos a la vez. ¿Qué servicio usan?",["Amazon EBS","Amazon EFS","Almacén de instancias","Amazon S3 Glacier"],1,["Amazon EFS es un sistema de archivos compartido para Linux: miles de instancias pueden leer y escribir en él al mismo tiempo, desde varias AZ.",["Un volumen EBS normalmente se conecta a una sola instancia; no está pensado para que cientos lo compartan.","","El almacén de instancias es local de cada instancia y temporal; no se comparte.","S3 Glacier es almacenamiento de archivo; no se monta como sistema de archivos para leer y escribir a la vez."],"\"Muchas instancias, mismo sistema de archivos\" = EFS (FSx si es Windows)."],6],
    ["Una empresa no sabe con qué frecuencia se accederá a sus datos en S3 y quiere optimizar costos automáticamente. ¿Qué clase elige?",["S3 One Zone-IA","S3 Intelligent-Tiering","S3 Glacier Flexible Retrieval","S3 Standard"],1,["S3 Intelligent-Tiering mueve automáticamente cada objeto al nivel de acceso más barato según cómo se use, sin que tengas que conocer el patrón de acceso de antemano.",["One Zone-IA es más barata, pero guarda los datos en una sola AZ y cobra por recuperar; no se ajusta sola al uso.","","Glacier Flexible Retrieval es para archivo; si los datos se usan seguido, la recuperación sería lenta y cara.","S3 Standard sirve para datos de uso frecuente, pero no reduce costos si los datos dejan de usarse."],"\"Patrón de acceso desconocido o cambiante\" = Intelligent-Tiering."],6],
    ["Una empresa quiere que sus servidores locales guarden sus copias de seguridad en S3 de forma transparente. ¿Qué servicio híbrido usa?",["AWS Storage Gateway","Amazon FSx","AWS Snowball Edge","Amazon EFS"],0,["AWS Storage Gateway es un servicio híbrido: conecta los servidores on-premises con el almacenamiento de AWS, de modo que, por ejemplo, las copias de seguridad locales se guarden en S3 de forma transparente.",["","Amazon FSx ofrece sistemas de archivos administrados en AWS; no es el puente entre tus servidores locales y S3.","Snowball Edge es un dispositivo físico para migraciones puntuales de muchos datos, no para backups continuos.","EFS es un sistema de archivos en AWS; no está pensado como puente para los backups de servidores locales."],"\"On-premises + almacenamiento de AWS\" = Storage Gateway."],6],
    ["Una aplicación necesita un espacio de almacenamiento muy rápido para datos temporales, como cachés que se pueden regenerar, y no le importa perderlos al detener la instancia. ¿Qué opción es la más adecuada?",["Amazon EBS","Almacén de instancias","Amazon S3 Standard","Amazon EFS"],1,["El almacén de instancias es un disco físico del servidor anfitrión: muy rápido y sin costo adicional, pero temporal. Es ideal para cachés y datos temporales que se pueden regenerar.",["EBS es persistente y es la elección cuando no quieres perder los datos; aquí no hace falta pagar por eso.","","S3 es almacenamiento de objetos por red; no es el disco local más rápido para datos temporales.","EFS es un sistema de archivos compartido y persistente; no es lo más rápido para datos temporales de una instancia."],"\"Temporal\" + \"muy rápido\" = almacén de instancias."],6],
    ["Una empresa quiere que los objetos de S3 pasen automáticamente a Glacier 90 días después de crearse y se borren a los 5 años. ¿Qué función de S3 usa?",["Versionado de S3","Políticas de ciclo de vida de S3","Replicación entre regiones","Block Public Access"],1,["Las políticas de ciclo de vida de S3 definen reglas para mover objetos a clases más baratas o borrarlos automáticamente después de cierto tiempo.",["El versionado guarda versiones anteriores de los objetos; no los mueve entre clases.","","La replicación copia objetos a otra región; no los mueve a Glacier ni los borra.","Block Public Access bloquea el acceso público; no administra el ciclo de vida."],"\"Mover a otra clase o borrar después de X días\" = ciclo de vida de S3."],6],
    ["Una empresa quiere protegerse de borrados accidentales en S3 y poder recuperar versiones anteriores de sus archivos. ¿Qué debe activar?",["Versionado de S3","S3 Intelligent-Tiering","S3 Transfer Acceleration","La clase S3 One Zone-IA"],0,["Con el versionado, S3 guarda las versiones anteriores de cada objeto. Si alguien borra o sobrescribe un archivo, puedes recuperar la versión anterior.",["","Intelligent-Tiering optimiza costos según el uso; no protege contra borrados.","Transfer Acceleration acelera las subidas; no guarda versiones.","One Zone-IA es una clase más barata en una sola AZ; no protege contra borrados accidentales."],"\"Recuperar versiones anteriores\" o \"borrados accidentales\" = versionado."],6],
    ["Una empresa quiere replicar continuamente sus servidores on-premises a AWS para poder recuperarlos en minutos si su data center sufre un desastre. ¿Qué servicio usa?",["AWS Backup","AWS Elastic Disaster Recovery","AWS Storage Gateway","AWS Snowball Edge"],1,["AWS Elastic Disaster Recovery replica de forma continua los servidores (on-premises o en la nube) a AWS y permite levantarlos en minutos cuando ocurre un desastre.",["AWS Backup administra copias de seguridad, pero no replica servidores continuamente para levantarlos en minutos.","","Storage Gateway conecta almacenamiento local con AWS; no recupera servidores completos.","Snowball Edge transfiere datos sin conexión; no sirve para recuperación continua."],"\"Replicar servidores y recuperarlos en minutos\" = Elastic Disaster Recovery."],6],
    ["¿Qué afirmaciones sobre Amazon S3 son correctas? (Elige DOS.)",["Guarda objetos en contenedores llamados buckets","Es el disco de arranque de una instancia EC2","Ofrece una durabilidad de 99,999999999 % (11 nueves)","Guarda los datos en una sola zona de disponibilidad en la clase Standard","Requiere administrar los servidores de almacenamiento"],[0,2],["S3 es almacenamiento de objetos en buckets, con una durabilidad de 11 nueves porque copia los datos en varias AZ automáticamente.",["","El disco de arranque de una instancia es un volumen EBS (o almacén de instancias), no S3.","","S3 Standard guarda los datos en varias AZ; solo One Zone-IA usa una sola AZ.","S3 es administrado: no administras servidores de almacenamiento."],"S3 = objetos en buckets, 11 nueves de durabilidad, capacidad ilimitada."],6],
    ["Una empresa quiere una base de datos relacional en la que AWS se encargue de los parches, los backups y el hardware. ¿Qué servicio usa?",["Amazon RDS","Amazon DynamoDB","Una base de datos instalada en EC2","Amazon Redshift"],0,["Amazon RDS es una base de datos relacional administrada: AWS se encarga del hardware, de instalar y parchear el motor y de los backups automáticos. Tú administras los datos, los usuarios y las tablas.",["","DynamoDB es administrada, pero es NoSQL, no relacional.","Si instalas la base de datos en EC2, tú te encargas de los parches, los backups y el sistema operativo: lo contrario de lo que se pide.","Redshift es un data warehouse para analítica, no la base de datos relacional de una aplicación."],"\"Relacional + AWS hace las tareas operativas\" = RDS (o Aurora si piden más rendimiento)."],7],
    ["Una aplicación de juegos necesita guardar millones de puntajes con latencia de milisegundos a cualquier escala, sin servidores. ¿Qué servicio elige?",["Amazon Aurora","Amazon DynamoDB","Amazon RDS","Amazon Neptune"],1,["DynamoDB es una base de datos NoSQL clave-valor y serverless que mantiene latencias de milisegundos de un dígito a cualquier escala. Es ideal para millones de registros simples como puntajes.",["Aurora es relacional y de alto rendimiento, pero no es serverless por defecto ni está pensada para escalar a millones de escrituras clave-valor como DynamoDB.","","RDS es relacional y requiere elegir el tamaño de la instancia; no es la opción serverless a cualquier escala.","Neptune es una base de datos de grafos, para relaciones complejas, no para guardar puntajes."],"\"NoSQL\" + \"milisegundos a cualquier escala\" + \"serverless\" = DynamoDB."],7],
    ["Un equipo de negocio quiere analizar años de datos históricos de ventas con consultas complejas. ¿Qué servicio está diseñado para esto?",["Amazon DynamoDB","Amazon ElastiCache","Amazon Redshift","Amazon RDS"],2,["Amazon Redshift es un data warehouse: está diseñado para analítica y consultas complejas sobre grandes volúmenes de datos históricos.",["DynamoDB es rápida para operaciones simples por clave, no para consultas analíticas complejas sobre años de datos.","ElastiCache es una caché en memoria para lecturas repetidas, no para analizar históricos.","","RDS es para las transacciones del día a día; para analítica a gran escala lo indicado es Redshift."],"\"Analítica\", \"históricos\" o \"data warehouse\" = Redshift."],7],
    ["Una aplicación lee los mismos datos de la base de datos una y otra vez y la base está sobrecargada. ¿Qué servicio reduce esa carga?",["Amazon ElastiCache","Amazon S3","AWS DMS","Amazon Redshift"],0,["ElastiCache guarda en memoria los datos que se leen una y otra vez y responde en microsegundos, así la base de datos deja de recibir esas lecturas repetidas.",["","S3 es almacenamiento de objetos; no se pone delante de una base de datos para acelerar las lecturas.","DMS sirve para migrar bases de datos, no para reducir su carga.","Redshift es para analítica; no funciona como caché de una base de datos transaccional."],"\"Lecturas repetidas\" o \"caché\" = ElastiCache."],7],
    ["¿Cuáles son características de Amazon Aurora? (Elige DOS.)",["Es compatible con MySQL y PostgreSQL","Es una base de datos de grafos","Guarda varias copias de los datos en varias zonas de disponibilidad","Solo funciona on-premises","Es un servicio de caché en memoria"],[0,2],["Aurora es la base de datos relacional creada por AWS: es compatible con MySQL y PostgreSQL y guarda 6 copias de los datos en 3 zonas de disponibilidad.",["","Aurora es relacional; la base de datos de grafos de AWS es Neptune.","","Aurora es un servicio de AWS en la nube, no un producto para instalar on-premises.","Aurora es una base de datos; el servicio de caché en memoria es ElastiCache."],"Aurora = relacional, compatible con MySQL/PostgreSQL, alta disponibilidad con copias en 3 AZ."],7],
    ["Una empresa necesita que su base de datos RDS siga disponible si falla la zona de disponibilidad donde corre, con conmutación automática. ¿Qué configura?",["Réplicas de lectura","Un despliegue Multi-AZ","Amazon ElastiCache","Snapshots manuales"],1,["Con Multi-AZ, RDS mantiene una copia en espera en otra AZ y, si la principal falla, conmuta automáticamente a la copia.",["Las réplicas de lectura sirven para repartir lecturas y mejorar el rendimiento, no para la conmutación automática ante una falla.","","ElastiCache es una caché en memoria; no da alta disponibilidad a la base de datos.","Los snapshots permiten restaurar, pero no conmutan automáticamente; habría tiempo sin servicio."],"\"Alta disponibilidad de RDS\" = Multi-AZ. \"Mejorar lecturas\" = réplicas de lectura."],7],
    ["Una aplicación de noticias hace muchísimas más lecturas que escrituras y su base de datos RDS está lenta por las consultas de lectura. ¿Qué ayuda a repartir esa carga?",["Multi-AZ","Réplicas de lectura","Una instancia más pequeña","Mover los datos a S3 Glacier"],1,["Las réplicas de lectura son copias de la base de datos que atienden consultas de solo lectura, así se reparte la carga y mejora el rendimiento.",["Multi-AZ da alta disponibilidad, pero la copia en espera no atiende lecturas.","","Una instancia más pequeña empeoraría el rendimiento.","Glacier es para archivo de largo plazo; no puede atender consultas de una aplicación."],"\"Muchas lecturas\" en RDS = réplicas de lectura."],7],
    ["Una red social necesita guardar y consultar relaciones complejas entre usuarios, como amigos de amigos. ¿Qué base de datos está diseñada para esto?",["Amazon Neptune","Amazon Redshift","Amazon ElastiCache","Amazon RDS"],0,["Amazon Neptune es una base de datos de grafos, diseñada para relaciones complejas como redes sociales, recomendaciones o detección de fraude.",["","Redshift es un data warehouse para analítica, no para recorrer relaciones entre usuarios.","ElastiCache es una caché en memoria, no una base de grafos.","RDS es relacional; las consultas de relaciones de muchos niveles son lentas y complejas en tablas."],"\"Relaciones complejas\", \"redes sociales\" o \"grafos\" = Neptune."],7],
    ["Una empresa usa MongoDB y quiere una base de datos de documentos administrada y compatible en AWS. ¿Qué servicio elige?",["Amazon DocumentDB","Amazon Aurora","Amazon Neptune","Amazon Keyspaces"],0,["Amazon DocumentDB es una base de datos de documentos administrada y compatible con MongoDB.",["","Aurora es relacional, compatible con MySQL y PostgreSQL.","Neptune es una base de datos de grafos.","Keyspaces es compatible con Apache Cassandra, no con MongoDB."],"\"MongoDB\" = DocumentDB. \"Cassandra\" = Keyspaces."],7],
    ["¿Qué características tiene Amazon DynamoDB? (Elige DOS.)",["Es serverless","Es una base relacional con joins entre tablas","Ofrece latencia de milisegundos de un dígito a cualquier escala","Requiere elegir un motor como MySQL o PostgreSQL","Es un data warehouse"],[0,2],["DynamoDB es una base de datos NoSQL clave-valor, serverless, con latencia de milisegundos de un dígito a cualquier escala.",["","DynamoDB es NoSQL: no usa tablas relacionadas con joins como base de su diseño.","","Elegir motores como MySQL o PostgreSQL es propio de RDS o Aurora.","El data warehouse de AWS es Redshift."],"DynamoDB = NoSQL, serverless, milisegundos, cualquier escala."],7],
    ["Un equipo de científicos de datos quiere construir, entrenar y desplegar sus propios modelos de machine learning. ¿Qué servicio usa?",["Amazon Rekognition","Amazon SageMaker AI","Amazon Polly","Amazon QuickSight"],1,["Amazon SageMaker AI es la plataforma completa para construir, entrenar y desplegar tus propios modelos de machine learning.",["Rekognition es un servicio de IA ya entrenado para analizar imágenes y video; no sirve para entrenar tus propios modelos.","","Polly convierte texto en voz; es un servicio listo para usar.","QuickSight crea dashboards de inteligencia de negocios; no entrena modelos."],"\"Construir y entrenar tus propios modelos\" = SageMaker."],8],
    ["Una empresa quiere usar modelos fundacionales de distintos proveedores mediante una sola API para crear una aplicación de IA generativa. ¿Qué servicio usa?",["Amazon Bedrock","Amazon Comprehend","AWS Glue","Amazon Kinesis"],0,["Amazon Bedrock da acceso a modelos fundacionales de varias empresas mediante una sola API, sin administrar infraestructura. Es el servicio para crear aplicaciones de IA generativa.",["","Comprehend analiza texto (sentimiento, entidades); no ofrece modelos fundacionales de varios proveedores.","Glue prepara y transforma datos (ETL); no es un servicio de IA generativa.","Kinesis procesa datos en tiempo real; no ofrece modelos de IA."],"\"Modelos fundacionales\" o \"IA generativa por API\" = Bedrock."],8],
    ["Una empresa quiere consultar con SQL archivos de logs guardados en S3 sin cargarlos en una base de datos. ¿Qué servicio usa?",["Amazon Redshift","Amazon Athena","Amazon EMR","Amazon RDS"],1,["Amazon Athena hace consultas SQL directamente sobre los archivos guardados en S3, sin cargarlos en una base de datos y sin servidores. Pagas por los datos escaneados.",["Con Redshift tendrías que cargar los datos en el data warehouse primero (o usar funciones adicionales); no es lo más directo.","","EMR crea clústeres de big data (Hadoop, Spark) que debes configurar; es más complejo que una consulta SQL directa.","Con RDS tendrías que cargar los logs en una base de datos, justo lo que se quiere evitar."],"\"SQL sobre S3\" = Athena."],8],
    ["Una aplicación debe convertir el audio de llamadas en texto y luego detectar el sentimiento de ese texto. ¿Qué servicios usa? (Elige DOS.)",["Amazon Polly","Amazon Transcribe","Amazon Comprehend","Amazon Translate","Amazon Lex"],[1,2],["Amazon Transcribe convierte la voz en texto y Amazon Comprehend analiza ese texto para detectar el sentimiento.",["Polly hace lo contrario: convierte texto en voz.","","","Translate traduce texto entre idiomas; no detecta sentimiento ni transcribe audio.","Lex sirve para crear chatbots de voz o texto; no es la herramienta para transcribir llamadas grabadas."],"Voz→texto = Transcribe. Texto→voz = Polly. Sentimiento = Comprehend."],8],
    ["Una empresa necesita procesar en tiempo real los clics de su sitio web para detectar tendencias al instante. ¿Qué servicio usa para la ingesta?",["AWS Glue","Amazon Kinesis","Amazon QuickSight","AWS Snowball"],1,["Amazon Kinesis recoge y procesa datos de streaming en tiempo real, como los clics de un sitio web, para analizarlos al instante.",["Glue hace ETL sobre datos ya guardados; no es para ingesta en tiempo real.","","QuickSight visualiza datos en dashboards; no los recoge.","Snowball es un dispositivo físico para transferir datos sin conexión; es lo opuesto a tiempo real."],"\"Tiempo real\" o \"streaming\" = Kinesis."],8],
    ["Los empleados quieren hacer preguntas en lenguaje natural sobre los documentos y datos internos de la empresa y recibir respuestas con IA generativa. ¿Qué servicio usan?",["Amazon Q Business","Amazon Polly","Amazon Textract","AWS Glue"],0,["Amazon Q Business es un asistente de IA generativa que responde preguntas y resume información usando los datos y documentos de tu empresa.",["","Polly convierte texto en voz; no responde preguntas.","Textract extrae texto de documentos escaneados, pero no conversa ni responde preguntas.","Glue prepara y transforma datos; no es un asistente."],"\"Asistente de IA con los datos de la empresa\" = Amazon Q Business."],8],
    ["Una aplicación debe detectar rostros y objetos en las fotos que suben los usuarios, sin crear modelos propios. ¿Qué servicio usa?",["Amazon Rekognition","Amazon SageMaker AI","Amazon Comprehend","Amazon Transcribe"],0,["Amazon Rekognition es un servicio de IA ya entrenado que analiza imágenes y video para detectar rostros, objetos, texto o contenido inapropiado.",["","SageMaker sirve para crear tus propios modelos; la pregunta pide no crearlos.","Comprehend analiza texto, no imágenes.","Transcribe convierte voz en texto, no analiza imágenes."],"\"Imágenes\" o \"video\" = Rekognition."],8],
    ["El equipo de ventas quiere dashboards interactivos con los datos del negocio para compartirlos con la dirección. ¿Qué servicio usa?",["Amazon QuickSight","Amazon Athena","Amazon Kinesis","AWS Glue"],0,["Amazon QuickSight es el servicio de inteligencia de negocios (BI) de AWS para crear dashboards e informes interactivos.",["","Athena consulta datos con SQL, pero no crea dashboards para compartir.","Kinesis recoge datos en tiempo real; no los visualiza.","Glue prepara y transforma datos; no crea dashboards."],"\"Dashboards\" o \"BI\" = QuickSight."],8],
    ["Una empresa necesita descubrir sus datos en S3, crear un catálogo y transformarlos (ETL) sin administrar servidores. ¿Qué servicio usa?",["AWS Glue","Amazon Athena","Amazon Kinesis","Amazon Redshift"],0,["AWS Glue es un servicio ETL serverless: descubre los datos, los describe en su Data Catalog y los prepara y transforma.",["","Athena consulta datos con SQL (incluso usando el catálogo de Glue), pero no es la herramienta de ETL.","Kinesis es para datos en tiempo real, no para catalogar y transformar datos guardados.","Redshift es un data warehouse; guarda y analiza, pero no es el servicio de ETL serverless."],"\"ETL\" o \"catálogo de datos\" = Glue."],8],
    ["¿Qué servicios de IA de AWS se pueden usar directamente, sin construir ni entrenar modelos propios? (Elige DOS.)",["Amazon Translate","Amazon EC2","Amazon Polly","Amazon EMR","Amazon Redshift"],[0,2],["Translate (traducción) y Polly (texto a voz) son servicios de IA ya entrenados: los usas mediante una API sin saber de machine learning.",["","EC2 es un servicio de servidores virtuales, no de IA.","","EMR crea clústeres de big data; no es un servicio de IA listo para usar.","Redshift es un data warehouse, no un servicio de IA."],"Servicios de IA listos: Rekognition, Comprehend, Polly, Transcribe, Translate, Lex, Textract…"],8],
    ["Una instancia EC2 necesita leer objetos de un bucket de S3. ¿Cuál es la forma más segura de darle acceso?",["Guardar las claves de acceso de un usuario en la instancia","Asignar un rol de IAM a la instancia","Usar las credenciales del usuario root","Hacer público el bucket"],1,["Un rol de IAM asignado a la instancia le da credenciales temporales que AWS rota automáticamente, sin guardar claves en el servidor. Es la forma más segura de que un servicio acceda a otro.",["Guardar claves de acceso en la instancia es riesgoso: si alguien entra al servidor, puede robarlas, y no se rotan solas.","","Las credenciales de root dan acceso total a la cuenta; nunca deben usarse para esto.","Hacer público el bucket expone los datos a cualquiera en internet."],"\"Un servicio de AWS necesita acceder a otro\" = rol de IAM."],9],
    ["¿Cuáles son buenas prácticas para el usuario root? (Elige DOS.)",["Activar MFA","Usarlo para las tareas diarias","No crearle claves de acceso","Compartir su contraseña con el equipo de TI","Asignarle a un grupo de IAM"],[0,2],["Las buenas prácticas para root son activar MFA de inmediato y no crearle claves de acceso. Root tiene acceso total a la cuenta, así que hay que protegerlo y usarlo lo menos posible.",["","Root no debe usarse para las tareas diarias: para eso se crean usuarios o roles de IAM con los permisos justos.","","La contraseña de root nunca debe compartirse.","Root no se puede agregar a un grupo de IAM: es una identidad aparte con acceso total."],"Root: MFA, sin claves de acceso y solo para las tareas que únicamente root puede hacer."],9],
    ["Una empresa quiere protegerse contra ataques DDoS y tener un equipo de respuesta 24/7 y protección de costos. ¿Qué servicio contrata?",["AWS WAF","AWS Shield Advanced","Amazon GuardDuty","AWS Shield Standard"],1,["AWS Shield Advanced es la versión de pago de Shield: además de la protección DDoS ampliada, incluye un equipo de respuesta 24/7 y protección de costos (reembolsa el gasto extra por escalado durante un ataque).",["WAF filtra tráfico web malicioso (inyección SQL, XSS); no incluye un equipo de respuesta DDoS ni protección de costos.","","GuardDuty detecta amenazas en la cuenta analizando logs; no mitiga ataques DDoS.","Shield Standard es gratis y automático, pero no incluye el equipo de respuesta 24/7 ni la protección de costos."],"DDoS = Shield. Si piden equipo de respuesta o protección de costos = Shield Advanced."],9],
    ["Una empresa quiere detectar actividad sospechosa en su cuenta analizando los logs de CloudTrail, VPC y DNS. ¿Qué servicio usa?",["Amazon Inspector","Amazon GuardDuty","Amazon Macie","AWS Artifact"],1,["Amazon GuardDuty detecta amenazas de forma continua analizando los logs de CloudTrail, VPC Flow Logs y DNS con machine learning, por ejemplo accesos sospechosos o cuentas comprometidas.",["Inspector busca vulnerabilidades de software en instancias, contenedores y funciones; no analiza los logs de la cuenta en busca de actividad sospechosa.","","Macie busca datos sensibles en S3; no detecta actividad sospechosa en la cuenta.","Artifact es el portal de informes de cumplimiento de AWS; no detecta amenazas."],"\"Actividad sospechosa\" o \"amenazas\" = GuardDuty. \"Vulnerabilidades\" = Inspector."],9],
    ["Una empresa necesita crear y administrar las claves que usa para cifrar sus datos en reposo. ¿Qué servicio usa?",["AWS Secrets Manager","AWS KMS","AWS Certificate Manager","Amazon Macie"],1,["AWS KMS crea y administra las claves de cifrado y se integra con casi todos los servicios para cifrar datos en reposo.",["Secrets Manager guarda y rota contraseñas y secretos, no administra las claves de cifrado de tus datos.","","Certificate Manager emite certificados SSL/TLS para cifrar en tránsito (HTTPS), no claves para datos en reposo.","Macie encuentra datos sensibles en S3; no cifra datos ni administra claves."],"\"Claves de cifrado\" = KMS. \"Contraseñas que se rotan\" = Secrets Manager."],9],
    ["Diez desarrolladores necesitan los mismos permisos en AWS. ¿Cuál es la forma recomendada de asignarlos?",["Asignar la política a cada usuario por separado","Crear un grupo de IAM con la política y agregar a los usuarios","Compartir un solo usuario entre los diez","Darles las credenciales de root"],1,["La buena práctica es asignar permisos a grupos, no a cada usuario: creas un grupo de IAM con la política y agregas a los desarrolladores. Así es más fácil de administrar.",["Asignar la política uno por uno funciona, pero es difícil de mantener y propenso a errores.","","Compartir un usuario impide saber quién hizo cada acción y es una mala práctica.","Root nunca debe compartirse ni usarse para el trabajo diario."],"\"Permisos para un equipo\" = grupo de IAM."],9],
    ["¿Qué significa el principio de mínimo privilegio?",["Dar a cada usuario solo los permisos que necesita para su trabajo","Dar acceso de administrador a todos para evitar bloqueos","Usar el usuario root solo una vez al mes","Activar MFA solo para los administradores"],0,["Mínimo privilegio significa otorgar únicamente los permisos necesarios para hacer el trabajo, ni uno más. Así se reduce el daño si unas credenciales se ven comprometidas.",["","Dar acceso de administrador a todos es lo contrario del mínimo privilegio.","Usar root lo menos posible es una buena práctica, pero no es la definición de mínimo privilegio.","MFA debería usarse para todos; además, MFA es autenticación, no permisos."],"Mínimo privilegio = solo los permisos necesarios."],9],
    ["Una aplicación web recibe ataques de inyección SQL y de cross-site scripting (XSS). ¿Qué servicio filtra ese tráfico malicioso?",["AWS WAF","AWS Shield Standard","Amazon Inspector","AWS KMS"],0,["AWS WAF es un firewall de aplicaciones web: filtra solicitudes maliciosas en la capa 7, como inyección SQL o XSS, y también puede bloquear IPs o países.",["","Shield protege contra ataques DDoS, no contra inyección SQL o XSS.","Inspector busca vulnerabilidades en tus recursos; no filtra el tráfico entrante.","KMS administra claves de cifrado; no filtra tráfico."],"\"Inyección SQL\" o \"XSS\" = WAF. \"DDoS\" = Shield."],9],
    ["Una empresa quiere descubrir si sus buckets de S3 contienen datos personales, como números de tarjeta de crédito. ¿Qué servicio usa?",["Amazon Macie","Amazon GuardDuty","Amazon Inspector","AWS Config"],0,["Amazon Macie usa machine learning para encontrar y clasificar datos sensibles (datos personales, números de tarjeta) guardados en S3.",["","GuardDuty detecta actividad sospechosa en la cuenta; no clasifica el contenido de los archivos.","Inspector busca vulnerabilidades de software; no revisa datos dentro de S3.","AWS Config revisa la configuración de los recursos, no los datos que contienen."],"\"Datos personales o sensibles en S3\" = Macie."],9],
    ["Una empresa necesita guardar las contraseñas de sus bases de datos y rotarlas automáticamente, y también certificados SSL/TLS gratuitos para HTTPS. ¿Qué servicios usa? (Elige DOS.)",["AWS Secrets Manager","AWS Certificate Manager (ACM)","AWS KMS","AWS Shield","Amazon Inspector"],[0,1],["Secrets Manager guarda y rota automáticamente contraseñas y credenciales, y Certificate Manager emite y renueva certificados SSL/TLS gratuitos para HTTPS.",["","","KMS administra claves de cifrado; no guarda contraseñas ni emite certificados.","Shield protege contra DDoS.","Inspector busca vulnerabilidades."],"Contraseñas rotadas = Secrets Manager. Certificados HTTPS = ACM. Claves = KMS."],9],
    ["Un administrador quiere recibir una alerta cuando el uso de CPU de una instancia supere el 80 %. ¿Qué servicio usa?",["AWS CloudTrail","Amazon CloudWatch","AWS Config","AWS Trusted Advisor"],1,["Amazon CloudWatch mide métricas como el uso de CPU y permite crear alarmas que avisan (o activan acciones) cuando una métrica supera un umbral.",["CloudTrail registra quién hizo cada llamada a la API; no mide el uso de CPU.","","AWS Config registra la configuración de los recursos; no mide su rendimiento.","Trusted Advisor da recomendaciones de buenas prácticas; no envía alertas en tiempo real por el uso de CPU."],"\"Métricas\", \"alarmas\" o \"rendimiento\" = CloudWatch."],10],
    ["Un auditor necesita saber qué usuario borró un bucket de S3 y desde qué dirección IP. ¿Qué servicio tiene esta información?",["Amazon CloudWatch","AWS CloudTrail","AWS Health","AWS Budgets"],1,["AWS CloudTrail registra cada llamada a la API de la cuenta: quién la hizo, qué hizo, cuándo y desde qué dirección IP. Es la herramienta de auditoría para estas preguntas.",["CloudWatch mide métricas y logs de rendimiento; no registra qué usuario hizo cada acción.","","AWS Health informa de eventos de AWS que afectan tus recursos; no registra acciones de usuarios.","Budgets alerta sobre gastos; no registra acciones."],"\"Quién hizo qué\" = CloudTrail."],10],
    ["Una empresa necesita descargar los informes de cumplimiento de AWS (como SOC o ISO) para una auditoría. ¿Dónde los obtiene?",["AWS Audit Manager","AWS Artifact","AWS Config","AWS Organizations"],1,["AWS Artifact es el portal donde se descargan los informes de cumplimiento de AWS (SOC, ISO, PCI) y se aceptan acuerdos.",["Audit Manager recopila evidencia para auditar tu propio uso de AWS; no entrega los informes de AWS.","","AWS Config evalúa si tus recursos cumplen tus reglas; no da informes de terceros sobre AWS.","Organizations administra varias cuentas; no ofrece informes de cumplimiento."],"\"Informes de cumplimiento de AWS\" = Artifact. \"Auditar mi propio uso\" = Audit Manager."],10],
    ["Una empresa con muchas cuentas de AWS quiere impedir que algunas usen ciertos servicios, incluso sus administradores. ¿Qué usa?",["Políticas de IAM en cada usuario","Políticas de control de servicios (SCP) en AWS Organizations","Security groups","AWS Trusted Advisor"],1,["Las políticas de control de servicios (SCP) de AWS Organizations limitan los servicios y acciones que pueden usar las cuentas de la organización, incluso para sus administradores.",["Las políticas de IAM controlan a usuarios y roles dentro de una cuenta, pero un administrador de esa cuenta podría cambiarlas; no limitan la cuenta completa.","","Los security groups filtran tráfico de red; no restringen el uso de servicios.","Trusted Advisor da recomendaciones; no bloquea el uso de servicios."],"\"Varias cuentas\" + \"restringir servicios\" = SCP de Organizations."],10],
    ["¿Qué servicios ayudan a revisar si los recursos cumplen buenas prácticas o reglas? (Elige DOS.)",["AWS Config","AWS Trusted Advisor","Amazon Polly","AWS Snowball","Amazon Lightsail"],[0,1],["AWS Config evalúa la configuración de tus recursos contra las reglas que definas, y Trusted Advisor revisa la cuenta y da recomendaciones de buenas prácticas (costos, seguridad, rendimiento, tolerancia a fallos y límites).",["","","Polly convierte texto en voz; no revisa recursos.","Snowball transfiere datos sin conexión; no revisa configuraciones.","Lightsail es un servidor virtual sencillo; no audita recursos."],"Reglas propias = Config. Recomendaciones de AWS = Trusted Advisor."],10],
    ["Un administrador quiere saber si un mantenimiento programado de AWS afectará a sus instancias la próxima semana. ¿Dónde lo consulta?",["AWS Health Dashboard","AWS CloudTrail","AWS Budgets","AWS Artifact"],0,["AWS Health Dashboard muestra el estado de los servicios de AWS y avisos personalizados sobre eventos que afectan tus recursos, como mantenimientos programados.",["","CloudTrail registra las acciones en tu cuenta; no informa de eventos de AWS.","Budgets alerta sobre gastos.","Artifact ofrece informes de cumplimiento."],"\"Eventos de AWS que afectan mis recursos\" = AWS Health."],10],
    ["Un auditor necesita ver cómo estaba configurado un security group hace un mes y cuándo cambió. ¿Qué servicio guarda ese historial?",["AWS Config","Amazon CloudWatch","AWS Trusted Advisor","Amazon GuardDuty"],0,["AWS Config guarda el inventario y el historial de configuración de tus recursos, así puedes ver cómo estaban en cualquier momento y cuándo cambiaron.",["","CloudWatch guarda métricas y logs de rendimiento, no el historial de configuración.","Trusted Advisor da recomendaciones actuales, no el historial de cambios.","GuardDuty detecta amenazas; no guarda la configuración."],"\"Cómo estaba configurado\" = Config. \"Quién lo cambió\" = CloudTrail."],10],
    ["Una empresa quiere recomendaciones automáticas para eliminar recursos ociosos, cerrar puertos abiertos y no llegar a los límites de servicio. ¿Qué servicio usa?",["AWS Trusted Advisor","AWS Artifact","Amazon CloudWatch","AWS Organizations"],0,["Trusted Advisor revisa tu cuenta y da recomendaciones en cinco categorías: costos, rendimiento, seguridad, tolerancia a fallos y límites de servicio.",["","Artifact da informes de cumplimiento.","CloudWatch mide métricas y alarmas, pero no da recomendaciones de buenas prácticas.","Organizations administra varias cuentas."],"\"Recomendaciones de costo, seguridad y límites\" = Trusted Advisor."],10],
    ["Una empresa quiere configurar rápidamente un entorno de varias cuentas, seguro y con buenas prácticas de gobernanza ya aplicadas. ¿Qué servicio usa?",["AWS Control Tower","AWS Artifact","Amazon CloudWatch","AWS Health"],0,["AWS Control Tower configura y gobierna un entorno multicuenta siguiendo buenas prácticas, usando Organizations y reglas de control (guardrails).",["","Artifact da informes de cumplimiento; no configura cuentas.","CloudWatch monitorea; no configura un entorno multicuenta.","AWS Health informa de eventos de AWS."],"\"Entorno multicuenta con buenas prácticas\" = Control Tower."],10],
    ["¿Qué puede hacer Amazon CloudWatch? (Elige DOS.)",["Crear alarmas sobre métricas","Registrar quién hizo cada llamada a la API","Recopilar y consultar logs de aplicaciones","Descargar informes de cumplimiento","Bloquear ataques DDoS"],[0,2],["CloudWatch recopila métricas, permite crear alarmas sobre ellas y también recopila y consulta logs (CloudWatch Logs), además de dashboards.",["","Registrar quién hizo cada llamada a la API es tarea de CloudTrail.","","Los informes de cumplimiento se descargan en Artifact.","Los ataques DDoS los mitiga Shield."],"CloudWatch = métricas, alarmas, logs y dashboards."],10],
    ["Una empresa quiere estimar el costo mensual de una arquitectura nueva antes de construirla. ¿Qué herramienta usa?",["AWS Cost Explorer","AWS Pricing Calculator","AWS Budgets","AWS Cost and Usage Report"],1,["AWS Pricing Calculator estima el costo de una arquitectura antes de construirla: eliges los servicios y su configuración y te da el costo mensual estimado.",["Cost Explorer analiza el gasto que ya tuviste (y lo pronostica a partir de él); sin recursos creados no tiene datos.","","Budgets alerta cuando el gasto supera un límite; no estima arquitecturas nuevas.","Cost and Usage Report detalla el gasto real; no sirve antes de construir."],"\"Antes de construir\" o \"estimar\" = Pricing Calculator."],11],
    ["Una empresa quiere una alerta cuando el gasto previsto del mes supere 1.000 USD. ¿Qué servicio usa?",["AWS Budgets","AWS Cost Explorer","AWS Pricing Calculator","AWS Trusted Advisor"],0,["AWS Budgets te permite definir un presupuesto y te alerta cuando el gasto real o el pronosticado lo supera.",["","Cost Explorer analiza y pronostica el gasto, pero las alertas por superar un presupuesto se configuran en Budgets.","Pricing Calculator estima costos antes de construir; no envía alertas.","Trusted Advisor da recomendaciones para ahorrar, pero no alerta cuando superas un monto."],"\"Alerta si me paso de X\" = Budgets."],11],
    ["¿Qué plan de soporte es el más económico que ofrece soporte técnico 24/7 por teléfono y acceso a todas las comprobaciones de Trusted Advisor?",["Basic","Developer","Business","Enterprise"],2,["Business es el plan más económico que incluye soporte técnico 24/7 por teléfono, chat y correo, y acceso a todas las comprobaciones de Trusted Advisor.",["Basic es gratis, pero no incluye soporte técnico y solo tiene las comprobaciones básicas de Trusted Advisor.","Developer tiene soporte técnico por correo en horario laboral, no 24/7 por teléfono.","","Enterprise también lo incluye, pero es mucho más caro; la pregunta pide el más económico."],"\"24/7 más barato\" = Business. \"TAM designado\" = Enterprise."],11],
    ["¿Cuáles son beneficios de la facturación consolidada de AWS Organizations? (Elige DOS.)",["Una sola factura para varias cuentas","Descuentos por volumen combinando el uso de todas las cuentas","Soporte técnico gratuito 24/7","Cifrado automático de los datos","Instancias EC2 gratis"],[0,1],["La facturación consolidada de Organizations da una sola factura para todas las cuentas y suma el uso de todas para alcanzar descuentos por volumen. Además es gratis.",["","","La facturación consolidada no incluye soporte técnico; eso depende del plan de soporte.","No cifra datos; el cifrado se configura en cada servicio (por ejemplo, con KMS).","No regala instancias; solo combina el uso para que pagues menos por volumen."],"\"Una factura\" + \"descuento por volumen combinado\" = facturación consolidada."],11],
    ["Una empresa quiere comprar e implementar software de terceros que funciona en AWS. ¿Dónde lo busca?",["AWS Marketplace","AWS Artifact","AWS Partner Network","AWS Professional Services"],0,["AWS Marketplace es el catálogo donde se busca, compra e implementa software de terceros que funciona en AWS.",["","Artifact ofrece informes de cumplimiento; no vende software.","AWS Partner Network agrupa empresas consultoras y de tecnología que te ayudan, pero no es el catálogo para comprar software.","Professional Services es el equipo de expertos de AWS para proyectos; no vende software de terceros."],"\"Comprar software de terceros\" = Marketplace."],11],
    ["Una empresa quiere analizar cuánto gastó en cada servicio durante los últimos seis meses, con gráficos y filtros. ¿Qué herramienta usa?",["AWS Cost Explorer","AWS Pricing Calculator","AWS Budgets","AWS Marketplace"],0,["AWS Cost Explorer visualiza y analiza el gasto pasado con gráficos y filtros (por servicio, cuenta o etiqueta) y además pronostica el gasto futuro.",["","Pricing Calculator estima costos antes de construir, no analiza el gasto pasado.","Budgets alerta cuando se supera un presupuesto; no es para analizar meses de gasto.","Marketplace es para comprar software de terceros."],"\"Analizar el gasto pasado\" = Cost Explorer."],11],
    ["El equipo de finanzas necesita el informe de costos más detallado posible, hora a hora y por recurso, para analizarlo con Athena. ¿Qué usa?",["AWS Cost and Usage Report (CUR)","AWS Budgets","AWS Pricing Calculator","AWS Trusted Advisor"],0,["El Cost and Usage Report es el informe más detallado de costos y uso de AWS (por hora y por recurso) y se puede analizar con Athena o QuickSight.",["","Budgets alerta sobre gastos; no genera un informe detallado.","Pricing Calculator estima costos futuros.","Trusted Advisor da recomendaciones, no un informe detallado de costos."],"\"Lo más detallado\" = Cost and Usage Report."],11],
    ["Una empresa solo usa AWS para pruebas y desarrollo y quiere el plan de soporte más económico que incluya soporte técnico por correo. ¿Qué plan elige?",["Basic","Developer","Business","Enterprise On-Ramp"],1,["El plan Developer es el más económico con soporte técnico: atiende por correo en horario laboral y está pensado para pruebas y desarrollo.",["Basic es gratis, pero solo incluye soporte de cuenta y facturación, sin soporte técnico.","","Business ofrece soporte 24/7, pero es más caro de lo necesario para pruebas.","Enterprise On-Ramp es para cargas críticas y es mucho más caro."],"\"Pruebas y desarrollo\" + \"más barato con soporte técnico\" = Developer."],11],
    ["Una empresa busca una consultora certificada por AWS que la ayude a diseñar e implementar su migración. ¿Dónde la encuentra?",["AWS Marketplace","AWS Partner Network (APN)","AWS Artifact","AWS Budgets"],1,["AWS Partner Network agrupa empresas consultoras y de tecnología certificadas que ayudan a diseñar, migrar y operar en AWS.",["Marketplace es para comprar software de terceros, no para contratar consultoras.","","Artifact ofrece informes de cumplimiento.","Budgets alerta sobre gastos."],"\"Consultora o socio certificado\" = AWS Partner Network. \"Software\" = Marketplace."],11],
    ["¿Qué servicios no tienen un costo propio (solo pagas por los recursos que crean o usan)? (Elige DOS.)",["AWS IAM","AWS CloudFormation","Amazon EC2","Amazon RDS","NAT Gateway"],[0,1],["IAM es gratis y CloudFormation no cobra por sí mismo: solo pagas los recursos que crea con sus plantillas.",["","","EC2 se cobra por el tiempo que corren las instancias.","RDS se cobra por la instancia de base de datos y el almacenamiento.","El NAT Gateway se cobra por hora y por los datos procesados."],"Sin costo propio: IAM, VPC, CloudFormation, Auto Scaling, Elastic Beanstalk, Organizations."],11],
    ["Una empresa quiere mover una aplicación a EC2 rápidamente, sin cambiar su código. ¿Qué estrategia de migración usa?",["Refactor","Replatform","Rehost","Repurchase"],2,["Rehost (lift and shift) mueve la aplicación tal cual a la nube, normalmente a EC2, sin cambiar el código. Es la estrategia más rápida.",["Refactor rediseña la aplicación para la nube; es la más lenta y cambia mucho el código.","Replatform hace pequeños ajustes (por ejemplo, pasar la base a RDS); la pregunta pide no cambiar nada.","","Repurchase reemplaza la aplicación por otro producto, normalmente SaaS."],"\"Sin cambios\" o \"rápido\" = rehost."],12],
    ["Una empresa reemplaza su sistema de CRM propio por un producto SaaS. ¿Qué estrategia de migración es?",["Retain","Repurchase","Relocate","Rehost"],1,["Repurchase (drop and shop) reemplaza la aplicación actual por un producto distinto, normalmente SaaS, como cambiar un CRM propio por Salesforce.",["Retain es dejar la aplicación donde está por ahora, sin migrarla.","","Relocate mueve servidores virtuales (por ejemplo, VMware) a la nube sin cambiarlos; no los reemplaza por SaaS.","Rehost mueve la misma aplicación a EC2 sin cambios; no la reemplaza."],"\"Cambiar a un producto SaaS\" = repurchase."],12],
    ["Una empresa debe trasladar 500 TB de datos a AWS y su conexión a internet es lenta. ¿Cuál es la opción más práctica?",["AWS DataSync por internet","AWS Snowball Edge","AWS Transfer Family","Amazon S3 Transfer Acceleration"],1,["Con 500 TB y una conexión lenta, subir los datos por internet tardaría semanas o meses. AWS Snowball Edge es un dispositivo físico que AWS te envía, lo cargas y lo devuelves: es la forma más rápida.",["DataSync transfiere por la red; con una conexión lenta, 500 TB tardarían demasiado.","","Transfer Family es para SFTP/FTP por la red; tiene el mismo problema de la conexión lenta.","S3 Transfer Acceleration mejora las subidas usando edge locations, pero sigue dependiendo de tu conexión a internet."],"\"Muchos TB o PB\" + \"internet lento\" = Snow Family."],12],
    ["Una empresa quiere migrar su base de datos Oracle a Amazon Aurora mientras la base original sigue funcionando. ¿Qué servicios usa? (Elige DOS.)",["AWS Database Migration Service (DMS)","AWS Schema Conversion Tool (SCT)","Amazon Redshift","AWS Snowcone","AWS Artifact"],[0,1],["AWS DMS migra los datos mientras la base de datos original sigue funcionando, y AWS Schema Conversion Tool convierte el esquema cuando cambias de motor (de Oracle a Aurora).",["","","Redshift es un data warehouse; no es una herramienta de migración de bases de datos.","Snowcone es un dispositivo pequeño para transferir datos sin conexión; no mantiene la base en funcionamiento ni convierte esquemas.","Artifact da informes de cumplimiento; no migra datos."],"Migrar base en funcionamiento = DMS. Cambiar de motor = DMS + SCT."],12],
    ["¿Qué perspectivas del AWS Cloud Adoption Framework se enfocan en el negocio y las personas? (Elige DOS.)",["Negocio","Plataforma","Personas","Operaciones","Seguridad"],[0,2],["En el Cloud Adoption Framework, negocio, personas y gobernanza son las perspectivas de negocio. Plataforma, seguridad y operaciones son las técnicas.",["","Plataforma es técnica: trata del diseño de la arquitectura y la infraestructura.","","Operaciones es técnica: trata de que los servicios funcionen al nivel acordado.","Seguridad es técnica: trata de proteger datos y cargas de trabajo."],"CAF: negocio, personas y gobernanza (negocio); plataforma, seguridad y operaciones (técnicas)."],12],
    ["Una empresa mueve su aplicación a AWS y, de paso, cambia su base de datos propia por Amazon RDS, sin rediseñar la aplicación. ¿Qué estrategia de migración es?",["Rehost","Replatform","Refactor","Retire"],1,["Replatform (lift, tinker and shift) hace pequeños ajustes para aprovechar la nube, como pasar la base de datos a RDS, sin rediseñar la aplicación.",["Rehost movería todo tal cual, sin cambiar la base de datos.","","Refactor rediseña la aplicación (por ejemplo, a microservicios); aquí no se rediseña.","Retire es apagar aplicaciones que ya nadie usa."],"\"Pequeños ajustes\" (por ejemplo, pasar a RDS) = replatform."],12],
    ["Durante la evaluación de la migración, una empresa descubre aplicaciones que ya nadie usa. ¿Qué estrategia les corresponde?",["Retain","Retire","Relocate","Repurchase"],1,["Retire significa apagar las aplicaciones que ya no se usan. Así se ahorra y se reduce lo que hay que migrar.",["Retain es dejar las aplicaciones donde están por ahora, pero se siguen usando.","","Relocate mueve servidores virtuales a la nube sin cambiarlos; no tiene sentido para aplicaciones que nadie usa.","Repurchase reemplaza la aplicación por otro producto, normalmente SaaS."],"\"Ya nadie la usa\" = retire. \"Por ahora se queda\" = retain."],12],
    ["Una empresa decide rediseñar su aplicación monolítica en microservicios y funciones serverless para aprovechar al máximo la nube. ¿Qué estrategia es?",["Rehost","Replatform","Refactor","Relocate"],2,["Refactor (re-architect) rediseña la aplicación para la nube, por ejemplo con microservicios o serverless. Es la más costosa y lenta, pero la que más aprovecha la nube.",["Rehost mueve la aplicación sin cambios.","Replatform hace solo pequeños ajustes, no un rediseño.","","Relocate mueve servidores virtuales sin cambiar la aplicación."],"\"Rediseñar\", \"microservicios\" o \"serverless\" = refactor."],12],
    ["Una empresa necesita copiar y sincronizar regularmente millones de archivos desde su almacenamiento local (NAS) a Amazon S3 a través de la red. ¿Qué servicio usa?",["AWS DataSync","AWS Snowball Edge","AWS DMS","Amazon CloudFront"],0,["AWS DataSync copia y sincroniza grandes volúmenes de archivos por la red desde tu almacenamiento local a S3, EFS o FSx, de forma automatizada.",["","Snowball Edge es para transferencias sin conexión puntuales; aquí se necesita sincronizar regularmente por la red.","DMS migra bases de datos, no archivos de un NAS.","CloudFront entrega contenido a usuarios; no copia archivos a S3."],"\"Transferir o sincronizar archivos por la red\" = DataSync. \"Sin conexión\" = Snow Family."],12],
    ["¿Qué perspectivas del AWS Cloud Adoption Framework son técnicas? (Elige DOS.)",["Plataforma","Personas","Seguridad","Negocio","Gobernanza"],[0,2],["Las perspectivas técnicas del CAF son plataforma, seguridad y operaciones. Las de negocio son negocio, personas y gobernanza.",["","Personas es una perspectiva de negocio: capacitación, cultura y cambio organizacional.","","Negocio es una perspectiva de negocio: que la inversión en la nube apoye los objetivos.","Gobernanza es una perspectiva de negocio: riesgos, costos y programas."],"CAF técnico: plataforma, seguridad y operaciones."],12],
    ["¿Qué pilar del marco Well-Architected se enfoca en recuperarse de fallas y escalar para cumplir la demanda?",["Excelencia operativa","Fiabilidad","Optimización de costos","Sostenibilidad"],1,["El pilar de fiabilidad trata de que la carga de trabajo se recupere de las fallas automáticamente y escale para cumplir la demanda.",["Excelencia operativa trata de operar y monitorear bien y mejorar los procesos, no de recuperarse de fallas.","","Optimización de costos trata de no pagar de más.","Sostenibilidad trata de reducir el impacto ambiental."],"\"Recuperarse de fallas\" = fiabilidad."],13],
    ["Una empresa quiere minimizar el impacto ambiental de sus cargas de trabajo en la nube. ¿Qué pilar de Well-Architected aplica?",["Sostenibilidad","Seguridad","Eficiencia del rendimiento","Fiabilidad"],0,["El pilar de sostenibilidad busca minimizar el impacto ambiental: aprovechar al máximo los recursos y reducir el desperdicio.",["","Seguridad trata de proteger datos y sistemas.","Eficiencia del rendimiento trata de usar los recursos adecuados para la demanda, no del impacto ambiental.","Fiabilidad trata de recuperarse de fallas."],"\"Impacto ambiental\" = sostenibilidad."],13],
    ["¿Qué herramienta revisa gratis una arquitectura contra los seis pilares de Well-Architected?",["AWS Trusted Advisor","AWS Well-Architected Tool","AWS Config","Amazon Inspector"],1,["AWS Well-Architected Tool revisa gratis tu carga de trabajo contra las buenas prácticas de los seis pilares y te dice qué mejorar.",["Trusted Advisor revisa tu cuenta (costos, seguridad, límites), pero no hace la revisión por los seis pilares del marco.","","AWS Config evalúa la configuración contra tus reglas; no revisa la arquitectura por pilares.","Inspector busca vulnerabilidades de software; no revisa arquitecturas."],"\"Revisar la arquitectura contra los pilares\" = Well-Architected Tool."],13],
    ["Una fábrica quiere conectar miles de sensores y recibir sus datos en AWS. ¿Qué servicio usa?",["AWS IoT Core","Amazon Connect","Amazon WorkSpaces","AWS Ground Station"],0,["AWS IoT Core conecta y administra millones de dispositivos de Internet de las cosas, como sensores, y recibe sus datos en AWS.",["","Amazon Connect es un centro de contacto (call center); no conecta sensores.","WorkSpaces ofrece escritorios virtuales para empleados.","Ground Station sirve para comunicarse con satélites, no con sensores de una fábrica."],"\"Dispositivos\", \"sensores\" o \"IoT\" = IoT Core."],13],
    ["¿Cuáles son pilares del AWS Well-Architected Framework? (Elige DOS.)",["Excelencia operativa","Escalabilidad horizontal","Eficiencia del rendimiento","Alta disponibilidad","Migración"],[0,2],["Los seis pilares son excelencia operativa, seguridad, fiabilidad, eficiencia del rendimiento, optimización de costos y sostenibilidad. De las opciones, solo excelencia operativa y eficiencia del rendimiento son pilares.",["","La escalabilidad horizontal es una técnica que ayuda a varios pilares, pero no es un pilar.","","La alta disponibilidad es un objetivo del pilar de fiabilidad, pero no es un pilar en sí.","La migración no es un pilar; es un proceso que se ve en el Cloud Adoption Framework."],"Memoriza los 6 pilares: excelencia operativa, seguridad, fiabilidad, eficiencia del rendimiento, optimización de costos, sostenibilidad."],13],
    ["¿Qué pilar del marco Well-Architected recomienda apagar recursos ociosos y elegir el modelo de precios adecuado?",["Optimización de costos","Fiabilidad","Excelencia operativa","Seguridad"],0,["El pilar de optimización de costos busca no pagar por lo que no usas: apagar recursos ociosos, elegir el modelo de precios correcto y medir el gasto.",["","Fiabilidad trata de recuperarse de fallas y cumplir la demanda.","Excelencia operativa trata de operar y mejorar los procesos.","Seguridad trata de proteger datos y sistemas."],"\"No pagar de más\" = optimización de costos."],13],
    ["¿Qué pilar del marco Well-Architected incluye hacer cambios pequeños y frecuentes, automatizar con infraestructura como código y aprender de los errores?",["Excelencia operativa","Sostenibilidad","Eficiencia del rendimiento","Optimización de costos"],0,["El pilar de excelencia operativa trata de ejecutar y monitorear bien las cargas de trabajo: automatizar, hacer cambios pequeños y frecuentes y mejorar continuamente.",["","Sostenibilidad trata de reducir el impacto ambiental.","Eficiencia del rendimiento trata de usar los recursos adecuados para la demanda.","Optimización de costos trata de no pagar de más."],"\"Automatizar operaciones y mejorar procesos\" = excelencia operativa."],13],
    ["Una empresa quiere un centro de contacto (call center) en la nube para atender a sus clientes por teléfono y chat. ¿Qué servicio usa?",["Amazon Connect","Amazon SNS","Amazon WorkSpaces","AWS IoT Core"],0,["Amazon Connect es un centro de contacto en la nube que permite atender a clientes por voz y chat sin infraestructura propia.",["","SNS envía notificaciones; no es un call center.","WorkSpaces ofrece escritorios virtuales.","IoT Core conecta dispositivos."],"\"Call center\" o \"centro de contacto\" = Amazon Connect."],13],
    ["Una empresa quiere dar a sus empleados escritorios virtuales en la nube a los que se conecten desde cualquier equipo. ¿Qué servicio usa?",["Amazon WorkSpaces","Amazon Lightsail","AWS Amplify","Amazon Connect"],0,["Amazon WorkSpaces ofrece escritorios virtuales en la nube (Windows o Linux) a los que los empleados se conectan desde cualquier equipo.",["","Lightsail ofrece servidores virtuales sencillos, no escritorios para empleados.","Amplify sirve para crear y alojar aplicaciones web y móviles.","Connect es un centro de contacto."],"\"Escritorios virtuales\" = WorkSpaces."],13],
    ["¿Qué prácticas corresponden al pilar de seguridad del marco Well-Architected? (Elige DOS.)",["Aplicar el mínimo privilegio","Elegir el tipo de instancia adecuado","Cifrar los datos en reposo y en tránsito","Apagar recursos ociosos","Reducir el consumo de energía"],[0,2],["El pilar de seguridad incluye proteger identidades con mínimo privilegio, cifrar los datos, tener trazabilidad y aplicar seguridad en todas las capas.",["","Elegir el tipo de instancia adecuado corresponde a eficiencia del rendimiento.","","Apagar recursos ociosos corresponde a optimización de costos.","Reducir el consumo de energía corresponde a sostenibilidad."],"Seguridad: mínimo privilegio, cifrado, trazabilidad y seguridad en todas las capas."],13]
  ]
};
