var arr=['John','Michael','Embrose','Herry','Lewis'];  
    var itr=arr.entries();  
    document.write("After applying the entries method:"+"<br>");  
  
    for(var e of itr) //for loop using var.  
    {  
        document.write(e+"</br>");  
    }  