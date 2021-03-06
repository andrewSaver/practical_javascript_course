// .displayTodos should show todoText

// .displayTodos should tell you if .todos is empty

// .displayTodos should show .completed

const todoList = {
    todos: [],
    displayTodos: function () { 
        if (this.todos.length === 0) {
            console.log('Your todo list is empty.');
        } else {
            console.log('My Todos: ');
            for (var i = 0; i < this.todos.length; i++) {
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
        let todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};


todoList.addTodo('first');
todoList.addTodo('second');
todoList.toggleCompleted(0);


