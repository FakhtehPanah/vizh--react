import Logo from "../assets/Logo/headerLogo.png";
import SearchIcon from "../assets/Logo/search.svg";
import { Link } from "react-router-dom";

function Header({ setSearchCard, searchCard }) {
  return (
    <header className="max-w md:flex flex-row items-center justify-between font-bold py-6">
      <div className="flex w-full items-center">
        <Link to='/'>
          <img src={Logo} className="w-14 h-14 mx-10"/>
        </Link>
        <div className="flex items-center justify-start bg-[#F5F5F5] rounded-[40px] h-10 w-[30rem] ml-6 mr-auto ">
          <img src={SearchIcon} className="pl-6 pr-5" />
          <input type="text" 
          value={searchCard}
          onChange={(e) => {
            setSearchCard(e.target.value)
          }}
          placeholder="Search NFT, Artist, Exhibition..."
           className="w-full outline-none bg-transparent text-[#D2D2D2] py-2.5 font-normal text-sm"/>
        </div>
      </div>
      <button className="bg-black hover:bg-neutral-900	 text-white rounded-[40px] h-12 w-[30rem] md:w-44 text-sm ml-40 md:mx-16 ">
        Connect Wallet
      </button>
        
    </header>
  );
}

export default Header;
