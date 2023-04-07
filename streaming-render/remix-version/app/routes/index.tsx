import { useLoaderData } from '@remix-run/react'
import styles from '../../styles/global.css'
import { defer } from '@remix-run/node'
import { Suspense, useState, use } from 'react'

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export const fetchSomething = <T extends {}>(something: T, delay: number): Promise<T> =>
  new Promise<T>(resolve => setTimeout(() => resolve(something), delay))

export async function loader() {
  const description = await fetchSomething("Brand New Description", 2000)
  const comments = fetchSomething(["first comments", 'second comments', 'third comments'], 1000)

  return defer({ description, comments })
}


function Comments({ comments: commentsPromise }: { comments: string[] }) {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<string[]>(use(commentsPromise))

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment}>{comment}</li>
        ))}
      </ul>
      <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
      <button onClick={() => { setComments([...comments, newComment]); setNewComment('') }}>Add</button>
    </div>
  );
}




export default function Index() {
  const { description, comments } = useLoaderData()
  return (<>
    <header>Header</header>
    <h2>Product Description</h2>
    <p>{description}</p>
    <h2>Comments</h2>
    <Suspense>
      <Comments comments={comments} />
    </Suspense>
    <footer>Footer</footer>
  </>)
}