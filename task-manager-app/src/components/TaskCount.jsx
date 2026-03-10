function TaskCount({ tasks }) {

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className="mb-4 bg-amber-200 p-3 rounded">
      <p>Total Tasks: {tasks.length}</p>
      <p>Completed Tasks: {completed}</p>
    </div>
  );
}

export default TaskCount;