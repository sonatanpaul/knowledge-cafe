import Blogs from "./components/Blogs";
import BookItem from "./components/BookItem";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <div className="md: flex">
        <Blogs />
        <BookItem />
      </div>
    </>
  );
}
