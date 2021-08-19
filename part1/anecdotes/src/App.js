import React from 'react'

const Header = (props) => {
  return(
      <div>
        <h1>{props.course.name}</h1>
      </div>
  )
}
const Part = (props)=>{
  return(
    <div>
      <p>
      {props.part} {props.exercises}
    </p>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>

    <Part part = {props.contents.parts[0].name} exercises= {props.contents.parts[0].exercises} />
    <Part part = {props.contents.parts[1].name} exercises= {props.contents.parts[1].exercises} />
    <Part part = {props.contents.parts[2].name} exercises= {props.contents.parts[2].exercises} />
    
    </div>
  )
 }


const Total = (props) => {
    return(
      <div>
        <p>Total number of exercises is {props.sum.parts[0].exercises+props.sum.parts[1].exercises+props.sum.parts[2].exercises}</p> 
      </div>
    )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',

  parts: [
    {  
      name: 'Fundamentals of React',
      exercises : 10
    },
    {
      name: 'Using props to pass data',
      exercises : 7
    },
    {
      name: 'State of a component',
      exercises : 14
    }
                ]
              }
  return(
    <div>
      <Header course = {course} />
      <Content contents={course} />
      <Total sum= {course} />

    </div>
    )
}
export default App