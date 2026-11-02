/* ============================================================
   data.js — todos los datos del estudio CLF-C02
   Edita aquí para actualizar contenido sin tocar la lógica.
   ============================================================ */

const BLOCKS = [
  {d:"Jue 22 – Dom 25 oct", t:"Conceptos de la nube (Dominio 1)", items:[
    ["","Qué es cloud computing y sus 6 ventajas"],
    ["","Modelos de servicio (IaaS, PaaS, SaaS) y de despliegue"],
    ["","Regiones, zonas de disponibilidad, edge locations"],
    ["","Well-Architected, Cloud Adoption Framework, las 7 R, Snow Family, DMS"],
    ["Sáb 24","Cuenta Free Tier, MFA en root y alerta de facturación"],
    ["Dom 25","Set de preguntas del Dominio 1"]]},
  {d:"Lun 26 oct – Dom 1 nov", t:"Servicios de AWS (Dominio 3)", items:[
    ["Lun 26","Cómputo: EC2 y tipos de compra, Lambda, ECS/EKS, Fargate, Beanstalk, Lightsail, Auto Scaling, ELB"],
    ["Mar 27","Almacenamiento: S3 y sus clases, Glacier, EBS, EFS, Storage Gateway"],
    ["Mié 28","Redes: VPC, subredes, security groups vs. NACLs, Route 53, CloudFront, Direct Connect, VPN"],
    ["Jue 29","Bases de datos: RDS, Aurora, DynamoDB, ElastiCache, Redshift, DocumentDB, Neptune"],
    ["Vie 30","Analítica, IA e integración: Athena, Kinesis, Glue, QuickSight, SageMaker, SQS, SNS, EventBridge"],
    ["Sáb 31","Gestión (CloudWatch, CloudFormation, Systems Manager, Trusted Advisor) + EC2 micro y S3 en la consola"],
    ["Dom 1","Set de 40 preguntas, Dominios 1 y 3"]]},
  {d:"Lun 2 – Mié 4 nov", t:"Seguridad, facturación y soporte (Dominios 2 y 4)", items:[
    ["Lun 2","Responsabilidad compartida e IAM: usuarios, grupos, roles, políticas, mínimo privilegio, MFA"],
    ["Mar 3","Shield, WAF, GuardDuty, Inspector, Macie, KMS, Secrets Manager; CloudTrail, Config, Artifact, Audit Manager"],
    ["Mié 4","Pricing Calculator, Cost Explorer, Budgets, CUR, Organizations; planes de soporte"]]},
  {d:"Jue 5 – Dom 8 nov", t:"Exámenes de práctica", items:[
    ["Jue 5","Set de Seguridad + Facturación"],
    ["Sáb 7","Examen completo #1 cronometrado y revisión de errores"],
    ["Dom 8","Examen completo #2 y hoja de errores"]]},
  {d:"Lun 9 – Jue 12 nov", t:"Semana del examen", items:[
    ["","Examen completo #3 si rindes el 11 o 12 (meta: 80 % o más)"],
    ["","Repaso final: flashcards, pares que se confunden, hoja de errores"],
    ["","Día anterior: repaso ligero y dormir bien"]]}
];

