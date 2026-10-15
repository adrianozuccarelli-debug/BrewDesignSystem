# BREW Design System

Sistema de diseño compartido de **Growlat App** (violeta) y **Growlat Conversations** (verde): tokens, tipografía y componentes sobre Vue 3, PrimeVue 4 y Tailwind CSS.

Sitio: https://adrianozuccarelli-debug.github.io/BrewDesignSystem/
Fuente de verdad: Figma, archivo **Growlat Design System**.

## Cómo está armado

El sitio es estático y no necesita build. `index.html` es un shell; todo el contenido se carga desde `data/`.

```
index.html                 Shell (topbar, sidebar, contenedor)
assets/css/brew.css        Estilos v1 (base visual)
assets/css/brew-v2.css     Agregados v2
assets/js/app.js           Router, selector de plataforma y render de páginas
assets/js/legacy.js        Helpers del contenido v1 (se borra al terminar la migración)

data/site.json             Navegación, plataformas, discrepancias abiertas, changelog
data/tokens/               Exportados de Figma: primitives, semantic, spacing-radius, typography, dropdown
data/components/<slug>.json  Una ficha por componente o patrón
previews/<slug>.html       Preview interactivo de cada componente
legacy/<slug>.html         Contenido v1 pendiente de migrar

src/theme/                 Presets PrimeVue (v1, pendiente reemplazar por v2)
src/Assets/Typography.css  Estilos de texto (v1)
archive/tokens-v1/         Exportaciones de tokens anteriores
docs/WORKFLOW.md           Cómo se documenta y se publica
```

## Probar localmente

`fetch` no funciona abriendo el archivo con doble clic. Desde la carpeta del repo:

```
npx serve .
# o
python3 -m http.server
```

## Documentar o actualizar un componente

Ver [docs/WORKFLOW.md](docs/WORKFLOW.md).
