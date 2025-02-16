function Todo(props) {
    return(
        <tr>
            <td>
                <label>{props.id}</label>
            </td>
            <td>
                <label>
                    <input type="text"/>
                </label>
            </td>
            <td>
                <label>
                    {props.createdAt}
                </label>
            </td>
        </tr>
    )
}

export default Todo;
