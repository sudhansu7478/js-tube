const obj = {};  
Object.preventExtensions(obj);  
obj.o = 3;  
  
console.log(  
    obj.hasOwnProperty("o")  
);