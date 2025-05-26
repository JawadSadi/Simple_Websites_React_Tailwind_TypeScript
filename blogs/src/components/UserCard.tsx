import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

interface UserType {
  people: object;
  index: number;
}

const UserCard = ({ people, index }: UserType) => {
  const [follow, setFollow] = useState(people.following);

  return (
    <div className="flex items-center justify-between">
      <section className="flex items-center">
        <FaUserCircle className="text-3xl mr-3 text-gray-500" />
        <span>{people.name}</span>
      </section>
      {follow ? (
        <button
          onClick={() => setFollow(!follow)}
          className="px-4 py-2 bg-green-500 text-white cursor-pointer hover:bg-black rounded"
        >
          Following
        </button>
      ) : (
        <button
          className="px-4 py-2 bg-black text-white cursor-pointer hover:bg-green-500 rounded"
          onClick={() => setFollow(!follow)}
        >
          Follow
        </button>
      )}
    </div>
  );
};

export default UserCard;
