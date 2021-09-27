import { useState, useEffect } from 'react'
import './App.css';

const backendURL = 'http://localhost:3001/'

function App() {
  const [customers, setCustomers] = useState([])

  const getCustomers = () => {
    fetch(backendURL)
    .then(res => res.json())
    .then(data => setCustomers(data))
  }

  useEffect(() => {
    getCustomers()
  }, [])

  const renderCustomers = () => {
    return (<ul>
      {customers.map(customer => <li>{customer.name}</li>)}
    </ul>)
  }

  return (
    <div className="App">
      <h1>I'm The App!</h1>
      {renderCustomers()}
    </div>
  );
}

export default App;
