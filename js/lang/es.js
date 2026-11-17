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
    practiceLead: "Preguntas originales al estilo de las evaluaciones de cada módulo del curso AWS Cloud Practitioner Essentials. Elige un módulo o practica todas.",
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
    modPractice: i => `Practicar las preguntas del módulo ${i}`
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

  /* Preguntas originales por módulo: [enunciado, opciones, correcta (índice o lista si son varias), explicación, módulo] */
  q: [
    ["Una empresa quiere dejar de comprar servidores por adelantado y pagar solo por los recursos que consume cada mes. ¿Qué beneficio de la nube describe esto?",["Beneficiarse de economías de escala masivas","Cambiar gasto de capital por gasto variable","Ser global en minutos","Aumentar la velocidad y la agilidad"],1,"Pasar de comprar equipos (CapEx) a pagar por uso (OpEx) es cambiar gasto de capital por gasto variable.",1],
    ["Una empresa usa una aplicación de correo en el navegador y no administra servidores, sistema operativo ni software. ¿Qué modelo de servicio está usando?",["IaaS","PaaS","SaaS","On-premises"],2,"En SaaS usas un producto terminado; el proveedor administra todo lo técnico.",1],
    ["Según el modelo de responsabilidad compartida, ¿qué tareas son responsabilidad del cliente? (Elige DOS.)",["Mantener la seguridad física de los data centers","Configurar los security groups de sus instancias EC2","Administrar el hipervisor","Administrar usuarios y permisos de IAM","Reemplazar discos dañados en los servidores de AWS"],[1,3],"El cliente es responsable de la seguridad EN la nube: configuración de red, usuarios y permisos. Lo físico y el hipervisor son de AWS.",1],
    ["Una empresa mantiene sus sistemas antiguos en su propio data center y conecta nuevas aplicaciones que corren en AWS. ¿Qué modelo de despliegue usa?",["Nube (all-in)","Híbrido","On-premises","SaaS"],1,"Combinar recursos propios con recursos en la nube, conectados entre sí, es un despliegue híbrido.",1],
    ["Una tienda online necesita más servidores en Black Friday y menos el resto del año, sin pagar por capacidad ociosa. ¿Qué concepto describe esto?",["Elasticidad","Tolerancia a fallos","Alta disponibilidad","Economías de escala"],0,"La elasticidad ajusta los recursos a la demanda, hacia arriba y hacia abajo.",1],
    ["Una empresa ejecuta trabajos de análisis que pueden interrumpirse y reanudarse sin problema. ¿Qué opción de compra de EC2 es la más rentable?",["On-Demand","Instancias reservadas","Instancias de spot","Dedicated Hosts"],2,"Spot ofrece hasta 90 % de descuento a cambio de que AWS pueda interrumpir la instancia con 2 minutos de aviso.",2],
    ["Una base de datos corre en EC2 las 24 horas, todo el año, y la empresa no planea cambiarla en 3 años. ¿Qué opciones reducen más el costo? (Elige DOS.)",["On-Demand","Instancias de spot","Instancias reservadas","Savings Plans","Dedicated Instances"],[2,3],"Para cargas estables y predecibles, Reserved Instances y Savings Plans dan hasta 72 % de descuento a cambio de un compromiso de 1 o 3 años.",2],
    ["Una aplicación necesita agregar instancias EC2 automáticamente cuando sube el tráfico y quitarlas cuando baja. ¿Qué servicio lo hace?",["Elastic Load Balancing","Amazon EC2 Auto Scaling","Amazon CloudWatch","AWS Lambda"],1,"EC2 Auto Scaling agrega y quita instancias según la demanda. ELB reparte el tráfico, pero no crea instancias.",2],
    ["Un pedido entra a una aplicación y debe esperar hasta que otro componente pueda procesarlo, aunque ese componente esté caído un rato. ¿Qué servicio desacopla los componentes?",["Amazon SNS","Amazon SQS","Elastic Load Balancing","Amazon Route 53"],1,"SQS es una cola: los mensajes esperan hasta que el consumidor los procese.",2],
    ["Una empresa necesita instancias con mucha memoria RAM para una base de datos en memoria. ¿Qué familia de instancias EC2 debe elegir?",["Optimizadas para cómputo","Optimizadas para memoria","De uso general","Optimizadas para almacenamiento"],1,"Las instancias optimizadas para memoria están pensadas para cargas que procesan grandes conjuntos de datos en memoria.",2],
    ["Una empresa quiere ejecutar código cada vez que se sube una imagen a un bucket de S3, sin administrar servidores. ¿Qué servicio debe usar?",["Amazon EC2","AWS Lambda","Amazon Lightsail","AWS Batch"],1,"Lambda ejecuta código en respuesta a eventos, como subir un archivo a S3, sin servidores que administrar.",3],
    ["Un equipo quiere ejecutar contenedores sin aprovisionar ni administrar servidores EC2. ¿Qué servicio cumple este requisito?",["AWS Fargate","Amazon ECR","Amazon EC2","AWS Elastic Beanstalk"],0,"Fargate es el motor serverless para contenedores de ECS y EKS.",3],
    ["Una empresa ya usa Kubernetes en su data center y quiere un servicio administrado en AWS que use la misma tecnología. ¿Cuál elige?",["Amazon ECS","Amazon EKS","AWS Lambda","Amazon Lightsail"],1,"EKS es Kubernetes administrado. ECS es el orquestador propio de AWS.",3],
    ["¿Cuáles son características de AWS Lambda? (Elige DOS.)",["Se paga por el tiempo de ejecución del código","Hay que parchear el sistema operativo","Escala automáticamente según las solicitudes","Cada ejecución puede durar varios días","Requiere elegir un tipo de instancia"],[0,2],"Con Lambda pagas por solicitudes y milisegundos de ejecución, y escala solo. Cada ejecución dura como máximo 15 minutos.",3],
    ["Un desarrollador quiere subir el código de su aplicación web y que AWS cree las instancias, el balanceador y el escalado automáticamente. ¿Qué servicio usa?",["AWS CloudFormation","AWS Elastic Beanstalk","Amazon EKS","AWS Outposts"],1,"Elastic Beanstalk crea el entorno completo a partir de tu código, y aún puedes acceder a los recursos.",3],
    ["Una empresa debe guardar los datos de sus clientes dentro de su país por ley. ¿Qué factor es el más importante al elegir la región de AWS?",["Precio","Cercanía a los clientes","Cumplimiento de normas y leyes","Cantidad de servicios disponibles"],2,"El cumplimiento legal manda sobre los demás factores: si la ley lo exige, se elige esa región.",4],
    ["¿Qué es una zona de disponibilidad (AZ)?",["Un data center de un cliente conectado a AWS","Uno o más data centers aislados dentro de una región","Un punto de presencia para caché de contenido","Una región sin conexión a internet"],1,"Una AZ es uno o más data centers con energía y red propias, dentro de una región.",4],
    ["Una aplicación debe seguir funcionando aunque falle un data center completo. ¿Cuál es la mejor práctica?",["Usar una instancia más grande","Desplegar en varias zonas de disponibilidad","Usar una sola AZ con backups diarios","Usar edge locations"],1,"Distribuir la aplicación en varias AZ da alta disponibilidad frente a la caída de un data center.",4],
    ["Una empresa quiere crear la misma infraestructura en varias regiones de forma repetible, usando plantillas. ¿Qué servicio usa?",["AWS CloudFormation","Amazon CloudWatch","AWS Config","AWS Systems Manager"],0,"CloudFormation es infraestructura como código: crea los recursos a partir de plantillas.",4],
    ["¿Qué servicios usan las edge locations de AWS? (Elige DOS.)",["Amazon CloudFront","Amazon RDS","Amazon Route 53","Amazon EBS","Amazon EFS"],[0,2],"CloudFront (CDN) y Route 53 (DNS) usan la red de edge locations para estar cerca de los usuarios.",4],
    ["¿Qué componente permite que los recursos de una subred pública reciban tráfico de internet?",["NAT Gateway","Internet Gateway","Virtual Private Gateway","VPC Peering"],1,"El Internet Gateway conecta la VPC con internet. El NAT Gateway solo permite salir desde subredes privadas.",5],
    ["Un administrador necesita bloquear una dirección IP específica para toda una subred. ¿Qué debe usar?",["Security group","Network ACL","Rol de IAM","AWS Shield"],1,"Las NACL trabajan a nivel de subred y aceptan reglas de denegar. Los security groups solo permiten.",5],
    ["¿Qué afirmación describe correctamente a un security group?",["Es sin estado y trabaja a nivel de subred","Es con estado y trabaja a nivel de instancia","Solo admite reglas de denegar","Por defecto permite todo el tráfico entrante"],1,"El security group es con estado, trabaja a nivel de instancia y por defecto bloquea la entrada.",5],
    ["Una empresa necesita una conexión privada y dedicada entre su data center y AWS que no pase por internet. ¿Qué servicio usa?",["AWS Site-to-Site VPN","AWS Direct Connect","Amazon CloudFront","AWS Client VPN"],1,"Direct Connect es una línea física dedicada. La VPN también es privada, pero viaja cifrada por internet.",5],
    ["Una empresa quiere que sus usuarios de todo el mundo descarguen videos con baja latencia y que su dominio se resuelva con DNS administrado. ¿Qué servicios usa? (Elige DOS.)",["Amazon CloudFront","Amazon Route 53","AWS Direct Connect","Amazon VPC","AWS Transit Gateway"],[0,1],"CloudFront guarda el contenido en caché cerca de los usuarios y Route 53 es el DNS administrado.",5],
    ["Una aplicación necesita un disco persistente para una sola instancia EC2 que se conserve aunque la instancia se detenga. ¿Qué servicio usa?",["Almacén de instancias","Amazon EBS","Amazon S3 Glacier","Amazon EFS"],1,"EBS es almacenamiento en bloque persistente para una instancia. El almacén de instancias se borra al detenerla.",6],
    ["Una empresa guarda registros que debe conservar 7 años por ley y casi nunca consulta. ¿Qué clase de almacenamiento es la más barata?",["S3 Standard","S3 Standard-IA","S3 Glacier Deep Archive","S3 Intelligent-Tiering"],2,"Glacier Deep Archive es la clase más barata, pensada para archivo de largo plazo con recuperación en horas.",6],
    ["Cientos de instancias EC2 Linux necesitan leer y escribir en el mismo sistema de archivos a la vez. ¿Qué servicio usan?",["Amazon EBS","Amazon EFS","Almacén de instancias","Amazon S3 Glacier"],1,"EFS es un sistema de archivos compartido que muchas instancias usan al mismo tiempo.",6],
    ["Una empresa no sabe con qué frecuencia se accederá a sus datos en S3 y quiere optimizar costos automáticamente. ¿Qué clase elige?",["S3 One Zone-IA","S3 Intelligent-Tiering","S3 Glacier Flexible Retrieval","S3 Standard"],1,"Intelligent-Tiering mueve los objetos entre niveles según su uso, sin que tengas que conocer el patrón de acceso.",6],
    ["Una empresa quiere que sus servidores locales guarden sus copias de seguridad en S3 de forma transparente. ¿Qué servicio híbrido usa?",["AWS Storage Gateway","Amazon FSx","AWS Snowball Edge","Amazon EFS"],0,"Storage Gateway conecta el almacenamiento on-premises con el almacenamiento en AWS.",6],
    ["Una empresa quiere una base de datos relacional en la que AWS se encargue de los parches, los backups y el hardware. ¿Qué servicio usa?",["Amazon RDS","Amazon DynamoDB","Una base de datos instalada en EC2","Amazon Redshift"],0,"RDS es una base relacional administrada: AWS hace las tareas operativas.",7],
    ["Una aplicación de juegos necesita guardar millones de puntajes con latencia de milisegundos a cualquier escala, sin servidores. ¿Qué servicio elige?",["Amazon Aurora","Amazon DynamoDB","Amazon RDS","Amazon Neptune"],1,"DynamoDB es NoSQL clave-valor, serverless y con latencia de milisegundos a cualquier escala.",7],
    ["Un equipo de negocio quiere analizar años de datos históricos de ventas con consultas complejas. ¿Qué servicio está diseñado para esto?",["Amazon DynamoDB","Amazon ElastiCache","Amazon Redshift","Amazon RDS"],2,"Redshift es un data warehouse para analítica sobre grandes volúmenes de datos.",7],
    ["Una aplicación lee los mismos datos de la base de datos una y otra vez y la base está sobrecargada. ¿Qué servicio reduce esa carga?",["Amazon ElastiCache","Amazon S3","AWS DMS","Amazon Redshift"],0,"ElastiCache guarda en memoria los datos más leídos y responde en microsegundos.",7],
    ["¿Cuáles son características de Amazon Aurora? (Elige DOS.)",["Es compatible con MySQL y PostgreSQL","Es una base de datos de grafos","Guarda varias copias de los datos en varias zonas de disponibilidad","Solo funciona on-premises","Es un servicio de caché en memoria"],[0,2],"Aurora es relacional, compatible con MySQL y PostgreSQL, y guarda 6 copias en 3 AZ.",7],
    ["Un equipo de científicos de datos quiere construir, entrenar y desplegar sus propios modelos de machine learning. ¿Qué servicio usa?",["Amazon Rekognition","Amazon SageMaker AI","Amazon Polly","Amazon QuickSight"],1,"SageMaker es la plataforma para crear tus propios modelos. Los otros son servicios ya listos.",8],
    ["Una empresa quiere usar modelos fundacionales de distintos proveedores mediante una sola API para crear una aplicación de IA generativa. ¿Qué servicio usa?",["Amazon Bedrock","Amazon Comprehend","AWS Glue","Amazon Kinesis"],0,"Bedrock da acceso a modelos fundacionales mediante API, sin administrar infraestructura.",8],
    ["Una empresa quiere consultar con SQL archivos de logs guardados en S3 sin cargarlos en una base de datos. ¿Qué servicio usa?",["Amazon Redshift","Amazon Athena","Amazon EMR","Amazon RDS"],1,"Athena hace consultas SQL directamente sobre S3 y es serverless.",8],
    ["Una aplicación debe convertir el audio de llamadas en texto y luego detectar el sentimiento de ese texto. ¿Qué servicios usa? (Elige DOS.)",["Amazon Polly","Amazon Transcribe","Amazon Comprehend","Amazon Translate","Amazon Lex"],[1,2],"Transcribe convierte voz en texto; Comprehend analiza el sentimiento del texto.",8],
    ["Una empresa necesita procesar en tiempo real los clics de su sitio web para detectar tendencias al instante. ¿Qué servicio usa para la ingesta?",["AWS Glue","Amazon Kinesis","Amazon QuickSight","AWS Snowball"],1,"Kinesis recoge y procesa datos de streaming en tiempo real.",8],
    ["Una instancia EC2 necesita leer objetos de un bucket de S3. ¿Cuál es la forma más segura de darle acceso?",["Guardar las claves de acceso de un usuario en la instancia","Asignar un rol de IAM a la instancia","Usar las credenciales del usuario root","Hacer público el bucket"],1,"Un rol de IAM da credenciales temporales sin guardar claves en el servidor.",9],
    ["¿Cuáles son buenas prácticas para el usuario root? (Elige DOS.)",["Activar MFA","Usarlo para las tareas diarias","No crearle claves de acceso","Compartir su contraseña con el equipo de TI","Asignarle a un grupo de IAM"],[0,2],"Protege root con MFA y sin claves de acceso; usa IAM para el día a día.",9],
    ["Una empresa quiere protegerse contra ataques DDoS y tener un equipo de respuesta 24/7 y protección de costos. ¿Qué servicio contrata?",["AWS WAF","AWS Shield Advanced","Amazon GuardDuty","AWS Shield Standard"],1,"Shield Advanced agrega el equipo de respuesta DDoS y la protección de costos. Standard es gratis y básico.",9],
    ["Una empresa quiere detectar actividad sospechosa en su cuenta analizando los logs de CloudTrail, VPC y DNS. ¿Qué servicio usa?",["Amazon Inspector","Amazon GuardDuty","Amazon Macie","AWS Artifact"],1,"GuardDuty detecta amenazas analizando logs con machine learning.",9],
    ["Una empresa necesita crear y administrar las claves que usa para cifrar sus datos en reposo. ¿Qué servicio usa?",["AWS Secrets Manager","AWS KMS","AWS Certificate Manager","Amazon Macie"],1,"KMS crea y administra claves de cifrado. Secrets Manager guarda contraseñas y secretos.",9],
    ["Un administrador quiere recibir una alerta cuando el uso de CPU de una instancia supere el 80 %. ¿Qué servicio usa?",["AWS CloudTrail","Amazon CloudWatch","AWS Config","AWS Trusted Advisor"],1,"CloudWatch mide métricas y crea alarmas.",10],
    ["Un auditor necesita saber qué usuario borró un bucket de S3 y desde qué dirección IP. ¿Qué servicio tiene esta información?",["Amazon CloudWatch","AWS CloudTrail","AWS Health","AWS Budgets"],1,"CloudTrail registra cada llamada a la API: quién, qué, cuándo y desde dónde.",10],
    ["Una empresa necesita descargar los informes de cumplimiento de AWS (como SOC o ISO) para una auditoría. ¿Dónde los obtiene?",["AWS Audit Manager","AWS Artifact","AWS Config","AWS Organizations"],1,"Artifact es el portal de informes de cumplimiento de AWS.",10],
    ["Una empresa con muchas cuentas de AWS quiere impedir que algunas usen ciertos servicios, incluso sus administradores. ¿Qué usa?",["Políticas de IAM en cada usuario","Políticas de control de servicios (SCP) en AWS Organizations","Security groups","AWS Trusted Advisor"],1,"Las SCP de Organizations limitan lo que pueden hacer las cuentas, incluso sus administradores.",10],
    ["¿Qué servicios ayudan a revisar si los recursos cumplen buenas prácticas o reglas? (Elige DOS.)",["AWS Config","AWS Trusted Advisor","Amazon Polly","AWS Snowball","Amazon Lightsail"],[0,1],"Config evalúa la configuración contra tus reglas y Trusted Advisor da recomendaciones de buenas prácticas.",10],
    ["Una empresa quiere estimar el costo mensual de una arquitectura nueva antes de construirla. ¿Qué herramienta usa?",["AWS Cost Explorer","AWS Pricing Calculator","AWS Budgets","AWS Cost and Usage Report"],1,"Pricing Calculator estima costos antes de construir. Cost Explorer analiza el gasto pasado.",11],
    ["Una empresa quiere una alerta cuando el gasto previsto del mes supere 1.000 USD. ¿Qué servicio usa?",["AWS Budgets","AWS Cost Explorer","AWS Pricing Calculator","AWS Trusted Advisor"],0,"Budgets alerta cuando el gasto real o pronosticado supera el presupuesto.",11],
    ["¿Qué plan de soporte es el más económico que ofrece soporte técnico 24/7 por teléfono y acceso a todas las comprobaciones de Trusted Advisor?",["Basic","Developer","Business","Enterprise"],2,"Business es el plan más barato con soporte 24/7 y Trusted Advisor completo.",11],
    ["¿Cuáles son beneficios de la facturación consolidada de AWS Organizations? (Elige DOS.)",["Una sola factura para varias cuentas","Descuentos por volumen combinando el uso de todas las cuentas","Soporte técnico gratuito 24/7","Cifrado automático de los datos","Instancias EC2 gratis"],[0,1],"La facturación consolidada da una sola factura y suma el uso de todas las cuentas para alcanzar descuentos por volumen.",11],
    ["Una empresa quiere comprar e implementar software de terceros que funciona en AWS. ¿Dónde lo busca?",["AWS Marketplace","AWS Artifact","AWS Partner Network","AWS Professional Services"],0,"AWS Marketplace es el catálogo de software de terceros que corre en AWS.",11],
    ["Una empresa quiere mover una aplicación a EC2 rápidamente, sin cambiar su código. ¿Qué estrategia de migración usa?",["Refactor","Replatform","Rehost","Repurchase"],2,"Rehost (lift and shift) mueve la aplicación tal cual.",12],
    ["Una empresa reemplaza su sistema de CRM propio por un producto SaaS. ¿Qué estrategia de migración es?",["Retain","Repurchase","Relocate","Rehost"],1,"Repurchase (drop and shop) cambia a un producto distinto, normalmente SaaS.",12],
    ["Una empresa debe trasladar 500 TB de datos a AWS y su conexión a internet es lenta. ¿Cuál es la opción más práctica?",["AWS DataSync por internet","AWS Snowball Edge","AWS Transfer Family","Amazon S3 Transfer Acceleration"],1,"Con muchos datos y red lenta, los dispositivos físicos de Snow Family son la opción más rápida.",12],
    ["Una empresa quiere migrar su base de datos Oracle a Amazon Aurora mientras la base original sigue funcionando. ¿Qué servicios usa? (Elige DOS.)",["AWS Database Migration Service (DMS)","AWS Schema Conversion Tool (SCT)","Amazon Redshift","AWS Snowcone","AWS Artifact"],[0,1],"DMS migra los datos con la base en funcionamiento; SCT convierte el esquema al cambiar de motor.",12],
    ["¿Qué perspectivas del AWS Cloud Adoption Framework se enfocan en el negocio y las personas? (Elige DOS.)",["Negocio","Plataforma","Personas","Operaciones","Seguridad"],[0,2],"Negocio, personas y gobernanza son las perspectivas de negocio; plataforma, seguridad y operaciones son técnicas.",12],
    ["¿Qué pilar del marco Well-Architected se enfoca en recuperarse de fallas y escalar para cumplir la demanda?",["Excelencia operativa","Fiabilidad","Optimización de costos","Sostenibilidad"],1,"Fiabilidad: recuperarse de fallas automáticamente y cumplir la demanda.",13],
    ["Una empresa quiere minimizar el impacto ambiental de sus cargas de trabajo en la nube. ¿Qué pilar de Well-Architected aplica?",["Sostenibilidad","Seguridad","Eficiencia del rendimiento","Fiabilidad"],0,"El pilar de sostenibilidad busca reducir el impacto ambiental y el desperdicio de recursos.",13],
    ["¿Qué herramienta revisa gratis una arquitectura contra los seis pilares de Well-Architected?",["AWS Trusted Advisor","AWS Well-Architected Tool","AWS Config","Amazon Inspector"],1,"La Well-Architected Tool compara tu arquitectura con las buenas prácticas de los pilares.",13],
    ["Una fábrica quiere conectar miles de sensores y recibir sus datos en AWS. ¿Qué servicio usa?",["AWS IoT Core","Amazon Connect","Amazon WorkSpaces","AWS Ground Station"],0,"IoT Core conecta y administra dispositivos de Internet de las cosas.",13],
    ["¿Cuáles son pilares del AWS Well-Architected Framework? (Elige DOS.)",["Excelencia operativa","Escalabilidad horizontal","Eficiencia del rendimiento","Alta disponibilidad","Migración"],[0,2],"Los 6 pilares son: excelencia operativa, seguridad, fiabilidad, eficiencia del rendimiento, optimización de costos y sostenibilidad.",13]
  ]
};
