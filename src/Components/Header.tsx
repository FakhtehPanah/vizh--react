import Logo from "../assets/logoheader.svg";
import SearchIcon from "../assets/search.svg";
import { Link } from "react-router-dom";

function Header({ setSearchCard, searchCard }) {
  return (
    <div className="font-FoundryMonoline-bold w-full h-[5.5rem] flex relative justify-between">
      <Link to="/">
        <img className="w-14 h-14 my-5 mx-12" src={Logo} alt="logo" />
      </Link>
      <div
        className="flex justify-start items-center rounded-[40px] w-[30rem] h-10 mt-8 mr-auto ml-6 
       bg-[#F5F5F5] "
      >
        <img
          src={SearchIcon}
          alt="search"
          className="w-[1.5rem] h-[1.5rem] flex
          ml-10"
        />
        <input
          className="w-[30rem]
            placeholder: text-gray-300 text-sm font-normal bg-transparent
             placeholder:text-gray-300 outline-none ml-2"
          placeholder="Search NFT, Artist, Exhibition..."
          type="text"
          value={searchCard}
          onChange={(e) => {
            setSearchCard(e.target.value);
          }}
        />
      </div>
      <div className="">
        <button className="w-[11.06rem] h-12 bg-black rounded-[40px] mt-8 mr-12 ">
          <div className="text-white font-normal ">Connect Wallet</div>
        </button>
      </div>
    </div>
  );
}

export default Header;
