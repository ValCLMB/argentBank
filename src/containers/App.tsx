import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import "./App.css";
import { Home } from "./Home/Home";
import { Signin } from "./Signin/Signin";

function App() {
    console.log(window.location);
    return (
        <div className="App">
            <Header />
            {window.location.pathname === "/" && <Home />}
            {window.location.pathname === "/signin" && <Signin />}
            <Footer />
        </div>
    );
}

export default App;
