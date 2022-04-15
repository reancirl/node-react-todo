import Task from "./Task";

const Tasks = ({tasks,onDelete,onUpdateStatus}) => {
  return (
    <div>
        {tasks.map((task) =>
            <Task key={task._id} task={task} onDelete={onDelete} onUpdateStatus={onUpdateStatus}/>
        )}
    </div>
  )
}

export default Tasks