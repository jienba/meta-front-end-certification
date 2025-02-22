import {useUserContext} from "../UserContext.jsx";

function LoggedInUser() {
    const {user: authenticatedUser} = useUserContext()
    return (
        <p>Hello  <span className="Username"> {authenticatedUser.name}</span></p>
    )
}

export default LoggedInUser;
