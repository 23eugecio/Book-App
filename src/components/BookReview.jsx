import React from "react";
import { useParams } from "react-router-dom";
import { reviews } from "../data"; // Import shared data
import "./../styles/BookReview.css";

const BookReview = () => {
    const { id } = useParams(); // Get the ID from the URL

    // Find the review that matches the `id`
    const review = reviews.find((r) => r.id === id);

    // Handle case where the review is not found
    if (!review) {
        return <h2 className="not-found">Reseña no encontrada</h2>;
    }

    return (
        <div className="book-review">
            <h2>{review.title}</h2>
            <p>{review.review}</p>
            <div className="stars">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < review.rating ? "star filled" : "star"}>
                        ★
                    </span>
                ))}
            </div>
        </div>
    );
};

export default BookReview;
