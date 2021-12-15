import React from 'react'

    const Course = (props) =>{
        const { course } = props
        console.log(course);
        return(
            <div>
                <Header course={course}/>
                <Content course={course}/>
                <Total course={course}/>
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

    const Total = ({ course }) => {

        const values = course.parts.map(part => {
            return part.exercises;
        })
        let total =0;
        for(let i =0; i < values.length; i++){
            total += values[i]
        }
        return(
          <p>Total of exercises {total}</p>
        ) 
      }

export default Course;