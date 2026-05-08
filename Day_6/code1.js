function person(name) {
    this.name = name;
}
 
person.prototype.sayHi = function() {
    console.log('hello ' + this.name);
}
const me = new person("aryan");
const you = new person("you");
me.sayHi();
you.sayHi();
console.log(Object.getPrototypeOf(me) === person.prototype)
console.log(me.sayHi === you.sayHi)