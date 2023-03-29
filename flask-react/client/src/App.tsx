import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [members, setMembers] = useState([])
  useEffect(() => {
    const fetchMembers = async () => {
      const res = await fetch('http://localhost:5000/members')
      const data = await res.json()
      setMembers(data.members)
    }

    fetchMembers()
  }, [])

  return (
    <div className="App">
      {members.map((member) => <div key={member}>{member}</div>)}
    </div>
  )
}

export default App
