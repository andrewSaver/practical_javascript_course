// There should be an li element for every todo
// Each li element should contain .todoText
// Each li element should show .completed

const todoList = {
    todos: [],
    addTodo: function (todoText) {
        this.todos.push({
            todoText: todoText, // object's property: variable parameter
            completed: false
        });
    },
    changeTodo: function (position, todoText) {
        this.todos[position].todoText = todoText; // now using dot notation to access the property of the object
    },
    toggleCompleted: function (position) {
        const todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
    },
    toggleAll: function () {
        const totalTodos = this.todos.length;
        let completedTodos = 0; // use let here because the value will change
        for (let i = 0; i < totalTodos; i++) {
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
            for (let i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
    }
};

const handlers = {
    addTodo: function () {
        const addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },
    changeTodo: function () {
        const changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        const changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();
    },
    deleteTodo: function () {
        const deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = '';
        view.displayTodos();
    },
    toggleCompleted: function () {
        const toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
        view.displayTodos();
    },
    toggleAll: function () {
        todoList.toggleAll();
        view.displayTodos();
    }
};

const view = {
    displayTodos: function () {
        const todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        for (let i = 0; i < todoList.todos.length; i++){            
            const todoLi = document.createElement('li');
            const todo = todoList.todos[i];

            let todoTextWithCompletion = '';

            if (todo.completed === true) {
                todoTextWithCompletion = '(x) ' + todo.todoText;
            } else {
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }

            todoLi.textContent = todoTextWithCompletion;
            todosUl.appendChild(todoLi);
        }
    }
};