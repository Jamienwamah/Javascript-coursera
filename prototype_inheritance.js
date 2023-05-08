var bird = {
  hasWings: true,
  canFly: true,
  hasFeathers: true
};
var eagle1 = Object.create(bird);
console.log("eagle ", eagle1);

console.log("eagle has wings:", eagle1.hasWings);
console.log("eagle can fly: ", eagle1.canFly);
console.log("eagle has feathers: ", eagle1.hasFeathers);

// you can build as many object as you want using inheritance
var dove = Object.create(bird);
console.log("dove has wings :", dove.hasWings);