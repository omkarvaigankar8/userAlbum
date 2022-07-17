
import '../App.css';
import { useEffect, useState } from 'react';
import { fetchData } from '../api';
import UserCard from '../components/Cards/UserCard';

function App() {
  const [users,setUsers]=useState(null)
  useEffect(()=>{
    fetchData((data) => {
      setUsers(data.data)
    }, 'users')
    
  },[])
  return (
    <div className="App">
      {users && users.map((user)=>{
        return <UserCard user={user} key={user.id} />
      })}
    </div>
  );
}

export default App;
