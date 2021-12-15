import React from 'react'

    const Course = ({ course }) =>{
        return(
            <div>
                {course.map(course => {
                    return(
                        <ul>
                            <Header key={course.id} course={course}/> 
                            <Content key={course.id} course={course}/>
                            <Total key={course.id} course={course}/>
                        </ul>
                        )
                })}
            </div>
        )
    }

    const Header = ({ course }) => {
        return (
        <h1>{course.name}</h1>
        )
    }
  
    const Content = ({ course }) => {
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

    const Total = ({ course }) => {
      const total = course.parts.reduce(function(sum, part){
          return sum + part.exercises;
      },0)
      return(
        <p>Total of exercises {total}</p>
      ) 
        // const values = course.parts.map(part => part.exercises;)
        // let total =0;
        // for(let i =0; i < values.length; i++){
        //     total += values[i]
        // }
      }

export default Course;