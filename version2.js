var todos = ['item 1', 'item 2', 'item 3'];

// function example(parameter){} / parameter is the same as argument
// example(argument);

// function sayHiTo(person) { // person = variable that will be given a value
//     console.log('Hi', person);
// }

// sayHiTo('Andy'); // person is being set to 'Andy'

// It should have a way to display todos.

function displayTodos() {
    console.log('My Todos: ', todos);
}

displayTodos();


// It should have a function to add todos.
function addTodos(todo) {
    todos.push(todo);
    displayTodos();
}

addTodos('new item');


//It should have a function to change todos.
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

changeTodo(3, 'newer item');


// It should have a function to delete todos.
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}

deleteTodo(3);
