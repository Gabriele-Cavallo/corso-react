import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Navbar'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='grid grid-cols-4 gap-10'>
      <Card
        isVisited={true}
        title="Tokio" 
        imgUrl="https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, iure.
      </Card>
      <Card
        isVisited={false}
        title="New York" 
        imgUrl="https://images.unsplash.com/photo-1516893842880-5d8aada7ac05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D">Lorem ipsum dolor sit amet.
      </Card>
      <Card
        isVisited={true}
        title="Rome" 
        imgUrl="https://images.unsplash.com/photo-1598258500419-5d7895465a20?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis officiis facilis odio asperiores assumenda? Quisquam.
      </Card>
      <Card
        isVisited={false}
        title="Paris" 
        imgUrl="https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </Card>
    </div>
    <Navbar></Navbar>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
