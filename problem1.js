var obj = {name : "RajiniKanth", age : 33, hasPets : false};
function printAllValues(obj) {
 // your code here
 var output = [];
 for(let ele in obj)
    output.push(obj[ele]);
return output;
}

console.log(printAllValues(obj));