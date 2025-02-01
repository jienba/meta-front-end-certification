import {useRef} from "react";

function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        console.log(inputEl);
        inputEl.current.focus();
    };
    return (
        <>
            <input ref={inputEl} type="text" />
        f    <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}

export default TextInputWithFocusButton;
