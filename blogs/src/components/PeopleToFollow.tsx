import UserCard from "./UserCard";

const peopleToFollow = [
  { name: "Jawad Sadiq", following: false },
  { name: "Mojtaba Mohammadi", following: true },
  { name: "Jamshid Navid", following: false },
  { name: "Adel Ahmadi", following: true },
  { name: "Omid Habibi", following: false },
];

const PeopleToFollow = () => {
  return (
    <div className="bg-white rounded-lg p-10 shadow ">
      <h3 className="font-semibold text-lg mb-4">People To follow</h3>
      <div className="space-y-4">
        {peopleToFollow.map((people, index) => (
          <UserCard key={index} index={index} people={people} />
        ))}
      </div>
    </div>
  );
};

export default PeopleToFollow;