const INFO = {
"0-0":`<h4>¿Qué es cloud computing?</h4>
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
<p class="trap"><b>Trampa típica:</b> "reducir recursos cuando baja la demanda" es <b>elasticidad</b>, no escalabilidad. "Pagar solo lo que usas" es pago por uso / gasto variable, no economías de escala.</p>`,

"0-1":`<h4>Modelos de servicio: ¿cuánto administras tú?</h4>
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
<h4>Formas de acceder a AWS</h4>
<ul>
<li><b>Consola de administración:</b> interfaz web, ideal para aprender y tareas puntuales.</li>
<li><b>CLI (línea de comandos):</b> comandos de texto, sirve para automatizar con scripts.</li>
<li><b>SDK:</b> librerías para usar AWS desde tu código (Python, Java, JavaScript…).</li>
<li><b>Infraestructura como código:</b> plantillas con CloudFormation o AWS CDK.</li>
</ul>
<p class="trap"><b>Trampa típica:</b> si la pregunta dice "la empresa quiere mantener parte en su data center", es <b>híbrido</b>. Si pide "solo subir el código sin administrar servidores", es <b>PaaS / Elastic Beanstalk</b>.</p>`,

"0-2":`<h4>Región</h4>
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
<p class="trap"><b>Trampa típica:</b> "alta disponibilidad" → varias <b>AZ</b>. "Recuperación ante desastres de toda una región" → varias <b>regiones</b>. "Baja latencia para usuarios globales con contenido estático" → <b>CloudFront / edge locations</b>.</p>`,

"0-3":`<h4>AWS Well-Architected Framework: 6 pilares</h4>
<ul>
<li><b>Excelencia operativa:</b> operar y monitorear bien, automatizar cambios, hacer cambios pequeños y frecuentes, aprender de los errores. Ej.: infraestructura como código con CloudFormation.</li>
<li><b>Seguridad:</b> proteger datos y sistemas: mínimo privilegio, cifrado, trazabilidad (CloudTrail), seguridad en todas las capas.</li>
<li><b>Fiabilidad:</b> recuperarse de fallas automáticamente y escalar para cumplir la demanda. Ej.: varias AZ, backups, Auto Scaling.</li>
<li><b>Eficiencia del rendimiento:</b> usar los recursos adecuados y ajustarlos a medida que cambia la demanda o salen nuevas tecnologías. Ej.: elegir el tipo de instancia correcto, usar serverless.</li>
<li><b>Optimización de costos:</b> no pagar por lo que no usas: elegir el modelo de precio correcto, apagar recursos ociosos, medir el gasto.</li>
<li><b>Sostenibilidad:</b> minimizar el impacto ambiental: maximizar el uso de los recursos y reducir el desperdicio.</li>
</ul>
<p>Herramienta: <b>AWS Well-Architected Tool</b>, revisa tu arquitectura contra estos pilares de forma gratuita.</p>
<h4>AWS Cloud Adoption Framework (CAF)</h4>
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
<p class="trap"><b>Trampa típica:</b> "mover sin cambios" = <b>rehost</b>; "cambiar a SaaS" = <b>repurchase</b>; "petabytes con internet lento" = <b>Snowball</b>; "evaluar la arquitectura" = <b>Well-Architected</b>; "transformación organizacional" = <b>CAF</b>.</p>`,

"0-4":`<h4>Crear la cuenta</h4>
<p>Entra a aws.amazon.com/free y regístrate con un correo, una tarjeta (para verificación) y un teléfono. La <b>capa gratuita</b> tiene 3 tipos de ofertas:</p>
<ul>
<li><b>Siempre gratis:</b> nunca vencen (ej.: 1 millón de solicitudes de Lambda al mes).</li>
<li><b>12 meses gratis:</b> desde que creas la cuenta (ej.: 750 horas al mes de EC2 t2/t3.micro).</li>
<li><b>Pruebas gratuitas:</b> por tiempo limitado al activar un servicio.</li>
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
<h4>Alerta de facturación</h4>
<p>En <b>AWS Budgets</b> crea un presupuesto de costo (ej.: 5 USD) con alerta por correo al 80 %. Si te pasas, te avisa. También puedes usar la plantilla "Zero spend budget", que avisa ante cualquier cobro.</p>
<p class="trap"><b>Trampa típica:</b> la primera acción tras crear la cuenta es <b>activar MFA en root</b>. Para el día a día, usa usuarios o roles de IAM.</p>`,

"0-5":`<p>Usa el <b>Official Practice Question Set</b> en Skill Builder (gratis, en español). Al terminar:</p>
<ul>
<li>Revisa <b>todas</b> las preguntas, no solo las falladas: también las que acertaste dudando.</li>
<li>Anota en una "hoja de errores" el concepto que resolvía cada una (ej.: "elasticidad ≠ escalabilidad").</li>
<li>Si una explicación te sorprende, vuelve al resumen de ese tema aquí mismo.</li>
</ul>
<p>Esa hoja de errores es lo que vas a repasar la semana del examen.</p>`,

"1-0":`<h4>Amazon EC2 (Elastic Compute Cloud)</h4>
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
<h4>Escalado y balanceo</h4>
<ul>
<li><b>Amazon EC2 Auto Scaling:</b> agrega instancias cuando sube la carga y las quita cuando baja (elasticidad). Defines mínimo, deseado y máximo. También reemplaza instancias que fallan.</li>
<li><b>Elastic Load Balancing (ELB):</b> reparte el tráfico entre varias instancias y AZ, y deja de enviar tráfico a las que fallan. Tipos: <b>Application Load Balancer</b> (HTTP/HTTPS, capa 7), <b>Network Load Balancer</b> (TCP/UDP, ultra rendimiento, capa 4), <b>Gateway Load Balancer</b> (para appliances de seguridad).</li>
</ul>
<p class="trap"><b>Trampa típica:</b> "puede interrumpirse" → <b>Spot</b>. "Estable, 24/7, 3 años" → <b>Reserved</b> o <b>Savings Plans</b>. "Flexibilidad para cambiar de familia de instancia" → <b>Savings Plans</b>. "Licencias por socket" → <b>Dedicated Hosts</b>. "Sin servidores, por evento" → <b>Lambda</b>. "Contenedores sin servidores" → <b>Fargate</b>.</p>`,

"1-1":`<h4>Amazon S3 (Simple Storage Service)</h4>
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
<p class="trap"><b>Trampa típica:</b> objetos/archivos estáticos → <b>S3</b>; disco de una sola instancia → <b>EBS</b>; compartido entre muchas instancias → <b>EFS</b>; archivado barato por años → <b>Glacier Deep Archive</b>; patrón de acceso desconocido → <b>Intelligent-Tiering</b>; datos temporales muy rápidos → <b>Instance Store</b>.</p>`,

"1-2":`<h4>Amazon VPC (Virtual Private Cloud)</h4>
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
<p class="trap"><b>Trampa típica:</b> "con estado, nivel instancia" → <b>security group</b>; "puede denegar una IP específica, nivel subred" → <b>NACL</b>; "conexión privada que no pasa por internet" → <b>Direct Connect</b>; "conexión cifrada rápida por internet" → <b>VPN</b>; "DNS" → <b>Route 53</b>; "caché cerca del usuario" → <b>CloudFront</b>.</p>`,

"1-3":`<h4>Relacional vs. NoSQL</h4>
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
<p class="trap"><b>Trampa típica:</b> "relacional administrada" → <b>RDS</b>; "relacional de alto rendimiento compatible con MySQL" → <b>Aurora</b>; "NoSQL, milisegundos, cualquier escala, serverless" → <b>DynamoDB</b>; "analítica/data warehouse" → <b>Redshift</b>; "caché" → <b>ElastiCache</b>; "MongoDB" → <b>DocumentDB</b>; "grafos/redes sociales" → <b>Neptune</b>; "alta disponibilidad de RDS" → <b>Multi-AZ</b>; "mejorar lecturas en RDS" → <b>réplicas de lectura</b>.</p>`,

"1-4":`<h4>Analítica</h4>
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
<h4>Machine learning e IA</h4>
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
<h4>Integración de aplicaciones</h4>
<ul>
<li><b>Amazon SQS:</b> <b>cola</b> de mensajes. Un componente deja mensajes y otro los procesa a su ritmo: así se <b>desacoplan</b> las partes de una app (si una se cae, los mensajes esperan en la cola). Modelo de "extracción" (pull).</li>
<li><b>Amazon SNS:</b> <b>publicar/suscribir</b>: un mensaje llega a muchos suscriptores a la vez (correo, SMS, Lambda, SQS). Modelo de "envío" (push).</li>
<li><b>Amazon EventBridge:</b> bus de eventos que conecta servicios de AWS, tus apps y SaaS; también programa tareas.</li>
<li><b>AWS Step Functions:</b> coordina pasos de un flujo de trabajo (ej.: varias Lambda en orden).</li>
<li><b>Amazon MQ:</b> broker de mensajes administrado (ActiveMQ, RabbitMQ) para migrar apps que ya los usan.</li>
<li><b>Amazon API Gateway:</b> crea y publica APIs que pueden llamar a Lambda u otros servicios.</li>
</ul>
<p class="trap"><b>Trampa típica:</b> "SQL sobre S3" → <b>Athena</b>; "tiempo real/streaming" → <b>Kinesis</b>; "dashboards" → <b>QuickSight</b>; "ETL" → <b>Glue</b>; "entrenar tus modelos" → <b>SageMaker</b>; "desacoplar con cola" → <b>SQS</b>; "notificar a muchos" → <b>SNS</b>; voz→texto <b>Transcribe</b>, texto→voz <b>Polly</b>.</p>`,

"1-5":`<h4>Monitoreo y gestión</h4>
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
<h4>Herramientas para desarrolladores</h4>
<ul>
<li><b>CodeCommit</b> (repositorio Git), <b>CodeBuild</b> (compila y prueba), <b>CodeDeploy</b> (despliega a EC2, Lambda u on-premises), <b>CodePipeline</b> (automatiza todo el flujo CI/CD).</li>
<li><b>AWS X-Ray:</b> rastrea solicitudes en apps distribuidas para encontrar cuellos de botella.</li>
<li><b>AWS CloudShell:</b> terminal en el navegador ya autenticada.</li>
<li><b>AWS AppConfig:</b> despliega configuraciones de forma segura.</li>
</ul>
<h4>Práctica en la consola</h4>
<p>Lanza una instancia EC2 t2/t3.micro con Amazon Linux, mira sus métricas en CloudWatch y termínala. Crea un bucket S3, sube un archivo, prueba el versionado y borra todo. Ver los servicios en la consola fija mucho los conceptos.</p>
<p class="trap"><b>Trampa típica:</b> "rendimiento/métricas/alarmas" → <b>CloudWatch</b>; "auditoría de acciones" → <b>CloudTrail</b>; "plantillas repetibles" → <b>CloudFormation</b>; "recomendaciones de costo y seguridad" → <b>Trusted Advisor</b>; "eventos de AWS que afectan mis recursos" → <b>Health Dashboard</b>; "parches en muchos servidores" → <b>Systems Manager</b>.</p>`,

"1-6":`<p>Haz 40 preguntas mezclando conceptos (Dominio 1) y servicios (Dominio 3). Al terminar:</p>
<ul>
<li>Si sacas menos de 70 %, repasa con la hoja "Si la pregunta dice… es…" de la pestaña Kit antes de seguir.</li>
<li>Para cada error, pregúntate: ¿no conocía el servicio, o confundí dos parecidos? Si confundiste dos, revisa la tabla de pares que se confunden.</li>
<li>Anota todo en tu hoja de errores.</li>
</ul>`,

"2-0":`<h4>Modelo de responsabilidad compartida (el tema más preguntado)</h4>
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
<h4>AWS IAM (Identity and Access Management)</h4>
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
<p class="trap"><b>Trampa típica:</b> seguridad física, hardware, hipervisor → <b>AWS</b>. Datos, cifrado, IAM, SO de EC2, security groups → <b>cliente</b>. "Una EC2 necesita acceder a S3" → <b>rol de IAM</b>, nunca claves en el servidor. "Permisos para un equipo" → <b>grupo</b>. "Login para clientes de mi app" → <b>Cognito</b>.</p>`,

"2-1":`<h4>Protección de red y aplicaciones</h4>
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
<p class="trap"><b>Trampa típica:</b> DDoS → <b>Shield</b>; SQL/XSS → <b>WAF</b>; amenazas/actividad sospechosa → <b>GuardDuty</b>; vulnerabilidades en EC2 → <b>Inspector</b>; datos personales en S3 → <b>Macie</b>; claves → <b>KMS</b>; contraseñas rotadas → <b>Secrets Manager</b>; "quién hizo" → <b>CloudTrail</b>; "cómo estaba configurado" → <b>Config</b>; informes de AWS → <b>Artifact</b>.</p>`,

"2-2":`<h4>Principios de precios de AWS</h4>
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
<h4>AWS Organizations</h4>
<p>Administra <b>varias cuentas</b> de AWS de forma centralizada:</p>
<ul>
<li><b>Facturación consolidada:</b> una sola factura para todas las cuentas y <b>descuentos por volumen combinados</b> (el uso de todas suma para llegar a precios más bajos). Gratis.</li>
<li><b>Unidades organizativas (OU):</b> agrupan cuentas (ej.: Producción, Desarrollo).</li>
<li><b>SCP (políticas de control de servicios):</b> limitan los servicios y acciones que pueden usar las cuentas, incluso a sus administradores.</li>
</ul>
<h4>AWS Marketplace y socios</h4>
<ul>
<li><b>AWS Marketplace:</b> catálogo para comprar software de terceros que corre en AWS.</li>
<li><b>AWS Partner Network (APN):</b> empresas consultoras y de tecnología certificadas que te ayudan.</li>
<li><b>AWS Professional Services:</b> equipo de expertos de AWS para proyectos grandes (ej.: migraciones).</li>
<li><b>AWS IQ:</b> conecta con expertos independientes certificados para trabajos puntuales.</li>
</ul>
<h4>Planes de soporte</h4>
<ul>
<li><b>Basic (gratis):</b> soporte de cuenta y facturación, documentación, foros (re:Post), Trusted Advisor con chequeos básicos, Health Dashboard. Sin soporte técnico.</li>
<li><b>Developer:</b> soporte técnico por <b>correo en horario laboral</b>; respuesta en &lt;24 h (general) y &lt;12 h (sistema afectado). Para pruebas y desarrollo.</li>
<li><b>Business:</b> soporte técnico <b>24/7</b> por teléfono, chat y correo; &lt;1 h si producción está caída; <b>todos los chequeos de Trusted Advisor</b>; soporte de software de terceros.</li>
<li><b>Enterprise On-Ramp:</b> &lt;30 min si un sistema crítico está caído; <b>grupo de TAMs</b> compartido; Concierge de facturación.</li>
<li><b>Enterprise:</b> &lt;<b>15 min</b> si un sistema crítico está caído; <b>TAM designado</b> (Technical Account Manager); <b>Concierge</b>; Infrastructure Event Management; revisiones de arquitectura.</li>
</ul>
<p>Nota: AWS renombró los planes en 2025 (Business Support+, Enterprise, Unified Operations), pero las preguntas del examen todavía usan los nombres de arriba.</p>
<p class="trap"><b>Trampa típica:</b> "antes de construir" → <b>Pricing Calculator</b>; "analizar gasto pasado" → <b>Cost Explorer</b>; "alerta si me paso" → <b>Budgets</b>; "lo más detallado" → <b>CUR</b>; "una factura y descuento por volumen" → <b>facturación consolidada</b>; "restringir servicios en varias cuentas" → <b>SCP</b>; "TAM dedicado" → <b>Enterprise</b>; "24/7 más barato" → <b>Business</b>.</p>`,

"3-0":`<p>Un set solo de seguridad y facturación, que suman <b>42 %</b> del examen. Antes de empezar, relee la tabla de responsabilidad compartida y los pares de servicios parecidos. Al revisar, fíjate si fallaste por no saber el servicio o por no leer bien la palabra clave del enunciado.</p>`,
"3-1":`<p>Haz 65 preguntas en 90 minutos, sin pausas, como en el examen real. Después revisa <b>cada</b> pregunta: las falladas y las que acertaste dudando. Anota el concepto en tu hoja de errores y repasa el resumen del tema aquí mismo.</p>`,
"3-2":`<p>Haz otro examen completo, distinto al anterior. Compara los resultados por dominio: si un tema sigue saliendo mal, ese es el que repasas la semana del examen.</p>`,
"4-0":`<p>La meta es sacar <b>80 % o más</b> de forma constante en los exámenes de práctica. Así el examen real, que pide alrededor de 70 %, queda con margen.</p>`,
"4-1":`<p>No estudies nada nuevo: repasa tu hoja de errores, la tabla de pares que se confunden y las listas (pilares, perspectivas, 7 R, planes de soporte).</p>`,
"4-2":`<p>Haz un repaso ligero de 30–45 minutos y duerme temprano. Si rindes online, prueba la cámara y el sistema el día antes y deja el escritorio despejado.</p>`
};

