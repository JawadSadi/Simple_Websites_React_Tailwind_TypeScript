const topics = [
  "Technology",
  "Design Thinking",
  "Crypto",
  "NFT",
  "Personal Growth",
  "Reading",
];

const Topics = () => {
  return (
    <div className="bg-white rounded-lg p-10 shadow">
      <h3 className="font-semibold text-lg mb-4">Topics</h3>
      <div className="flex gap-2 flex-wrap grap-2">
        {topics.map((topic, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gray-200 text-gray-700 text-sm rounded-full cursor-pointer hover:bg-gray-400"
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Topics;
