# BREW Design System

Sistema de diseño multi-marca para **Convos** y **Growlat**. Tokens semánticos, presets de PrimeVue 4 y guías de implementación para Vue 3 + Vite.

**Versión actual:** `v1.0.0` — Marzo 2026

---

## Plataformas

| Plataforma | Color primario | Descripción |
|---|---|---|
| **Convos** | `#039F73` Verde | CRM, audiencias, inbox, campañas de WhatsApp |
| **Growlat** | `#6D2FE6` Violeta | Plataforma de data marketing |

Ambas plataformas comparten el mismo Design System. Lo único que cambia entre ellas son los **37 tokens brand-aware** — todo lo demás es idéntico.

---

## Stack

- **Framework:** Vue 3 + Composition API
- **Build tool:** Vite 5
- **UI Components:** PrimeVue 4 + Aura preset
- **Estilos:** Tailwind CSS
- **Tipografía:** Poppins + Space Grotesk (Google Fonts)

---

## Archivos del repo

```
brew-ds/
│
├── brew-ds.html              # Documentación interactiva del DS
├── DS_CONTEXT.md             # Contexto completo del DS (para Claude)
│
├── src/
│   ├── theme/
│   │   ├── convos.preset.js  # Preset PrimeVue 4 — brand verde
│   │   └── growlat.preset.js # Preset PrimeVue 4 — brand violeta
│   └── assets/
│       └── typography.css    # 30 text styles
│
└── tokens/
    ├── Value_tokens.json     # Primitivos — 22 paletas × 11 pasos
    ├── Convos_tokens.json    # Semánticos modo Convos
    ├── Growlat_tokens.json   # Semánticos modo Growlat
    └── Mode_1_tokens.json    # Spacing & border-radius
```

---

## Cómo usar los presets

Copiar `convos.preset.js` o `growlat.preset.js` en `src/theme/` del proyecto y registrar en `main.js`:

```js
import PrimeVue from 'primevue/config'
import ConvosPreset from './theme/convos.preset.js'

app.use(PrimeVue, {
  theme: {
    preset: ConvosPreset,
    options: { darkModeSelector: '.dark', cssLayer: false }
  }
})
```

Para Growlat reemplazar `ConvosPreset` por `GrowlatPreset` e importar `growlat.preset.js`.

---

## Cómo usar los text styles

Copiar `typography.css` en `src/assets/` e importar en `main.js`:

```js
import './assets/typography.css'
```

Uso en templates Vue — el nombre de la clase refleja exactamente el Text Style de Figma:

```html
<!-- Figma "display/page-title" → .text-display-page-title -->
<h1 class="text-display-page-title">Audiencia</h1>

<!-- Figma "body/md" → .text-body-md -->
<p class="text-body-md">Descripción del módulo</p>

<!-- Figma "label/meta" → .text-label-meta -->
<span class="text-label-meta">SECCIÓN</span>

<!-- Figma "chat/contact-name" → .text-chat-contact-name -->
<span class="text-chat-contact-name">Agustina García</span>
```

**30 text styles en 8 grupos:** `display` · `module` · `body` · `nav` · `topbar` · `link` · `label` · `chat` · `code`

---

## Cómo importar los tokens en Figma

Usar el plugin **Variables Import/Export** en Figma → Import JSON, en este orden:

1. `Value_tokens.json` — Primitivos (paletas de color)
2. `Convos_tokens.json` o `Growlat_tokens.json` — Semánticos
3. `Mode_1_tokens.json` — Spacing & border-radius

---

## Tokens — resumen

| Archivo | Contenido | Tokens |
|---|---|---|
| `Value_tokens.json` | 22 paletas × 11 pasos | ~242 |
| `Convos_tokens.json` | Semánticos modo Convos | 175 |
| `Growlat_tokens.json` | Semánticos modo Growlat | 175 |
| `Mode_1_tokens.json` | Spacing/1–10 · radius/sm–full | 13 |

**Tokens brand-aware** (difieren entre plataformas): 37 — incluyen `brand/*`, `primary/*`, `primary-color/*`, `highlight/*`, `focus/ring`, `text/brand`, tokens de navegación activa y form-field focus.

---

## Documentación interactiva

El archivo `brew-ds.html` es una single-page app autocontenida con toda la documentación del DS:

- **Design Tokens** — Primitivos (paletas), Semánticos (175 tokens con diff Convos/Growlat), Spacing & Radius
- **Tipografía** — Specimen de fuentes, 30 text styles con preview en vivo
- **Componentes** — Buttons, Inputs & Forms, Badges, Data Table, Nota, Overlays, Feedback
- **Recursos** — Todos los archivos descargables con versioning

Abrir directamente en el browser o servir con cualquier servidor estático.

Si activás **GitHub Pages** en este repo, el DS queda disponible en:
```
https://[usuario].github.io/brew-ds/brew-ds.html
```

---

## Figma

| Archivo | Link |
|---|---|
| Growlat Design System | [Figma DS](https://www.figma.com/design/6FhjQIpcJ6XhSiwYcIBGtr/Growlat-Design-System) |
| Growlat App | [Figma App](https://www.figma.com/design/eZR5Aj2fW8jIreJZkq1TfK/Growlat) |

---

## Versionado

Seguimos **SemVer** — `MAJOR.MINOR.PATCH`

| Tipo | Cuándo |
|---|---|
| `PATCH` x.x.1 | Fix visual, ajuste de token |
| `MINOR` x.1.0 | Nuevo componente, prop opcional |
| `MAJOR` 1.0.0 | Breaking change en API de preset |

### Changelog

#### v1.0.0 — Marzo 2026
Lanzamiento inicial. Presets PrimeVue 4 para Convos y Growlat. Paleta `ds-neutral` custom. 175 tokens semánticos × 2 modos. 30 text styles. Componentes: Button, InputText, Checkbox, ToggleSwitch, Badge, DataTable (5 variantes), Nota, Drawer, Toast, Skeleton, ProgressBar.
