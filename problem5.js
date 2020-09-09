var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
 var newObject = {};
 arr.forEach(x => newObject[x[0]] = x[1]);
 return newObject;
}
console.log(fromListToObject(arr));