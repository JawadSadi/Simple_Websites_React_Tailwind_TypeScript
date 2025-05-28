import { Link } from "react-router-dom";
import React from "react";

interface BookCardType {
  id: string;
  title: string;
  image: string;
  price: number;
}

const BookCard: React.FC<BookCardType> = ({ id, title, image, price }) => {
  return (
    <div className="border p-4 rounded border-gray-100">
      <Link to={`/products/${id}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-32 object-cover mb-2"
        />
        <h2 className="font-bold">{title}</h2>
        <p>${price}</p>
      </Link>
    </div>
  );
};

export default BookCard;
