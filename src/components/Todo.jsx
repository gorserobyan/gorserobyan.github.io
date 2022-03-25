import { Button, Col, Card, InputGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTask } from "../redux/action";
import styles from "./Todo.module.css";

export const Todo = ({ todo, index }) => {
  const [cheked, setCheked] = useState(false);

  let today = new Date(),
    date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate() +
      "   " +
      today.getHours() +
      ":" +
      today.getMinutes();

  const state = {
    currentDate: date,
  };

  const dispatch = useDispatch();
  const handleCheked = () => dispatch(toggleTodo(todo.id));

  const deleteTodo = () => {
    dispatch(deleteTask(index));
  };

  useEffect(() => {
    setCheked(todo.completed);
  }, [todo]);

  return (
    <Col xs={12} sm={6} md={4} lg={3} xl={2} >
      <Card className={styles.task}>
        <Card.Body >
          <InputGroup.Checkbox
            onChange={handleCheked}
            aria-label="Checkbox for following text input"
          />
          <div className={styles.fonts}>
          <Card.Text>{todo.content}</Card.Text>
          <Card.Text>{todo.description}</Card.Text>
          <p>{state.currentDate}</p>
          </div>
      
          
          <Button variant="danger" onClick={deleteTodo}>Delete</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
