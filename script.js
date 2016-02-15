//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//  _______  ___  ___  ___ __  __ ____   ___  _____  _  //
//  ______  / _ \/ _ |/  |/ // / ___/  / _ |/_  __/ __  //
//  _____  / , _/ _  / /|  // / /     / _  | / /   ___  //
//  ____  /_/  /_/ |_ / |_//_/\___/  /_/ |_\/_/  _____  //
//   ________ __ ____   ____  __   ____ _____ ____ ___  //
//  /_  __/ // / ___/ / ___/ _  |/ ___/_  __/ ___/ _  | //
//   / / / _  / ___/ / /  / // / \_  \ / / / /  / // /  //
//  /_/ /_//_/____/ \___/ \___/|____/ /_/  \___/\___/   //
//////////////////////////////////////////////////////////
//                BROUGHT TO YOU BY                     //
//      DANNON OIKOS TRIPLE ZERO GREEK YOGURT           //
//////////////////////////////////////////////////////////

//-----------------------
//      OBJECTS
//-----------------------

// DIFFERENT SCENARIOS
var scenarios = {
  homeScreen: "//////////PANIC AT THE COSTCO\\\\\\\\\\\\\\\\\\\n\nbrought to you by\nDannon\xAE OIKOS\xAE Triple Zero Greek Yogurt\n\nThe Official Yogurt of the NFL",
  intro: "You could have sworn this is where they used to keep the dairy, but all you see is rotisserie chickens.",
  chicken: "You're by the chicken.",
  beer: "There's a shitload of ice cold beer and a mopey stock boy mopping up a spill by the Keystone Light.",
  stockBoy: {
    1: "Oh man, the stock boy, like, just started working here. He has no idea where anything is.",
    2: "The stock boy would love to help you but he was just going on break. He'll totally smoke you out though.",
    3: "The stock boy is pretty sure he saw the over past the chicken."
  },
  loadingDock: "You follow the stock boy out to the loading dock and he lights up a joint. It's that good good. Real purple skurp.",
  dairy: "HOORAY!! You can finally buy some Dannon\xAE OIKOS\xAE Triple Zero Greek Yogurt!",
  checkout: "You see a bored cashier dozing in the 10 items or less line. You can see the exit from here!",
  cashier: {
    1: "That is not the cashier's department.",
    2: "The cashier is going on her break. Ask a manager.",
    3: "The cashier thinks the Dannon\xAE OIKOS\xAE Triple Zero Greek Yogurt is in dairy.",
  },
  wine: "This is probably not where they keep the Dannon\xAE OIKOS\xAE Triple Zero Greek Yogurt, but there's a sale on Andre.",
  why: "Why would you even come here?",
  exit: "Thank you for playing PANIC AT THE COSTCO\n\nbrought to you by\n\nDannon\xAE OIKOS\xAE Triple Zero Greek Yogurt\n\n",
};

// PLAYER OPTIONS AT EACH SCENARIO
var options = {
  chicken: "Do you want to go LEFT, RIGHT, or SHOP?",
  beer: "Do you want to go LEFT, RIGHT, SHOP, or ASK the stock boy for help?",
  loadingDock: "Do you want to HIT it again or go RIGHT back to the beer aisle?",
  dairy: "Do you want to go LEFT, RIGHT, or SHOP?",
  checkout: "Do you want to go LEFT, RIGHT, SHOP, ASK the cashier for help, or checkout and EXIT?",
  wine: "Do you want to go LEFT, RIGHT, or SHOP?",
};

// GROCERY ITEMS AT EACH SCENARIO
var items = {
  chicken: {
    1: "a rotisserie chicken",
    2: "fried chicken",
    3: "chicken salad"},
  beer: {
    1: "some cheap beer",
    2: "some expensive beer",
    3: "Lime-A-Ritas"},
  dairy: {
    1: "Dannon\xAE OIKOS\xAE Triple Zero Greek Yogurt Coconut Creme",
    2: "Dannon\xAE OIKOS\xAE Triple Zero Greek Yogurt Strawberry",
    3: "store-brand Greek yogurt"},
  checkout: {
    1: "some candy",
    2: "a cold drink",
    3: "a magazine"},
  wine: {
    1: "some cheap champagne",
    2: "some overpriced wine",
    3: "a case of rose"},
};

