import React from 'react'
import{ useState } from 'react'
import './css/App.css'

export default function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <div>
                First div
            </div>
            <h1>Header</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    );
}