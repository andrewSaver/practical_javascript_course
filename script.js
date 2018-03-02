var todos = ['item 1', 'item 2', 'item 3'];

// It should display todos.
function displayTodos() {
    console.log('My Todos: ', todos);
}

// It should have a function to add todos.
function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

//It should have a function to change todos.
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

// It should have a function to delete todos.
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}

displayTodos();

addTodo('item 4');

changeTodo(3, 'new item 4');

deleteTodo(3);

