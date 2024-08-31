/* eslint-disable react/prop-types */
export default function Blog({ blog }) {
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
          <p>{reading_time}min read</p>
        </div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <div className="flex gap-6">
          {hashtags.map((m, idx) => (
            <span key={idx}>{m}</span>
          ))}
        </div>
        <a className="text-blue-700 underline mb-4" href="">
          Mark as Read
        </a>
      </div>
    </>
  );
}
