 function arrayEqual(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a == b) return true;
  if(a.length !== b.length ) return false

  for(i=0; i<a.length; i++){
    if(a[i] !== b[i]){
        return false
    }
  }
  return true
}


module.exports = arrayEqual