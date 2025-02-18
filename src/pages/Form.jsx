import React from "react";
import animation from "../assets/animation/animation-books.json";
import Lottie from "lottie-react";
import { useState } from "react";
import { useBooks } from "../components/BooksContext";
import { useNavigate } from "react-router-dom";

export default function Form() {
    const { addItem } = useBooks();
    const navigate = useNavigate();

    const [judul, setJudul] = useState("");
    const [pengarang, setPengarang] = useState("");
    const [deskripsi, setDeskripsi] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem({ judul, pengarang, deskripsi });
        navigate("/list-books");
    };

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
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 mt-5 text-start">
                            <label
                                htmlFor="judul"
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
                                onChange={(e) => setJudul(e.target.value)}
                                required
                            ></input>
                        </div>
                        <div className="mb-3 text-start">
                            <label
                                htmlFor="pengarang"
                                className="form-label text-start"
                            >
                                Pengarang
                            </label>
                            <input
                                name="pengarang"
                                type="text"
                                className="form-control"
                                id="pengarang"
                                onChange={(e) => setPengarang(e.target.value)}
                                required
                            ></input>
                        </div>
                        <div className="mb-3 text-start">
                            <label
                                htmlFor="deskripsi"
                                className="form-label text-start"
                            >
                                Deskripsi
                            </label>
                            <textarea
                                name="deskripsi"
                                type="text"
                                className="form-control"
                                id="deskripsi"
                                onChange={(e) => setDeskripsi(e.target.value)}
                                required
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
