import React, { useContext } from 'react'
import { Store } from '../MyContext'

let intervalId = null;

const Tasks = () => {
  const { tasks, count, setcount } = useContext(Store)

const startHandler = () => {
    if (intervalId) return;

    intervalId = setInterval(() => {
      setcount(prev => prev + 1);
    }, 1000);
  };

  const pauseHandler = () => {
    clearInterval(intervalId);
    intervalId = null;
  };

  return (
    <div className="space-y-4">
      {tasks.length === 0 && (
        <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg text-center opacity-70">
          No tasks added yet
        </div>
      )}

      {tasks.map((task, index) => (
        <div key={index} className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-lg font-semibold">{task.TaskTitle}</h3>
          <p className="opacity-70 mt-1">{task.TaskDes}</p>
          <span
            className={`inline-block mt-3 px-3 py-1 text-sm rounded-full ${
              task.Option === 'High priority'
                ? 'bg-red-100 text-red-600'
                : task.Option === 'Medium priority'
                ? 'bg-yellow-100 text-yellow-600'
                : 'bg-green-100 text-green-600'
            }`}
          >
            {task.Option}
          </span>
          <button onClick={startHandler} className='mx-5 border-white border-2 px-3 py-1 rounded-xl'>Start</button>
          <button onClick={pauseHandler} className='mx-5 border-white border-2 px-3 py-1 rounded-xl'>Pause</button>
        </div>
      ))}
    </div>
  )
}

export default Tasks