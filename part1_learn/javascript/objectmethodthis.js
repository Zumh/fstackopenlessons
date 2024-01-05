// we are not going to use this part of lessons
// but is good to know about old react object examples

console.log("\n\nWe can assign methods to an object by defining properties that are functions:")
const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
  
    greet: function() {
      console.log('hello, my name is ' + this.name)
    },
  }
  
arto.greet()  // "hello, my name is Arto Hellas" gets printed


// Methods can be assigned to objects even after the creation of the object:
console.log("\n\nMethods can be assigned to objects even after the creation of the object")
const artoAssigned= {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {
      console.log('hello, my name is ' + this.name)
    },
  }
  
  
  artoAssigned.growOlder = function() {
    this.age += 1
  }
  
  console.log(artoAssigned.age)   // 35 is printed
  artoAssigned.growOlder()
  console.log(artoAssigned.age)   // 36 is printed

// Addition method
console.log("\n\nObject Addition method using referencing")
const artoAddition = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {
      console.log('hello, my name is ' + this.name)
    },
  
    doAddition: function(a, b) {
      console.log(a + b)
    },
  }
  
  artoAddition.doAddition(1, 4)        // 5 is printed
  
  const referenceToAddition = artoAddition.doAddition
  referenceToAddition(10, 15)   // 25 is printed

  // Object Binding allow us to keep track of 'this' reference object
  console.log("\n\nObject Binding allow us to keep track of 'this' reference object")
  const artoBind = {
    name: 'Arto Hellas',
    greet: function() {
      console.log('hello, my name is ' + this.name)
    },
  }

//artoBind.greet()       // "hello, my name is Arto Hellas" gets printed  
//const referenceToGreet = artoBind.greet
//referenceToGreet() // prints "hello, my name is undefined"

// Calling artoBind.greet.bind(artoBind) creates a new function where this is bound to point to Arto, independent of where and how the method is being called.
setTimeout(artoBind.greet.bind(artoBind), 1000)

// Another example of using .bind in js with HTML document for button object
/*
let user = {
    name: 'John',
    logName: function() {
      console.log(`User's name is ${this.name}`);
    }
  };
  
  // Create a button element
  let button = document.createElement('button');
  button.textContent = 'Click me';
  
  // Add an event listener to the button and use bind() to set the context to the user object
  button.addEventListener('click', user.logName.bind(user));
  
  // Append the button to the document body
  document.body.appendChild(button);
  */


