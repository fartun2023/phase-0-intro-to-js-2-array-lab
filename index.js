const cats = ["Milo", "Otis", "Garfield"]
function destructivelyPrependCat(name) {
    cats.unshift('Bob');
  }
  function destructivelyAppendCat(params) {
    cats.push('Ralph');
  }
  function destructivelyRemoveLastCat(params) {
    cats.pop();
  }
  function destructivelyRemoveFirstCat(params) {
    cats.shift();
  }
  function appendCat(name) {
    return [...cats, name];
  }
  function prependCat(name) {
    return [name, ...cats ];
  }
  function removeLastCat() {
    return cats.slice(0, -1);
  }
  function removeFirstCat() {
    return cats.slice(1);
  }


