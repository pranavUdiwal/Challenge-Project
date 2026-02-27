import React, { createContext, useState } from 'react'

export const Store = createContext()

const MyContext = ({ children }) => {
  const [tasks, settasks] = useState([])
  const [theme, settheme] = useState(true)

  const [count, setcount] = useState(0)

  return (
    <Store.Provider value={{ tasks, settasks, theme, settheme, count, setcount }}>
      {children}
    </Store.Provider>
  )
}

export default MyContext