import { useState } from 'react'
import CustomerContext from './CustomerContext'

const CustomerContextProvider = ({ children }) => {
   
    const [customer, setCustomer] = useState(null)

    return (
        <CustomerContext.Provider value={{ customer, setCustomer }}>
            {children}
        </CustomerContext.Provider>

    )

}

export default CustomerContextProvider