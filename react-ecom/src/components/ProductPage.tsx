import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string[];
}

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(
    function () {
      if (id) {
        axios
          .get<ProductType>(`https://dummyjson.com/products/${id}`)
          .then((response) => setProduct(response.data))
          .catch((err) => console.error("Error with fetching Data", err));
      }
    },
    [id]
  );
  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="p-5 w-[60%]">
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 bg-black text-white mb-4"
      >
        Back
      </button>
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-[50%] h-auto mb-4"
      />
      <h1 className="text-2xl mb-5 font-bold">{product.title}</h1>
      <p className="w-[70%] text-gray-600 mb-4">{product.description}</p>
      <div className="flex">
        <p>Price: ${product.price}</p>
        <p className="ml-[5rem]">Rating: {product.rating}</p>
      </div>
    </div>
  );
};

export default ProductPage;
