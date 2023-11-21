import { Todo } from '../models/todo.model.js';
export class TodoService {
    constructor() {
        this.todos = [];
    }
    bindTodoListChanged(callback) {
        this.onTodoListChanged = callback;
    }
    _commit(todos) {
        this.onTodoListChanged(todos);
    }
    getTodos() {
        return this.todos;
    }
    addTodo(text, complete = false) {
        console.log("ejecuto el addtodo service");
        const newTodo = new Todo({ text, complete });
        this.todos.push(newTodo);
        this._commit(this.todos);
        return newTodo;
    }
    updateTodo(id, text, complete) {
        const todoIndex = this.todos.findIndex(todo => todo.id === id);
        if (todoIndex !== -1) {
            this.todos[todoIndex].text = text;
            this.todos[todoIndex].complete = complete;
            return this.todos[todoIndex];
        }
        return undefined;
    }
    deleteTodo(id) {
        const initialLength = this.todos.length;
        this.todos = this.todos.filter(todo => todo.id !== id);
        this._commit(this.todos);
        return this.todos.length !== initialLength;
    }
    toggleTodo(id) {
        this.todos = this.todos.map((todo) => todo.id === id ? new Todo(Object.assign(Object.assign({}, todo), { complete: !todo.complete })) : todo);
        this._commit(this.todos);
    }
}
//# sourceMappingURL=todo.service.js.map