import { TodoService } from "./services/TodoService";

const todoService = new TodoService();

// Add some initial todos
todoService.addTodo("Learn TypeScript");
todoService.addTodo("Practice TDD");
todoService.addTodo("Build a Todo App");

// List all todos
console.log("Current Todos:");
todoService.listTodos().forEach(todo => console.log(todo));

//remove
const todoToRemove = 1; 
const isRemoved = todoService.removeTodo(todoToRemove);
console.log(`Todo with ID ${todoToRemove} removed:`, isRemoved);
console.log("Todos after removal:");

//list all
todoService.listTodos().forEach(todo => console.log(todo));
