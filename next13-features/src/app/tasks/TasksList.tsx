import React from 'react'
import { Tasks } from '../../../typings'
import Link from 'next/link'

async function fetchTasks() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const tasks: Tasks[] = await res.json()
    return tasks
}

async function TasksList() {
    const tasks = await fetchTasks()
    return (
        <>
            {tasks.map(task => (<p key={task.id}>
                <Link href={`/tasks/${task.id}`}>Task identifier: {task.id}</Link>
            </p>))}
        </>
    )
}

export default TasksList