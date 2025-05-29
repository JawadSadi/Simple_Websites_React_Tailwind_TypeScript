import React, { useEffect, useState } from "react";

interface AuthorType {
  name: string;
  image: string;
  isFollowing: boolean;
}

const TopSellers = () => {
  const [authors, setAuthors] = useState<AuthorType[]>([]);

  useEffect(function () {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=5");
        const data = await response.json();
        const authorData: AuthorType[] = data.results.map((user: any) => ({
          name: `${user.name.first}${user.name.last}`,
          isFollowing: false,
          image: user.picture.medium,
        }));
        setAuthors(authorData);
      } catch (error) {
        console.error("Errror in Fetching Data", error);
      }
    };

    fetchData();
  }, []);

  function handlFollowing(index: number) {
    setAuthors((preAuthor) =>
      preAuthor.map((author, i) =>
        i === index ? { ...author, isFollowing: !author.isFollowing } : author
      )
    );
  }
  return (
    <div className="bg-white mx-10 p-5 mt-[1rem] w-[35rem] h-fit rounded border-gray-100 shadow">
      <h2 className="text-xl font-bold mb-5">Top Sellers</h2>
      <ul>
        {authors.map((author, index) => (
          <li key={index} className="flex justify-between mb-5 items-center">
            <section className="flex justify-center items-center">
              <img
                src={author.image}
                alt={author.name}
                className="w-[25%] h-[25%] justify-center rounded-full"
              />
              <span className="ml-5">{author.name}</span>
            </section>
            <button
              onClick={() => handlFollowing(index)}
              className={`px-3 py-1 rounded  text-white  ml-2 ${
                author.isFollowing ? "bg-red-500" : "bg-black"
              }`}
            >
              {author.isFollowing ? "Unfollow" : "follow"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopSellers;
