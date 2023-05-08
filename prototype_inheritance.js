var bird = {
  hasWings: true,
  canFly: true,
  hasFeathers: true
};

var fish = {
  hasFins: true,
  canSwim: true,
  hasEyes: true,
}

var carnivore = {
  canHunt: true,
  canKill: true,
  canSee: true,

}
var eagle1 = Object.create(bird);
console.log("eagle ", eagle1);

console.log("eagle has wings:", eagle1.hasWings);
console.log("eagle can fly: ", eagle1.canFly);
console.log("eagle has feathers: ", eagle1.hasFeathers);

// you can build as many object as you want using inheritance
var dove = Object.create(bird);
console.log("dove has wings :", dove.hasWings);

var dolphin = Object.create(fish)
console.log("dolphin can swim:", dolphin.canSwim);

var dove = Object.create(bird);
dove.canSwim = false;
console.log("dove can swim:", dove.canSwim);

var lion = Object.create(carnivore);
console.log("Lions can kill: ", lion.canKill);

var lion = Object.create(bird);
lion.canFly = false;
console.log("Lions can fly: ", lion.canFly);