import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import {
  InputGroup,
  FormControl,
  Col,
  Container,
  Row,
  Form,
  NavLink,
} from "react-bootstrap";
import styles from "./Todo.module.css";
import { addTodo } from "../redux/action";
import { useDispatch } from "react-redux";

export default function SimpleDialog(props) {
  const [value, setValue] = useState({ content: "", description: "" });
  const { onClose, selectedValue, open } = props;

  const handleInput = (e) => {
       setValue({ ...value, [e.target.name]: e.target.value });  
  
  };

  const dispatch = useDispatch();
  
  const handleSubmit = () => {
  
    const todos = JSON.parse(localStorage.getItem("todo"));
    const newTodos = [...todos, {...value, completed: false}];

    if(value.content && value.description){
      dispatch(addTodo(value));
      setValue(""); 
      }
    props.closeModal(false);
    localStorage.setItem("todo",JSON.stringify(newTodos));
  };

  return (
    <Dialog
      onClose={() => {
        props.closeModal(false);
      }}
      open={true}
      fullWidth
    >
      <Container>
        <Row>
          <Col className={styles.InputGroup}>
            <InputGroup className="mb-3">
              <FormControl
                type="text"
                name="content"
                placeholder="Title"
                value={value.title}
                onChange={handleInput}
                
              />
            </InputGroup>
            <select 
            className={styles.section}
            onChange={handleInput}
            name="description"
            value={value.description}>
              <option>Choose a priority:</option>
              <option value="Low">Low</option>
              <option value="Normal">Normal</option>
              <option value="High">High</option>
            </select>
          </Col>
        </Row>
        <Row>
          <Col className={styles.right}>
            <Button onClick={handleSubmit}>Create</Button>
            <Button
              onClick={() => {
                props.closeModal(false);
              }}
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </Container>
    </Dialog>
    
  );
}

