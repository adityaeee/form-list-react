import React from "react";
import { useEffect } from "react";
import animation from "../assets/animation/animation-books.json";
import Lottie from "lottie-react";
import { useState } from "react";
import { useBooks } from "../components/BooksContext";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateBook() {
    const { id } = useParams();
    const { books, editItem } = useBooks();
    const navigate = useNavigate();

    const bookToEdit = books.find((book) => book.id === parseInt(id));

    const [formData, setFormData] = useState({
        judul: "",
        pengarang: "",
        deskripsi: "",
    });

    useEffect(() => {
        if (bookToEdit) {
            setFormData(bookToEdit);
        }
    }, [bookToEdit]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        editItem(parseInt(id), formData);
        navigate("/list-books");
    };

    return (
        <div className="container mt-5 pt-5">
            <div className="cardUpdateBookm-login ">
                <div className="card-body">
                    <h5 className="card-title">Form Update Buku</h5>
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
                                value={formData.judul}
                                onChange={handleChange}
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
                                value={formData.pengarang}
                                onChange={handleChange}
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
                                value={formData.deskripsi}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button type="submit" className="btn login-button mt-2">
                            Edit buku
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
