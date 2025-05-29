import { MessageCircle, ThumbsUp } from "lucide-react";
import React from "react";
const blogs = [
  {
    title: "My Amazing Blog Title 1",
    author: "Jordan",
    likes: 142,
    comments: 44,
  },
  {
    title: "My Amazing Blog Title 2",
    author: "John",
    likes: 153,
    comments: 25,
  },
  {
    title: "My Amazing Blog Title 4",
    author: "HuXn",
    likes: 50,
    comments: 14,
  },
];

const PopularBlogs = () => {
  return (
    <div className="bg-white mx-10 p-5 mt-2 w-[35rem] h-fit rounded border-gray-100 shadow">
      <h2 className="text-xl font-bold mb-5">Popular Blogs</h2>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index} className="mb-5">
            <div className="flex justify-between items-center">
              <span className="font-bold mb-2">{blog.title}</span>
            </div>
            <span className="text-gray-600">Published By: {blog.author}</span>
            <div className="flex items-center mt-2">
              <MessageCircle size={16} />
              <span className="text-gray-500 ml-1 mr-5">{blog.comments}</span>
              <ThumbsUp size={16} />
              <span className="text-gray-500 ml-1 mr-5">{blog.likes}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularBlogs;
