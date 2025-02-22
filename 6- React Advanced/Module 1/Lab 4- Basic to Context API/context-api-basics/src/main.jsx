import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {StrictMode} from "react";
import {UserContextProvider} from "./UserContext.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <UserContextProvider>
            <App/>
        </UserContextProvider>
    </StrictMode>
)
