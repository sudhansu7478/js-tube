const object1 = {  
    property1: 56  
  };  
  console.log(Object.is(object1));  
    
  Object.seal(object1);  
  console.log(Object.isSealed(object1));  