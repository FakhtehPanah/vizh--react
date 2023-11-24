import { Link } from "react-router-dom";
import Logo from "../assets/Logo/footerLogo.png";

function Footer() {
  return (
    <footer className="max-w py-10 bg-black">
      <div className=" md:px-32">
        <div className=" flex flex-col items-center 
        justify-between md:flex-row md:mt-8 ">
          <Link to='/' >
            <img src={Logo} alt="logo" className="w-24 h-24 md:h-44 md:w-44"/>
          </Link>
          {/* form */}
          <div className="flex flex-col font-normal font-inter md:pr-[22rem]">
            <h2 className="text-white mt-4 md:pt-8 text-base md:text-2xl">Become an Early Adopter</h2>
            <form className="flex flex-col md:items-center md:w-full
             justify-between md:flex-row mt-8 ">
              <input type="email"
              placeholder="Enter your Email-Address"
              className="bg-transparent text-sm
               text-[#505050] placeholder:text-[#505050]
                border-b-2 border-[#505050] outline-none  focus:border-gray-600
                 md:mb-7 w-full h-12" />
                   <button className="text-black bg-[#93D39B]
                 md:ml-24 md:py-2 md:px-10 hover:bg-green-100 
                md:h-auto md:w-auto w-44 md:mb-7 h-14 rounded-[40px] mt-2">
                submit
              </button>
            </form>
          </div>
        </div>
        <div className="font-normal  md:grid-cols-3 md:mt-10 grid grid-cols-2 ml-10 mt-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-1 ">Mintii Account</h3>
            <ul className="text-[#5B5B5B] text-lg font-regular my-3">
              <li className="hover:text-[#BFBFBF]">
                <a>Profile</a>
              </li>
              <li className="hover:text-[#BFBFBF]">
                <a>Setting</a>
              </li>
              <li className="hover:text-[#BFBFBF]">
                <a>Privacy Policy</a>
              </li>
              <li className="hover:text-[#BFBFBF]">
                <a>Terms and Condition</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-xl text-[#BFBFBF] font-bold mb-1 ">Collections</h3>
            <ul className="text-[#5B5B5B] text-lg font-regular my-3">
              <li className="hover:text-[#BFBFBF]">
                <a>Mint NFT</a>
              </li>
              <li className="hover:text-[#BFBFBF]">
                <a>Buy NFT</a>
              </li>
              <li className="hover:text-[#BFBFBF]">
                <a>Sell NFT</a>
              </li>
            </ul>
          </div>
          <div>  
            <h3 className="text-xl text-[#F8F8F8] font-bold mb-1 ">About Us</h3>
            <ul className="text-[#5B5B5B] text-lg font-regular my-3">
              <li className="hover:text-[#BFBFBF]">
                <a>Mintii</a>
              </li>
              <li className="hover:text-[#BFBFBF]">
                <a>Artists</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
