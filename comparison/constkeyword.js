// const keyword

// The const variable must be initialized
// console.log(user);
// const user;

// We can't access the const variable before initialization
// console.log(user);
// const user = "Andrew"; // This gives an error

// We can't redeclare a const variable
// user = "Ann';

function two() {
    return 2;
}

function one() {
    return 1;
}

function calculate(initialValue, incrementValue) {
    return initialValue() + incrementValue() + incrementValue();
}

console.log(calculate(two, one));
