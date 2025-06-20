import React from "react";
import { Link } from "react-router-dom";
import { reviews } from "../../data";
import "../../styles/BookReviewList.css";
const BookReviewList = () => {
    return (
        <div className="review-list">
            <h1>Lista de Reseñas</h1>
            <ul>
                {reviews.map((review) => (
                    <li key={review.id}>
                        <Link to={`/review/${review.id}`}>{review.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookReviewList;