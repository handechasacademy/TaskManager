class TodoManager {
    constructor() {
        this.todos = [];
        this.nextId = 1;
    }

    addTodo(text) {
        if (!text) return null;
        const todo = { id: this.nextId++, text, completed: false };
        this.todos.push(todo);
        return todo;
    }

    getTodos() {
        return this.todos;
    }
}

module.exports = TodoManager;
