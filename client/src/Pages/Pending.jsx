import React from 'react'

const Pending = ({ tasks }) => {
    function deleteTask({ task }) {

    }
    return (
        <div>
            <div className='px-3'>
                <p className='text-xl  font-bold'>Pending</p >

                {
                    tasks.map((task, index) => (
                        <li className="flex items-center py-2" key={index}>
                            <input type="checkbox" id="item1" className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-300 focus:ring-blue-400 focus:border-blue-400" />

                            <label htmlFor="item1" key={index} className="ml-3 text-gray-700">{task}</label>

                            <label htmlFor="item1" className="ml-3 text-gray-700">Description1</label>
                            <button type="submit" onClick={()=>deleteTask(index)} className="px-2 py-1 bg-red-400 text-white   rounded-lg shadow-md border-3  hover:bg-red-500 hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-75 transition ease-in-out duration-300">
                                Delete
                            </button>
                        </li>
                    ))
                }
            </div>
        </div>
    )
}

export default Pending