import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/Todo';
import Filter, { VisibilityFilter } from './components/Filter';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { useEffect } from 'react';

function App() {

  const [todos, setTodos] = useState(localStorage.getItem("todo"));

useEffect(() => {
  if(!todos){
    setTodos(localStorage.setItem("todo",JSON.stringify([])))
  }
},[])

  return (
    <Container>
      <AddTodo />
      <VisibilityFilter />
      <TodoList />
    </Container>
  );
}

export default App;
