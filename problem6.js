var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
 
 //Your code
 for(let i = 0; i < arr.length; i++)
 {
     let jsonObject = {};
     //arr[i].forEach(x => console.log(x))
     arr[i].forEach(x => jsonObject[x[0]] = x[1]);
     tranformEmployeeList.push(jsonObject);
 }
 
 return tranformEmployeeList; } console.log(transformEmployeeData(arr));