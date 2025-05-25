import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile = () => {
  const [profileImg, setProfileImg] = useState("https://placehold.co/1500x300");

  const [logoImage, setLogoImage] = useState("https://placehold.co/200x200");

  function handleImageChange(event: unknown) {
    const file = event.target.files[0];

    if (file) {
      setProfileImg(URL.createObjectURL(file));
    }
  }

  function handleLogoChange(event: any) {
    const file = event.target.files[0];

    if (file) {
      setLogoImage(URL.createObjectURL(file));
    }
  }
  return (
    <div className="relative w-[93%] ml-[6.4rem] h-screen flex flex-col">
      <div className="relative">
        <img src={profileImg} alt="My Image" className="object-cover w-full" />
        <button className="absolute top-2 right-5 bg-gray-800 text-white rounded-full hover:bg-gray-400 p-2">
          <label htmlFor="image-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </button>
      </div>
      <div className="flex items-center mt-5 ml-5">
        <img
          src={logoImage}
          alt=""
          className="w-40 h-40 object-cover rounded-full border-white relative"
        />
        <button className="absolute ml-[3.6rem] mt-[9rem] bg-gray-800 text-white rounded-full hover:bg-gray-400 p-2">
          <label htmlFor="logo-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="logo-upload"
            accept="image/*"
            className="hidden"
            onChange={handleLogoChange}
          />
        </button>
        <div className="ml-5">
          <h1 className="text-2xl">Jawad Web developer</h1>
          <p>1M Views</p>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sunt
            quod, laborum architecto rerum minima voluptas,{" "}
          </p>
          <button className="cursor-pointer text-white mt-4 bg-red-600 px-4 py-2 rounded hover:bg-red-500">
            Subscribe
          </button>
        </div>
      </div>
      <Tabs />
    </div>
  );
};

export default Profile;
