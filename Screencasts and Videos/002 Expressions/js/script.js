//Expressions - Casting

//var stringVar = "6";


//Casting functions are case specific.
//var result = 7 + Number(stringVar);

//console.log(result)

var areaCode = 863;
var firstPart = 675;
var secPart = 1599;

//(863) 675-1599
var phoneNo = "(" + String(areaCode) + ")" + String(firstPart) + "-" + String(secPart);

console.log(phoneNo);