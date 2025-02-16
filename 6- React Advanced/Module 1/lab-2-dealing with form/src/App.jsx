// import './App.css'
import {useState} from "react";

function App() {
    const [name, setName] = useState('');
    const [score, setscore] = useState(10);
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("")
        console.log("Form submitted")
    }

    function handleSubmitComment(e) {
        e.preventDefault();
        console.log("Submit occured")
        if (Number(score) <= 5 && comment.length <= 10) {
            alert("Please provide  a comment explaining  why the  experience was poor")
        }

        setComment("")
        setscore(0)
    }

    return (
        <>
            {/*<div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div className="field">
                            <label htmlFor="name">Name:</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={!name}
                        >Submit</button>

                    </fieldset>
                </form>
            </div>*/}

            <div>
                <form onSubmit={handleSubmitComment}>
                    <fieldset>
                        <h2>Feedback form</h2>
                        <div className="field">
                            <label htmlFor="score">Score: {score} ❤️</label> <br/>
                            <input
                                type="range"
                                name="score"
                                min="1"
                                max="10"
                                value={score}
                                onChange={event => setscore(event.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="comment"></label>
                            <textarea
                                name="comment"
                                id="comment"
                                value={comment}
                                onChange={event => setComment(event.target.value)}
                            ></textarea>
                        </div>
                        <button type="submit">Send</button>
                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default App
