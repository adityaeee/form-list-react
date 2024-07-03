import React from "react";
import logo from "../assets/icons/wuuu.png";

export default function () {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img
                            src={logo}
                            className="logo react"
                            alt="React logo"
                        />
                    </a>
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
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Form ps
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    List ps
                                </a>
                            </li>
                        </ul>
                        <button
                            className="btn btn-outline-success"
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}
