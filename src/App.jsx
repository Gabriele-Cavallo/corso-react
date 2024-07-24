// import { useState, useEffect, useReducer, useContext } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
// import './components/Navbar';
import Navbar from './components/Navbar';
import CardForm from './components/CardForm';
import Example from './components/Example';
// import { ProvaContext } from './stores/ProvaContext';
import { useSelector } from 'react-redux';

// function handleChange(event) {
//   console.log(event.target.value);
// }

// function handleSubmit(event) {
//   event.preventDefault();
//   console.log(event);
// }

// function formReducer(state, action) {
//   switch(action.type){
//     case 'CHANGE_FIELD':
//       return {...state, [action.field]: action.value}
//       case 'RESET_FORM':
//         return { name:'', email: '' };
//         default:
//           return state;
//   }
// }

function App() {
  // const [count, setCount] = useState(0);
  // const [items, setItems] = useState([1, 2, 3]);
  // const [user, setUser] = useState({ name: 'Alice', age: 30});
  // const [data, setData] = useState([]);
  // const [formData, dispatchFormState] = useReducer(formReducer, {name: '', email: ''})

  // const addItems = () => {
  //   const newItem = 4;
  //   setItems([...items, newItem])
  //   console.log(items);
  // }

  // const updateUserName = () => {
  //   const updateUser = { ...user, name: 'Bob'};
  //   setUser(updateUser);
  //   console.log(user);
  // }

  // const handleFieldChange = (field, value) => {
  //   dispatchFormState({type: 'CHANGE_FIELD', field, value})
  // }  

  // const resetForm = (event) => {
  //   event.preventDefault();
  //   dispatchFormState({type: 'RESET_FORM'})
  // }

  // const sendForm = (event) => {
  //   event.preventDefault();
  //   console.log(formData);
  // }  

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then((response) => response.json())
  //   .then((data) => {
  //       setData(data);
  //       console.log(data);
  //   })
  // }, []);

  

  // const addCity = (city) => {
  //   setCities([...cities, city])
  // }

  // return (
  //   <ProvaContext.Provider value={{ count, setCount }}>
  //   <form action="">
  //       <div>
  //         <label htmlFor="name">Nome:</label>
  //         <input type="text" name="name" id="name" value={formData.name} onChange={(event) => handleFieldChange('name', event.target.value)} />
  //       </div>
  //       <div>
  //         <label htmlFor="email">Email:</label>
  //         <input type="email" name="email" id="email" value={formData.email} onChange={(event) => handleFieldChange('email', event.target.value)} />
  //       </div>
  //       <button onClick={resetForm}>Resetta il Form</button>
  //       <button onClick={sendForm}>Invia</button>
  //     </form>
  //   <Example cities={cities}></Example>
  //   <CardForm addCity={addCity}></CardForm>
  //   <div className='grid grid-cols-4 gap-10'>
  //     {cities.map((city) => (
  //       <Card
  //         key={city.id}
  //         title={city.name}
  //         isVisited={city.isVisited}
  //         imgUrl={city.imgUrl}>
  //           {city.description}
  //       </Card>
  //     ))}
  //     {cities
  //       .filter((city) => city.isVisited)
  //       .map((city) => (
  //         <Card
  //           key={city.id}
  //           title={city.name}
  //           isVisited={city.isVisited}
  //           imgUrl={city.imgUrl}>
  //             {city.description}
  //         </Card>
  //       ))}
  //     {/* <Card
  //       isVisited={cities[0].isVisited}
  //       title={cities[0].name} 
  //       imgUrl={cities[0].imgUrl}>
  //         {cities[0].description}
  //     </Card>
  //     <Card
  //       isVisited={false}
  //       title="New York" 
  //       imgUrl="https://images.unsplash.com/photo-1516893842880-5d8aada7ac05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D">
  //     </Card>
  //     <Card
  //       isVisited={true}
  //       title="Rome" 
  //       imgUrl="https://images.unsplash.com/photo-1598258500419-5d7895465a20?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
  //     </Card>
  //     <Card
  //       isVisited={false}
  //       title="Paris" 
  //       imgUrl="https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
  //     </Card> */}
  //   </div>
  //   <div className='grid grid-cols-4 gap-10'>
  //     {data.map((item) => (
  //       <div className='bg-slate-400 rounded-lg p-3' key={item.id}>
  //         <p className='text-red-500 mb-1'>useid: {item.userId}</p>
  //         <h2 className='text-xl mb-3'>{item.title}</h2>
  //         <p className='text-gray-800'>{item.body}</p>
  //       </div>
  //     ))}
  //   </div>
  //   <Navbar></Navbar>
  //     {/* <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1> */}
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <button onClick={addItems}>
  //         prova
  //       </button>
  //       <button onClick={updateUserName}>
  //         update
  //       </button>
  //       <button onClick={handleClick}>
  //         alert
  //       </button>
  //       <input onChange={handleChange} type="text" />
  //       <form onSubmit={handleSubmit} action="">
  //         <button type="submit">Submit</button>
  //       </form>
  //       {/* <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p> */}
  //     </div>
  //     {/* <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p> */}
  //   </ProvaContext.Provider>
  // )

  const cities = useSelector((state) => state.cities.value);

  return (
    <>
      <Navbar></Navbar>
      <Example></Example>
      <CardForm></CardForm>
    </>
  );
}

export default App;
