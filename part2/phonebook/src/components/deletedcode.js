//APP.JS
import React, { useState, useEffect } from 'react'
import axios from 'axios'
//handle input and save it , handle new input , display 

const Form = ({addContact,newName,newNumber,handleName,handleNumber}) => {
  return(
    <form onSubmit={addContact}>
       <div> name: <input value={newName} onChange={handleName} /> </div>
        <div> phone: <input value={newNumber} onChange={handleNumber} /> </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const FilterDisplay = ({persons,filter}) =>{
  return(
      persons.filter(person=>person.name.toLowerCase().includes(filter.toLowerCase())).map(fP=>{return(<li>
        {fP.name} {fP.number}
      </li>)})
  )
  
}

 const App = () => {

  const [ persons, setPersons ] = useState([]) //total persons
  
  useEffect(()=>{
    axios
    .get('http://localhost:3001/persons')
    .then(response=>{
      setPersons(response.data)
    })
  },[])
  const [ newName, setNewName ] = useState('') // add a person
  const [newNumber,setNewNumber] = useState('') //add a number
  const [filter, setFilter] = useState('')
 
  const addContact = (e) => {
  e.preventDefault()
  const personObject = {
    name : newName,
    number : newNumber,
    date : new Date().toISOString(),
    id: persons.length+1,

  }
  persons.find(name=>name.name === newName)?alert(`${newName} already exists`):setPersons(persons.concat(personObject))
 
  setNewName('')
  setNewNumber('')
 }
  const handleFilter = (e) =>{
    setFilter(e.target.value)
  }
  
  const handleName = (e) => {
    setNewName(e.target.value)
    }

  const handleNumber = (e)=>{
    setNewNumber(e.target.value)
  }
    
 
  return (
    <div>
    <input type="text" onChange={handleFilter} />
      <h2>Phonebook</h2>


      <Form handleName={handleName} handleNumber={handleNumber} 
            addContact={addContact} newName={newName}
             newNumber={newNumber} />
      
      <h2>Numbers</h2>
    
     <FilterDisplay persons={persons} filter={filter} />

    </div>
  )
}
export default App