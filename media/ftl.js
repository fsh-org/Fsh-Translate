function fromObjecrWithPrefix(obj, prefix) {
  return Object.keys(obj)
    .filter(k=>k.length>1)
    .map(k => {
      if (typeof o[k] === 'string') {
        return `${k} = ${o[k]}`;
      } else {
        return 'Objects in Objects not supported yet, sorry!'
      }
    }).join('\n');
}

function fromObject(obj) {
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

function toObject(ftl) {}

module.exports = {
  fromObject,
  toObject
}
