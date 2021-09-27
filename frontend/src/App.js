import { useState, useEffect } from 'react'
import './App.css';

import CustomerList from './components/CustomerList';
import CustomerAdd from './components/CustomerAdd';

const backendURL = 'http://localhost:3001/'

function App() {
  console.log("rendering app")
  const [customers, setCustomers] = useState([])

  const getCustomers = () => {
    fetch(backendURL)
    .then(res => res.json())
    .then(data => setCustomers(data))
  }

  useEffect(() => {
    getCustomers()
  }, [])

  console.log(customers)

  return (
    <div className="App">
      <h1>I'm The App!</h1>
      <CustomerAdd></CustomerAdd>
      <CustomerList customers={customers}></CustomerList>
    </div>
  );
}

export default App;
