import { createContext, useContext, useState } from "react";
import type { Blog } from "../type";
import React from "react";

interface BlogContextType {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
  updateBlog: (blog: Blog) => void;
  deleteBlog: (id: number) => void;
}

const blogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const addBlog = (blog: Blog) => {
    setBlogs([...blogs, blog]);
  };

  const updateBlog = (updatedBlog: Blog) => {
    setBlogs(
      blogs.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
    );
  };

  const deleteBlog = (id: number) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <blogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
      {children}
    </blogContext.Provider>
  );
};

export const useBlogs = () => {
  const context = useContext(blogContext);

  if (!context) {
    throw new Error("useBlogs must be use whitin a Context provider");
  }

  return context;
};

export default BlogProvider;
