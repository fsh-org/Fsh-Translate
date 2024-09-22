function openModal(id) {
  document.getElementById(id).showModal();
}

document.addEventListener("DOMContentLoaded", () => {
  Split(['.side', '.panel'], {
    sizes: [25, 75]
  });
  tippy('#nav-file-button', {
    content: `<button onclick="openModal('file-load')">Load</button><button onclick="openModal('file-save')">Save</button>`,
    trigger: 'click',
    placement: 'bottom',
    arrow: false,
    interactive: true,
    allowHTML: true
  });
});

function parse(con, type) {
  if (type === 'json') return JSON.parse(con);
  if (type === 'ftl') {
    let obj = {};
    con.split('\n').map(ln=>obj[ln.split(' = ')[0]]=ln.split(' = ')[1]);
    return obj;
  }
  return {}
}
