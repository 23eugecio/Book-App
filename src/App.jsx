import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookReview from "./components/BookReview/BookReview";
import BookReviewList from "./components/BookReviewList/BookReviewList";
const AppRouter = () => {
  return (

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/review/:id" element={<BookReview />} />
      <Route path="/BookCard" element={<BookReviewList />} />
    </Routes>

  );
};

export default AppRouter;


