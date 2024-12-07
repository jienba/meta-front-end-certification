// Task 1
var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];

function logDairy() {
  for (const dairyItem of dairy) {
    console.log(dairyItem);
  }
}

logDairy()

// Task 2

const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
  for (const birdItemKey of Object.keys(bird)) {
    console.log(`${birdItemKey}: ${bird[birdItemKey]}`);
  }
}

birdCan()
// Task 3

function animalCan() {
    for (const key in bird) {
      const element = bird[key];
      console.log(`${key}: ${element}`);
    }
}
