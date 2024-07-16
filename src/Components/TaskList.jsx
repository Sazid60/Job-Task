// eslint-disable-next-line react/prop-types
const TaskList = ({ tasks }) => {
    return (
        <div className="overflow-x-auto mt-8 md:mt-10 lg:mt-16 xl:mt-20">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="">
                    <tr className="border-2">
                        <th scope="col" className="px-2 lg:px-3 xl:px-6 py-3 text-left text-md md:text-xl font-bold uppercase whitespace-nowrap">
                            Mark as Complete
                        </th>

                        <th scope="col" className="px-2 lg:px-3 xl:px-6 py-3 text-center text-md md:text-xl font-bold uppercase whitespace-nowrap ">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {tasks.map((task, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4">
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={task.completed}
                                        className="mr-4 lg:mr-6 xl:mr-10"
                                    />
                                    <span className={task.completed ? 'line-through text-gray-500 text-sm md:text-base' : 'text-sm md:text-base'}>
                                        {task.text}
                                    </span>
                                </label>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center text-sm md:text-base">
                                <button  className="bg-gradient-to-br from-purple-600 to-blue-500 text-white px-3 py-1 mr-2 rounded">Edit</button>
                                <button  className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskList;
