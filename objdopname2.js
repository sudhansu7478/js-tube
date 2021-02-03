function Pasta(grain,size,shape){
    this.grain = grain;
    this.size = size;
    this.shape = shape;
}
var spaghetti = new Pasta("wheat",2,"circle");
var names = Object.getOwnPropertyNames(spaghetti).filter(Checkkey);
document.write(names);
//Check whether the first character of a string is 's'.
function Chekkey(value){
    var firstChar = value.substr(0,1);
    if(firstChar.toLowerCase() =='s')
    return true;
    else
    return false;
}