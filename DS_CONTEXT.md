# DS_CONTEXT.md — Convos / Growlat / BREW Design System
> Última actualización: Marzo 2026 · v1.0.0
> Pegar este archivo al inicio de cualquier sesión de Claude para restaurar el contexto completo.

---

## 1. Plataformas

| Plataforma | Color primario | Hex | Uso |
|---|---|---|---|
| **Convos** | Verde | `#039F73` | CRM / audiencias / perfiles |
| **Growlat** | Violeta | `#6D2FE6` | Plataforma principal |

Ambas comparten el mismo Design System con tokens semánticos por modo. Son plataformas "hermanas": misma estructura de preset, mismo DS base, diferenciadas únicamente por el color brand.

- **Figma DS Growlat**: `https://www.figma.com/design/6FhjQIpcJ6XhSiwYcIBGtr/Growlat-Design-System`
- **Figma Growlat App**: `https://www.figma.com/design/eZR5Aj2fW8jIreJZkq1TfK/Growlat`
- **Figma Convos**: `https://www.figma.com/design/K4g06NfVxI6dquP4SjOfuS/Convos`

---

## 2. Stack técnico

- **Framework**: Vue 3 + Composition API
- **Build tool**: Vite 5
- **Componentes UI**: PrimeVue 4 con preset Aura personalizado
- **Estilos**: Tailwind CSS
- **Tipografía**: Poppins (UI/body) + Space Grotesk (display/datos)
- **Íconos**: SVG inline (no font-icons), stroke-width 1.8 en nav, 2 en contenido

---

## 3. Arquitectura de tokens (3 capas)

```
Primitivos → Semánticos (modo Convos / Growlat) → Componentes (PrimeVue)
```

### Capa 1 — Primitivos (`Value_tokens.json`)
- 22 paletas × 11 pasos
- Paletas clave: `green`, `violet`, `ds-neutral` + paletas Tailwind estándar

**ds-neutral (paleta custom):**
| Token | Hex |
|---|---|
| ds-neutral/0 | `#FFFFFF` |
| ds-neutral/50 | `#F5F5F7` |
| ds-neutral/100 | `#E5E5EA` |
| ds-neutral/200 | `#F0F0F2` |
| ds-neutral/300 | `#AEAEB2` |
| ds-neutral/400 | `#6B6B72` |
| ds-neutral/500 | `#424242` |
| ds-neutral/600 | `#2C2C2E` |
| ds-neutral/nav | `#0E1721` |

**Green (Convos brand):**
| Step | Hex |
|---|---|
| 50 | `#F0FDF4` |
| 100 | `#DCFCE7` |
| 200 | `#BBF7D0` |
| 300 | `#86EFAC` |
| 400 | `#4ADE80` |
| 500 ★ | `#039F73` — Convos primary |
| 600 | `#027A59` |
| 700 | `#015C43` |
| 800 | `#014030` |
| 900 | `#012E22` |
| 950 | `#001A13` |

**Violet (Growlat brand):**
| Step | Hex |
|---|---|
| 50 | `#F5F3FF` |
| 100 | `#EDE9FE` |
| 200 | `#DDD6FE` |
| 300 | `#C4B5FD` |
| 400 | `#A78BFA` |
| 500 ★ | `#6D2FE6` — Growlat primary |
| 600 | `#5A25BF` |
| 700 | `#461C99` |
| 800 | `#331472` |
| 900 | `#220D4C` |
| 950 | `#14083A` |

### Capa 2 — Semánticos (`Convos_tokens.json` / `Growlat_tokens.json`)
175 tokens × 2 modos = 350 variables. 37 tokens difieren entre modos (brand), 138 son idénticos.

**Tokens de superficie:**
| Token | Valor |
|---|---|
| surface/0 | `#FFFFFF` |
| surface/bg | `#F5F5F7` |
| surface/card | `#FFFFFF` |
| surface/nav | `#0E1721` |
| surface/border | `#E5E5EA` |
| surface/border-subtle | `#F0F0F2` |

**Tokens de texto:**
| Token | Valor |
|---|---|
| text/primary | `#424242` |
| text/secondary | `#6B6B72` |
| text/tertiary | `#AEAEB2` |
| text/inverse | `#FFFFFF` |
| text/brand (Convos) | `#039F73` |
| text/brand (Growlat) | `#6D2FE6` |

**Tokens de estado:**
| Token | Hex |
|---|---|
| success/bg | `#F0FDF4` |
| success/border | `#BBF7D0` |
| success/text | `#015C43` |
| error/bg | `#FEF2F2` |
| error/border | `#FECACA` |
| error/text | `#991B1B` |
| warning/bg | `#FFFBEB` |
| info/bg | `#EFF6FF` |
| badge/mkt/bg | `#F5F3FF` |
| badge/mkt/border | `#C4B5FD` |
| badge/mkt/text | `#6B21A8` |