var prices = {
  chicken: {
    1: "4.99",
    2: "6.49",
    3: "3.79"},
  beer: {
    1: "9.99",
    2: "15.99",
    3: "10.99"},
  dairy: {
    1: "2.50",
    2: "2.50",
    3: "1.50"},
  checkout: {
    1: "1.19",
    2: ".99",
    3: "1.99"},
  wine: {
    1: "5.99",
    2: "15.99",
    3: "129.99"},
};

//-----------------------
//      FUNCTIONS
//-----------------------

// CONFIRMS THAT THE USER WANTS TO PLAY
function playerReady() {
  return confirm("You're all lost in the supermarket!\n\nYou came in here for a special offer on Dannon\xAE OIKOS\xAE Triple Zero Greek Yogurt but you can no longer shop happily!\n\nCan you find your way out?");
}

// PRINTS SCENARIO WHEN PLAYER ENTERS NEW AREA
function setNewScene(prevScene, currScene) {
  if (prevScene != currScene) {
    alert(scenarios[currScene]);
  }
}

// TAKES CURRENT SCENARIO AND PLAYER INPUT, RETURNS NEW SCENARIO
function calcOutcome(key, input, cart, subTotal) {
  var playerInput = prompt(input)
  if (playerInput === null) {
    playerInput = "QUIT";
  }
  else {
    playerInput = playerInput.toUpperCase();
  }
  switch (playerInput) {
    case "LEFT":
      return leftTurn(key);
    case "RIGHT":
      return rightTurn(key);
    case "SHOP":
      return shop(key);
    case "CART":
      printCart();
      break;
    case "ASK":
      return askEmployee(key);
    case "HIT":
      return hitIt(key);
    case "EXIT":
      return exitCheck(key, cart);
    case "QUIT":
      alert("BYE FELICIA");
      return playerInput;
    default:
      alert("Type one of the OPTIONS to proceed. Type CART to view the contents of your cart. Type QUIT to leave the game.");
      return false;
  }
}

// RETURNS THE NEW SCENARIO AFTER A LEFT TURN
function leftTurn(key) {
  var newKey = null;
  switch (key) {
    case "chicken":
      newKey = "beer";
      break;
    case "beer":
      newKey = "dairy";
      break;
    case "dairy":
      newKey = "checkout";
      break;
    case "checkout":
      newKey = "wine";
      break;
    case "wine":
      newKey = "chicken";
      break;
    default:
      newKey = playerInput;
  }
  alert("You went LEFT at the " + key + " and find yourself over by the " + newKey + ".");
  return newKey;
}

// RETURNS THE NEW SCENARIO AFTER A RIGHT TURN
function rightTurn(key) {
  var newKey = null;
  switch (key) {
    case "chicken":
      newKey = "wine";
      break;
    case "beer":
      newKey = "chicken";
      break;
    case "dairy":
    case "loadingDock":
      newKey = "beer";
      break;
    case "checkout":
      newKey = "dairy";
      break;
    case "wine":
      newKey = "checkout";
      break;
    default:
      return playerInput;
  }
  alert("You went RIGHT at the " + key + " and find yourself over by the " + newKey + ".");
  return newKey;
}

// RETURNS TRUE IF THE GIVEN ITEM IS IN THE CART
function cartContains(cart, item) {
  return (cart.indexOf(item) > -1);
}

