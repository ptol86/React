import React from "react";
import { useState, useEffect } from "react";


const Counter = () => {
  
  const [counter, setCounter] = useState(0)

  useEffect(() => {
  }, [counter]);

    return (
      
      <div className="counter">
        <button className="counter__button" onClick={() => setCounter(counter - 1)}>
          -
        </button>
        <span className="counter__value" onClick={() => setCounter(0)}>
          {counter}
        </span>
        <button className="counter__button" onClick={() => setCounter(counter + 1)}>
          +
        </button>
      </div>
    );
  
}

export default Counter; 