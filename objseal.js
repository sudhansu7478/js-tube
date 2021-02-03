const object1 = {  
    property1: 29  
  };  
  Object.seal(object1);  
  // Prevents other code from deleting properties of an object.  
  object1.property1 =45;  
  console.log(object1.property1);  
  delete object1.property1;  
     // cannot delete when sealed  