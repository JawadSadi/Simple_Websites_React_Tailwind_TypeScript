import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="h-screen flex">
        <SideBar />
        <div className="rounded w-full flex justify-between flex-wrap">
          <Routes>
            <Route path="/" element={<MainContent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
