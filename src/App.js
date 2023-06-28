import UsersList from './UsersList'
import AddUser from './AddUser';
import './App.css';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([
    {
      id: Math.random(),
      name:"Hambardzum",
      surename:"Lackanyan",
      salary:100000

    },
    {
      id: Math.random(),
      name:"Asqanaz",
      surename:"Garibyan",
      salary:5600000

    },
    {
      id: Math.random(),
      name:"Hracin",
      surename:"Gegjanyan",
      salary:1100000

    },
  ])

const handleSalryUp = (id) =>{
  let person = users.find((elm) => elm.id === id);
  if(person){
    person.salary += 50000
  }
  setUsers([...users])
}
const handleSalryDown = (id) =>{
  let person = users.findIndex((elm) => elm.id === id);
  if(person && person.salary >= 50000){
    person.salary -= 50000
  }
  setUsers([...users])
}
const handleSalryDelete = (id) =>{
  setUsers([...users.filter(elm => elm.id !== id)])
}

  return (
    <div className="App">
      <UsersList 
       users = {users} 
       onDelete = {handleSalryDelete}
       onSallaryUp = {handleSalryUp}
       onSallaryDoWn = {handleSalryDown}
       />
      <AddUser/>
    </div>
  );
}

export default App;
