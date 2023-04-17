import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const Todos = ({todosItem}) => {
  const [title, setTitle] = useState("")
  const [todo, setTodo] = useState("")
  const handleClick = (e) => {
    e.preventDefault();
    todosItem(title,todo);
    setTitle("")
    setTodo("")
  };
  const handleTitle = (e)=>{
    setTitle(e.target.value)

  }
  const handleTodos = (e)=>{
    setTodo(e.target.value)
  }
 
  return (
    <div className=" d-flex align-items-center justify-content-center">
    <div className="todo__home bg-primary  ">
      <Form onSubmit={handleClick}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-light h4 fw-bold">Title</Form.Label>
          <Form.Control value={title} onChange={handleTitle} type="text" placeholder="Todo title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-light h4 fw-bold">Todos</Form.Label>
          <Form.Control value={todo} onChange={handleTodos} as="textarea" rows={3} />
        </Form.Group>

        <Button variant="dark" type="submit">
          Kaydet
        </Button>
      </Form>
    </div>
    </div>
  );
};

export default Todos;
