import React, { useState } from "react";
import { reviews } from "../data"; // Import shared data
import BookReview from "../components/BookReview";
import "./../styles/Home.css";

const Home = () => {
    const [newBook, setNewBook] = useState({ title: "", review: "", rating: "" });

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
            <h1>Mis Libros Leídos</h1>

            {/* Mostrar lista de libros leídos */}
            <div>
                {reviews.map((book) => (
                    <BookReview 
                        key={book.id}
                        title={book.title}
                        review={book.review}
                        rating={book.rating}
                    />
                ))}
            </div>

            {/* Formulario para agregar un nuevo libro */}
            <div className="form-container">
                <h2>Agregar un nuevo libro</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Título del libro:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={newBook.title}
                            onChange={handleChange}
                            placeholder="Escribe el título del libro"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="review">Reseña del libro:</label>
                        <textarea
                            id="review"
                            name="review"
                            value={newBook.review}
                            onChange={handleChange}
                            placeholder="Escribe tu reseña"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rating">Calificación:</label>
                        <select
                            id="rating"
                            name="rating"
                            value={newBook.rating}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Seleccione una calificación</option>
                            <option value="1">1 ★</option>
                            <option value="2">2 ★★</option>
                            <option value="3">3 ★★★</option>
                            <option value="4">4 ★★★★</option>
                            <option value="5">5 ★★★★★</option>
                        </select>
                    </div>
                    <button type="submit" className="submit-button">Agregar Libro</button>
                </form>
            </div>
        </div>
    );
};

export default Home;

