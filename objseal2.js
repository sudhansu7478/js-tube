const object1 = {  
    property1: 42  
  };  
  Object.seal(object1);  
  object1.property1 = 45;  
  console.log(object1.property1);  
    
  delete object1.property1; // cannot delete when sealed  
  console.log(object1.property1);  
    
  const object2 = {  
    property2: 45};  
  object2.property2 =67;  
  console.log(object2.property2);  