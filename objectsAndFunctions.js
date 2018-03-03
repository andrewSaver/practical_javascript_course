// Objects

var myComputer = {
    operatingSystem: 'windows',
    screenSize: '15 inches',
    purchaseYear: 2017
};

console.log(myComputer.operatingSystem);
console.log(myComputer.screenSize);
console.log(myComputer.purchaseYear);

// Objects and functions

// METHOD: A property that's equal to a function.

var andy = {
    name: 'Andy',
    sayName: function () {   // anonymous function (no name)
        console.log(this.name);
    }
};

andy.sayName();
