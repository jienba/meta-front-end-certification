// Given variables
const dishData = [
  {
    name: "Italian pasta",
    price: 9.55,
  },
  {
    name: "Rice with veggies",
    price: 8.65,
  },
  {
    name: "Chicken with potatoes",
    price: 15.55,
  },
  {
    name: "Vegetarian Pizza",
    price: 6.45,
  },
];
const tax = 1.2;

// Implement getPrices()
function getPrices(taxBoolean) {
  // step 2
  for (const dishItem of dishData) {
    // step 3
    let finalPrice;
    if (taxBoolean == true) {
      // step 4
      finalPrice = dishItem.price * tax;
    } else if (taxBoolean == false) {
      // step 5
      finalPrice = dishItem.price;
    } else {
      // step 6
      console.log("You need to pass a boolean to the getPrices call!");
      return "Jump Out"
    }
    console.log("Dish: "+dishItem.name+ " Price: $"+dishItem.price);
    
  }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guest) {
  getPrices(taxBoolean);

  if (typeof guest == "number" && guest > 0 && guest < 30) {
    // step 11
    let discount = 0;
    if (guest < 5) {
      discount = 5;
    } else if (guest >= 5) {
      discount = 10;
      console.log(`Discount is: $${discount}`);
    }
  } else {
    // Step 12
    console.log("The second argument must be a number between 0 and 30");
  }
}

// Call getDiscount()
// getDiscount(null, -2);
// getDiscount(false, 10);

var result;
console.log(result);
result = 7