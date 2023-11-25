import { useState } from "react";
import checkIcon from "../assets/Logo/Check Sign.svg";
import Popup from "../pages/popUp";
import { useNavigate, useParams } from "react-router-dom";
import { nftList } from "../helpers/NftList";
import RoyalityLogo from '../assets/Logo/Royaltie.svg'
import ETH from '../assets/Logo/eth.svg'


const Paint = () => {
  const { id } = useParams();
  const nft = nftList.filter((nftItem) => nftItem.id === Number(id))[0];
  const [popUp, setPopUp] = useState(false);
  const [status, setStatus] = useState(false);
  const nav = useNavigate();

  const handlePurchase = () => {
    setPopUp(true);
    setTimeout(() => {
      setStatus(true);
      setTimeout(() => {
        setPopUp(false);
        setStatus(false);
        nav("/");
      }, 2000);
    }, 2000);
  };

  return (
    <div className=" justify-center  md:flex md:justify-between grid grid-row-2">
      {popUp && <Popup status={status} />}
      <div className="w-auto mx-12 h-auto rounded-2xl md:my-20 my-10 bg-[#F5F5F5] ">
       <div className="py-10 px-12 font-bold">
         <div className="flex text-3xl ">From "{nft.collection}"
          <img src={checkIcon} />
         </div>
          <div className="text-4xl mt-6">{nft.name}</div>
          <div className="text-2xl mt-6 flex">Royalities
          <img src={RoyalityLogo} className="ml-5 "/>
         </div>
        </div>
        <div className="font-regular text-2xl ml-12 text-[#464646]">You are about to buy this artwork from {nft.collection} collection.</div>
        <div className="flex items-center font-regular text-lg my-10 mx-12 ">
          <p className="mr-16">Floor Price</p>
          <p className="flex bg-white rounded-2xl items-center px-8 font-bold py-1">0.25
          <img src={ETH} className=" px-3 ml-12  py-1 "/>
          </p>
        </div>
        <div className="flex items-center font-regular text-lg my-10 mx-12 ">
          <p className="mr-16 ml-2">Mintii fee</p>
          <p className="flex bg-white rounded-2xl items-center pl-10 h-10 font-bold py-1 w-[14.3rem]">0.25
          </p>
        </div>
        <div className="flex items-center font-regular text-lg my-10 mx-12 ">
          <p className="mr-16">You will pay</p>
          <p className="flex bg-white rounded-2xl items-center px-8 font-bold py-1">0.25
          <img src={ETH} className=" px-3 ml-12  py-1 "/>
          </p>
        </div>
        <button onClick={handlePurchase} className="text-[#F8F8F8] hover:bg-neutral-900 bg-[#0C0C0C] rounded-full text-3xl font-bold py-3 px-12 ml-14 mb-10">Submit Purchase</button>
        </div>
        <img src={nft.image} className="rounded-2xl md:my-20 mx-12 mb-20 md:mr-20 h-auto w-[39.1rem] " />
   </div>
    
  );
};

export default Paint;
