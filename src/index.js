import "./styles.css";

import {TodoList, Todo} from "./classes";
import {crearTodoHTML} from "./js/componentes";

export const todoList = new TodoList();

todoList.todos.forEach( crearTodoHTML);