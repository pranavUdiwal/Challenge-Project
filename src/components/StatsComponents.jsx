import React, { useContext } from 'react'
import { Store } from '../MyContext'

const StatsComponents = () => {

    const {count, setcount, tasks, settasks} = useContext(Store)

  return (
    <div className="w-full grid sm:grid-cols-2 md:grid-cols-4 gap-4">
      
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md text-center">
        <h2 className="text-sm opacity-70">Total</h2>
        <p className="text-2xl font-semibold mt-2">{tasks.length}</p>
      </div>

      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md text-center">
        <h2 className="text-sm opacity-70">Active</h2>
        <p className="text-2xl font-semibold mt-2">0</p>
      </div>

      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md text-center">
        <h2 className="text-sm opacity-70">Completed</h2>
        <p className="text-2xl font-semibold mt-2">0</p>
      </div>

      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md text-center">
        <h2 className="text-sm opacity-70">Total Time</h2>
        <p className="text-2xl font-semibold mt-2">{count} sec</p>
      </div>

    </div>
  )
}

export default StatsComponents