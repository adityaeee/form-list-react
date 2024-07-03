import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";
import { BooksProvider } from "./components/BooksContext";

function App() {
    return (
        <BooksProvider>
            <Navbar />
            <Outlet />
        </BooksProvider>
    );
}

export default App;
