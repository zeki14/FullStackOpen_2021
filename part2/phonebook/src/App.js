import React, { useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ phoneNumber, setPhoneNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')

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

  const handleChangeFilter = (event) => {
    setFilterName(event.target.value)
  }



  return (
    <div>
      <h2>Phonebook</h2>
        <Filter filter ={filterName} onChange={handleChangeFilter}/>
      <div>
        <h2>Add a new...</h2>
        <Form 
          onSubmit ={addName}
          onChangeName ={handleChangeName} 
          onChangeNumber={handleChangeNumber}
          newName = {newName}
          newNumber = {phoneNumber}
          />
      </div>
      <h2>Numbers</h2>
      <Persons persons ={persons} filterName={filterName}/>
    </div>
  )
}

export default App
