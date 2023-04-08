import React from 'react'
import { Tasks } from '../../../../typings'
import { notFound } from 'next/navigation'

export const dynamicParams = true

type TaskPageProps = {
    params: {
        id: string
    }
}

async function fetchTask(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, { next: { revalidate: 60 } })
    const task = await res.json()

    return task
}

async function TaskPage({ params: { id } }: TaskPageProps) {
    const task = await fetchTask(id)

    if (!task.id) return notFound()
    return (
        <div className='p-10 bg-yellow-200  m-2 shadow-lg text-black'>
            <p>#{task.id}: {task.title}</p>
            <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
            <p className='border-t border-black mt-5 text-right'>
                By user: {task.userId}
            </p>
        </div>
    )
}

export default TaskPage

export async function generateStaticParams() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const tasks: Tasks[] = await res.json()

    const demoTasks = tasks.splice(0, 10)

    return demoTasks.map(task => { id: `${task.id}` })
} 