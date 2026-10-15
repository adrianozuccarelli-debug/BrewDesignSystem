/* Helpers de las páginas v1 (contenido en /legacy). Se eliminan a medida que cada
   componente se migra al formato v2 (data/components/*.json). */
function dtTab(id, btn) {
  document.querySelectorAll('.dt-variant').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.dt-tab').forEach(t => t.classList.remove('active'));
  const el = document.getElementById('dtv-' + id);
  if (el) el.classList.add('active');
  if (btn) btn.classList.add('active');
}
function dtUpdateBulk(suffix) {
  const bar = document.getElementById('bulk' + suffix);
  if (!bar) return;
  const variant = bar.closest('.dt-variant');
  const checked = variant ? variant.querySelectorAll('tbody tr.row-sel').length : 0;
  const counter = document.getElementById('bulkCount' + suffix);
  bar.classList.toggle('active', checked > 0);
  if (counter) counter.textContent = checked;
}
function dtToggleRow(checkbox, suffix) {
  checkbox.classList.toggle('checked');
  const row = checkbox.closest('tr');
  if (row) row.classList.toggle('row-sel');
  if (suffix) dtUpdateBulk(suffix);
}
function dtToggleAll(headerCheckbox, suffix) {
  const table = headerCheckbox.closest('table');
  const on = !headerCheckbox.classList.contains('checked');
  headerCheckbox.classList.toggle('checked', on);
  table.querySelectorAll('tbody tr').forEach(r => {
    r.classList.toggle('row-sel', on);
    const cb = r.querySelector('.check-box');
    if (cb) cb.classList.toggle('checked', on);
  });
  if (suffix) dtUpdateBulk(suffix);
}
function legacyInit(root) {
  ['D','S','B','E'].forEach(dtUpdateBulk);
}
function openDrawer() {
  document.getElementById('drawerBackdrop').classList.add('open');
  document.getElementById('drawerPanel').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  document.getElementById('drawerBackdrop').classList.remove('open');
  document.getElementById('drawerPanel').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });
function copyCode(btn) {
  const block = btn.closest('.code-block, .spec-code-block');
  const code = block ? block.querySelector('pre, code').innerText : '';
  navigator.clipboard.writeText(code).then(() => {
    const t = btn.textContent; btn.textContent = 'Copiado'; btn.classList.add('copied');
    setTimeout(() => { btn.textContent = t; btn.classList.remove('copied'); }, 1800);
  });
}
function navigate(id) { // enlaces internos del contenido v1
  const map = { buttons:'button', overlays:'drawer', feedback:'toast', datatable:'datatable', badges:'badges', nota:'nota', inputs:'inputs', tokens:'tokens', typography:'tipografia', introduction:'intro', recursos:'recursos', 'client-card':'client-card' };
  location.hash = '#/' + (map[id] || id);
}
