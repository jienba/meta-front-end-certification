function ListOfGoals(props) {
    return(
        <ul>
            {
                props.allGoals.map((goalItem) => (
                    <li key={goalItem.goal}>
                        <span>My goal is to {goalItem.goal} by {goalItem.by}</span>
                    </li>
                ))}

        </ul>
    )

}

export default ListOfGoals;
