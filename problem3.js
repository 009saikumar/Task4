var obj = {name: "ISRO", age: 35, role: "Scientist"};
function convertListToObject(obj) {
 // your code here
 var outputArr = [];
 for(let ele in obj)
 {
    let x = [];
    x.push(ele);
    x.push(obj[ele]);
    outputArr.push(x);
 }
 return outputArr;
}

console.log(convertListToObject(obj));
