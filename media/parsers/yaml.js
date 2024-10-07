function fromObjectWithPrefix(obj, prefix) {
  return Object.keys(obj)
    .map(k => {
      if (typeof obj[k] === 'object') {
        return prefix+k+':\n'+fromObjectWithPrefix(obj[k], prefix+'  ');
      } else {
        return `${prefix}${k}: ${obj[k]}`;
      }
    })
    .join('\n');
}

export function fromObject(obj) {
  return Object.keys(obj)
    .map(k => {
      if (typeof obj[k] === 'object') {
        return k+':\n'+fromObjectWithPrefix(obj[k], '  ');
      } else {
        return `${k}: ${obj[k]}`;
      }
    })
    .join('\n');
}

export function toObject(yaml) {
  let obj = {};
  yaml
    .split('\n')
    .filter(l => l.length>0)
    .join('\n')
    .split(/\n(?=[^ ])/)
    .map(l => l.split('\n'))
    .forEach(l => {
      for (let i = 0; i<l.length; i++) {
        
      }
    });
  return obj;
}
