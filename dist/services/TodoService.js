"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const Todo_1 = require("../model/Todo");
class TodoService {
    constructor() {
        this.todos = [];
        this.nextId = 1;
    }
    addTodo(title) {
        const todo = new Todo_1.Todo(this.nextId++, title);
        this.todos.push(todo);
        return todo;
    }
    removeTodo(id) {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            this.todos.splice(index, 1);
            return true;
        }
        return false;
    }
    listTodos() {
        return this.todos;
    }
}
exports.TodoService = TodoService;
