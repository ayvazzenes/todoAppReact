import React from 'react'
import TodoShow from './TodoShow'

const About = ({todos , removeId}) => {
  
  return (
    
    <div className=' d-flex flex-wrap align-items-center justify-content-center gap-3 mb-3'>
      {todos.map((todo,index)=>{
      return <TodoShow todo={todo} key={index} removeId={removeId}/>
    })
      }</div>
      
  )
}

export default About