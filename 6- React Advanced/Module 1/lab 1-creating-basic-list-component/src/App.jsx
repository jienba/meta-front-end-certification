import "./App.css";
import {useState} from "react";
import Todo from "./Todo.jsx";
import DessertsList from "./DessertsList.jsx";
import dessertsList from "./DessertsList.jsx";

const desserts = [
    {
        name: "Chocolate Cake",
        calories: 400,
        createdAt: "2022-09-01",
    },
    {
        name: "Ice Cream",
        calories: 200,
        createdAt: "2022-01-02",
    },
    {
        name: "Tiramisu",
        calories: 300,
        createdAt: "2021-10-03",
    },
    {
        name: "Cheesecake",
        calories: 600,
        createdAt: "2022-01-04",
    },
];


function App() {
    const [todos, setTodos] = useState([
        {
            id: 'todo1',
            createdAt: '2022-09-01',
        },
        {
            id: 'todo2',
            createdAt: '2022-08-01',
        }
    ]);

    console.log("All task", todos)

    const reverseOrder = () => {
        setTodos([...todos].reverse())
    }
    return (
        <>
            <div className="App">
                <h2>List of low calorie desserts:</h2>
                <DessertsList data={desserts}/>
            </div>
            <h2>Todo list</h2>
            <div>
                <button onClick={reverseOrder}>Reverse the order</button>
                <table>
                    <tbody>
                    {todos.map((todoItem, index) => (
                        <Todo  key={todoItem.id} createdAt={todoItem.createdAt} id={todoItem.id} />
                    ))}
                    </tbody>
                </table>

            </div>
        </>

    );
}

export default App;
