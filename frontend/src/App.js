import {useState,useEffect} from 'react'
import axios from 'axios'
import Button from './components/Button';
import Tasks from "./components/Tasks";
import Input from './components/Input';

function App() {
  const [tasks,setTasks] = useState([])
  var name = ''

  useEffect(() => {
    (async () => {
      const res = await axios.get('/api/todo') //index get request
      setTasks(res.data)
    })()
  }, [])

  const inputName = (task) => {
    name = task
  }
  const submit = async () => {
    if(name === '') {
      alert('Provide task to submit!')
    } else {
      try {
        const newTask = await axios.post(`/api/todo`, {
          name: name,
          status: true
        })
        setTasks(tasks => [...tasks, newTask.data])
      } catch (error) {
        console.log(error)
      }
    }
  }
  const deleteTask = async (id) => {
    try {
      setTasks(tasks.filter((task) => task._id !== id))
      await axios.delete(`/api/todo/${id}`)
    } catch (error) {
      console.log(error)
    }
  }
  const updateStatus = async (id) => {
    try {
      setTasks(tasks.map((task) => task._id === id ? {...task, status:!task.status} : task))
      await axios.patch(`/api/todo/${id}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <div className="flex justify-center">
        <div className="mt-5 w-full md:w-1/2">
          <div className="flex justify-between mb-3">
            <Input onInput={inputName}/>
            <Button text="Add" onSubmit={submit}/>
          </div>
          { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onUpdateStatus={updateStatus}/> : 'No available task!'}
          { tasks.length > 0 && <h6 className='text-xxs '>Note: Double click to change status</h6> }
        </div>
      </div>
    </div>
  );
}

export default App;
