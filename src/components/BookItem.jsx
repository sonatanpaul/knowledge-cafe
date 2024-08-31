import BookList from "./BookList";

/* eslint-disable react/prop-types */
export default function BookItem({ value, totalMin }) {
  return (
    <>
      <div className="w-1/3 mt-5 ml-10 ">
        <div>
          <h1 className="font-bold text-3xl">
            Spent time on read : {totalMin}
          </h1>
        </div>
        <p className="font-bold text-3xl">Bookmarked Blogs : {value.length}</p>
        <div className="list-decimal">
          {value.map((val) => (
            <BookList key={val.id} value={val} />
          ))}
        </div>
      </div>
    </>
  );
}
