import { useEffect, useRef } from "react";

export const AddTask = ({taskList, setTaskList, updatedTask, setUpdatedTask}) => {

    const taskRef = useRef();

    useEffect(() => {
        if (taskRef.current) {
            taskRef.current.focus();
        }
    }, []);

    const handleSubmit = (event) => {

        event.preventDefault();
        const date = new Date();

        if (updatedTask.id)
        {
            const updateTask = taskList.map((task)=> task.id===updatedTask.id ? {
                                id: task.id,
                                name: updatedTask.name,
                                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
                            } : task);
            setTaskList(updateTask);
        }
        else
        {
            const newTask = {
                id : date.getTime(),
                name: event.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            setTaskList([...taskList, newTask]);
        }
        
        setUpdatedTask({});
        
    }

  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input type="text" 
                    name="task" 
                    ref={taskRef} 
                    value={updatedTask?.name || ""} 
                    autoComplete="off" 
                    placeholder="Type here ..." 
                    maxLength="50"
                    onChange = {(e) => setUpdatedTask({...updatedTask, name: e.target.value })} />
            <button type="submit">{updatedTask.id ? "Edit Task" : "Add Task"}</button>
        </form>
    </section>
  )
}
