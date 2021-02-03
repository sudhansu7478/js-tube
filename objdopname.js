var obj = { 0: 'a', 1: 'b', 2: 'c' };  
console.log(Object.getOwnPropertyNames(obj).sort()); // logs '0,1,2'  
  
// Logging property names and values using Array.forEach  
  
Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {  
  console.log(val + ' --> ' + obj[val]);  
  
});  
