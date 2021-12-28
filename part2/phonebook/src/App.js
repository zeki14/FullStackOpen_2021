import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ phoneNumber, setPhoneNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

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
