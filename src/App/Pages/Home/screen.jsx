import React, { useState, useEffect } from "react";
import {content} from '../../Resources/Props/Content/props'
import { DisplayContent, ContentCard } from "../../Components/index";
// import {useStateContext} from '../../Resources/context/index'
const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  // const { address, contract, getCampaigns }= useStateContext();

  // const fetchCampaigns = async () => {
  //   setIsLoading(true);
  //   const data = await getCampaigns();
  //   setCampaigns(data);
  //   setIsLoading(false);
  // }

  // useEffect(() => {
  //   if(contract) fetchCampaigns();
  // }, [address, contract]);

  return (
    <>
      {/* <DisplayContent
        title="All Campaigns"
        isLoading={isLoading}
        campaigns={campaigns}
      /> */}
         <div className="flex flex-wrap gap-6">
        {content.map((product) => (
        <ContentCard content={product}  />
      ))}
           </div>
      {/* {products.map((product, index) => (
        <ProductCard key={index} content={product} addToCart={addToCart} />
      ))} */}

      {/* <ContentCard ></ContentCard> */}
    </>
  );
};

export default Home;
