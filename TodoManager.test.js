// TodoManager.test.js
const TodoManager = require('./TodoManager');

describe('TodoManager', () => {
    let manager;

    beforeEach(() => {
        manager = new TodoManager();
    });

    test('adds a todo', () => {
        const todo = manager.addTodo('Test todo');
        expect(todo).toEqual({ id: 1, text: 'Test todo', completed: false });
        expect(manager.getTodos()).toHaveLength(1);
    });

    test('returns null if no text is provided', () => {
        const todo = manager.addTodo('');
        expect(todo).toBeNull();
    });
});
