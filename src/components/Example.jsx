// import { useState, useEffect, useContext } from 'react';
// import { ProvaContext } from '../stores/ProvaContext';
import { increment, decrement } from '../redux/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

function Example() {
    // const [count, setCount] = useState(0);
    
    // // Definizione dell'effetto
    //     useEffect(() => {
    //         localStorage.setItem('count', count.toString());
    //         document.title = `Conteggio: ${count}`;
    //         console.log('ciao da use effect');
    //     }, [count, cities]);
        // useEffect(() => {
        //     fetch('https://jsonplaceholder.typicode.com/posts/1')
        //     .then((response) => response.json())
        //     .then((data) => {
        //         setData(data);
        //         console.log(data);
        //     })
        // }, [count]);
        
    // const { count, setCount } = useContext(ProvaContext);
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return(
        <>
            <div>
                <p className='mb-3'>Conteggio: {count}</p>
                <button
                    className='mr-3'
                    aria-label='Increment value'
                    onClick={() => dispatch(increment())}>Incrementa +
                </button>
                <button
                    className='mr-3'
                    aria-label='Decrement value'
                    onClick={() => dispatch(decrement())}>Decrementa -
                </button>
            </div>
        </>
    );
}
export default Example;