/* ═══════════════════════════════════════════════════════════
   BREW Design System — sitio v2
   Todo el contenido sale de /data. Nada se edita en este archivo
   para documentar un componente: se edita su JSON.
   ═══════════════════════════════════════════════════════════ */
const STATE = { site: null, tokens: {}, components: {}, platform: 'conversations', route: 'intro' };
const STATUS = {
  'documentado':    { label: 'Documentado',    cls: 'success' },
  'parcial':        { label: 'Parcial',        cls: 'info' },
  'a-revisar':      { label: 'A revisar',      cls: 'warning' },
  'por-documentar': { label: 'Por documentar', cls: 'neutral' },
};
const MODE = { conversations: 0, app: 1 };

/* ─── Utilidades ─────────────────────────────────────────── */
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
const getJSON = url => fetch(url, { cache: 'no-cache' }).then(r => { if (!r.ok) throw new Error(url); return r.json(); });
const getText = url => fetch(url, { cache: 'no-cache' }).then(r => { if (!r.ok) throw new Error(url); return r.text(); });

/** Resuelve un token semántico ("text/primary") o un alias de primitivo ("green/500") a hex. */
function resolve(name, platform = STATE.platform) {
  if (!name) return null;
  const sem = STATE.tokens.semantic.tokens[name];
  const raw = sem ? sem[platform] : name;
  if (raw.startsWith('#')) return { name, alias: null, hex: raw.toUpperCase() };
  const [fam, step] = raw.split('/');
  const hex = (STATE.tokens.primitives.colors[fam] || {})[step];
  return { name, alias: raw, hex: hex || null };
}
const cssColor = hex => {
  if (!hex) return 'transparent';
  if (hex.length === 9) { const a = parseInt(hex.slice(7), 16) / 255; const n = parseInt(hex.slice(1, 7), 16);
    return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${a.toFixed(2)})`; }
  return hex;
};
const swatch = hex => `<span class="spec-swatch" style="background:${cssColor(hex)}"></span>`;
const statusBadge = st => { const s = STATUS[st] || STATUS['por-documentar']; return `<span class="v2-status v2-status--${s.cls}">${s.label}</span>`; };
const card = (title, body, extra = '') => `<section class="spec-card"><div class="spec-card-header"><span class="spec-card-title">${esc(title)}</span>${extra}</div>${body}</section>`;

/* ─── Plataforma ─────────────────────────────────────────── */
function applyPlatform(p) {
  STATE.platform = p;
  const root = document.documentElement;
  ['50','100','200','300','400','500','600','700','800','900','950'].forEach(step => {
    const r = resolve('primary/' + step); if (r && r.hex) root.style.setProperty('--brand-' + step, r.hex);
  });
  document.body.classList.toggle('growlat', p === 'app');
  $('#platformName').textContent = STATE.site.platforms[p].name;
  document.querySelectorAll('.platform-option').forEach(o => o.classList.toggle('active', o.dataset.platform === p));
  try { localStorage.setItem('brew-platform', p); } catch (e) {}
  render(); // los valores resueltos cambian con la plataforma
}
function buildPlatformMenu() {
  const dd = $('#platformDropdown');
  dd.innerHTML = '<p class="platform-dropdown-label">Cambiar plataforma</p>' + Object.entries(STATE.site.platforms).map(([k, p]) => {
    const hex = resolve('primary/500', k).hex;
    return `<button class="platform-option" role="option" data-platform="${k}">
      <div class="platform-option-icon" style="background:${hex}">${esc(p.initial)}</div>
      <div class="platform-option-info"><div class="platform-option-name">${esc(p.name)}</div><div class="platform-option-desc">${esc(p.desc)}</div></div>
    </button>`;
  }).join('');
  const trigger = $('#platformTrigger');
  const close = () => { dd.classList.remove('open'); trigger.classList.remove('open'); trigger.setAttribute('aria-expanded', 'false'); };
  trigger.addEventListener('click', e => { e.stopPropagation(); const open = !dd.classList.contains('open');
    dd.classList.toggle('open', open); trigger.classList.toggle('open', open); trigger.setAttribute('aria-expanded', String(open)); });
  dd.addEventListener('click', e => { const b = e.target.closest('.platform-option'); if (b) { close(); applyPlatform(b.dataset.platform); } });
  document.addEventListener('click', e => { if (!$('#platformSelector').contains(e.target)) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* ─── Sidebar y búsqueda ─────────────────────────────────── */
function buildSidebar(filter = '') {
  const q = filter.toLowerCase().trim();
  const match = t => !q || t.toLowerCase().includes(q);
  const item = (slug, title, st) => `<a class="nav-item${STATE.route === slug ? ' active' : ''}" href="#/${slug}" data-slug="${slug}">
      ${st ? `<span class="v2-dot v2-dot--${(STATUS[st] || STATUS['por-documentar']).cls}" title="${(STATUS[st] || {}).label || ''}"></span>` : ''}${esc(title)}</a>`;
  let html = '';
  const f = STATE.site.foundations.filter(x => match(x.title));
  if (f.length) html += `<div class="sidebar-section"><p class="sidebar-section-label">Fundamentos</p>${f.map(x => item(x.slug, x.title)).join('')}</div>`;
  for (const g of STATE.site.componentGroups) {
    const items = g.items.map(s => STATE.components[s]).filter(c => c && match(c.title + ' ' + c.category));
    if (items.length) html += `<div class="sidebar-section"><p class="sidebar-section-label">${esc(g.label)}</p>${items.map(c => item(c.slug, c.title, c.status)).join('')}</div>`;
  }
  $('#sidebar').innerHTML = html || '<p class="v2-empty-nav">Sin resultados.</p>';
}
function wireSearch() {
  const input = $('#searchInput');
  input.addEventListener('input', () => buildSidebar(input.value));
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') { const first = $('#sidebar .nav-item'); if (first) location.hash = first.getAttribute('href'); }
    if (e.key === 'Escape') { input.value = ''; buildSidebar(); }
  });
}

/* ─── Páginas de fundamentos ─────────────────────────────── */
function header(eyebrow, title, desc, right = '', sub = '') {
  return `<div class="page-header"><p class="page-eyebrow">${esc(eyebrow)}</p>
    <div class="v2-title-row"><h1 class="page-title">${esc(title)}</h1>${right}</div>
    ${sub ? `<p class="v2-updated">${esc(sub)}</p>` : ''}
    ${desc ? `<p class="page-description">${desc}</p>` : ''}</div>`;
}

const PAGES = {
  intro() {
    const s = STATE.site, all = Object.values(STATE.components);
    const count = st => all.filter(c => c.status === st).length;
    return `<div class="intro-hero"><h1 class="intro-hero-title">BREW <span>Design System</span></h1>
      <p class="intro-hero-desc">El sistema de diseño compartido de Growlat App y Growlat Conversations: tokens, tipografía y componentes sobre Vue 3, PrimeVue 4 y Tailwind CSS.</p></div>
      ${card('Plataformas', `<table class="spec-token-table"><thead><tr><th>Plataforma</th><th>Color primario</th><th>Prefijo Jira</th></tr></thead><tbody>
        ${Object.entries(s.platforms).map(([k, p]) => { const r = resolve('primary/500', k); return `<tr><td class="prop-col">${esc(p.name)}</td><td><div class="spec-token-row">${swatch(r.hex)}<span class="token-pill">${r.alias}</span><span class="spec-hex">${r.hex}</span></div></td><td>${esc(p.jira)}</td></tr>`; }).join('')}
      </tbody></table><p class="v2-note">Todo lo demás (spacing, radios, tipografía, componentes) es idéntico entre plataformas. badge-mkt es siempre violeta: codifica suscripción marketing, no marca.</p>`)}
      ${card('Estado actual', `<div class="v2-stats">
        <a href="#/estado"><strong>${count('documentado')}</strong><span>documentados</span></a>
        <a href="#/estado"><strong>${count('parcial')}</strong><span>parciales</span></a>
        <a href="#/estado"><strong>${count('por-documentar')}</strong><span>por documentar</span></a>
        <a href="#/tokens"><strong>${s.openIssues.length}</strong><span>discrepancias abiertas</span></a></div>`)}
      ${card('Stack', `<table class="spec-token-table"><tbody>
        <tr><td class="prop-col">Framework</td><td>Vue 3 + Composition API</td></tr>
        <tr><td class="prop-col">Componentes</td><td>PrimeVue 4 + preset Aura extendido</td></tr>
        <tr><td class="prop-col">Estilos</td><td>Tailwind CSS</td></tr>
        <tr><td class="prop-col">Tipografía</td><td>Space Grotesk (display y datos) · Poppins (todo lo demás)</td></tr>
        <tr><td class="prop-col">Íconos</td><td>SVG inline · stroke 1.8 en navegación, 2.0 en contenido</td></tr>
        <tr><td class="prop-col">Plataforma</td><td>Desktop, 1366–1920 px</td></tr></tbody></table>`)}`;
  },

  flujo() {
    const steps = [
      ['Se diseña en Figma', `Cada componente tiene su página en <em>${esc(STATE.site.figma.file)}</em> con la plantilla de documentación (Preview, Variantes, Estados, Tokens, Tipografía, Uso y reglas, Implementación).`],
      ['Se marca el estado', 'Al cerrar un componente se actualiza su fila en la página 📖 Documentación de Figma.'],
      ['Se exporta', 'Con Claude se leen la página del componente y las variables de Figma, y se generan <code>data/components/&lt;slug&gt;.json</code> y, si cambiaron, los archivos de <code>data/tokens/</code>.'],
      ['Se publica', 'Se suben los archivos al repo (commit en <code>main</code>) y GitHub Pages actualiza el sitio. Se agrega una entrada al changelog en <code>data/site.json</code>.'],
    ];
    return header('Fundamentos', 'Cómo se actualiza', 'Figma es la fuente de verdad. El sitio no se edita a mano: se regenera desde los datos.') +
      card('Flujo', `<ol class="v2-steps">${steps.map(([t, d]) => `<li><strong>${t}</strong><p>${d}</p></li>`).join('')}</ol>`) +
      card('Dónde vive cada cosa', `<table class="spec-token-table"><thead><tr><th>Archivo</th><th>Contenido</th><th>Origen</th></tr></thead><tbody>
        <tr><td><code>data/tokens/*.json</code></td><td>Primitivos, semánticos por plataforma, spacing, radios y tipografía</td><td>Variables y estilos de Figma</td></tr>
        <tr><td><code>data/components/*.json</code></td><td>Ficha de cada componente: estado, reglas, tokens por nombre, código</td><td>Página del componente en Figma</td></tr>
        <tr><td><code>previews/*.html</code></td><td>Preview interactivo del componente</td><td>Se escribe una vez por componente</td></tr>
        <tr><td><code>data/site.json</code></td><td>Navegación, plataformas, discrepancias abiertas, changelog</td><td>Se edita al publicar</td></tr>
        <tr><td><code>legacy/*.html</code></td><td>Contenido v1, se borra al migrar cada componente</td><td>Sitio anterior</td></tr></tbody></table>`) +
      card('Regla de oro', `<p class="v2-note">Las fichas referencian tokens por nombre (<code>primary-color/hover</code>), nunca por hex. El sitio resuelve el valor según la plataforma activa, así una corrección en Figma se refleja en todas las páginas con una sola exportación.</p>`);
  },

  tokens() {
    const sem = STATE.tokens.semantic.tokens, prim = STATE.tokens.primitives.colors;
    const groups = {};
    Object.keys(sem).forEach(k => { const g = k.split('/')[0]; (groups[g] = groups[g] || []).push(k); });
    const brand = ['50','100','200','300','400','500','600','700','800','900','950'].map(s => { const r = resolve('primary/' + s);
      return `<div class="swatch"><div class="swatch-color" style="background:${r.hex}" title="${r.hex}"></div><span class="swatch-step">${s}</span></div>`; }).join('');
    const semRows = Object.entries(groups).map(([g, keys]) => `<tr class="v2-group-row"><td colspan="3">${esc(g)}</td></tr>` + keys.map(k => {
      const a = resolve(k, 'conversations'), b = resolve(k, 'app'), diff = a.hex !== b.hex;
      const cell = r => `<div class="spec-token-cell"><div class="spec-token-row">${swatch(r.hex)}${r.alias ? `<span class="token-pill">${r.alias}</span>` : ''}</div><span class="spec-hex">${r.hex}</span></div>`;
      return `<tr${diff ? ' class="v2-brand-aware"' : ''}><td class="prop-col"><span class="token-pill">${k}</span></td><td>${cell(a)}</td><td>${cell(b)}</td></tr>`; }).join('')).join('');
    const primGrid = Object.entries(prim).map(([fam, steps]) => `<div class="v2-prim"><p class="preview-group-label">${esc(fam)}</p><div class="swatch-grid">${
      Object.entries(steps).map(([s, h]) => `<div class="swatch"><div class="swatch-color" style="background:${h}" title="${h}"></div><span class="swatch-step">${s}</span></div>`).join('')}</div></div>`).join('');
    const issues = STATE.site.openIssues.map(i => `<li><strong>${esc(i.title)}</strong><p>${esc(i.detail)}</p></li>`).join('');
    const src = STATE.tokens.semantic.source;
    return header('Fundamentos', 'Colores y tokens', `Tres capas: primitivos → semánticos → componentes. Exportado de Figma el ${esc(src.exportedAt)}. Nunca usar hex en el código: siempre el token semántico.`) +
      (issues ? card('Discrepancias abiertas', `<ul class="v2-issues">${issues}</ul>`, `<span class="v2-status v2-status--warning">${STATE.site.openIssues.length}</span>`) : '') +
      card(`Brand · ${STATE.site.platforms[STATE.platform].name}`, `<div style="padding:1.25rem"><div class="swatch-grid">${brand}</div></div>`) +
      card('Semánticos', `<table class="spec-token-table v2-sem"><thead><tr><th>Token</th><th>${esc(STATE.site.platforms.conversations.name)}</th><th>${esc(STATE.site.platforms.app.name)}</th></tr></thead><tbody>${semRows}</tbody></table>
        <p class="v2-note">Las filas resaltadas cambian según la plataforma.</p>`) +
      card('Primitivos', `<div class="v2-prim-wrap">${primGrid}</div><p class="v2-note">${esc(STATE.tokens.primitives.note)}</p>`);
  },

  tipografia() {
    const st = STATE.tokens.typography.styles, groups = {};
    st.forEach(s => { const g = s.name.split('/')[0]; (groups[g] = groups[g] || []).push(s); });
    const sample = { display: 'Título de página', module: 'Título de módulo', body: 'Texto de interfaz', nav: 'Item de navegación', topbar: 'Nombre del proyecto', link: 'Ver más detalles', label: 'Estado actual', chat: 'Hola, ¿cómo puedo ayudarte?', code: '+54 9 11 1234-5678' };
    const rows = Object.entries(groups).map(([g, list]) => `<tr class="v2-group-row"><td colspan="5">${esc(g)}</td></tr>` + list.map(s => `<tr>
      <td><span style="font-family:'${s.family}';font-weight:${s.weight};font-size:${s.rem};line-height:${s.lineHeight};${s.textCase === 'UPPER' ? 'text-transform:uppercase;letter-spacing:.08em;' : ''}">${esc(sample[g] || 'Texto')}</span></td>
      <td><span class="token-pill">${s.name}</span><br><code class="v2-class">${s.cssClass}</code></td>
      <td>${esc(s.family)}</td><td><span class="spec-rem">${s.rem}</span> · ${s.size}px</td><td>${s.weight} · ${esc(s.lineHeight)}</td></tr>`).join('')).join('');
    return header('Fundamentos', 'Tipografía', `${st.length} estilos de texto exportados de Figma. Space Grotesk para display y datos, Poppins para todo lo demás. Nunca mezclar las dos dentro de la misma etiqueta. Piso de legibilidad: 12 px para texto corrido; 10 px solo para metadata densa.`) +
      card('Estilos', `<table class="spec-typo-table v2-typo"><thead><tr><th>Preview</th><th>Token · clase</th><th>Familia</th><th>Tamaño</th><th>Peso · interlineado</th></tr></thead><tbody>${rows}</tbody></table>`);
  },

  spacing() {
    const t = STATE.tokens.spacing;
    const sp = Object.entries(t.spacing).map(([k, v]) => `<tr><td><span class="token-pill">spacing/${k}</span></td><td>${v}px · ${v / 16}rem</td><td><span class="v2-bar" style="width:${v * 2}px"></span></td></tr>`).join('');
    const rd = Object.entries(t.radius).map(([k, v]) => `<tr><td><span class="token-pill">radius/${k}</span></td><td>${v}px · ${v / 16}rem</td><td><span class="v2-radius" style="border-radius:${Math.min(v, 28)}px"></span></td></tr>`).join('');
    return header('Fundamentos', 'Spacing y radios', 'Escala base 1rem = 16px.') +
      card('Spacing', `<table class="spec-token-table"><tbody>${sp}</tbody></table>`) +
      card('Radios', `<table class="spec-token-table"><tbody>${rd}</tbody></table>
        <p class="v2-note">radius/sm para botones e inputs, md para toasts y overlays de select, lg para cards, tablas, drawers y dialogs, full para badges, chips, avatars y toggles. full nunca en botones ni inputs.</p>`);
  },

  estado() {
    const rows = STATE.site.componentGroups.flatMap(g => g.items.map(s => STATE.components[s]).filter(Boolean)).map(c => `<tr>
      <td><a href="#/${c.slug}">${esc(c.title)}</a></td><td>${esc(c.category)}</td><td>${statusBadge(c.status)}</td>
      <td>${c.siteVersion ? 'v' + esc(c.siteVersion) : '—'}</td><td>${esc((c.todos || [])[0] || '—')}</td></tr>`).join('');
    return header('Fundamentos', 'Estado de la documentación', 'Espejo de la página 📖 Documentación de Figma. Se genera a partir de las fichas de cada componente.') +
      card('Componentes y patrones', `<table class="spec-token-table v2-estado"><thead><tr><th>Componente</th><th>Categoría</th><th>Estado</th><th>Versión</th><th>Próximo paso</th></tr></thead><tbody>${rows}</tbody></table>`);
  },

  recursos() {
    const files = [
      ['Preset PrimeVue · Growlat Conversations', 'src/theme/convos.preset.js', 'v1 · pendiente reemplazar por v2'],
      ['Preset PrimeVue · Growlat App', 'src/theme/growlat.presets.js', 'v1 · pendiente reemplazar por v2'],
      ['Estilos de texto (CSS)', 'src/Assets/Typography.css', 'v1 · 30 estilos'],
      ['Tokens semánticos', 'data/tokens/semantic.json', 'Exportado de Figma'],
      ['Tokens primitivos', 'data/tokens/primitives.json', 'Exportado de Figma'],
      ['Spacing y radios', 'data/tokens/spacing-radius.json', 'Exportado de Figma'],
      ['Tipografía', 'data/tokens/typography.json', 'Exportado de Figma'],
    ];
    return header('Recursos', 'Descargas', 'Presets, estilos y tokens listos para integrar en un proyecto Vue 3.') +
      card('Archivos', `<div style="padding:1.25rem;display:flex;flex-direction:column;gap:.75rem">${files.map(([n, p, v]) => `
        <div class="res-file-card"><div class="res-file-meta"><div class="res-file-name">${esc(n)}<span class="res-ver-tag">${esc(v)}</span></div><div class="res-file-desc"><code>${esc(p)}</code></div></div>
        <a class="res-dl-btn" href="${p}" download>Descargar</a></div>`).join('')}</div>`);
  },

  changelog() {
    return header('Recursos', 'Changelog', 'Versionado SemVer. Cada publicación suma una entrada.') +
      STATE.site.changelog.map(e => card(`v${e.version}`, `<ul class="v2-list">${e.notes.map(n => `<li>${esc(n)}</li>`).join('')}</ul>`, `<span class="v2-muted">${esc(e.date)}</span>`)).join('');
  },
};

/* ─── Página de componente ───────────────────────────────── */
async function componentPage(c) {
  const p = STATE.site.platforms, s = c.sections || {};
  const right = `${statusBadge(c.status)}${c.siteVersion ? `<span class="badge badge-neutral">V ${esc(c.siteVersion)}</span>` : ''}`;
  let html = header(c.category, c.title, esc(c.description), right, c.updated ? `Última actualización ${c.updated}` : '');
  const meta = [['Componente base', c.base], ['Plataformas', (c.platforms || []).map(k => p[k].name).join(' · ')], ['Precedentes', (c.precedents || []).join(' · ') || '—'], ['Página en Figma', c.figmaPage], ...(s.meta || [])];
  html += `<div class="spec-meta-bar v2-meta">${meta.map(([k, v]) => `<div class="spec-meta-item"><span class="spec-meta-label">${esc(k)}</span><span class="spec-meta-value">${esc(v)}</span></div>`).join('')}</div>`;

  if (s.preview) html += card('Preview', `<div class="spec-preview" data-fragment="${s.preview}"></div>`);
  if (s.tokens) {
    const cols = s.tokens.columns;
    const cell = t => { if (!t) return '<span class="spec-hex">—</span>'; const r = resolve(t);
      return `<div class="spec-token-cell"><div class="spec-token-row">${swatch(r.hex)}<span class="token-pill">${esc(t)}</span></div><span class="spec-hex">${r.hex || ''}</span></div>`; };
    html += card('Tokens de color', `<table class="spec-token-table"><thead><tr><th style="width:22%">Propiedad</th>${cols.map(x => `<th>${esc(x)}</th>`).join('')}</tr></thead><tbody>
      ${s.tokens.rows.map(([prop, ...v]) => `<tr><td class="prop-col">${esc(prop)}</td>${v.map(cell).join('')}</tr>`).join('')}</tbody></table>
      <p class="v2-note">Valores resueltos para ${esc(p[STATE.platform].name)}. Cambiá de plataforma arriba para ver la otra.</p>`);
  }
  if (s.typography) {
    const ts = Object.fromEntries(STATE.tokens.typography.styles.map(x => [x.name, x]));
    html += card('Tipografía', `<table class="spec-typo-table"><thead><tr><th>Elemento</th><th>Token</th><th>Familia</th><th>Peso</th><th>REM</th><th>Line height</th></tr></thead><tbody>
      ${s.typography.map(([el, t]) => { const x = ts[t] || {}; return `<tr><td>${esc(el)}</td><td><span class="token-pill">${esc(t)}</span></td><td>${esc(x.family)}</td><td>${x.weight || ''}</td><td><span class="spec-rem">${x.rem || ''}</span></td><td>${esc(x.lineHeight)}</td></tr>`; }).join('')}</tbody></table>`);
  }
  if (c.rules && c.rules.length) html += card('Uso y reglas', `<ul class="v2-list">${c.rules.map(r => `<li>${esc(r)}</li>`).join('')}</ul>`);
  if (s.code) html += s.code.map(k => card('Implementación', `<div class="v2-code-head">${esc(k.title)}<button class="code-copy-btn" onclick="copyCode(this)">Copiar</button></div><div style="padding:1.25rem"><div class="spec-code-block"><pre>${esc(k.code)}</pre></div></div>`)).join('');
  if (c.todos && c.todos.length) html += card('Pendientes', `<ul class="v2-list v2-list--todo">${c.todos.map(r => `<li>${esc(r)}</li>`).join('')}</ul>`);
  if (c.legacy) html += `<div class="v2-legacy-banner"><strong>Contenido de la versión 1.0</strong><p>Esta sección viene del sitio anterior y puede tener valores desactualizados. Se reemplaza al migrar el componente al formato v2.</p></div><div class="v2-legacy" data-fragment="${c.legacy}"></div>`;
  if (!s.preview && !c.legacy) html += `<div class="v2-empty"><p class="v2-empty-title">Todavía no está documentado</p><p>La ficha se completa desde la página <strong>${esc(c.figmaPage)}</strong> del archivo de Figma.</p><a class="btn btn-secondary" href="${STATE.site.figma.url}" target="_blank" rel="noopener">Abrir Figma</a></div>`;
  return html;
}

async function hydrateFragments(root) {
  for (const el of root.querySelectorAll('[data-fragment]')) {
    try {
      el.innerHTML = await getText(el.dataset.fragment);
      el.querySelectorAll('script').forEach(old => { const s = document.createElement('script'); s.textContent = old.textContent; old.replaceWith(s); });
    } catch (e) { el.innerHTML = `<p class="v2-note">No se pudo cargar ${esc(el.dataset.fragment)}.</p>`; }
  }
  if (typeof legacyInit === 'function') legacyInit(root);
}

/* ─── Router ─────────────────────────────────────────────── */
async function render() {
  const slug = (location.hash.replace(/^#\/?/, '') || 'intro').split('?')[0];
  STATE.route = slug;
  const page = $('#page');
  let html;
  if (PAGES[slug]) html = PAGES[slug]();
  else if (STATE.components[slug]) html = await componentPage(STATE.components[slug]);
  else html = header('404', 'No encontrado', `No existe la página <code>${esc(slug)}</code>.`) + '<a class="btn btn-secondary" href="#/intro">Volver al inicio</a>';
  page.innerHTML = html;
  buildSidebar($('#searchInput').value);
  const title = (STATE.components[slug] || STATE.site.foundations.find(f => f.slug === slug) || {}).title;
  document.title = title ? `${title} · BREW Design System` : 'BREW Design System';
  $('#main').scrollTop = 0;
  await hydrateFragments(page);
}

/* ─── Arranque ───────────────────────────────────────────── */
(async function boot() {
  try {
    const [site, semantic, primitives, typography, spacing] = await Promise.all([
      getJSON('data/site.json'), getJSON('data/tokens/semantic.json'), getJSON('data/tokens/primitives.json'),
      getJSON('data/tokens/typography.json'), getJSON('data/tokens/spacing-radius.json')]);
    Object.assign(STATE, { site, tokens: { semantic, primitives, typography, spacing } });
    const slugs = site.componentGroups.flatMap(g => g.items);
    const list = await Promise.all(slugs.map(s => getJSON(`data/components/${s}.json`).catch(() => null)));
    list.filter(Boolean).forEach(c => STATE.components[c.slug] = c);
    $('#siteVersion').textContent = 'v' + site.version;
    $('#figmaLink').href = site.figma.url; $('#repoLink').href = site.repo;
    buildPlatformMenu(); wireSearch();
    let saved = 'conversations'; try { saved = localStorage.getItem('brew-platform') || saved; } catch (e) {}
    window.addEventListener('hashchange', render);
    applyPlatform(site.platforms[saved] ? saved : 'conversations');
  } catch (e) {
    $('#page').innerHTML = `<div class="v2-empty"><p class="v2-empty-title">No se pudieron cargar los datos</p><p>Si abriste el archivo con doble clic, levantá un servidor local (por ejemplo <code>npx serve .</code>). En GitHub Pages funciona sin configuración.</p></div>`;
    console.error(e);
  }
})();
