// todoList.addTodo should add objects
// todoList.changeTodo should change the todoText property
// todoList.toggleCompleted should change the completed property


let todoList = {
    todos: [],
    displayTodos: function () {
        console.log('My Todos: ', this.todos);
    },
    addTodo: function (todoText) {
        this.todos.push({
            todoText: todoText, // object's property: variable parameter
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function (position, todoText) {
        this.todos[position].todoText = todoText; // now using dot notation to access the property of the object
        this.displayTodos();
    },
    toggleCompleted: function (position) {
        let todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};

todoList.addTodo('new item');
todoList.changeTodo(0, 'second try');
todoList.toggleCompleted(0);

