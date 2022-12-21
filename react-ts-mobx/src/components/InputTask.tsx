import { observer } from 'mobx-react'
import store from '../store.js'

const InputTask = () => {
    return (
        <>
            <input type="text" value={store.newTask} onChange={e => (store.newTask = e.target.value)} />
            <button onClick={() => store.addTask()}>add</button>
        </>
    )
}

export default observer(InputTask)