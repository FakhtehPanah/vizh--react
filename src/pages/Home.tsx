import { nftList } from "../helpers/NftList";
import Vector from "../assets/Logo/Vector.svg";
import { Link } from "react-router-dom";

export const Home = ({ searchCard }) => {
  const result = nftList.filter((item) =>
    item.name.toLowerCase().includes(searchCard.toLowerCase())
  );
  return (
    <div className="flex justify-between">
      <div className="grid grid-cols-4 my-10 font-regular ml-20">
        {result.map((item) => (
          <div key={item.id} className="ml-10 justify-center mb-10 ">
            <div className="w-64 h-14 bg-premitiveWhite shadow rounded-t-[15px] items-center py-3.5 px-6 text-bw1 text-sm font-normal leading-7">
              {item.name}
            </div>
            <Link to={`/paint/${item.id}`}>
              <img className="w-64 h-96" src={item.image} />
            </Link>
            <div className="w-64 h-20 bg-premitiveWhite shadow rounded-b-[15px] justify-start items-center py-3.5 px-6 text-bw1 font-normal  text-xs">
              <div className="flex items-center">
                <img src={Vector} className="w-6 h-6 mr-2 pb-1 " />
                {item.artist}
              </div>
              <div className="flex items-center">
                <div className="text-xs ml-1">Current Bid</div>
                <div className="font-bold ml-3.5 text-sm ">{item.pay1} ETH</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
