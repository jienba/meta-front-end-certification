import {useUserContext} from "../UserContext.jsx";

function BlogPage() {
    const {user: authenticatedUser} = useUserContext()
    return (
        <>
            <h2>What is Lorem ipsum?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda atque culpa cum debitis
                dolorum,
                earum error incidunt modi nihil quasi rerum sunt suscipit! Aperiam architecto aut beatae consequuntur,
                corporis
                deleniti, deserunt eaque earum facilis fugiat ipsa ipsum libero minima molestiae necessitatibus nesciunt
                numquam
                porro possimus, praesentium qui quis recusandae repellendus sequi similique suscipit veniam veritatis?
                Ad dolore, iure. <br/>
                writtten by {authenticatedUser.name}
            </p>
        </>

    )
}

export default BlogPage;
