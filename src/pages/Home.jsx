import React, { useState } from "react";
import BookCard from "../components/BookCard";
import "./../styles/Home.css";
import { Link } from "react-router-dom";
import "./../styles/BookCard.css";
import { reviews } from "../data";
import { motion, AnimatePresence } from "framer-motion";
const Home = () => {
    const [newBook, setNewBook] = useState({ title: "", review: "", rating: "" });
    const [showReviews, setShowReviews] = useState(false);
    const [bookList, setBookList] = useState(reviews);
    const [showSuccess, setShowSuccess] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewBook({ ...newBook, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newBook.title && newBook.review && newBook.rating) {
            // Log new book to the console (could add it to the backend or a state if needed)
            console.log("Nuevo libro agregado:", newBook);
            setNewBook({ title: "", review: "", rating: "" });
        }
    };

    return (
        <div className="home-container">
            <h1>My Book Reviews</h1>

            <div className="go-to-list">
                <button
                    className="go-to-list-button"
                    onClick={() => setShowReviews(!showReviews)}
                >
                    {showReviews ? "Hide Reviews" : "All Book Reviews!"}
                </button>
            </div>

            <AnimatePresence>
                {showReviews && (
                    <motion.div
                        className="review-list-container"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={{
                            visible: {
                                transition: { staggerChildren: 0.15 },
                            },
                            hidden: {},
                        }}
                    >
                        {bookList.map((book) => (
                        <motion.div
                            key={book.id}
                            variants={{
                                hidden: { opacity: 0, y: 20, scale: 0.95 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                                },
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            <BookCard
                                title={book.title}
                                review={book.review}
                                rating={book.rating}
                            />
                        </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Formulario para agregar un nuevo libro */}
            <div className="form-container">
                <h2>Add a new book</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={newBook.title}
                            onChange={handleChange}
                            placeholder="Write the book title..."
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="review">Review:</label>
                        <textarea
                            id="review"
                            name="review"
                            value={newBook.review}
                            onChange={handleChange}
                            placeholder="Write your review..."
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rating">Rate:</label>
                        <select
                            id="rating"
                            name="rating"
                            value={newBook.rating}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select a rating</option>
                            <option value="1">1 ★</option>
                            <option value="2">2 ★★</option>
                            <option value="3">3 ★★★</option>
                            <option value="4">4 ★★★★</option>
                            <option value="5">5 ★★★★★</option>
                        </select>
                    </div>
                    <button type="submit" className="submit-button">Add Book</button>
                </form>
            </div>
        </div>
    );
};

export default Home;

