
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const TaskInput = ({ addTask }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // it confirm the filed is not empty
        if (task.trim()) {
            addTask(task);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex justify-center ">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a new task"
                className="border p-2 w-auto mr-2 text-black"
            />
            <button type="submit" className="px-5 py-2.5 relative rounded group font-medium text-white inline-block whitespace-nowrap">
                <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                <span className="relative">Add Task</span>
            </button>
        </form>
    );
};

export default TaskInput;
