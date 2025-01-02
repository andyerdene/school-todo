"use client";
import { useState } from "react";
import styles from "./page.module.css";
// {
//   todo: "learn react",
//   isCompleted: false,
// }

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();
  const [activeFilter, setActiveFilter] = useState("all");

  const addTodoHandler = () => {
    setTodos([...todos, newTodo]);
  };
  const deleteHandler = () => {
    alert("are you sure to delete ?");
  };

  const toggleIsCompleted = (incomingTodo) => {
    let changedTodos = todos.map((t) => {
      if (t.todo === incomingTodo.todo) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodos(changedTodos);
  };

  return (
    <div>
      <div className={styles[`todo-container`]}>
        <h1>To-Do list</h1>
        <div className={`${styles.flex} ${styles["bg-blue"]}`}>
          <input
            type="text"
            placeholder="Add a new task"
            onChange={(e) =>
              setNewTodo({
                todo: e.target.value,
                isCompleted: false,
              })
            }
          />
          <button onClick={addTodoHandler}>Add</button>
        </div>
        <div className={`${styles.flex} ${styles.filterButtons}`}>
          <button
            className={activeFilter == "all" && styles.activeStyle}
            onClick={() => setActiveFilter("all")}
          >
            All
          </button>
          <button
            className={activeFilter == "active" && styles.activeStyle}
            onClick={() => setActiveFilter("active")}
          >
            Active
          </button>
          <button
            className={activeFilter == "completed" && styles.activeStyle}
            onClick={() => setActiveFilter("completed")}
          >
            Completed
          </button>
        </div>
        <div>
          {todos.map((todo, index) => {
            return (
              <div className={styles.flex} key={index}>
                <input
                  type="checkbox"
                  onClick={() => toggleIsCompleted(todo)}
                  checked={todo.isCompleted}
                />
                <p className={todo.isCompleted ? styles.completed : ""}>
                  {todo.todo}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
