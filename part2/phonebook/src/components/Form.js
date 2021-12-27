import React from 'react'

const Form = ({ onSubmit, onChangeName, onChangeNumber, newName, newNumber}) =>{
  return (
    <div>
    <form onSubmit ={onSubmit}>
        <div>
          name: <input 
          onChange = {onChangeName}
          value = {newName}
          />
        </div>
        <div>
          number: <input 
          onChange = {onChangeNumber}
          value = {newNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  </div>
  )
  
}

export default Form