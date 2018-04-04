// todoList.toggleAll should use forEach
// view.displayTodos should use forEach


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
        this.todos.forEach(function (todo) {
            if (todo.completed === true) {
                completedTodos++;
            }
        });

        this.todos.forEach(function (todo) {
            // If everthing's true, make everything false.
            if (completedTodos === totalTodos) {
                todo.completed = false;
            } else { // Otherwise...
                todo.completed = true;
            }
        });
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
    deleteTodo: function (position) {
        todoList.deleteTodo(position);
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
        todoList.todos.forEach(function (todo, position) {
            const todoLi = document.createElement('li');

            let todoTextWithCompletion = '';

            if (todo.completed === true) {
                todoTextWithCompletion = '(x) ' + todo.todoText;
            } else {
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }

            todoLi.id = position;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton()); // Can only use 'this' here if we reference the parent object in line 114 // Optional this argument for forEach functions
            todosUl.appendChild(todoLi);
        }, this); // 'this' in a callback function to reference the view object.

    },
    createDeleteButton: function () {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    setUpEventListeners: function () {
        const todosUl = document.querySelector('ul');
        todosUl.addEventListener('click', function (e) {
            // Get element that was clicked on
            const elementClicked = e.target;
            // Check if element clicked is a delete button
            if (elementClicked.className === 'deleteButton') {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        });
    }
};

view.setUpEventListeners();
































