import Profile from "../assets/profile.png";
export default function Header() {
  return (
    <>
      <div className="flex justify-between shadow-sm  p-4 mx-10 border-b-2 items-center">
        <p className="lg:text-4xl font-bold">Knowledge Cafe</p>
        <img src={Profile} alt="profile" />
      </div>
    </>
  );
}
