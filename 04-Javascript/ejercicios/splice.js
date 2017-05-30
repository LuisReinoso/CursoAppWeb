/**
 * Created by USRDEL on 22/5/17.
 */
var arregloStrings = ["1","2"];
arregloStrings.push("3");

arregloStrings.pop(); //["1"]
console.log(arregloStrings)

arregloStrings.splice(0,1, "3");
console.log(arregloStrings);
