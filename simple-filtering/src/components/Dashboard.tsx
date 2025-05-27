import SideBar from "./SideBar";
import ProjectTable from "./Table";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="bg-gray-900 flex-1 ">
        <ProjectTable />
      </div>
    </div>
  );
};

export default Dashboard;
