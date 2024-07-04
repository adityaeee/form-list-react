import React from "react";
import { useBooks } from "../components/BooksContext";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

function days_between(date1, date2) {
    const ONE_DAY = 1000 * 60 * 60 * 24;

    const differenceMs = Math.abs(date1 - date2);

    return Math.round(differenceMs / ONE_DAY);
}

function parseDate(dateStr) {
    const [day, month, year] = dateStr.split("/").map(Number);
    return new Date(year, month - 1, day);
}

function getCurrentDateFormatted() {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
}

export default function Listbook() {
    const { books } = useBooks();
    const navigate = useNavigate();
    const dateNowStr = getCurrentDateFormatted();
    const dateNow = parseDate(dateNowStr);
    const dateDumy = new Date("2024-07-04");
    const testDate = days_between(dateNow, dateDumy);
    const [showModal, setShowModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    const handleShow = (book) => {
        setSelectedBook(book);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedBook(null);
    };

    const handleEdit = (id) => {
        navigate(`/edit-book/${id}`);
    };

    return (
        <div className="container" style={{ marginRight: "100px" }}>
            <div className="row">
                <div className="col">
                    <div className="list-group">
                        {books.map((book, index) => (
                            <Link
                                key={index}
                                to="#"
                                className="list-group-item list-group-item-action hover-effect"
                                onClick={() => handleShow(book)}
                                aria-current="true"
                            >
                                <div className="d-flex w-100 justify-content-between">
                                    <h6 className="mb-2 me-3">{book.judul}</h6>
                                    <small>{testDate} days ago</small>
                                </div>
                                <p className="mb-1">{book.pengarang}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedBook?.judul}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Author: {selectedBook?.pengarang}</p>
                    <p>{selectedBook?.deskripsi}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="warning"
                        onClick={() => handleEdit(selectedBook?.id)}
                    >
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
