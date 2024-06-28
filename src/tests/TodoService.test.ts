import { TodoService } from "../services/TodoService";
import { Todo } from "../model/Todo";

describe("TodoService", () => {
  let todoService: TodoService;

  beforeEach(() => {
    todoService = new TodoService();
  });

  test("should add a new todo", () => {
    const todo = todoService.addTodo("Learn TypeScript");
    expect(todo).toEqual(new Todo(1, "Learn TypeScript"));
    expect(todoService.listTodos()).toContainEqual(todo);
  });

  test("should remove a todo", () => {
    const todo = todoService.addTodo("Learn TypeScript");
    const result = todoService.removeTodo(todo.id);
    expect(result).toBe(true);
    expect(todoService.listTodos()).not.toContainEqual(todo);
  });

  test("should list all todos", () => {
    todoService.addTodo("Learn TypeScript");
    todoService.addTodo("Learn TDD");
    const todos = todoService.listTodos();
    expect(todos.length).toBe(2);
    expect(todos[0].title).toBe("Learn TypeScript");
    expect(todos[1].title).toBe("Learn TDD");
  });
});
