import './App.css'
import Footer from "./components/Footer.jsx";
import Promo from "./components/Promo.jsx";
import Nav from "./components/Nav.jsx";
import Intro1 from "./components/Intro1.jsx";
import Intro2 from "./components/Intro2.jsx";
import Intro3 from "./components/Intro3.jsx";
import Header from "./components/Header.jsx";
import Bag from "./components/Bag.jsx";
import Apples from "./components/Apples.jsx";
import Pears from "./components/Pears.jsx";

function App() {

    return (
        <>
            <Nav/>
            <Header name="Jienba" color="red"/>
            <Promo
                heading="Black Friday"
                promoSubHeading="Don't miss it!"/>
            {/*<Intro1/>*/}
            {/*<Intro2/>*/}
            {/*<Intro3/>*/}
            {/*<Footer/>*/}


           {/* <Bag children={<Apples color="red" number="5"/> } />
            <Bag children={<Pears friend="Coudy" />} />*/}


           {/* <Bag>
                <Apples color="red" number="5"/>
                <Pears friend="Aly" />
            </Bag>*/}

            {/*<Bag>
                <Pears friend="Aly" />
            </Bag>*/}


        </>
    )
}

export default App
