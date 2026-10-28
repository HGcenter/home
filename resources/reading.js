document.querySelectorAll('[data-print]').forEach(button => button.addEventListener('click', () => window.print()));
function syncPrintValues() {
  document.querySelectorAll('textarea').forEach(field => {
    const output = field.nextElementSibling;
    if (output && output.classList.contains('print-value')) output.textContent = field.value || ' ';
  });
}
document.addEventListener('input', syncPrintValues);
window.addEventListener('beforeprint', syncPrintValues);
syncPrintValues();
