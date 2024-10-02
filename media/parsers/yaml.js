export function fromObject(obj) {
  return Object.keys(obj)
    .map(k=>`${k}: ${obj[k]}`)
    .join('\n');
}

export function toObject(yamk) {}
