import React from 'react'

const Pending = () => {
    return (
        <div>
            <div>
                <p className='text-xl  font-bold'>Pending</p >
                <li className="flex items-center py-2">
                    <input type="checkbox" id="item1" className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-300 focus:ring-blue-400 focus:border-blue-400" />
                    <label htmlFor="item1" className="ml-3 text-gray-700">Title</label>
                    <br />
                    <label htmlFor="item1" className="ml-3 text-gray-700">Description</label>
                </li>
            </div>
        </div>
    )
}

export default Pending