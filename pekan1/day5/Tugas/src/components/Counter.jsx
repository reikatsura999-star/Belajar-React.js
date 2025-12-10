import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <div className="counter-container">
            <h2 className="counter-title">🔢 Counter</h2>
            <p className="counter-value">{count}</p>
            <div className="counter-buttons">
                <button className="btn-increment" onClick={increment}>
                    ➕ Tambah
                </button>
                <button className="btn-decrement" onClick={decrement}>
                    ➖ Kurang
                </button>
            </div>
        </div>
    );
}

export default Counter;