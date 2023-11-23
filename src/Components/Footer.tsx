import { Link } from "react-router-dom";
import Logo from "../assets/Logo/footerLogo.png";

function Footer() {
  return (
    <div className="w-full bg-bgfooter absolute ">
      <div className="flex">
        <img
          src={Logo}
          alt="logo"
          className="w-[10.5rem] h-[10.3rem] 
         ml-[131px] mt-[110px] "
        />
        <div
          className="w-[38.5rem] ml-[200px]
       mt-[125px]"
        >
          <div className='font-normal text-3xl text-white'>
            Become an Early Adopter
          </div>
          <div className="pt-4 items-end flex justify-between ">
            <input
              className='border-b-2 font-normal placeholder:text-textfooter text-sm bg-transparent 
                outline-none border-bordercolor
                w-[26.5rem] h-[43px]'
              placeholder="Enter your Email-Address"
              type="text"
            />
            <button
              className=' w-44 h-14 bg-greenbtn rounded-full 
           text-black text-xl '
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mr-[550px] ">
        <div className=" grid grid-cols-3 w-[850px] text-premitiveWhite mt-[105px] mb-[80px] ml-[131px]  items-start ">
          <div className="font-FoundryMonoline-bold">Mintii Account</div>
          <div className="font-FoundryMonoline-bold">Collections</div>
          <div className="font-FoundryMonoline-bold">About Us</div>
          <div className="text-itemfooter grid grid-rows-4 gap-3 pt-2  font-FoundryMonoline-regular">
            <Link to="/profile"> Profile </Link>
            <Link to="/setting">Setting</Link>
            <Link to="/privacy-policy">Privacy policy</Link>
            <Link to="/terms-condition">Terms and condition</Link>
          </div>
          <div className="text-itemfooter grid grid-rows-4 gap-3 pt-2 font-FoundryMonoline-regular">
            <Link to="/mint-nft">Mint NFT</Link>
            <Link to="buy-nft">Buy NFT</Link>
            <Link to="sell-nft">Sell NFT</Link>
          </div>
          <div className="text-itemfooter grid grid-rows-4 gap-3 pt-2 font-FoundryMonoline-regular ">
            <Link to="mintii">Mintii</Link>
            <Link to="artists">Artists</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
