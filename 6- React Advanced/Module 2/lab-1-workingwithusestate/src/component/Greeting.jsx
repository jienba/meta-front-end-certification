import {useState} from "react";


function Greeting(){
    const [greeting, setGreeting] = useState(
        {
            greet: "Hello",
            location: "World"
        });
    console.log(greeting, setGreeting);


    function updateGreeting() {
        setGreeting(prevState =>{
            return {...prevState,location: "World wide"};
        })
    }

    return (
        <div>
            <h1>{greeting.greet}, {greeting.location}</h1>
            <button onClick={updateGreeting}>Update greeting</button>
        </div>
    );
}
