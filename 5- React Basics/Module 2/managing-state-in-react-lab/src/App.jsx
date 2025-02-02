import Fruits from "./components/Fruits.jsx";
import FruitsCounter from "./components/FruitsCounter.jsx";
import {useState} from "react";

function App() {
    const [fruits] = useState([
        {fruitName: 'apple', id: 1},
        {fruitName: 'apple', id: 2},
        {fruitName: 'plum', id: 3},
    ]);
    return (
        <div className="App">
            <h1>Where should the state go?</h1>
            <Fruits fruits={fruits}/>
            <FruitsCounter fruits={fruits} />
        </div>
    );
}

export default App;
