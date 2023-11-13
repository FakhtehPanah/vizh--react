import { nftList } from "../helpers/NftList";
import Vector from "../assets/Vector.svg";
import { Link } from "react-router-dom";

export const Home = ({ searchCard }) => {
  const result = nftList.filter((item) =>
    item.name.toLowerCase().includes(searchCard.toLowerCase())
  );
  return (
    <div className="h-full">
      <div className="grid grid-cols-5 my-10 font-FoundryMonoline-regular ">
        {result.map((item) => (
          <div key={item.id} className="ml-10 justify-center mb-10 ">
            <div className="w-[268px] h-[58px] bg-[#F8F8F8] shadow rounded-t-[15px] justify-start items-center py-3.5 px-6 text-[#0C0C0C] text-xl font-normal leading-7">
              {item.name}
            </div>
            <Link to={`/paint/${item.id}`}>
              <img className="w-[268px] h-[268px]" src={item.image} />
            </Link>
            <div className="w-[268px] h-[80px] bg-[#F8F8F8] shadow rounded-b-[15px] justify-start items-center py-3.5 px-6 text-[#0C0C0C] font-normal text-base">
              <div className="flex">
                <img src={Vector} className="w-[24px] h-[24px] mr-2" />
                {item.artist}
              </div>
              <div className="absolute flex">
                <div className="">Current Bid</div>
                <div className="font-bold ml-3.5  ">{item.pay1} ETH</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
