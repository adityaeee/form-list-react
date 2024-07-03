import React from "react";
import animation from "../assets/animation/animation-books.json";
import Lottie from "lottie-react";
import { useState } from "react";

export default function Form() {
    const [books, setBook] = useState([
        {
            judul: "buku 1",
            pengarang: "jiro",
            deskripsi: "ini sebuah buku",
        },
    ]);
    return (
        <div className="container mt-5 pt-5">
            <div className="card form-login ">
                <div className="card-body">
                    <h5 className="card-title">Form Registrasi Buku</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                        Orang yang tidak membaca buku bagus akan melewatkan
                        kesempatan untuk menjalani hidup tambahan
                    </h6>
                    <div className="d-flex justify-content-center my-3">
                        <span style={{ width: 200, height: 110 }}>
                            <Lottie animationData={animation} />
                        </span>
                    </div>
                    <form>
                        <div className="mb-3 mt-5 text-start">
                            <label
                                for="judul"
                                className="form-label text-start"
                            >
                                Judul Buku
                            </label>
                            <input
                                name="judul"
                                type="text"
                                className="form-control"
                                id="judul"
                                placeholder="masukkan judul buku"
                            ></input>
                        </div>
                        <div className="mb-3 text-start">
                            <label
                                for="pengarang"
                                className="form-label text-start"
                            >
                                Pengarang
                            </label>
                            <input
                                name="pengarang"
                                type="text"
                                className="form-control"
                                id="pengarang"
                            ></input>
                        </div>
                        <div className="mb-3 text-start">
                            <label
                                for="deskripsi"
                                className="form-label text-start"
                            >
                                Deskripsi
                            </label>
                            <textarea
                                name="deskripsi"
                                type="text"
                                className="form-control"
                                id="deskripsi"
                            ></textarea>
                        </div>

                        <button type="submit" className="btn login-button mt-2">
                            Tambah buku
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
