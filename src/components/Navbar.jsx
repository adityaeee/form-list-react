import React from "react";
import logo from "../assets/icons/books.png";
import { Link } from "react-router-dom";

export default function () {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img
                            src={logo}
                            className="logo react"
                            alt="React logo"
                        />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/add-books">
                                    Tambah Buku
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/list-books">
                                    Buku
                                </Link>
                            </li>
                        </ul>
                        <Link to="login">
                            <button
                                className="btn btn-outline-success"
                                type="submit"
                            >
                                Login
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
