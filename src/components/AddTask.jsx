import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Store } from '../MyContext'

const AddTask = () => {
  const { settasks } = useContext(Store)

  const { register, handleSubmit, reset } = useForm()

  const submitHandler = (data) => {
    settasks(prev => [...prev, data])
    reset()
  }

  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-6">Add New Task</h2>
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
        <input
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Task Title"
          {...register('TaskTitle')}
        />
        <input
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Task Description"
          {...register('TaskDes')}
        />
        <select
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
          {...register('Option')}
        >
          <option value="High priority">High priority</option>
          <option value="Medium priority">Medium priority</option>
          <option value="Low priority">Low priority</option>
        </select>
        <button className="w-full py-3 rounded-lg bg-linear-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-md hover:scale-[1.02] transition">
          Add Task
        </button>
      </form>
    </div>
  )
}

export default AddTask