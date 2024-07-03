import React from "react";
import animation from "../assets/animation/animation-login.json";
import Lottie from "lottie-react";

export default function () {
    return (
        <div className="container  mt-5">
            <div className="card form-login ">
                <div className="card-body">
                    <h5 className="card-title">Form Login</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                        Masukkan email dan pasword anda
                    </h6>
                    <div className="d-flex justify-content-center my-3">
                        <span style={{ width: 200, height: 110 }}>
                            <Lottie animationData={animation} />
                        </span>
                    </div>
                    <form>
                        <div className="mb-3 mt-5 text-start">
                            <label
                                for="exampleInputEmail1"
                                className="form-label text-start"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="example@duck.com"
                            ></input>
                            <div id="emailHelp" className="form-text">
                                Pastikan email yang anda masukkan sudah benar
                            </div>
                        </div>
                        <div className="mb-3 text-start">
                            <label
                                for="exampleInputPassword1"
                                className="form-label"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                            ></input>
                        </div>

                        <button type="submit" className="btn login-button mt-2">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
