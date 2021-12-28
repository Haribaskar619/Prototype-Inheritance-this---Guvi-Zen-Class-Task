// Call , Bind and Apply Method with Examples

// Bind : It borrows the method of another object with specific calling value inside a paranthesis.

var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
}

// The above will work perfectly fine as long as we use it this way:

car.displayDetails();

// But what if we want to borrow a method?

var myCarDetails =  car.displayDetails;
myCarDetails();

// It shows undefined and it wont work as "this" assigned for particular object scope it cant be access in empty hand
//  This is the Place where bind() comes in

var myCarDetails = car.displayDetails.bind(car); 
myCarDetails();

// Call & Apply () : Similar to bind() but slightly different usage provide the call() and apply() methods

var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota"
}

function displayDetails(ownerName) {
    console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
}

// We can use the apply() function:

displayDetails.apply(car, ["Vivian"]);

// same scenario we can use Call:

displayDetails.call(car, "Vivian");

// Note that when using the apply() function the parameter must be placed in an array. 
// Call() accepts both an array of parameters and a parameter itself. Both are great tools for borrowing functions in JavaScript.

// Prototype Inheritance :

// In programming, we often want to take something and extend it.
// For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. 
// We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.
// Prototypal inheritance is a language feature that helps in that.

// Example:

let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };
  
  rabbit.__proto__ = animal;

  console.log(rabbit.eats , rabbit.jumps);

//   __ proto __  is the syntax used to inherit its parent character.
//  in this example rabbit inherits the character of animal inside him so it returns true for both cases.


