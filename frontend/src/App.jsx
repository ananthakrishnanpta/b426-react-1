import './App.css'

const items = ['apple', 'orange', 'pineapple']

const users = [
  { id: 1, username: "alice", age: 25 },
  { id: 2, username: "bob", age: 30 },
  { id: 3, username: "charlie", age: 22 },
  { id: 4, username: "diana", age: 28 },
  { id: 5, username: "eric", age: 35 }
];

//   fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response =>  response.json())
//       .then(json => console.log(json))


const App = () =>{

  return (
    <table className='table'>
      <thead className='bg-dark text-light'>
        <th>id</th>
        <th>Username</th>
        <th>Age</th>
      </thead>
      <tbody>
        {
          users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.age}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default App;
