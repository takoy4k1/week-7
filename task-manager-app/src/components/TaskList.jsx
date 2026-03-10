import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, deleteTask }) {

  if (tasks.length === 0) {
    return <p className="text-gray-500">No tasks yet</p>;
  }

  return (
    <div>
      {tasks.map((taskObj, index) => (
        <TaskItem
          key={index}
          taskObj={taskObj}
          index={index}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;