**Tokens de notas:**
| Token | Bg | Border | Text |
|---|---|---|---|
| note/conversacion | `#FFFBEB` | `#FDE68A` | `#92400E` |
| note/contacto | `#FDF2F8` | `#FBCFE8` | `#BE185D` |

**Tokens Brand (difieren por plataforma):**
| Token | Convos | Growlat |
|---|---|---|
| brand/primary | `green/400` → `#4ADE80` | `violet/400` → `#A78BFA` |
| brand/primary-dark | `green/500` → `#039F73` | `violet/600` → `#5A25BF` |
| brand/hover | `green/600` → `#027A59` | `violet/700` → `#461C99` |
| brand/text | `green/500` → `#039F73` | `violet/500` → `#6D2FE6` |
| text/brand | `green/500` → `#039F73` | `violet/500` → `#6D2FE6` |
| focus/ring | `green/500` → `#039F73` | `violet/500` → `#6D2FE6` |

### Capa 3 — Spacing & Radius (`Mode_1_tokens.json`)
| Token | px | rem |
|---|---|---|
| spacing/1 | 4px | 0.25rem |
| spacing/2 | 8px | 0.5rem |
| spacing/3 | 12px | 0.75rem |
| spacing/4 | 16px | 1rem |
| spacing/5 | 20px | 1.25rem |
| spacing/6 | 24px | 1.5rem |
| spacing/8 | 32px | 2rem |
| spacing/10 | 40px | 2.5rem |
| radius/sm | 4px | 0.25rem |
| radius/md | 8px | 0.5rem |
| radius/lg | 16px | 1rem |
| radius/xl | 20px | 1.25rem |
| radius/full | 100px | 6.25rem |

---

## 4. Tipografía

Base: `1rem = 16px` · Nunca modificar el root font-size · Mínimo 10px (0.625rem)

**Familias:**
- **Poppins** — UI, body, navegación, labels, chat. Pesos: 400, 500, 600, 700
- **Space Grotesk** — Display, títulos, datos numéricos, código. Pesos: 400, 500, 700

**Implementación en código:**
```
src/assets/typography.css  ← importar en main.js
import './assets/typography.css'
```

Convención de naming: `Figma "body/xs"` → `.text-body-xs`

### 30 Text Styles — Fuente de verdad: Figma DS Growlat node 36:2

| Clase CSS | Figma | Familia | px | Weight | LH |
|---|---|---|---|---|---|
| `.text-display-page-title` | display/page-title | Space Grotesk | 24 | 700 | 1.2 |
| `.text-display-name` | display/name | Space Grotesk | 20 | 700 | 1.2 |
| `.text-display-section-title` | display/section-title | Space Grotesk | 16 | 700 | 1.3 |
| `.text-module-title` | module/title | Space Grotesk | 14 | 700 | 1.4 |
| `.text-module-subtitle` | module/subtitle | Poppins | 12 | 400 | 1.4 |
| `.text-body-sm` | body/sm | Poppins | 16 | 400 | 1.5 |
| `.text-body-sm-medium` | body/sm-medium | Poppins | 16 | 500 | 1.5 |
| `.text-body-md` | body/md | Poppins | 14 | 400 | 1.6 |
| `.text-body-md-medium` | body/md-medium | Poppins | 14 | 500 | 1.6 |
| `.text-body-xs` | body/xs | Poppins | 12 | 400 | 1.4 |
| `.text-body-xs-medium` | body/xs-medium | Poppins | 12 | 500 | 1.4 |
| `.text-body-xs-bold` | body/xs-bold | Poppins | 12 | 600 | 1.4 |
| `.text-body-xxs` | body/xxs | Poppins | 10 | 600 | 1.4 |
| `.text-nav-item` | nav/item | Poppins | 14 | 500 | 1 |
| `.text-nav-item-active` | nav/item-active | Poppins | 14 | 600 | 1 |
| `.text-nav-section` | nav/section | Poppins | 10 | 700 | 1 |
| `.text-topbar-project` | topbar/project | Poppins | 14 | 600 | 1 |
| `.text-topbar-user-name` | topbar/user-name | Poppins | 12 | 600 | 1.2 |
| `.text-topbar-user-email` | topbar/user-email | Poppins | 12 | 400 | 1.2 |
| `.text-link-sm` | link/sm | Poppins | 12 | 600 | 1 |
| `.text-label-form` | label/form | Poppins | 12 | 500 | 1 |
| `.text-label-data-key` | label/data-key | Poppins | 12 | 400 | 1 |
| `.text-label-meta` | label/meta | Poppins | 10 | 600 | 1 | uppercase + 0.08em |
| `.text-chat-bubble` | chat/bubble | Poppins | 14 | 400 | 1.6 |
| `.text-chat-contact-name` | chat/contact-name | Poppins | 14 | 600 | 1 |
| `.text-chat-preview` | chat/preview | Poppins | 12 | 400 | 1 |
| `.text-chat-time-relative` | chat/time-relative | Poppins | 12 | 400 | 1 |
| `.text-chat-timestamp` | chat/timestamp | Poppins | 10 | 400 | 1 |
| `.text-code-data` | code/data | Space Grotesk | 12 | 400 | 1.5 |
| `.text-code-label` | code/label | Space Grotesk | 12 | 500 | 1.5 |

