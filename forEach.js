var students = ['jonathan', 'jenny', 'elliot'];

 function logName(name) {
     console.log(name);
 };

// // //....................................

 logName(students[0]);
 logName(students[1]);
 logName(students[2]);

// // //.....................................

 for (var i = 0; i < students.length; i++){
     logName(students[i]);
 };

// // //........................................

 students.forEach(logName);

// // //........................................

 students.forEach(function logName(name) {
     console.log(name);
 });

// //........................................

function forEach(myArray, myFunction) {
    for (var i = 0; i < myArray.length; i++){
        myFunction(myArray[i]);
    }
};

forEach(students, function (student) {
    console.log(student)
});

