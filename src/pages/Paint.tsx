import React, { useState } from 'react'
import checkIcon from '../assets/Check Sign.svg'
import Popup from '../pages/popUp'
import { useNavigate, useParams } from 'react-router-dom'
import { nftList } from '../helpers/NftList'

type Props = {
  show: boolean;
}

const Paint = (props: Props) => {    
    const {id} = useParams()
    const nft = nftList.filter(nftItem => (nftItem.id === Number(id)))[0]
    const [popUp, setPopUp] = useState(false)
    const [status, setStatus] = useState(false)
    const nav = useNavigate()

    const handlePurchase = () => {
      setPopUp(true)
      setTimeout(() => {
        setStatus(true)
        setTimeout(()=> {
          setPopUp(false)
          setStatus(false)
          nav('/')
        }, 2000)
      }, 2000)
    }

  return (
    <div className='bg-white mt-[90px]  justify-center mb-[70px] flex'>
      {popUp && <Popup status={status} />}
        <div className='w-[543px] h-[671px] mr-5 ml-9 rounded-2xl bg-[#F5F5F5]'>
            <div className='mt-[39px] ml-[49px]'>
                <div className='flex text-[28px]'>
                    <div className='font-FoundryMonoline-bold'>From "{nft.collection}"</div>
                    <img src={checkIcon} className='w-[18.9px] h-[18.9px] mt-3 ml-2 '/>
                </div>
                <div className='mt-6'>
                    <div className='text-[40px] font-FoundryMonoline-bold'>{nft.name}</div>
                    <div className='flex'>
                       <div className='text-[24px] font-FoundryMonoline-bold'>Royalities</div>
                       <div className='text-[20px] mt-1 ml-2 bg-[#93D39B] rounded-lg w-[73px] h-[30px] pl-4'>2.5%</div>
                    </div>
                    <div className='w-[382px] h-[68px] text-[#464646] text-[20px] mt-[24px] font-FoundryMonoline-regular'>
                    You are about to buy this artwork from {nft.collection} collection.
                    </div>
                    <div className='w-[285px] h-[185px] mt-[40px] font-FoundryMonoline-regular'>
                        <div className='flex'>
                          <div className='text-base mt-2 '>Floor Price</div>
                          <div className='flex text-sm bg-white rounded-2xl w-[165px] h-[43px] justify-center items-center ml-[40px]'>
                            <div className='mr-[35px]'>0.25</div>
                            <div className='w-[58px] h-[26px] bg-[#93D39B] rounded-2xl justify-center py-1 pl-4 items-center'>ETH</div>
                          </div>
                        </div>
                        <div className='flex mt-[25px]'>
                          <div className='text-base mt-2 '>Mintii fee</div>
                          <div className='flex text-sm  bg-white rounded-2xl w-[165px] h-[43px] justify-center items-center ml-[50px]'>
                            <div className='mr-[35px]'>2.5%</div>
                            <div className='w-[58px] h-[26px] bg-[#93D39B] rounded-2xl justify-center py-1 pl-4 items-center'>ETH</div>
                          </div>
                        </div>
                        <div className='flex mt-[50px]'>
                          <div className='text-base mt-2 '>You will pay</div>
                          <div className='flex text-sm bg-white rounded-2xl w-[165px] h-[43px] justify-center items-center ml-[30px]'>
                            <div className='mr-[35px]'>0.27</div>
                            <div className='w-[58px] h-[26px] bg-[#93D39B] rounded-2xl justify-center py-1 pl-4 items-center'>ETH</div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
            <div className='bg-[#0C0C0C] shadow mt-12 rounded-full w-[421px] flex justify-center h-[70px] ml-14'>
                  <button onClick={handlePurchase}>
                      <div className='text-[#F8F8F8] text-[34px] font-FoundryMonoline-bold'>Submit Purchase</div>
                  </button>
                  
            </div>
        </div>
        <div className=' mr-[49px] pl-7 ml-6 '>
            <img src={nft.image} className='rounded-2xl h-[671px] w-[720px]'/>
        </div>
    </div>
  )
}

export default Paint