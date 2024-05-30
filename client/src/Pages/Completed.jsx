import React from 'react'

const Completed = () => {
    return (
        <div className='px-3'>
            <p className='text-xl  font-bold'>Completed</p >
            <li className="flex items-center py-2">
                <input type="checkbox" id="item1" className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-300 focus:ring-blue-400 focus:border-blue-400" />

                <label htmlFor="item1" className="ml-3 text-gray-700">Title1</label>

                <label htmlFor="item1" className="ml-3 text-gray-700">Description1</label>
            </li>
            <li className="flex items-center py-2">
                <input type="checkbox" id="item1" className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-300 focus:ring-blue-400 focus:border-blue-400" />

                <label htmlFor="itme1" className="ml-3 text-gray-700">Title2</label>

                <label htmlFor="itme1" className="ml-3 text-gray-700">Description2</label>
            </li>
        </div>
    )
}

export default Completed