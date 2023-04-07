import { Suspense } from 'react'
import Comments from './Comments'

export const fetchSomething = <T extends {}>(something: T, delay: number): Promise<T> =>
  new Promise<T>(resolve => setTimeout(() => resolve(something), delay))

export default async function Home() {
  const description = await fetchSomething("Something new", 100)

  return (
    <>
      <header>Header</header>
      <h2>Product Description</h2>
      <p>{description}</p>
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <Comments />
      </Suspense>
      <footer>Footer</footer>
    </>
  )
}
