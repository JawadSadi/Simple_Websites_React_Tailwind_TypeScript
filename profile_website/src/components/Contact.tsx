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

const Contact = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Contact Me</h2>
      <div className="flex items-center">
        {links.map((link) => (
          <a
            href=""
            key={link.label}
            className="flex items-center space-x-2 text-gray-900 hover:text-gray-600 mr-[2rem]"
          >
            {link.icon}
            <span className="text-lg">{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
