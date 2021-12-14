import React from 'react'

const Course = (props) =>{
    const { course } = props
    console.log(course);
    return(
        <div>
            <Header course={course}/>
            <Content course={course}/>
        </div>
    )
}


const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }

  
  const Content = (props) => {
      const { course } = props
    return (
      <ul>
          {course.parts.map(part => <Part key={part.id} course={part}/>)}
         
      </ul>
    )
  }

  const Part = ({course}) => {
    return (
      <li>{course.name}  {course.exercises}</li>    
    )
  }

  


  
  export default Course;