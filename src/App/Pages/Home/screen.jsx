// // import React, { useState, useEffect } from "react";
// // import { content } from "../../Resources/Props/Content/props";
// // import { DisplayContent, ContentCard } from "../../Components/index";
// // // import {useStateContext} from '../../Resources/context/index'
// // const Home = () => {
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [campaigns, setCampaigns] = useState([]);

// //   // const { address, contract, getCampaigns }= useStateContext();

// //   // const fetchCampaigns = async () => {
// //   //   setIsLoading(true);
// //   //   const data = await getCampaigns();
// //   //   setCampaigns(data);
// //   //   setIsLoading(false);
// //   // }

// //   // useEffect(() => {
// //   //   if(contract) fetchCampaigns();
// //   // }, [address, contract]);

// //   return (
// //     <>
// //       <div className="flex flex-wrap gap-6">
// //         {content.map((product) => (
// //           <ContentCard content={product} />
// //         ))}
// //       </div>
// //     </>
// //   );
// // };

// // export default Home;
// import React, { useState, useEffect } from "react";
// import { content } from "../../Resources/Props/Content/props";
// import { DisplayContent, ContentCard } from "../../Components/index";
// import { icons } from "../../../assets/Icons/icons";
// // import { useStateContext } from '../../Resources/context/index'

// const Home = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [campaigns, setCampaigns] = useState([]);

//   // const { address, contract, getCampaigns } = useStateContext();

//   // const fetchCampaigns = async () => {
//   //   setIsLoading(true);
//   //   const data = await getCampaigns();
//   //   setCampaigns(data);
//   //   setIsLoading(false);
//   // }

//   // useEffect(() => {
//   //   if(contract) fetchCampaigns();
//   // }, [address, contract]);

//   return (
//     <>
//       <div className="flex flex-wrap gap-6">
//         {content.map((product) => (
//           <ContentCard key={product.id} content={product} />
//         ))}
//       </div>

//       {/* Sticky Button */}
//       <div className="fixed bottom-10 right-7 z-70">
//         <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-5 rounded-full shadow-lg transition duration-300">
//           <img
//             src={icons.chatBot}
//             alt="ChatBot"
//             className="w-7 h-7 filter brightness-0 invert"
//           />
//         </button>
//       </div>
//     </>
//   );
// };

// export default Home;
import React, { useState } from "react";
import { content } from "../../Resources/Props/Content/props";
import { ContentCard } from "../../Components/index";
import ChatBotPopup from "../../Components/chatBotPopUp/component"; // import the popup
import { icons } from "../../../assets/Icons/icons";
const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <div className="flex flex-wrap gap-6">
        {content.map((product) => (
          <ContentCard key={product.id} content={product} />
        ))}
      </div>

      {/* ChatBot Popup */}

      {isChatOpen && (
        <div className="top-0">
          <ChatBotPopup onClose={toggleChat} />
        </div>
      )}

      {/* Sticky Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleChat}
          className="bg-[#1C1C24] hover:bg-[#ccc] p-4 rounded-full shadow-[0_10px_15px_-3px_rgba(0,0,0,0.5),0_4px_6px_-2px_rgba(0,0,0,0.4)] transition duration-300"
        >
          <img
            src={icons.chatBot}
            alt="ChatBot Icon"
            className="w-8 h-8 filter brightness-0 invert"
          />
        </button>
      </div>
    </>
  );
};

export default Home;
