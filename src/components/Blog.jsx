/* eslint-disable react/prop-types */
import { BsBookmarkStarFill } from "react-icons/bs";
export default function Blog({ blog, onHandle, onTotalTime }) {
  const {
    title,
    cover,
    author_img,
    reading_time,
    author,
    posted_date,
    hashtags,
  } = blog;
  return (
    <>
      <div className="flex flex-col ml-24">
        <img src={cover} alt="" />
        <div className="flex justify-between items-center">
          <div className="flex gap-5 m-5">
            <img className="w-14" src={author_img} alt="" />
            <div>
              <p>{author}</p>
              <span>{posted_date}</span>
            </div>
          </div>

          <div className="flex items-center">
            <p>{reading_time}min read</p>
            <button onClick={() => onHandle(blog)}>
              <BsBookmarkStarFill className="ml-4 text-2xl text-blue-600" />
            </button>
          </div>
        </div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <div className="flex gap-6">
          {hashtags.map((m, idx) => (
            <span key={idx}>{m}</span>
          ))}
        </div>
        <button
          onClick={() => onTotalTime(reading_time)}
          className="text-blue-700 bg-blue-400 p-6 rounded-lg underline mb-4"
        >
          Mark as Read
        </button>
        <hr />
        <br />
      </div>
    </>
  );
}
