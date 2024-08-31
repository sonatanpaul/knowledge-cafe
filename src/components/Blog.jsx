export default function Blog({ blog }) {
  const { title, cover, author } = blog;
  return (
    <>
      <div>
        <h2>{title}</h2>
        <img src={cover} alt="" />
        <p>Welcome to our blog section.</p>
      </div>
    </>
  );
}
