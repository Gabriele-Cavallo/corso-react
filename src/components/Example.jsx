import { useState, useEffect } from 'react';

function Example(cities) {
    const [count, setCount] = useState(0);
    
    // Definizione dell'effetto
        useEffect(() => {
            localStorage.setItem('count', count.toString());
            document.title = `Conteggio: ${count}`;
            console.log('ciao da use effect');
        }, [count, cities]);
        // useEffect(() => {
        //     fetch('https://jsonplaceholder.typicode.com/posts/1')
        //     .then((response) => response.json())
        //     .then((data) => {
        //         setData(data);
        //         console.log(data);
        //     })
        // }, [count]);
    
    return(
        <>
            <div>
                <p>Conteggio: {count}</p>
                <button onClick={() => setCount(count + 1)}>Incrementa</button>
            </div>
        </>
    );
}
export default Example;