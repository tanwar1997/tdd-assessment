import { Todo } from "../model/Todo";

export class TodoService {
  private todos: Todo[] = [];
  private nextId: number = 1;

  addTodo (title: string): Todo {
    const todo = new Todo(this.nextId++, title);
    this.todos.push(todo);
    return todo;
  }

  removeTodo (id: number): boolean {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }

  listTodos (): Todo[] {
    return this.todos;
  }
}
