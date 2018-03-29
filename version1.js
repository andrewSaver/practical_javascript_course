// It should have a place to store todos
// Variable is a 'nickname' so we can reference it later

var todos = ['item 1', 'item 2', 'item 3'];
// console.log(todos);

// It should have a way to display todos

console.log(todos); // todos is not in quotes because it's not text, it's a variable that we made.
console.log('My Todos:', todos);

// It should have a way to add new todos

todos.push('item 4');
todos.push('item 5');
console.log('My Todos: ', todos);


// It should have a way to change a todo

todos[4] = 'new item'; // assign a new value
console.log('My Todos: ', todos);


// It should have a way to delete a todo

todos.splice(4, 1);
console.log('My Todos: ', todos);

