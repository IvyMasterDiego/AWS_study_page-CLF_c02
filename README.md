# Cloud Practitioner CLF-C02 · Guía de estudio

**Ver la página:** https://ivymasterdiego.github.io/AWS_study_page-CLF_c02/

Página web para preparar el examen **AWS Certified Cloud Practitioner (CLF-C02)** en **español e inglés**. Funciona en móvil, tablet y escritorio, con tema claro u oscuro.

## Qué incluye

- **Plan:** plan de estudio por semanas y días, casillas de avance (se guardan en el navegador), explicación de cada tema, videos y enlaces oficiales.
- **Kit:** hoja de repaso con buscador, pares de servicios que se confunden, planes de soporte, glosario español–inglés y consejos para el día del examen.
- **Práctica:** preguntas estilo CLF-C02 con explicación.
- Cuenta regresiva hasta el examen, botón de tema claro/oscuro y botón de idioma (ES / EN). El idioma inicial es el del navegador y se recuerda.

## Estructura

```
index.html            Estructura de la página (los textos llevan data-i18n)
css/styles.css        Estilos y diseño responsivo
js/app.js             Lógica: pestañas, plan, avance, tema, buscador, práctica, cuenta regresiva
js/i18n.js            Idioma: detección, textos y cambio ES / EN
js/planner.js         Reparte los temas en días según la fecha, los días libres y el tiempo
js/data.js            Datos sin idioma: tiempo y prioridad de cada tema, videos
js/lang/es.js         Textos y contenido en español (temas, explicaciones, repaso, glosario, preguntas)
js/lang/en.js         Lo mismo en inglés, con las mismas claves
tools/check-lang.js   Comprueba que es.js y en.js tengan las mismas claves
```

No requiere instalación ni compilación.

## Uso local

Abre `index.html` en el navegador, o sirve la carpeta con un servidor sencillo:

```bash
python -m http.server 8000
```

Luego entra a `http://localhost:8000`.

## Publicar en GitHub Pages

1. Sube el repositorio a GitHub.
2. En **Settings → Pages**, elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`.
3. La página queda en https://ivymasterdiego.github.io/AWS_study_page-CLF_c02/

## Personalizar

- **Plan por fecha:** cada persona elige su fecha de examen, los días de la semana que no puede estudiar y cuánto tiempo tiene entre semana y en fin de semana. La guía reparte los temas en días reales y los agrupa según el tiempo disponible. Sin fecha, muestra el plan completo en orden ("Día 1, Día 2…"). Todo se guarda en el navegador.
- **Contenido y preguntas:** edita `js/lang/es.js` y `js/lang/en.js` (mismas claves en ambos). Después corre `node tools/check-lang.js` para confirmar que no falta nada en ningún idioma.
- **Tiempos:** cada tema tiene un tiempo estimado y una prioridad en `TOPIC_META` (`js/data.js`); si el tiempo no alcanza, se quitan primero los opcionales.
- **Agregar un idioma:** crea `js/lang/xx.js` con las mismas claves, cárgalo en `index.html` y súmalo a `SUPPORTED` en `js/i18n.js`.
- **Lógica del reparto:** `js/planner.js`.

## Fuentes

[AWS Certification](https://aws.amazon.com/certification/certified-cloud-practitioner/) · [Blog de AWS en español](https://aws.amazon.com/es/blogs/aws-spanish/examenes-practicos-gratuitos-y-100-en-espanol-para-que-obtenga-su-certificacion/) · [Tutorials Dojo](https://tutorialsdojo.com/aws-support-plans/)

## Licencia

[MIT](LICENSE) © 2026 IvyMasterDiego. AWS y los nombres de sus servicios son marcas de Amazon; este proyecto no está afiliado a AWS.
