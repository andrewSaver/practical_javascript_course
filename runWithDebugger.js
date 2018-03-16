function runWithDebugger(ourFunction) {
    debugger;
    ourFunction();
};

runWithDebugger(function logTenNumbers() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
});