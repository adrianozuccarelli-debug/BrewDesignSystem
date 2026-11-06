# Changelog

## 2.2.0 — 2026-11-06
- Todos los componentes diseñados en Figma tienen preview, tokens de color y reglas en el sitio (19 fichas).
- Previews nuevos: Button · Menú, Inputs, Select y MultiSelect, Checkbox, SelectButton, Paginator, Badge y Chip, Tag, Nota, Alert, Drawer, Dialog, Tabs, Steps, Option Card, Card de usuario, DataTable y Subnavegación. Button se rehízo según Figma (Primario, Secundario y Peligro + Icon Button).
- Migradas al formato v2: Inputs, Select, SelectButton, Paginator, Tag, Alert, Dialog, Tabs, Steps, Option Card, DataTable y Subnavegación (estado «Parcial»: en Figma faltan Tokens, Tipografía e Implementación, que el sitio toma del componente).
- Los previews usan los tokens semánticos como variables CSS (`var(--t-…)`) y cambian con la plataforma elegida.
- Se quitaron las páginas v1 de Inputs y DataTable.

## 2.1.1 — 2026-11-06
- Semáforo: se suman los tokens `status/*` (Óptimo blue/600 · Bien green/600 · Atención yellow/600 con texto yellow/700 · Crítico red/600 · Sin dato ds-neutral/300), leídos de Figma. Antes las muestras salían vacías.
- Semáforo: preview nuevo con estados con dot (Growlat App), sin dot (Growlat Conversations) y ejemplo en la tabla de Segmentos Dinámicos.
- Badge y Chip: tokens `badge/supervisor/*` y `badge/campaign/solid` agregados; referencias genéricas `<estado>` reemplazadas por un ejemplo real.

## 2.1.0 — 2026-11-05
- Nueva sección Casos UX con el primer caso: MID-2361 · Vista previa de alcance (4 rondas de prueba, 17 personas, versión final en 4, 6 y 9 cifras).
- Drawer, Badge y Chip, y Nota migrados al formato v2 con tokens y reglas de Figma.
- Nuevo: Semáforo (ex Vigencia) e Insight Chip documentados desde Figma.
- Nuevo: Card de usuario (CON-1864).
- Button y Button · Menú: alto 33 px según Figma. Checkbox, Radio y Toggle documentados.
- Card de filtros: reglas actualizadas.
- Las fichas con tokens o reglas ya no muestran “Todavía no está documentado”.
- Discrepancias nuevas entre Figma y la exportación de tokens.

## 2.0.0 — 2026-10-15
- Sitio reestructurado: contenido en `data/`, generado desde Figma.
- Tokens y tipografía leídos de la exportación de variables y estilos de Figma.
- Renombre: Convos → Growlat Conversations; Growlat → Growlat App.
- 42 fichas de componentes y patrones con estado, reglas y pendientes.
- Button migrado al formato v2; el resto conserva el contenido v1 marcado como desactualizado.
- Páginas nuevas: Cómo se actualiza, Estado de la documentación, Spacing y radios, Changelog.

## 1.0.0 — 2026-03
- Primera versión: Buttons, Inputs, Badges, DataTable, Nota, Overlays, Feedback y Client Card.
