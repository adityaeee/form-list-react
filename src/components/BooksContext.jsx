import React, { createContext, useContext, useState } from "react";

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState([
        {
            id: "1",
            judul: "buku 1",
            pengarang: "adit",
            deskripsi:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam facilis alias sit maiores minima nihil.",
        },
        {
            id: "2",
            judul: "buku 2",
            pengarang: "jiro",
            deskripsi:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam facilis alias sit maiores minima nihil.",
        },
        {
            id: "3",
            judul: "buku 3",
            pengarang: "Alex",
            deskripsi:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam facilis alias sit maiores minima nihil.",
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
