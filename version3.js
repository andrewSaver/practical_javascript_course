// It should store the todos array on an object.

// It should have a displayTodos method.

// It should have an addTodo method.

// It should have a changeTodo method.

// It should have a deleteTodo method.



var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function () {
        console.log('My todos: ', this.todos);
    },
    addTodos: function (todo) {
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

todoList.displayTodos();
todoList.addTodos('new item');
todoList.changeTodo(3, 'changed item');
todoList.deleteTodo(3);