/* ID del video de freeCodeCamp en YouTube (todas las referencias usan este video) */
const VID_ID = "7HKot-brXFE";
const VID = "https://www.youtube.com/watch?v=" + VID_ID + "&t=";
const DOC = "https://aws.amazon.com/es/";

/* [etiqueta, segundos_inicio, tiempo_legible] */
const LINKS = {
"0-0":{v:[["Beneficios de la nube",5001,"1:23:21"],["Conceptos de la nube",530,"0:08:50"]],d:[["¿Qué es la computación en la nube?","what-is-cloud-computing/"]]},
"0-1":{v:[["Conceptos de la nube",530,"0:08:50"]],d:[["Tipos de computación en la nube","types-of-cloud-computing/"]]},
"0-2":{v:[["Infraestructura global",5214,"1:26:54"]],d:[["Infraestructura global de AWS","about-aws/global-infrastructure/"]]},
"0-3":{v:[["Well-Architected",40360,"11:12:40"],["TCO y migración",41662,"11:34:22"]],d:[["Well-Architected Framework","architecture/well-architected/"],["Cloud Adoption Framework","cloud-adoption-framework/"]]},
"0-4":{v:[["Primeros pasos",2663,"0:44:23"]],d:[["Capa gratuita de AWS","free/"]]},
"0-5":{d:[["AWS Skill Builder","https://skillbuilder.aws/"]]},
"1-0":{v:[["Cómputo",15629,"4:20:29"],["Modelos de precios de EC2",27721,"7:42:01"]],d:[["Precios de EC2","ec2/pricing/"]]},
"1-1":{v:[["Almacenamiento",18736,"5:12:16"]],d:[["Clases de almacenamiento de S3","s3/storage-classes/"]]},
"1-2":{v:[["Redes",23311,"6:28:31"]],d:[["Amazon VPC","vpc/"]]},
"1-3":{v:[["Bases de datos",21167,"5:52:47"]],d:[["Bases de datos en AWS","products/databases/"]]},
"1-4":{v:[["ML, IA y big data",37870,"10:31:10"],["Integración de aplicaciones",31562,"8:46:02"]],d:[["Analítica en AWS","products/analytics/"]]},
"1-5":{v:[["Herramientas de gestión",9332,"2:35:32"],["Logging",37037,"10:17:17"]],d:[["AWS CloudFormation","cloudformation/"]]},
"2-0":{v:[["Responsabilidad compartida",14492,"4:01:32"],["Identidad (IAM)",28860,"8:01:00"]],d:[["Modelo de responsabilidad compartida","compliance/shared-responsibility-model/"],["AWS IAM","iam/"]]},
"2-1":{v:[["Seguridad",45785,"12:43:05"],["Gobernanza",33232,"9:13:52"]],d:[["Seguridad en AWS","products/security/"]]},
"2-2":{v:[["Facturación, precios y soporte",42476,"11:47:56"]],d:[["Administración de costos","aws-cost-management/"],["Planes de soporte","premiumsupport/plans/"]]}
};

