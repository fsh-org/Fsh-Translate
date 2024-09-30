function fromObjecrWithPrefix(obj, prefix) {
  return Object.keys(obj)
    .filter(k=>k.length>1)
    .map(k => {
      if (typeof o[k] === 'string') {
        return `${prefix}-${k} = ${o[k]}`;
      } else {
        return fromObjectWithPrefix(o[k], prefix+'-'+k)
      }
    }).join('\n');
}

export function fromObject(obj) {
  return Object.keys(obj)
    .filter(k=>k.length>1)
    .map(k => {
      if (typeof o[k] === 'string') {
        return `${k} = ${o[k]}`;
      } else {
        return fromObjectWithPrefix(o[k], k)
      }
    }).join('\n');
}

export function toObject(ftl) {}
