import {createContext, useContext, useState} from "react";

// Creating theme context
const ThemeContext = createContext();

// creating custom hook to facilitate access to use the theme context
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    function toggleTheme() {
        setTheme((prevState) => {
            return prevState === 'light' ? "dark" : "light";
        })
    }

    return(
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
