import { useEffect } from "react";

function useCounter() {
    useEffect(() => {
        const intervalId = setInterval(() => {
            const randomNumber = Math.floor(Math.random()*100);
            console.log(randomNumber);
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])
}

export default useCounter;