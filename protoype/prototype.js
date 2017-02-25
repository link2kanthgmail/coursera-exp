var parent={
  value:"parentValue",
  obj:{
    objValue:"parentObjValue"
  },
  walk:function(){
    console.log("walking!");
  }
};
var child=Object.create(parent);
console.log("CHILD - child.value",child.value);
console.log("CHILD - child.obj.value",child.obj.objValue);
console.log("PARENT - parent.value",parent.value);
console.log("PARENT - parent.obj.value",parent.obj.objValue);
console.log("parent",parent);
console.log("child",child);

child.value="childvalue";
child.obj.objValue="child obj value";
console.log("**********");
console.log("**********");
console.log("CHILD - child.value",child.value);
console.log("CHILD - child.obj.value",child.obj.objValue);
console.log("PARENT - parent.value",parent.value);
console.log("PARENT - parent.obj.value",parent.obj.objValue);
console.log("parent",parent);
console.log("child",child);
console.log("**********");
console.log("child.obj === parent.obj : ",child.obj === parent.obj);
console.log("**********");
var grandChild=Object.create(child);
console.log("Grand Child : ",grandChild);
grandChild.walk();
console.log("**********");
function Dog(name){
  this.name=name;
  console.log("'this' is : ",this);
}
var myDog=new Dog("Max");
console.log("myDog : ",myDog);
Dog("Max2");
