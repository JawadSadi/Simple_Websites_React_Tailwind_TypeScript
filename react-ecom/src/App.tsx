import SideBar from "./components/SideBar";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <SideBar />
      </div>
    </Router>
  );
};

export default App;
