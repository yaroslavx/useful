import { fetchSomething } from "./page"
import EditableComments from "./EditableComments"

async function Comments() {
    const comments = await fetchSomething(['first comment', 'second comments', 'third comment'], 2000)
    return <div>

        <EditableComments comments={comments} />
    </div>
}


export default Comments