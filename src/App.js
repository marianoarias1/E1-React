import logo from './logo.svg';
import './App.css';
import React, {useState,useRef} from 'react';
import { ToDoList } from './components/ToDoList';


function App() {

  const [todos, setTodos]=useState([{
    id: Math.random(),
    task: 'Primera tarea',
    completed: false,
  },]);

  const todoTaskRef=useRef();


  const toggleTodo=(id)=>{
    const newTodos=[...todos];
    const todo= newTodos.find((todo)=>todo.id===id);
    todo.completed=!todo.completed;
    setTodos(newTodos);
  }

  const handleToDoAdd=()=>{
    const task=todoTaskRef.current.value;
    if(task==''){
      return;
    }
    else{
      setTodos((prevTodos)=>{
        return[...prevTodos, {id:Math.random() ,task, completed: false}]

      })
      todoTaskRef.current.value=''
    }
  };

  const handleClearAll=()=>{
    const newTodos= todos.filter((todo)=> !todo.completed);
    setTodos(newTodos)
  }

  return (
    <>
      <ToDoList todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoTaskRef} type='text' placeholder='New Task' />
      <button onClick={handleToDoAdd}>➕</button>
      <button onClick={handleClearAll}>🗑</button>
      <div> 
        Quedan {todos.filter((todo)=>!todo.completed).length} tareas por completar
      </div>
    </>
  );
}

export default App;
