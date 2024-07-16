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

    // Marks as Complete changes in local storage
    const toggleTask = (index) => {
        const newTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(newTasks);
    };

    // Delete Specific Task
    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    // Edits a task Uning Browser Popup
    const editTask = (index) => {
        const newTaskText = prompt('Edit task:', tasks[index].text);
        if (newTaskText) {
            const newTasks = tasks.map((task, i) => {
                if (i === index) {
                    return { ...task, text: newTaskText };
                }
                return task;
            });
            setTasks(newTasks);
        }
    };

    return (
        <>
            <div className="text-center p-4">
                <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-4 md:mb-5 lg:mb-7 xl:mb-10 uppercase">To-Do List</h1>
                <TaskInput addTask={addTask} />
                <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} editTask={editTask} />
            </div>
        </>
    )
};

export default Home;