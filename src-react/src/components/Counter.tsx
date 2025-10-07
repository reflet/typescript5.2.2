import React, {useState} from 'react';

function Counter() {
    const [currentValue, setValue] = useState(0);

    return (
        <>
            <h2>{currentValue}</h2>
            <button onClick={() => setValue(currentValue - 2)}>-2</button>
            <button onClick={() => setValue(currentValue + 2)}>+2</button>
        </>
    );
}

export default Counter;
