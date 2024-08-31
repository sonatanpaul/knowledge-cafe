export default function BookList({ value }) {
  const { title } = value;
  return (
    <>
      <ol>
        <li>{title}</li>
      </ol>
    </>
  );
}
