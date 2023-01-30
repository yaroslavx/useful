import { observer } from "mobx-react"
import store from "../store.js"


const MainPage = () => {
    return (
        <div>
            {store.tasks.map(task => <div key={task.id}> {task.text}</div>)}
        </div >
    )
}

export default observer(MainPage)