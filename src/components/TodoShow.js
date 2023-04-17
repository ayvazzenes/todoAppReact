import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"

const TodoShow = ({ todo,removeId }) => {
  const deleteTodo = ()=>{
    removeId(todo.id);
  }
  return (
    <div>
      <Card>
        <Card.Body className="bg-primary d-flex flex-column border border-primary rounded">
          <Card.Title className="text-warning fw-bold ">Title</Card.Title>
          <Card.Text className="text-light lead  ">{todo.title}</Card.Text>
          <Card.Title className="text-warning fw-bold ">Todos</Card.Title>
          <Card.Text className="text-light lead ">{todo.todo}</Card.Text>
          <Button onClick={deleteTodo} variant="danger" type="submit">
            Sil
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TodoShow;