---

## 5. Border radius

| Token | rem | px |
|---|---|---|
| radius/sm | 0.25rem | 4px |
| radius/md | 0.5rem | 8px |
| radius/lg | 1rem | 16px |
| radius/xl | 1.25rem | 20px |
| radius/full | 6.25rem | 100px |

---

## 6. Layout base (app shell)

```
--nav-w: 81px        (nav lateral, fondo surface/nav #0E1721)
--subnav-w: 180px    (subnav secundaria, fondo surface/card)
--topbar-h: 52px     (topbar fija, fondo surface/card)
```

---

## 7. Presets PrimeVue 4

Ambos presets extienden Aura. Lo que cambia es exclusivamente la paleta brand:

| Token semántico | Convos | Growlat |
|---|---|---|
| primary color | `green/500` `#039F73` | `violet/500` `#6D2FE6` |
| primary-dark / hover | `green/600` `#027A59` | `violet/700` `#461C99` |
| avatar background | `green/500` | `violet/500` |
| checkbox checked | `green/500` | `violet/500` |
| tabs active | `green/500` | `violet/500` |
| select background | siempre `ds-neutral/0` = `#FFFFFF` |

```js
// Uso en main.js:
import PrimeVue from 'primevue/config'
import ConvosPreset from './theme/convos.preset.js'

app.use(PrimeVue, {
  theme: {
    preset: ConvosPreset,
    options: { darkModeSelector: '.dark', cssLayer: false }
  }
})
```

Archivos: `convos.preset.js` / `growlat.preset.js`

---

## 8. Componentes finalizados

### Badge de estado
- `.badge-success` → verde · `.badge-error` → rojo · `.badge-mkt` → violeta · `.badge-neutral` → gris
- Todos con punto `.badge-dot` + texto, border-radius: `radius/full`

### Nota (DsNota.vue)
- Props: `tipo` ('conversacion' | 'contacto'), `autor`, `texto`, `origen`, `fecha`
- Tokens: `note/conversacion/*` y `note/contacto/*`

### Drawer (GrowlatDrawer.vue)
- Slide desde la derecha · Teleport to body
- Props: `modelValue`, `title`, `subtitle`, `showHeaderAction`, `headerActionLabel`, `showPrimaryAction`, `primaryLabel`, `showSecondaryAction`, `secondaryLabel`, `showTertiaryAction`, `tertiaryLabel`
- Emits: `update:modelValue`, `header-action`, `primary-action`, `secondary-action`, `tertiary-action`

### DataTable — 5 variantes
- **Default** — tabla estándar con sort icons, chip columnas, paginador
- **Doble dato** — celda con email + nombre apilados (`.dt-dd-p` / `.dt-dd-s`)
- **Row seleccionado** — fondo `brand/50` en rows con `.row-sel`
- **Bulk selection** — bulk bar sobre el thead (dentro de la tabla) con contador dinámico, botón Acciones (primary), "Seleccionar todo y no sólo lo visible"
- **Empty state** — CTA "Importar contactos" centrado

**Comportamiento bulk bar:**
- Vive dentro de `.ds-table`, sobre el `<thead>`
- `display: none` por defecto → `display: flex` cuando hay ≥1 row seleccionada
- Contador actualiza en tiempo real: `N contactos seleccionados / 38.000 encontrados`
- Columnas fijas no removibles: Teléfono + Estado
- Persistencia columnas: localStorage key `audience:columns`
- Búsqueda: 300ms debounce

---

## 9. Convenciones de código

