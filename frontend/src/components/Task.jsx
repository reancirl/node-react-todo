import { FaTimes } from 'react-icons/fa'
const Task = ({task,onDelete,onUpdateStatus}) => {
  return (
    <div className="bg-slate-200 mb-1 py-2 pl-2" onDoubleClick={() => onUpdateStatus(task._id)}>
        <h3 className={"text-lg " + (task.status ? '' : 'line-through')}>
            {task.name}
            <FaTimes className='float-right pr-2 text-rose-700 cursor-pointer' onClick={() => onDelete(task._id)}/>
        </h3>
        <p className={"text-xs " + (task.status ? 'text-rose-700' : 'text-green-700')}>{task.status ? 'Active' : 'Completed'}</p>
    </div>
  )
}

export default Task