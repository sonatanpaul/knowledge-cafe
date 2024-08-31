/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Blog from "./Blog";

export default function Blogs({ onHandle, onTotalTime }) {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <>
      <div className="w-2/3 mt-10 ">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            onHandle={onHandle}
            onTotalTime={onTotalTime}
          />
        ))}
      </div>
    </>
  );
}
