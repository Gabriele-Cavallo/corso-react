import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './components/Navbar';
import Navbar from './components/Navbar';
import Card from './components/Card';

function handleClick() {
  alert('ciao');
}

function handleChange(event) {
  console.log(event.target.value);
}

function handleSubmit(event) {
  event.preventDefault();
  console.log(event);
}

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([1, 2, 3]);
  const [user, setUser] = useState({ name: 'Alice', age: 30});
  console.log(items);
  console.log(user);

  const addItems = () => {
    const newItem = 4;
    setItems([...items, newItem])
    console.log(items);
  }

  const updateUserName = () => {
    const updateUser = { ...user, name: 'Bob'};
    setUser(updateUser);
    console.log(user);
  }

  const cities = [
    {
      id: 0,
      name: "Tokio",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, iure.",
      imgUrl:"https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true,
    },
    {
      id: 1,
      name: "New York",
      description : "Lorem ipsum dolor sit amet.",
      imgUrl:"https://images.unsplash.com/photo-1516893842880-5d8aada7ac05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
      isVisited: false,
    },
    {
      id: 2,
      name: "Rome",
      description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis officiis facilis odio asperiores assumenda? Quisquam.",
      imgUrl:"https://images.unsplash.com/photo-1598258500419-5d7895465a20?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true,
    },
    {
      id: 3,
      name: "Paris",
      description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      imgUrl:"https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: false,
    },
  ]

  return (
    <>
    <div className='grid grid-cols-4 gap-10'>
      {cities.map((city) => (
        <Card
          key={city.id}
          title={city.name}
          isVisited={city.isVisited}
          imgUrl={city.imgUrl}>
            {city.description}
        </Card>
      ))}
      {cities
        .filter((city) => city.isVisited)
        .map((city) => (
          <Card
            key={city.id}
            title={city.name}
            isVisited={city.isVisited}
            imgUrl={city.imgUrl}>
              {city.description}
          </Card>
        ))}
      {/* <Card
        isVisited={cities[0].isVisited}
        title={cities[0].name} 
        imgUrl={cities[0].imgUrl}>
          {cities[0].description}
      </Card>
      <Card
        isVisited={false}
        title="New York" 
        imgUrl="https://images.unsplash.com/photo-1516893842880-5d8aada7ac05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D">
      </Card>
      <Card
        isVisited={true}
        title="Rome" 
        imgUrl="https://images.unsplash.com/photo-1598258500419-5d7895465a20?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
      </Card>
      <Card
        isVisited={false}
        title="Paris" 
        imgUrl="https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
      </Card> */}
    </div>
    <Navbar></Navbar>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={addItems}>
          prova
        </button>
        <button onClick={updateUserName}>
          update
        </button>
        <button onClick={handleClick}>
          alert
        </button>
        <input onChange={handleChange} type="text" />
        <form onSubmit={handleSubmit} action="">
          <button type="submit">Submit</button>
        </form>
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
