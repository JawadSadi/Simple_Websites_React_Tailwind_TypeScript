import Card from "./Card";
import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";
import About from "./About";
import { GoProjectSymlink } from "react-icons/go";
import Contact from "./Contact";
import { useState } from "react";

const tabs = [
  {
    id: "home",
    label: "Home",
    icon: <FaHome />,
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title={"Amazing Card"}
            description={"This is a cool card video ojdoajdwadn nj"}
            image={"https://placehold.co/400x200"}
            link={"Learn More"}
          />
        ))}
      </div>
    ),
  },
  {
    id: "about",
    label: "About",
    icon: <FaInfoCircle />,
    content: <About />,
  },
  {
    id: "projects",
    label: "Projects",
    icon: <GoProjectSymlink />,
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title={"Amazing Card"}
            description={"This is a cool card video ojdoajdwadn nj"}
            image={"https://placehold.co/400x200"}
            link={"Learn More"}
          />
        ))}
      </div>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    icon: <FaPhone />,
    content: <Contact />,
  },
];

const Tabs = () => {
  const [activeTab, setactiveTab] = useState(tabs[0].id);
  return (
    <div className="p-8 mt-5">
      <div className="flex w-full justify-between border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 py-2 px-4 font-medium text-sm cursor-pointer ${
              activeTab === tab.id ? "border-b-2" : "text-gray-600"
            }`}
            onClick={() => setactiveTab(tab.id)}
          >
            <div className="flex items-center justify-center space-x-2">
              {tab.icon}
              <span>{tab.label}</span>
            </div>
          </button>
        ))}
      </div>
      <div className="mt-5">
        {tabs.find((tab) => activeTab === tab.id)?.content}
      </div>
    </div>
  );
};

export default Tabs;
