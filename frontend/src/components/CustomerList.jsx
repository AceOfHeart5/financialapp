const CustomerList = ({ customers }) => {
    console.log("from customer list component:", customers)
    return (
        <ul>
            {customers.map(customer => <li>{customer.name}</li>)}
        </ul>
    );
}
 
export default CustomerList;