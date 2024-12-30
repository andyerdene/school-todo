"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [todos, setTodos] = useState(["a", "b"]);
  const [newTodo, setNewTodo] = useState("");

  const addTodoHandler = () => {
    setTodos([...todos, newTodo]);
  };
  const deleteHandler = () => {
    alert("are you sure to delete ?");
  };
  return (
    <div>
      <div className={styles[`todo-container`]}>
        <h1>To-Do list</h1>
        <div className={`${styles.flex} ${styles["bg-blue"]}`}>
          <input
            type="text"
            placeholder="Add a new task"
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={addTodoHandler}>Add</button>
        </div>
        <div className={styles.flex}>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
          <button onClick={deleteHandler}>Delete</button>
        </div>
        <div>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