- **Tokens CSS**: usar siempre `var(--token)` en HTML/CSS, nunca hardcodear hex
- **Text styles**: usar clases `.text-*` del `typography.css`, nunca Tailwind utilities sueltas para tipografía
- **Toast**: posición bottom-right, severity: `success`
- **Select background**: siempre `ds-neutral/0` = `#FFFFFF`
- **Íconos**: SVG inline, stroke-width 1.8 en nav, 2 en contenido
- **Chart.js**: versión 4.4.1 desde CDN cdnjs
- **Select**: usar `<Select>` de PrimeVue 4, no `<select>` nativo

---

## 10. Pantallas diseñadas — Convos / Audiencia

### Flujo Audiencia/Perfiles (4 pantallas) — Jira `CON-1398`
Frame padre: `1223:2454`

| Pantalla | Node Figma | Estado |
|---|---|---|
| Perfiles vacío (empty state) | `1062:3266` | ✅ |
| Perfiles con datos | `752:2237` | ✅ |
| Selección múltiple | `1062:3882` | ✅ |
| Administrar columnas (drawer) | `1062:5537` | ✅ |

### Flujo Perfiles/Detalle (7 pantallas) — Jira `CON-1399`

| Pantalla | Node Figma | Estado |
|---|---|---|
| Detalle sin datos | `1196:2617` | ✅ |
| Detalle con datos completos | `1031:1183` | ✅ |
| Editar perfil (drawer inicial) | `1195:1863` | ✅ |
| Editar perfil (en edición) | `1196:2979` | ✅ |
| Editar perfil (guardado + toast) | `1197:3394` | ✅ |
| Notas listado (drawer) | `1196:1761` | ✅ |
| Nueva nota (formulario inline) | `1196:2158` | ✅ |

---

## 11. Archivos del proyecto

| Archivo | Descripción | Versión |
|---|---|---|
| `DS_CONTEXT.md` | Este archivo — contexto completo del DS | v1.0.0 |
| `convos.preset.js` | Preset PrimeVue 4 · brand verde | v1.0.0 |
| `growlat.preset.js` | Preset PrimeVue 4 · brand violeta | v1.0.0 |
| `typography.css` | 30 text styles · Poppins + Space Grotesk | v1.0.0 |
| `brew-ds.html` | BREW DS — documentación interactiva completa | v1.0.0 |
| `Value_tokens.json` | Variables Figma — Primitivos (22 paletas) | v1.0.0 |
| `Convos_tokens.json` | Variables Figma — Semánticos modo Convos | v1.0.0 |
| `Growlat_tokens.json` | Variables Figma — Semánticos modo Growlat | v1.0.0 |
| `Mode_1_tokens.json` | Variables Figma — Spacing & Radius | v1.0.0 |

---

## 12. BREW DS — Secciones del sitio de documentación

El `brew-ds.html` es una single-page app con sidebar + navegación interna. Secciones:

**Getting Started**
- Introduction — hero con wordmark SVG, cards de navegación rápida, stack técnico
- Design Tokens — 3 subsecciones: Primitives (paletas), Semantic (175 tokens, tabla con diff Convos/Growlat), Spacing & Radius
- Typography — specimen de fuentes, base tipográfica, 30 text styles en 8 grupos con preview en vivo

**Components**
- Buttons — 2 grupos: Severity (primary/secondary/ghost/danger/disabled) + Size (sm/default/lg)
- Inputs & Forms — InputText (4 estados) + Checkbox + Toggle Switch
- Badges & Tags — Status badges + sin dot
- Data Table — 5 variantes con tabs interactivos
- Nota — tipo="conversacion" y tipo="contacto"
- Overlays — Drawer con trigger
- Feedback — Toast (3 severities) + Skeleton (2 variantes) + Progress Bar (3 valores)

**Recursos**
- Archivos & Descargas — presets (.js), tokens (.json), typography.css, todos descargables
- Changelog v1.0.0

---

## 13. SemVer del DS

- PATCH (1.0.x): fix visual, ajuste de token
- MINOR (1.x.0): nuevo componente, prop opcional nueva
- MAJOR (x.0.0): breaking change en API de prop/emit

---

## 14. Pendientes

- [ ] Importar tokens semánticos en Figma (primitivos ya importados)
- [ ] Continuar specs de componentes restantes
- [ ] Definir estrategia de tipografía responsive para screens >1440px
- [ ] Testear presets en plataformas locales (Convos y Growlat)
- [ ] Page de Typography en Figma — agregar body/xs regular al DS (hecho en código ✅)

---

## 15. Cómo usar este archivo

Al inicio de cada sesión de Claude, pegar el contenido de este archivo. Ejemplo:

> "Acá está el contexto del DS: [pegar contenido]. Quiero trabajar en [tarea]."

Para actualizar después de cada sesión:
> "Actualizá el DS_CONTEXT.md con lo que definimos hoy."
