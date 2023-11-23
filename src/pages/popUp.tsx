import progress from '../assets/Logo/progress Activity Icon.svg'
import Check from '../assets/Logo/Check Sign.svg'


const popUp = ({status} : {status: boolean}) => {
  return (
    <div className='font-FoundryMonoline-bold w-full h-full items-center bg-black/[0.5] fixed'>
          <div className=" w-[956px] h-[658px] mt-[184px] ml-[162px] rounded-2xl bg-white px-[260px] pt-[260px] pb-[218px] justify-center grid items-center">
            {
              status ? 
                <div>
                    <img src={Check} className='w-[100px] h-[100px]'/>
                    <div className='text-2xl font-medium'>Bid submitted successfully...</div>
                  </div>
              : 
              <div>
                <img src={progress} />
                <div className=' font-medium text-2xl'>Submitting your bid...</div>
              </div>
            }
            
          </div>  
      </div>  
  )
}

export default popUp






    // 'w-[956px] h-[685px] rounded-2xl bg-white mt-[184px] ml-[162px]'>
        
  

