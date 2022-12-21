import React from 'react'
import store from '../store.js'
import { observer } from 'mobx-react'
import InputTask from './InputTask.js'

type Props = {}

export const TaskListItems = (props: Props) => {
    return (
        <div>
            {store.tasks.map(task => <div>{task.text}</div>)}
        </div>
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