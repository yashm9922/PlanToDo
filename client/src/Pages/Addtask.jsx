import React from 'react'

const Addtask = () => {
    return (
        <div>
            <form action="">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title :</label>
                    <input id="title" type="text" placeholder="Enter the Title to do" className=" px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description :</label>
                    <input id="description" type="text" placeholder="Enter the description to do" className=" px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div className="flex">
                    <button type="submit" className="px-4 py-2 bg-blue-400 text-white font-semibold rounded-lg shadow-md border-3  hover:bg-blue-500 hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-75 transition ease-in-out duration-300">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Addtask