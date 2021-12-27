import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
  number: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ phoneNumber, setPhoneNumber ] = useState('')

  const addName = (event) =>{
      event.preventDefault();
      const nameToAdd = {
        name: newName,
        number: phoneNumber
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
        setPhoneNumber('');
      }else{
        alert(newName + ' is already added to phonebook')
        setNewName('');
        setPhoneNumber('');
      }
  }

  const handleChangeName  = (event) => {
    setNewName(event.target.value)
  }

  const handleChangeNumber = (event) => {
    setPhoneNumber(event.target.value)
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
          number: <input 
          onChange = {handleChangeNumber}
          value = {phoneNumber}
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
            {person.name} {person.number}
          </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
