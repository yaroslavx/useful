import { observer } from 'mobx-react'
import React from 'react'
import store from '../store.js'

type Props = {}

const InputTask = (props: Props) => {
    return (
        <div>
            <input type="text" value={store.newTask} onChange={e => (store.newTask = e.target.value)} />
            <button onClick={() => store.addTask()}>add</button>
        </div>
    )
}

export default observer(InputTask)