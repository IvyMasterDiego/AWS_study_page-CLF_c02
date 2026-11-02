# Cloud Practitioner CLF-C02 · Guía de estudio

**Ver la página:** https://ivymasterdiego.github.io/AWS_study_page-CLF_c02/

Página web para preparar el examen **AWS Certified Cloud Practitioner (CLF-C02)** en español. Funciona en móvil, tablet y escritorio, con tema claro u oscuro.

## Qué incluye

- **Plan:** plan de estudio por semanas y días, casillas de avance (se guardan en el navegador), explicación de cada tema, videos y enlaces oficiales.
- **Kit:** hoja de repaso con buscador, pares de servicios que se confunden, planes de soporte, glosario español–inglés y consejos para el día del examen.
- **Práctica:** preguntas estilo CLF-C02 con explicación.
- Cuenta regresiva hasta el examen y botón de tema claro/oscuro.

## Estructura

| Archivo | Contenido |
|---|---|
| `index.html` | Estructura de la página |
| `styles.css` | Estilos y diseño responsivo |
| `planner.js` | Reparte los temas en días según la fecha, los días libres y el tiempo disponible |
| `app.js` | Lógica: pestañas, plan, avance, tema, buscador, práctica, cuenta regresiva |
| `data.js` | Datos: temas del plan, tiempos, explicaciones, enlaces, glosario y preguntas |

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
- **Contenido, tiempos y preguntas:** edita `data.js`. Cada tema tiene un tiempo estimado y una prioridad en `TOPIC_META`; si el tiempo no alcanza, se quitan primero los opcionales.
- **Lógica del reparto:** `planner.js`.

## Fuentes

[AWS Certification](https://aws.amazon.com/certification/certified-cloud-practitioner/) · [Blog de AWS en español](https://aws.amazon.com/es/blogs/aws-spanish/examenes-practicos-gratuitos-y-100-en-espanol-para-que-obtenga-su-certificacion/) · [Tutorials Dojo](https://tutorialsdojo.com/aws-support-plans/)

## Licencia

[MIT](LICENSE) © 2026 IvyMasterDiego. AWS y los nombres de sus servicios son marcas de Amazon; este proyecto no está afiliado a AWS.
