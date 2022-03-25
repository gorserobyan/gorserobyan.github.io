import { useState } from "react";
import { useDispatch } from "react-redux";
import SimpleDialog from "./AddModal"
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from './Todo.module.css';

export const AddTodo = () => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const openOrClose = (value) => {
    setOpenModal(value);
  };
  return (
    <div>
      <h2 className={styles.title}>Todo LiSt</h2>
      <Container className={styles.ad}>
        <Row>
          <Col xs={10} >
            {openModal && <SimpleDialog closeModal={openOrClose} />}
            <Button
              className={styles.addTask}
              variant="outline-primary"
              id="button-addon2"
              onClick={() => { setOpenModal(true) }}
              type="submit">
              Add Task
            </Button>
          </Col>
        </Row>
      </Container>
    </div>

  )
}