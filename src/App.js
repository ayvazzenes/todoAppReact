import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  
  
  const todosCreate = (title, todo) => {
    const response = [
      ...todos,
      {
        id:Math.round(Math.random()*9999999),
        title,
        todo,
      },
    ];
    setTodos(response);
  };
  const handleDelete = (id)=>{
    const responseNew=todos.filter((todo)=>{
      return todo.id!==id
    })
    setTodos(responseNew)

  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Todos todosItem={todosCreate} />} />
      </Routes>
      <Routes>
        <Route path="/" exact element={<About todos={todos} removeId={handleDelete}/>} />
      </Routes>
    </div>
  );
}

export default App;
