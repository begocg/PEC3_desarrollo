export class Todo {
    constructor({ text, complete } = { id: '', text: '', complete: false }) {
        this.id = this.uuidv4();
        this.text = text;
        this.complete = complete || false;
    }
    uuidv4() {
        return (`${1e7}-${1e3}-${4e3}-${8e3}-${1e11}`).replace(/[018]/g, (c) => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
    }
}
//# sourceMappingURL=todo.model.js.map
//# sourceMappingURL=todo.model.js.map