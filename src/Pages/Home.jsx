import { useEffect } from "react";
import { useState } from "react";
import TaskInput from "../Components/TaskInput";
import TaskList from "../Components/TaskList";

const Home = () => {
    // This grabs the data saved in Local Storage and allows to set new data
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    // if the tasks are added this helps to add the task in local storage promptly
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    // makes and object of a new task and adds with te existing ones.
    const addTask = (taskText) => {
        const newTask = { text: taskText, completed: false };
        setTasks([...tasks, newTask]);
    };

    return (
        <>
            <div className="text-center p-4">
                <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-4 md:mb-5 lg:mb-7 xl:mb-10 uppercase">To-Do List</h1>
                <TaskInput addTask={addTask} />
                <TaskList tasks={tasks} />
            </div>
        </>
    )
};

export default Home;