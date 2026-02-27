import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import StatsComponents from './components/StatsComponents'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import { Store } from './MyContext'

const App = () => {
  const { theme } = useContext(Store)

  return (
    <div className={`min-h-screen transition-all duration-300 ${theme ? 'light' : 'dark'}`}>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        <StatsComponents />
        <div className="grid md:grid-cols-2 gap-8">
          <AddTask />
          <Tasks />
        </div>
      </div>
    </div>
  )
}

export default App