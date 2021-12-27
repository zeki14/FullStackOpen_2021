import React from 'react'

const Persons = ({ persons, filterName }) =>{
    const filterPerson = !filterName
    ? persons 
    : persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()));
  
  return (
   <ul>
        {filterPerson.map(person => {
          return (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
          )
        })}
      </ul>
  )
  
}

export default Persons