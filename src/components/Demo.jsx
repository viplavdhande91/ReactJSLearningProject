import { useContext } from 'react';
import CustomerContext from '../context/CustomerContext';


function Demo() {
  const { customer } = useContext(CustomerContext);

  if (!customer) return <h1 className="App">Not logged in </h1>
  console.log(customer);
  return (
    <div className="App">
      <h1>Profile : {customer.username}</h1>
    </div>
  );
}

export default Demo;
