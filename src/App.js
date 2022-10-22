import './App.css';
import Header from "./components/header/Header";
import AddTodo from "./components/addtodo/AddTodo";
import TodoList from "./components/todolist/TodoList";
import React, {useState} from "react";
import {Container} from "react-bootstrap";


function App() {

  const[todo, setTodo] = useState([])

  return (
      <Container>
        <Header/>
        <AddTodo todo={todo} setTodo={setTodo}/>
        <TodoList todo={todo} setTodo = {setTodo}/>
      </Container>
  );
}

export default App;