const SVC = [
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
];

const PAIRS = [
  ["CloudTrail · CloudWatch · Config","Quién hizo qué (API) · métricas y logs · historial de configuración"],
  ["Security group · NACL","Instancia, con estado, solo permitir · subred, sin estado, permite y deniega"],
  ["Shield · WAF","DDoS · tráfico web malicioso (SQL, XSS)"],
  ["GuardDuty · Inspector · Macie","Amenazas en la cuenta · vulnerabilidades · datos sensibles en S3"],
  ["Trusted Advisor · Cost Explorer · Budgets","Recomendaciones · gasto pasado · alertas de gasto futuro"],
  ["RDS · DynamoDB · Redshift","Relacional · NoSQL · data warehouse"],
  ["Reservadas · Savings Plans · Spot","Compromiso por instancia · compromiso de gasto flexible · capacidad sobrante interrumpible"],
  ["Artifact · Audit Manager","Informes de cumplimiento de AWS · auditar tu propio uso"]
];

const GLOSS = [
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
];

const Q = [
  ["Según el modelo de responsabilidad compartida, ¿qué es responsabilidad de AWS?",["Configurar los security groups","Aplicar parches al SO de una instancia EC2","La seguridad física de los data centers","Cifrar los datos del cliente en S3"],2,"AWS protege la nube (hardware e instalaciones). Parches, security groups y cifrado son tuyos."],
  ["Una empresa necesita una base de datos NoSQL con latencia de milisegundos a cualquier escala. ¿Qué servicio usar?",["Amazon RDS","Amazon DynamoDB","Amazon Redshift","Amazon Aurora"],1,"DynamoDB es NoSQL clave-valor. RDS y Aurora son relacionales; Redshift es data warehouse."],
  ["¿Qué servicio registra quién hizo cada llamada a la API en una cuenta?",["Amazon CloudWatch","AWS Config","AWS CloudTrail","Amazon GuardDuty"],2,"CloudTrail registra la actividad de la API. CloudWatch mide rendimiento y Config sigue la configuración."],
  ["Un trabajo por lotes puede interrumpirse y reanudarse sin problema. ¿Cuál es la opción de compra más rentable?",["On-Demand","Instancias reservadas","Instancias de spot","Dedicated Hosts"],2,"Spot da hasta 90 % de descuento y sirve cuando el trabajo tolera interrupciones."],
  ["¿Dónde descarga un auditor los informes de cumplimiento de AWS (ISO, SOC)?",["AWS Artifact","AWS Audit Manager","AWS Trusted Advisor","AWS Config"],0,"Artifact da los informes de cumplimiento de AWS. Audit Manager audita tu propio uso."],
  ["¿Qué característica permite reducir recursos automáticamente cuando baja la demanda?",["Alta disponibilidad","Elasticidad","Tolerancia a fallos","Agilidad"],1,"La elasticidad ajusta recursos según la demanda, hacia arriba y hacia abajo."],
  ["¿Qué servicio protege una aplicación web contra inyección SQL?",["AWS Shield","AWS WAF","Amazon Inspector","Amazon Macie"],1,"WAF filtra tráfico web malicioso. Shield es para DDoS."],
  ["¿Qué plan de soporte incluye un Technical Account Manager designado?",["Developer","Business","Enterprise On-Ramp","Enterprise"],3,"Enterprise tiene TAM designado; On-Ramp comparte un grupo de TAMs."],
  ["Una empresa quiere estimar el costo mensual de una arquitectura antes de construirla. ¿Qué usa?",["AWS Cost Explorer","AWS Budgets","AWS Pricing Calculator","AWS Cost and Usage Report"],2,"Pricing Calculator estima antes de construir; Cost Explorer analiza el gasto pasado."],
  ["¿Cuál es una buena práctica para el usuario root?",["Usarlo para las tareas diarias","Activar MFA y no crearle claves de acceso","Compartir su contraseña con TI","Desactivar CloudTrail para ahorrar"],1,"Protege root con MFA y sin claves de acceso; usa IAM para el día a día."],
  ["¿Qué ofrece varias zonas de disponibilidad a una aplicación?",["Menor costo","Alta disponibilidad","Cifrado automático","Menor latencia global"],1,"Distribuir en varias AZ mantiene la app funcionando si un data center falla."],
  ["¿Qué servicio entrega contenido estático con baja latencia a usuarios de todo el mundo?",["Amazon Route 53","AWS Direct Connect","Amazon CloudFront","Amazon VPC"],2,"CloudFront es la CDN de AWS y usa edge locations."],
  ["¿Qué pilar de Well-Architected trata de recuperarse de fallas y cumplir la demanda?",["Excelencia operativa","Fiabilidad","Eficiencia del rendimiento","Sostenibilidad"],1,"Fiabilidad: recuperarse de fallas y escalar para cumplir la demanda."],
  ["Una empresa quiere una alerta cuando su gasto mensual supere 500 USD. ¿Qué usa?",["AWS Budgets","AWS Cost Explorer","AWS Pricing Calculator","AWS Trusted Advisor"],0,"Budgets envía alertas cuando el gasto real o pronosticado supera un umbral."],
  ["Mover una aplicación a EC2 sin cambiar su código es la estrategia de migración…",["Refactor","Replatform","Rehost","Repurchase"],2,"Rehost (lift and shift) mueve la app tal cual."]
];
