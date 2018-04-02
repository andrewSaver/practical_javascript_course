// function sayName() {
//     var secret = 'watchandcode';
//     console.log(myName);
// }

// sayName();
// console.log(secret); // If you're inside of sayName, you can look out and see data, but the opposite isn't true. If you're outside, you can't look in.

// VERSION 3: We want to put everything that we've written so far onto an object


// It should store the todos array on an object.

// It should have a displayTodos method.

// It should have an addTodo method.

// It should have a changeTodo method.

// It should have a deleteTodo method.

// var todos = ['item 1', 'item 2', 'item 3'];

let todoList = {
    todos: ['item 1', 'item 2', 'item 3'], // no semicolon after object property value //
    // Make displayTodos a method on our todoList object
    displayTodos: function () {
        console.log(this.todos);
    },
    addTodo: function (todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function (position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};

// todoList.addTodo('new item');
// todoList.changeTodo(3, 'newer item');
// todoList.deleteTodo(3);





// function displayTodos() {
//     console.log('My Todos: ', todos);
// }

// displayTodos();

// function addTodos(todo) { 
//     todos.push(todo);
//     displayTodos();
// }

// addTodos('new item');

// function changeTodo(position, newValue) {
//     todos[position] = newValue;
//     displayTodos();
// }

// changeTodo(3, 'newer item');

// function deleteTodo(position) {
//     todos.splice(position, 1);
//     displayTodos();
// }

// deleteTodo(3);

// METHOD

// let Gordon = {
//     name: 'Gordon',
//     sayName: function () {
//         console.log(this.name); // acces the property on the object (method)
//     }    
// }

// Gordon.sayName();