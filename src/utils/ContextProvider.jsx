import React, { createContext, useState } from 'react'

export const MyContext = createContext()

const ContextProvider = ({ children }) => {
    const [dateRange, setDateRange] = useState({
        startDate:'',
        endDate:''
    });
    return (
        <MyContext.Provider value={{dateRange, setDateRange}}>{children}</MyContext.Provider>
    )
}

export default ContextProvider