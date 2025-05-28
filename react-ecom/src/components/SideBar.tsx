import React, { useEffect, useState } from "react";
import { useFilter } from "./FilterContext";

interface Product {
  category: string;
}

interface FetchResponse {
  products: Product[];
}

const SideBar = () => {
  const {
    searchQuery,
    setSearchQuery,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    selectedCategory,
    setSelectedCategory,
    keyword,
    setKeyword,
  } = useFilter();
  const [categories, setCategories] = useState<string[]>([]);

  const [keywords] = useState([
    "apple",
    "watch",
    "fashion",
    "trend",
    "shoes",
    "shirt",
  ]);

  useEffect(function () {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data: FetchResponse = await response.json();
        const uniqueCategories = Array.from(
          new Set(data.products.map((product) => product.category))
        );
        setCategories(uniqueCategories);
      } catch (error) {
        console.log("Error Fetching Data", error);
      }
    };

    fetchCategories();
  }, []);

  function handleMinPriceChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setMinPrice(value ? parseFloat(value) : undefined);
  }
  function handleMaxPriceChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setMaxPrice(value ? parseFloat(value) : undefined);
  }

  function handleReset() {
    setSearchQuery("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setSelectedCategory("");
    setKeyword("");
  }

  return (
    <div className="w-64 p-4 h-screen">
      <h1 className="text-2xl font-bold mb-10 mt-4">React shop</h1>
      <section>
        <input
          type="text"
          className="border-2 rounded px-2 sm:mb-0"
          placeholder="Search Product..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex justify-center items-center">
          <input
            type="text"
            className="border-2 px-5 py-2 mr-2 mb-2 w-full"
            placeholder="Min"
            value={minPrice ?? ""}
            onChange={(e) => handleMinPriceChange(e)}
          />
          <input
            type="text"
            className="border-2 px-5 py-2 mr-3 mb-2 w-full"
            placeholder="Max"
            value={maxPrice ?? ""}
            onChange={(e) => handleMaxPriceChange(e)}
          />
        </div>
        {/* {Categories} */}
        <div className="mb-5">
          <h2 className="text-xl font-semibold">Categories</h2>
        </div>
        <section>
          {categories.map((category, index) => (
            <label key={index} className="block mb-2">
              <input
                type="radio"
                name="category"
                value={selectedCategory}
                className="w-[16px] h-[16px] mr-2"
                onChange={() => setSelectedCategory(category)}
                checked={selectedCategory === category}
              />
              {category.toUpperCase()}
            </label>
          ))}
        </section>
        {/* keywords section */}
        <div className="my-4">
          <h2 className="text-xl font-semibold">Keywords</h2>
          {keywords.map((keyword, index) => (
            <button
              key={index}
              className="block mt-4 py-2 px-4 mb-2 w-full text-left border rounded hover:bg-gray-200"
              onClick={() => setKeyword(keyword)}
            >
              {keyword.toUpperCase()}
            </button>
          ))}
        </div>

        <button
          className="mt-10 mb-[4rem] bg-black text-white w-full py-2 rounded"
          onClick={handleReset}
        >
          Reset Filters
        </button>
      </section>
    </div>
  );
};

export default SideBar;
