# Flujo de trabajo de BREW DS

Figma es la fuente de verdad. El sitio no se edita a mano: se regenera desde los datos.

## 1. Diseñar y documentar en Figma

Cada componente tiene su página en **Growlat Design System**, con la plantilla de documentación:
Preview · Variantes · Estados · Tokens de color · Tipografía · Uso y reglas · Implementación.

Al cerrarlo, se actualiza su fila en la página **📖 Documentación** (estado y próximo paso).

## 2. Exportar con Claude

En una sesión del proyecto "Agente DS", pedir: *"Publicá <componente> en el sitio"*. Claude:

1. Lee la página del componente y las variables y estilos de Figma.
2. Genera o actualiza `data/components/<slug>.json` y, si hace falta, `previews/<slug>.html`.
3. Si cambiaron variables o estilos, regenera los archivos de `data/tokens/`.
4. Marca diferencias contra los presets y las suma a `openIssues` en `data/site.json`.
5. Agrega la entrada al changelog.

## 3. Publicar

Subir los archivos al repo (commit en `main`). GitHub Pages actualiza el sitio en un par de minutos.

Versionado SemVer:
- **patch**: correcciones de texto o valores.
- **minor**: componente nuevo o migrado.
- **major**: cambio de tokens que rompe implementación.

## Reglas para las fichas

- Los tokens se referencian **por nombre** (`primary-color/hover`), nunca por hex. El sitio resuelve el valor según la plataforma.
- La tipografía se referencia por nombre de estilo (`body/xs-bold`).
- Un componente migrado al formato v2 pierde su campo `legacy` y su archivo en `legacy/` se borra.

## Formato de una ficha

Ver `docs/plantilla-componente.json`.
