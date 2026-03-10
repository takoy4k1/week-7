import { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import TaskCount from "./TaskCount";

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (taskObj) => {
    setTasks([...tasks, { ...taskObj, completed: false }]);
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="bg-amber-100 p-8 rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Task Manager
      </h1>

      <AddTask addNewTask={addNewTask} />

      <TaskCount tasks={tasks} />

      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default TaskManager;