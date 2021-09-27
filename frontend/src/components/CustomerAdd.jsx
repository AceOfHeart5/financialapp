import { useState } from 'react'
import { routeCustomerAdd } from '../constants'

const CustomerAdd = ({ rerender }) => {
    const [newName, setNewName] = useState('')

    const addCustomer = async (e) => {
        e.preventDefault()
        const res = await fetch(routeCustomerAdd, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
            body: new URLSearchParams({ 'name': newName})
        })
        const data = await res.json()
        console.log('add name performed:', data)
        setNewName('')
        rerender()
    }

    return (
        <form onSubmit={addCustomer} action="">
            <input 
                type="text"
                placeholder="customer name..."
                value={newName}
                onChange={e => setNewName(e.target.value)}
            ></input>
            <button>Add Customer</button>
        </form>
    );
}

export default CustomerAdd;