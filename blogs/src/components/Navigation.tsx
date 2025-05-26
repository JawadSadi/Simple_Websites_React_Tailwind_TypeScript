import { FaSearch, FaUserCircle } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className="flex border-2 text-black border-gray-200 p-4 justify-between items-center">
      <div className="flex items-center mx-w-md ml-[5rem] px-4 py-2 border-2 rounded-full">
        <FaSearch />
        <input
          type="text"
          placeholder="Search...."
          className="outline-none ml-2 w-full bg-transparent"
        />
      </div>
      <section className="flex justify-between items-center">
        <FaUserCircle size={32} className="mr-2" />
      </section>
    </nav>
  );
};

export default Navigation;
