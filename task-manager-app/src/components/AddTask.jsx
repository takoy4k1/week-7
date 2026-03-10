import { useForm } from "react-hook-form";

function AddTask({ addNewTask }) {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (taskObj) => {
    addNewTask(taskObj);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-6">

      <input
        type="text"
        placeholder="Enter task title"
        className="border p-2 rounded w-full mb-2"
        {...register("task", {
          required: "Task is required",
          minLength: {
            value: 3,
            message: "Minimum 3 characters"
          }
        })}
      />

      {errors.task && (
        <p className="text-red-500">{errors.task.message}</p>
      )}

      <select
        className="border p-2 rounded w-full mb-2"
        {...register("priority")}
      >
        <option value="Low">Low Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="High">High Priority</option>
      </select>

      <button className="bg-amber-200 text-amber-950 w-full p-2 rounded">
        Add Task
      </button>

    </form>
  );
}

export default AddTask;