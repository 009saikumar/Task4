var obj = {name : 'RajiniKanth', age : 25, hasPets : true};
function printAllKeys(obj) {
 // your code here
 var output = [];
 for(let ele in obj)
    output.push(ele);
 return output;
}
console.log(printAllKeys(obj));