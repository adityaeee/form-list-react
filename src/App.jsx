import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import PageNotFound from "./components/PageNotFound";
import Form from "./pages/Form";
import { Outlet } from "react-router";

function App() {
    const [books, setBook] = useState([
        {
            judul: "buku 1",
            pengarang: "jiro",
            deskripsi: "ini sebuah buku",
        },
        {
            judul: "buku 2",
            pengarang: "jiro",
            deskripsi: "ini sebuah buku 2",
        },
    ]);
    return (
        <>
            <Navbar />
            <Outlet />

            {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
        </>
    );
}

export default App;
