import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-blue-400">Home page</div>
      <Link href='/tasks' className="text-blue-400">Tasks</Link>
      <Link href='/search' className="text-blue-400">Search</Link>
    </>
  )
}
