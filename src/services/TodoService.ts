import { Todo } from "../model/Todo";

export class TodoService {
    private todos: Todo[] = [];
    private nextId: number = 1;

    addTodo(title: string): Todo {
        const todo = new Todo(this.nextId++, title);
        this.todos.push(todo);
        return todo;
    }
}
