// import React from "react";
// import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import { Sidebar, Navbar } from "./App/Components/index.jsx";
// import { CreateCampaign } from "./App/Pages/index";

// const App = () => {
//   return (
//     <div className="app">
//       <div className="sm:flex hidden mr-10 relative">
//         {/* <Sidebar /> */}
//       </div>

//       <div className="content">
//         <Navbar></Navbar>
//         <Routes>
//           <Route path="/create-campaign" element={<CreateCampaign />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default App;
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Sidebar, Navbar } from "./App/Components/index.jsx";
import { CreateCampaign,Home,CreatePosts ,Profile} from "./App/Pages/index";
const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/CreatePosts" element={<CreatePosts />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
