
import '../App.scss';
import { useEffect, useState } from 'react';
import { fetchData } from '../api';
import UserCard from '../components/Cards/UserCard';
import Header from '../components/UIKit/Header';
import Loader from '../components/UIKit/Loader';

function App() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
      fetchData((data) => {
        setUsers(data.data)
      }, 'users')
    

   
  }, [])
  return (
    <div className="App">
      <Header />
      {loading ? (
        <Loader loading={true} />
      ) : (<>{
        users &&
        <div className='container'>
          <h2>List of Users</h2>
          <div className='users'>
            {users && users.map((user) => {
              return <UserCard user={user} key={user.id} />
            })}
          </div>
        </div>

      }
      </>
      )}
    </div>
  );
}

export default App;
