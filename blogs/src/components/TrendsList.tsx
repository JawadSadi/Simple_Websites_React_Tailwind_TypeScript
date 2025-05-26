const trends = [
  { title: "Be the person you are on vocation", author: "Maren Torff" },
  { title: "Hate NFTS? I have some bad news", author: "Zain Levin" },
  { title: "The real impact of dark UX patters", author: "Lindsey curtes" },
];

const TrendsList = () => {
  return (
    <div className="bg-white rounded-lg p-10 shadow">
      <h3 className="font-semibold text-lg mb-4">Today's Top Trends</h3>
      <ul className="space-y-4">
        {trends.map((trend, index) => (
          <li key={index} className="flex flex-col">
            <span className="font-medium">{trend.title}</span>
            <span className="text-sm text-gray-400">By {trend.author}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendsList;
