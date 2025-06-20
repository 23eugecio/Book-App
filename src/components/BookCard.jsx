import React from "react";
import "../styles/BookCard.css";

const BookCard = ({ title, review, rating }) => (
    <div className="book-card">
        <h3>{title}</h3>
        <p>{review}</p>
        <div className="stars">
            {[...Array(5)].map((_, i) => (
                <span key={i} className={i < rating ? "star filled" : "star"}>
                    ★
                </span>
            ))}
        </div>
    </div>
);

export default BookCard;