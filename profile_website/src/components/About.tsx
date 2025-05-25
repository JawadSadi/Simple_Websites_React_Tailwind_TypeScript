import React from "react";
import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const links = [
  {
    label: "Twitter",
    icon: <FaTwitter className="h-6 w-6 text-blue-500" />,
  },
  {
    label: "Youtub",
    icon: <FaYoutube className="h-6 w-6 text-red-500" />,
  },
  {
    label: "Github",
    icon: <FaGithub className="h-6 w-6 text-gray-900" />,
  },
  {
    label: "Instagram",
    icon: <FaInstagram className="h-6 w-6 text-pink-500" />,
  },
];

const About = () => {
  return (
    <section className="bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl text-gray-900 font-extrabold mb-6">
          About Jawad
        </h2>
        <p className="text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          animi sunt, consequatur, dignissimos, debitis necessitatibus facilis
          tempore aut eum soluta error assumenda tenetur architecto molestias
          laborum minus delectus vitae quis. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Molestiae animi sunt, consequatur,
          dignissimos, debitis necessitatibus facilis tempore aut eum soluta
          error assumenda tenetur architecto molestias laborum minus delectus
          vitae quis.
        </p>
      </div>
    </section>
  );
};

export default About;
