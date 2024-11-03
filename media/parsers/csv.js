function fromObjecrWithPrefix(obj, prefix) {
  return {};
}

export function fromObject(obj) {
  let csv = 'id,'+Object.keys(obj).join(',');
  return csv;
}

export function toObject(csv) {
  let obj = {};
  let lines = csv.split('\n');
  let names = [];
  lines[0].split(',').slice(1, lines[0].split(',').length).map(l => {obj[l] = {};names.push(l)});
  lines.slice(1, lines.length).map(l => {
    let v = l.split(',');
    for (let i = 1; i<v.length; i++) {
      obj[names[i-1]] = v[i];
    }
  })
  return obj;
}
