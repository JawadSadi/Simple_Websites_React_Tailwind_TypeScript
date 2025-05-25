import React from "react";

interface CardType {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Card = ({ title, description, image, link }: CardType) => {
  return (
    <div className="mx-w-sm mx-auto m-[1rem]  rounded=lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl mb-2 font-bold">{title}</h2>
        <p className="mb-4">{description}</p>
        <a className="px-4 py-2 bg-[#e7e6e6]  rounded-lg inline-block mb-2 shadow hover:bg-gray-600 hover:text-white transition duration-200 cursor-pointer">
          {link}
        </a>
      </div>
    </div>
  );
};

export default Card;
