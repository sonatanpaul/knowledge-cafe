import { useState } from "react";
import Blogs from "./components/Blogs";
import BookItem from "./components/BookItem";
import Header from "./components/Header";

export default function App() {
  const [bookMark, setBookMark] = useState([]);
  const [totalMin, setTotalMin] = useState(0);
  const handleBookMark = (blog) => {
    const newBookMarks = [...bookMark, blog];
    setBookMark(newBookMarks);
  };

  const handleTotalMin = (time) => {
    const totalTime = totalMin + time;
    setTotalMin(totalTime);
  };
  return (
    <>
      <Header />
      <div className="md: flex">
        <Blogs onHandle={handleBookMark} onTotalTime={handleTotalMin} />
        <BookItem value={bookMark} totalMin={totalMin} />
      </div>
    </>
  );
}
