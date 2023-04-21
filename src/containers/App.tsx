import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
