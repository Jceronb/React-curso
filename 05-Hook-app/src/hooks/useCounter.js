
import { useState } from "react"

export const useCounter = (initialValue = 1) => {

    const [counter, setcounter] = useState(initialValue)

     const increment = (value = 1) => {
        setcounter( counter + value );
    }

    const decrement = (value = 1) => {
        if(counter <= 1) return ( setcounter(initialValue));
        setcounter( counter - value );
    }

    const reset = () => {
        setcounter(initialValue);
    }

        
        return {

            counter,
            increment,
            decrement,
            reset
        }

}



