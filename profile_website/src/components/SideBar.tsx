import React from "react";
import { BsPersonSquare } from "react-icons/bs";
import { FaHome, FaSearch } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const SideBar = () => {
  return (
    <aside className="sidebar fixed flex flex-col bg-black w-[6%]">
      <ul className="flex flex-col justify-between text-white h-screen items-center">
        <div className="top mt-5 flex flex-col gap-5">
          <li className="cursor-pointer">
            <FaHome size={24} />
          </li>
          <li className="cursor-pointer">
            <BsPersonSquare size={24} />
          </li>
          <li className="cursor-pointer">
            <FaSearch size={24} />
          </li>
        </div>
        <div className="bottom flex flex-col gap-5">
          <li className="cursor-pointer">
            <IoMdSettings size={24} />
          </li>
          <li className="cursor-pointer mb-5">
            <BsPersonSquare size={24} />
          </li>
        </div>
      </ul>
    </aside>
  );
};

export default SideBar;
