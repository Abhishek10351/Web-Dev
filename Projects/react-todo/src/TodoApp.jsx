import { useState, useEffect } from "react";
import TodoItems from "./TodoItems";
import NewTodo from "./NewTodo";

export default function TodoApp() {
    const default_todos = [
        { id: 12, title: "Make a game", completed: true },
        { id: 22, title: "Todo 2", completed: true },
        { id: 30, title: "Todo 3", completed: false },
    ];
    return (
        <div>
            <h1>Todo App</h1>
            <TodoItems initialTodos={default_todos} />
            <NewTodo />
        </div>
    );
}
