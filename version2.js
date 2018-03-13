var todos = ['item 1', 'item 2', 'item 3'];

// It should display todos.

function displayTodos() {
    console.log('My todos: ', todos);
}

displayTodos();

// It should have a function to add todos.

function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

addTodo('new item');


//It should have a function to change todos.

function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

changeTodo(3, 'updated todo');


// It should have a function to delete todos.

function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}

deleteTodo(3);