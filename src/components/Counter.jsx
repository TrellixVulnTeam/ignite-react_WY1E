import { useState } from 'react';

// sempre que a funçao commeça começa com use
// ela sera um hook

export function Counter(){

    const [counter, setCounter] = useState(0);



    function increment(){
        setCounter(counter + 1 );
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>
    )
}