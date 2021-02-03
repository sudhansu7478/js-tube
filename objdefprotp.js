const object1 = {};
Object.defineProperty(object1,'property1',{value:69,});
object1.property1;
//throws an error in strict mode
console.log(object1.property1); 
