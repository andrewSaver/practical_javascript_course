// i = 0  // Initialization
// Say "Hey" if i < 3 // Condition
// Increase i by 1 // final-expression
//
// 0 "Hey"
// 1 "hey"
// 2 "hey"
// 3 !< 3

// for (initialization, condition, final-expression) {
//    console.log("Hey");
// }

// i = i + 1 is the same as i++

for (var i = 0; i < 3; i++){
    console.log("Hey");
}

// Looping over arrays

for (var i = 0; i < 3; i++){
    console.log(i);
}

var testArray = ['item 1', 'item 2', 'item 3', 'extra item']; // 'extra item' will only log with dynamic conditional

for (var i = 0; i < 3; i++){
    console.log(testArray [i]);
}

// Make condition dynamic

for (i = 0; i < testArray.length; i++){
    console.log(testArray[i]);
}



