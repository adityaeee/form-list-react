import React, { createContext, useContext, useState } from "react";

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState([
        {
            id: "1",
            judul: "buku 1",
            pengarang: "jhiro",
            deskripsi: "ini sebuah buku",
        },
        {
            id: "2",
            judul: "buku 2",
            pengarang: "jhiro",
            deskripsi: "ini sebuah buku 2",
        },
        {
            id: "3",
            judul: "buku 3",
            pengarang: "jhiro",
            deskripsi: "ini sebuah buku 3",
        },
    ]);

    const addItem = (item) => {
        setBooks([...books, item]);
    };

    const editItem = (id, updatedItem) => {
        setBooks(
            books.map((book, index) =>
                index === id ? { ...book, ...updatedItem } : book
            )
        );
    };

    return (
        <BooksContext.Provider value={{ books, addItem, editItem }}>
            {children}
        </BooksContext.Provider>
    );
};

export const useBooks = () => useContext(BooksContext);
