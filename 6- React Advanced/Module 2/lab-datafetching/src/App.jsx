import {useEffect, useState} from 'react'
import './App.css'
import NinjaProfile from "./components/ninjaProfile/NinjaProfile.jsx";

function App() {
    const [ninja, setNinja] = useState(null);
    const [idMember, setIdMember] = useState( 1299);


    useEffect(() => {
        fetData()
    }, []);

    const fetData = async () => {
        try {

            const response = await fetch(`https://dattebayo-api.onrender.com/characters/${idMember}`);
            console.log("Response status: ", response.status);
            const data = await response.json();
            console.log("data", data);
            setNinja(data)
        }catch (e) {
            console.error("Error fetching data:", e);

        }

    }

  return (
    <>
        {ninja ? (
            <NinjaProfile member={ninja} />
        ) : (
            <div>🔄 Getting information for ninja ID {idMember}...</div>
        )}


    </>
  )
}

export default App
