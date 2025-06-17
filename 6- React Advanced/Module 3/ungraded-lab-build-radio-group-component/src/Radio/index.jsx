import * as React from "react";
import "./styles.css";
import {Children, cloneElement} from "react";

export const RadioGroup = ({ onChange, selected, children }) => {
    // Use React.Children.map and React.cloneElement to clone the children
    // and pass the correct props to each RadioOption
    const RadioOptions = Children.map(children, (child =>{
        return cloneElement(child, {
            onChange,
            checked: child.props.value === selected
        })
    }));

    return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
    // Hook up the onChange handler to call the onChange prop passed to RadioGroup
    // Also, make sure to pass the correct checked prop to the input element
    const handleChange = (e) => {
        const newValueSelected = e.target.value;
        console.log("the referal source", newValueSelected)
        onChange(newValueSelected);
    }
    return (
        <div className="RadioOption">
            <input
                id={value}
                type="radio"
                name="referalSource"
                value={value}
                checked={checked}
                onChange={handleChange}
            />
            <label htmlFor={value}>{children}</label>
        </div>
    );
};
