import { useEffect, useReducer, useState } from "react";
import {Row} from "react-bootstrap";
import { useSelector } from "react-redux";
import { getTodosByVisibilityFilter } from "../redux/selector";
import { Todo } from "./Todo";
import styles from "./Todo.module.css";

export const TodoList = () => {
  const { todos, visibilityFilter } = useSelector(state => state);
  const filterTodos = getTodosByVisibilityFilter(todos, visibilityFilter);

  return (
    <Row className={styles.TodoNew}>
      {filterTodos.length ? filterTodos.map((todo, index) => (
        <Todo key={`todo-${index}`} todo={todo} index={index}/>
      )) : <div className={styles.Todo}>Empty Todo List</div>}
    </Row>
  )
}
