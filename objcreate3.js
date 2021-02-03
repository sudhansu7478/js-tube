function fruits(){
    this.name='fruit';
    this.season='winter';
}
function apple(){
    fruits.call(this);
}
apple.prototype = Object.create(fruits.prototype);
const app = new apple();
console.log(app.name,app.season);
console.log(app.season);