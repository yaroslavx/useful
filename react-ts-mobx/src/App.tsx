import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { TaskList } from './components/TaskList.js'
import MainPage from './components/MainPage.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <TaskList />
  },
  {
    path: '/mainPage',
    element: <MainPage />
  }
])


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
