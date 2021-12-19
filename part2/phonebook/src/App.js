import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) =>{
      event.preventDefault();
      const nameToAdd = {
        name: newName,
      }

    // let found=false;
    // for(let i = 0; i < persons.length; i++) {
    //   if (persons[i].name === newName) {
    //     found = true;
    //     break;
    //   }
    // }
    const found = persons.some(person => person.name === newName)
      
    if(!found){
        setPersons(persons.concat(nameToAdd));
        setNewName('');
      }else{
        alert(newName + ' is already added to phonebook')
        setNewName('');
      }
  }

  const handleChangeName  = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit ={addName}>
        <div>
          name: <input 
          onChange = {handleChangeName}
          value = {newName}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => {
          return (
          <li key={person.name}>
            {person.name}
          </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
