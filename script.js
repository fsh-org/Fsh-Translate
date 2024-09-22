// On window load do some stuff
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

// Utility functions
function openModal(id) {
  document.getElementById(id).showModal();
}
function parse(con, type) {
  if (type === 'json') return JSON.parse(con);
  if (type === 'ftl') {
    let obj = {};
    con.split('\n').map(ln=>obj[ln.split(' = ')[0]]=ln.split(' = ')[1]);
    return obj;
  }
  return {}
}
function readFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (evt) => {
      resolve(evt.target.result);
    };
    reader.onerror = (evt) => {
      reject('Could not read')
    };
    reader.readAsText(file);
  });
}

// On file load
document.getElementById('file').addEventListener('change', (event)=>{
  let file = event.target.files[0];
  readFile(file)
    .then(content=>{
      parse(content, file.name.split('.').slice(-1)[0])
    })
    .catch(err=>{
      alert('Error: '+err)
    })
}, false)
