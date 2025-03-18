import './App.css'

import { useState } from "react";
import GoalForm from "./component/GoalForm.jsx";
import ListOfGoals from "./component/ListOfGoals.jsx";

export default function App() {
    const [allGoals, updateAllGoals] = useState([]);
    
    function addGoal(goal) {
        updateAllGoals(prevState => {
            const updatedGoals = [...prevState, goal];
            console.log("All goals added:", updatedGoals); // Now logs correctly
            return updatedGoals;
        })
        // updateAllGoals([...allGoals, goal]);
        // console.log("All goals added", allGoals);
    }
    return(
        <>
            <GoalForm onAdd={addGoal}/>
            <ListOfGoals allGoals={allGoals} />
        </>
    )
}
