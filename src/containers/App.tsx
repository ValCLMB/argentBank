import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { User } from "../components/User/User";
import "./App.css";
import { Home } from "./Home/Home";
import { Signin } from "./Signin/Signin";

function App() {
    return (
        <div className="App">
            <Header />
            {window.location.pathname === "/" && <Home />}
            {window.location.pathname === "/signin" && <Signin />}
            {window.location.pathname === "/user" && <User />}
            <Footer />
        </div>
    );
}

export default App;
