import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

function Footer() {
  return (
    <div className="w-full bg-[#0E0E0E] absolute ">
      <div className="flex ">
        <img
          src={Logo}
          alt="logo"
          className="w-[10.5rem] h-[10.3rem] 
         ml-[131px] mt-[110px] "
        />
        <div
          className="w-[38.5rem] ml-[200px]
       mt-[110px]"
        >
          <div className='font-normal text-3xl font-["Inter"] text-white'>
            Become an Early Adopter
          </div>
          <div className=" pt-12 items-end flex justify-between ">
            <input
              className=' border-b-2 font-normal text-sm bg-transparent 
                outline-none font-["Inter"] text-[#505050] border-[#8a8785]
                 w-[24.5rem] h-[43px]'
              placeholder="Enter your Email-Address"
              type="text"
            />
            <button
              className=' w-44 h-14 bg-[#93D39B] rounded-full 
           text-black font-["Inter"] text-xl '
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mr-[550px] ">
        <div className=" grid grid-cols-3 w-[850px] text-[#F8F8F8] mt-[105px] mb-[80px] ml-[131px]  items-start ">
          <div className="font-FoundryMonoline-bold">Mintii Account</div>
          <div className="font-FoundryMonoline-bold">Collections</div>
          <div className="font-FoundryMonoline-bold">About Us</div>
          <div className="text-[#5B5B5B] grid grid-rows-4 gap-3 pt-2  font-FoundryMonoline-regular">
            <Link to="/profile"> Profile </Link>
            <Link to="/setting">Setting</Link>
            <Link to="/privacy-policy">Privacy policy</Link>
            <Link to="/terms-condition">Terms and condition</Link>
          </div>
          <div className="text-[#5B5B5B] grid grid-rows-4 gap-3 pt-2 font-FoundryMonoline-regular">
            <Link to="/mint-nft">Mint NFT</Link>
            <Link to="buy-nft">Buy NFT</Link>
            <Link to="sell-nft">Sell NFT</Link>
          </div>
          <div className="text-[#5B5B5B] grid grid-rows-4 gap-3 pt-2 font-FoundryMonoline-regular ">
            <Link to="mintii">Mintii</Link>
            <Link to="artists">Artists</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
