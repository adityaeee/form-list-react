import React from "react";
import { useBooks } from "../components/BooksContext";

function days_between(date1, date2) {
    // The number of milliseconds in one day
    const ONE_DAY = 1000 * 60 * 60 * 24;

    // Calculate the difference in milliseconds
    const differenceMs = Math.abs(date1 - date2);

    // Convert back to days and return
    return Math.round(differenceMs / ONE_DAY);
}

function parseDate(dateStr) {
    const [day, month, year] = dateStr.split("/").map(Number);
    return new Date(year, month - 1, day); // Konversi string ke objek Date
}

function getCurrentDateFormatted() {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, "0"); // Dapatkan hari dan tambahkan '0' jika perlu
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Dapatkan bulan (0-11) dan tambahkan '0' jika perlu
    const year = now.getFullYear(); // Dapatkan tahun

    return `${day}/${month}/${year}`;
}

export default function Listbook(props) {
    const { books } = useBooks();
    const dateNowStr = getCurrentDateFormatted();
    const dateNow = parseDate(dateNowStr);
    const dateDumy = new Date("2024-07-01");
    const testDate = days_between(dateNow, dateDumy);

    return (
        <div className="list-group">
            {books.map((book, index) => (
                <a
                    href="#"
                    className="list-group-item list-group-item-action hover-effect"
                    aria-current="true"
                >
                    <div className="d-flex w-100 justify-content-between">
                        <h6 className="mb-2">{book.judul}</h6>

                        <small>{testDate} days ago</small>
                    </div>
                    <p className="mb-1">{book.pengarang}</p>
                </a>
            ))}
        </div>
    );
}
