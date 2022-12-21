import store from '../store.js'
import { observer } from 'mobx-react'
import InputTask from './InputTask.js'


export const TaskListItems = () => {
    return (
        <>
            {store.tasks.map(task => <div key={task.id}>
                <input type="text" value={task.text} onChange={(e) => task.text = e.target.value} />
                <input type='checkbox' checked={task.done} onChange={() => store.doneTask(task.id)} />
                <button onClick={() => store.removeTask(task.id)}>&times;</button>
            </div>)
            }
        </>
    )
}

const TaskListItemsObserver = observer(TaskListItems)

export const TaskList = () => {
    return (
        <>
            <InputTask />
            <TaskListItemsObserver />
        </>
    )
}