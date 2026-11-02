# Cloud Practitioner CLF-C02 · Guía de estudio

Página web para preparar el examen **AWS Certified Cloud Practitioner (CLF-C02)** en español. Funciona en móvil, tablet y escritorio, con tema claro u oscuro.

## Qué incluye

- **Plan:** bloques de estudio con calendario, casillas de avance (se guardan en el navegador), explicación de cada tema, videos y enlaces oficiales.
- **Kit:** hoja de repaso con buscador, pares de servicios que se confunden, planes de soporte, glosario español–inglés y consejos para el día del examen.
- **Práctica:** preguntas estilo CLF-C02 con explicación.
- Cuenta regresiva hasta el examen y botón de tema claro/oscuro.

## Estructura

| Archivo | Contenido |
|---|---|
| `index.html` | Estructura de la página |
| `styles.css` | Estilos y diseño responsivo |
| `app.js` | Lógica: pestañas, avance, tema, buscador, práctica, cuenta regresiva |
| `data.js` | Datos: calendario, explicaciones, enlaces, glosario y preguntas |

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
3. La página queda en `https://TU_USUARIO.github.io/TU_REPO/`.

## Personalizar

- **Fecha del examen:** cambia `new Date(2026, 10, 17)` en `app.js` (el mes empieza en 0) y el calendario en `data.js`.
- **Contenido y preguntas:** edita `data.js`.

## Fuentes

[AWS Certification](https://aws.amazon.com/certification/certified-cloud-practitioner/) · [Blog de AWS en español](https://aws.amazon.com/es/blogs/aws-spanish/examenes-practicos-gratuitos-y-100-en-espanol-para-que-obtenga-su-certificacion/) · [Tutorials Dojo](https://tutorialsdojo.com/aws-support-plans/)

Proyecto personal de estudio, no afiliado a AWS.
