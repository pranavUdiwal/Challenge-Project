import React, { useContext } from 'react'
import { Store } from '../MyContext'

const Navbar = () => {
  const { theme, settheme } = useContext(Store)

  return (
    <div className="w-full backdrop-blur-md bg-white/70 dark:bg-black/40 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold tracking-tight">Task Manager</h1>
        <button
          onClick={() => settheme(prev => !prev)}
          className="px-4 py-2 rounded-lg bg-linear-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-md hover:scale-105 transition"
        >
          {theme ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </div>
  )
}

export default Navbar