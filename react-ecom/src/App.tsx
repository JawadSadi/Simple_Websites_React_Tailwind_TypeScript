import MainContent from "./components/MainContent";
import ProductPage from "./components/ProductPage";
import SideBar from "./components/SideBar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TopSellers from "./components/TopSellers";
import PopularBlogs from "./components/PopularBlogs";

const App = () => {
  return (
    <Router>
      <div className="h-screen flex">
        <SideBar />
        <div className="rounded w-full flex justify-between flex-wrap">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/products/:id" element={<ProductPage />} />
          </Routes>
        </div>
        <div>
          <TopSellers />
          <PopularBlogs />
        </div>
      </div>
    </Router>
  );
};

export default App;
