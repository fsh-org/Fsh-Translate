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
    con.split('\n').map(ln=>{
      ln = ln
        .replace(/( ?)=( ?)/, '=')
        .split('=');
      obj[ln[0]] = ln.slice(1, ln.length).join('=')
    });
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
function side() {
  document.getElementById('lang-select').innerHTML = Object.keys(data).map(l=>`<option value="${l}"${l===main?' disabled':''}>${l}</option>`).join('');
  document.getElementById('tree').innerHTML = 'stuf';
}

// On file load
var main = 'en';
var data = {};
document.getElementById('file-load-button').addEventListener('click', ()=>{
  let files = document.getElementById('file').files;
  let type = document.getElementById('type-load').value;
  if (type === 'json-o') {
    main = prompt('Main language iso code (ej: en, es-ES...)') || 'en';
    for (let i = 0; i<files.length; i++) {
      readFile(files[i]).then(content => {
        data[prompt('Iso code for: '+files[i].name, files[i].name.split('.')[0])] = parse(content, 'json');
        side();
      })
    }
  } else if (type === 'json-m') {
    main = prompt('Main language iso code (ej: en, es-ES...)') || 'en';
    readFile(files[0]).then(content => {
      data = parse(content, 'json');
      side();
    })
  } else if (type === 'ftl') {
    // ftl
    side();
  }
}, false)
