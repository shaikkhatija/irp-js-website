"use strict"; 

// Types & Coercion


console.log('"5" + 2 =', "5" + 2); // "52"


console.log('"5" - 2 =', "5" - 2); // 3


console.log('typeof null =', typeof null); // "object"
console.log("");


function parseAmount(input) {
  
  if (input === null || input === undefined) {
    throw new Error("Amount is required.");
  }

  if (typeof input !== "string" && typeof input !== "number") {
    throw new Error(`Invalid type: expected string or number but received ${typeof input}.`);
  }

  let value = input;

 
  if (typeof value === "string") {
    value = value.trim();

   
    if (value === "") {
      throw new Error("Amount cannot be empty.");
    }
  }


  const amount = Number(value);
  if (Number.isNaN(amount)) {
    throw new Error(`"${input}" is not a valid number.`);
  }

 
  if (amount <= 0) {
    throw new Error("Amount must be greater than zero.");
  }


  return amount;
}


const testInputs = ["500", " 250 ", "", "abc", null, undefined, "12.5.3"];

for (const input of testInputs) {
  try {
    const result = parseAmount(input);
    console.log(`parseAmount(${JSON.stringify(input)}) ->`, result);
  } catch (error) {
    console.log(`parseAmount(${JSON.stringify(input)}) threw ->`, error.message);
  }
}

const deposit = parseAmount("5");
const fee = 2;
console.log(`Deposit "5" + fee ${fee} = ${deposit + fee}`); // 7
console.log("");


// Scoping & Hoisting
const BANK_NAME = "JS National Bank";
let transactionCounter = 0;
transactionCounter++; 
console.log(`${BANK_NAME} — transactions so far: ${transactionCounter}`);

try {
  BANK_NAME = "Hacked Bank"; 
} catch (error) {
  console.log(`Protected bank name -> ${error.name}: ${error.message}`);
}
console.log("");

// HOISTING DEMO
console.log("var before declaration:", hoistedVar); 
var hoistedVar = "I am a var";


try {
  console.log(hoistedLet);
} catch (error) {
  console.log(`let before declaration -> ${error.name}: ${error.message}`);
}
let hoistedLet = "I am a let";
announce(); 

function announce() {
  console.log("Function declaration called before definition: Welcome to JS National Bank!");
}


try {
  notify();
} catch (error) {
  console.log(`Function expression before definition -> ${error.name}: ${error.message}`);
}
var notify = function () {
  console.log("Notification sent.");
};
console.log("");

// The Asynchronous Loop Bug
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("var loop:", i); 
  }, 0);
}

for (let j = 0; j < 3; j++) {
  setTimeout(function () {
    console.log("let loop:", j); 
  }, 0);
}