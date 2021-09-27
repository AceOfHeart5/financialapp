import { useState, useEffect } from 'react'
import { routeCustomerGetAll } from "../constants";

const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    const fetchCustomers = async () => {
        const res = await fetch(routeCustomerGetAll)
        const data = await res.json()
        setCustomers(data)
    }

    useEffect(() => {
        fetchCustomers()
    }, [])

    return (
        <ul>
            {customers.map(customer => <li key={customer.id}>{customer.name}</li>)}
        </ul>
    );
}

export default CustomerList;