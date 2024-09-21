document.addEventListener("DOMContentLoaded", () => {
  Split(['.side', '.panel']);
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
