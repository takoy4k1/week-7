function TaskItem({ taskObj, index, toggleTask, deleteTask }) {

  return (
    <div className="flex justify-between items-center border p-3 mb-2 rounded">

      <div>
        <p className={taskObj.completed ? "line-through" : ""}>
          {taskObj.task}
        </p>

        <p className="text-sm text-gray-500">
          Priority: {taskObj.priority}
        </p>
      </div>

      <div className="flex gap-2">

        <button
          onClick={() => toggleTask(index)}
          className="bg-green-300 text-white px-2 rounded"
        >
          done
        </button>

        <button
          onClick={() => deleteTask(index)}
          className="bg-red-300 text-white px-2 rounded"
        >
          delete
        </button>

      </div>

    </div>
  );
}

export default TaskItem;