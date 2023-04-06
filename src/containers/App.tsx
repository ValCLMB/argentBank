import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import "./App.css";
import { Home } from "./Home/Home";

function App() {
    console.log(window.location);
    return (
        <div className="App">
            <Header />
            {window.location.pathname === "/" && <Home />}
            <Footer />
        </div>
    );
}

export default App;
