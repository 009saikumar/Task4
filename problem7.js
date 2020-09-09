var expected = {foo: 5, bar: 6};
var actual = {foo: 6, bar: 5};
function assertObjectsEqual(actual, expected, testName){
 if(JSON.stringify(actual) === JSON.stringify(expected))
    return true;
 else 
    return false;
}
var flag = assertObjectsEqual(actual, expected, 'detects that two objects are equal');
if(flag)
console.log("Passed");
else 
console.log("FAILED [" + 'detects that two objects are equal] ' + "Expected " + JSON.stringify(expected) + ", but got " + JSON.stringify(actual));