// IF ROOM IN CART, ASK PLAYER WHICH ITEM THEY WANT TO BUY
function shop(key){
  if (cartFull(cart)){
    if(confirm("Your cart is full. Do you want to remove the last item?")) {
      cart.pop();
      cost.pop();
    }
  }
  else {
    do {
      var playerInput = prompt("Do you want to buy\n1 " + items[key][1] + ",\n2 " + items[key][2] + ", or\n3 " + items[key][3] + "?");
    } while (playerInput != "1" && playerInput != "2" && playerInput != "3");
    buy(key, playerInput);
  }
  return key;
}

// PUSHES CURRENT ITEM INTO CART IF ROOM, PROMPTS TO POP IF NOT
function buy(key, playerInput) {
  alert("You bought " + items[key][playerInput] + " for $" + prices[key][playerInput] + ".");
  cart.push(items[key][playerInput]);
  cost.push(prices[key][playerInput])
  printCart();
}

// CHECKS IF THE PLAYER'S CART IS FULL
function cartFull(cart) {
  return (cart.length >= 5);
}

// CALCULATES TOTAL COST OF ITEMS IN CART
function calcSubtotal() {
  var subtotal = 0;
  for (var i = 0; i < cost.length; i++) {
    subtotal += parseFloat(cost[i]);
  }
  return subtotal;
}

// SHOWS PLAYER THE CONTENTS OF THEIR CART
function printCart() {
  alert("Your cart: " + cart + ".\nSubtotal: $" + calcSubtotal());
  return key;
}

// GENERATES RANDOM ADVICE FROM THE GIVEN EMPLOYEE
function askEmployee(key) {
  var sceneNum = Math.floor(Math.random() * 3) + 1;
  if (key === "beer") {
    alert(scenarios["stockBoy"][sceneNum]);
    if (sceneNum === 2) {
      if (confirm("Do you want to go smoke weed by the loading dock with the stock boy?")) {
        return "loadingDock";
      }
    }
  }
  if (key === "checkout") {
    alert(scenarios["cashier"][sceneNum]);
  }
  return key;
}

function hitIt(key) {
  if (key === "loadingDock") {
    alert("The stock boy told you that was the dankness. You are too high to find your way out of the Costco.");
    key = "TOOHIGH";
  }
  else {
    alert("You can not hit it in the middle of the Costco. Find the stock boy. He might smoke you out.");
  }
  return key;
}

// LETS PLAYER LEAVE IF THEY BOUGHT OUR SPONSOR'S YOGURT
function exitCheck(key, cart) {
  if (key === "checkout") {
    if (cartContains(cart, "Dannon\xAE OIKOS\xAE Triple Zero Greek Yogurt Coconut Creme") ||
        cartContains(cart, "Dannon\xAE OIKOS\xAE Triple Zero Greek Yogurt Strawberry")) {
      alert("HOORAY YOU FOUND YOUR WAY OUT OF THE COSTCO!");
      printCart();
      alert("SCORE: \t0 added sugar*\n\t\t0 artificial sweeteners\n\t\t0 fat");
      key = "EXIT";
    }
    else {
      alert("YOU CANNOT LEAVE THE COSTCO WITHOUT BUYING DANNON\xAE OIKOS\xAE TRIPLE ZERO GREEK YOGURT");
    }
  }
  else {
    alert("This is not an exit.");
  }
  return key;
}

//-----------------------
//      MAIN PROGRAM
//-----------------------

alert(scenarios["homeScreen"]);
if (playerReady()) {
  alert(scenarios["intro"]);
  var gameOver = false;
  var cart = [];
  var cost = [];
  var key = "chicken";
  var currentScenario = scenarios[key];
  var currentOptions = options[key];
  var playerInput = null;
  var outcome = null;
  while (!gameOver) {
    do {
      var outcome = calcOutcome(key, options[key], cart);
    } while (!outcome);

    if (outcome === "QUIT" || outcome === "EXIT" || outcome === "TOOHIGH") {
      gameOver = true;
    }
    else {
      setNewScene(key, outcome);
      key = outcome;
    }
  }
}
else {
  alert(scenarios["why"]);
}
alert(scenarios["exit"]);
