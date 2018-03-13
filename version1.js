// It should have a place to store todos

var todos = ['item 1', 'item 2', 'item 3']

// It should have a way to display todos

console.log('My todos: ', todos);

// It should have a way to add new todos

todos.push('new item');
console.log('My todos:', todos);

// It should have a way to change a todo

todos[0] = 'changed item';
console.log(todos);

// It should have a way to delete a todo

todos.splice(3, 1);
console.log(todos);
