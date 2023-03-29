
import React,{useState} from 'react'
import './App.css'

function AddPerson(props){
  const[person,setPerson]=useState('')


function handleChange(e){
  setPerson(e.target.value)
}
function handleSubmit(e){
  if(person!==''){
    props.handleSubmit(person)
    setPerson('');
  }
  e.preventDefault();
}
return(
  <div>
    <h1 >Contact Manager</h1>
  <form onSubmit={handleSubmit}>
    <input type="text" placeholder="add new contact" onChange={handleChange} value={person}/>
    <button type="submit">Add</button>
   </form>
  </div>
)
}
function PeopleList(props){
  const arr=props.data
  const listItems=arr.map((val,index)=>
  <li key={index}>{val}</li>
  )
  return <ul>{listItems}</ul>
}
function ContactManager(props){
  const[contacts,setContacts]=useState(props.data)
  function addPerson(name){
    setContacts([...contacts,name])
  }
  return(
    <div>
      <AddPerson handleSubmit={addPerson}/>
      <PeopleList data={contacts}/>
    </div>
  )
}

export default ContactManager;

