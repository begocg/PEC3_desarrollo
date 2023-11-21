export class TodoController {
    constructor(service, view) {
        this.onTodoListChanged = (todos) => {
            console.log("Contorlador DisplayTDOS");
            this.view.displayTodos(todos);
        };
        this.handleAddTodo = (todoText) => {
            this.service.addTodo(todoText, false);
        };
        this.handleUpdateTodo = (id, todoText, complete) => {
            this.service.updateTodo(id, todoText, complete || false);
        };
        this.handleDeleteTodo = (id) => {
            this.service.deleteTodo(id);
        };
        this.handleToggleTodo = (id) => {
            this.service.toggleTodo(id);
        };
        this.service = service;
        this.view = view;
        // Explicit this binding
        this.service.bindTodoListChanged(this.onTodoListChanged);
        this.view.bindAddTodo(this.handleAddTodo);
        this.view.bindUpdateTodo(this.handleUpdateTodo);
        this.view.bindDeleteTodo(this.handleDeleteTodo);
        this.view.bindToggleTodo(this.handleToggleTodo);
        // Display initial todos
        this.onTodoListChanged(this.service.getTodos());
    }
}
//# sourceMappingURL=todo.controller.js.map
//# sourceMappingURL=todo.controller.js.map