// .toggleAll: if everything's true, make everything false.
// toggleAll: Otherwise, make everything true (else statement)

const todoList = {
    todos: [],
    displayTodos: function () {
        if (this.todos.length === 0) {
            console.log('Your todo list is empty.');
        } else {
            console.log('My Todos: ');
            for (let i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true) {
                    console.log('(x)', this.todos[i].todoText);
                } else {
                    console.log('( )', this.todos[i].todoText);
                }
            }
        }
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
        const todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleAll: function () {
        const totalTodos = this.todos.length;
        let completedTodos = 0; // use let here because the value will change
        for (let i = 0; i < totalTodos; i++){
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        // If everthing's true, make everything false.
        if (completedTodos === totalTodos) {
            // make everything false
            for (let i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
            // Otherwise...
        } else {
            for (let i = 0; i < totalTodos; i++){
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    }
};

todoList.addTodo('new item');
todoList.addTodo('second');
todoList.toggleCompleted(0);
todoList.toggleCompleted(1);
todoList.toggleAll();
todoList.toggleAll();



