import { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const ScrollTop = () => {
    const [backToTop, setBackToTop] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 350) {
                setBackToTop(true)
            } else {
                setBackToTop(false)
            }
        })
    }, [])

        const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    return (
        <div className='fixed bottom-2'>
            {backToTop && (
                <button onClick={scrollToTop} className='flex 
                rounded-full m-4 duration-1000 transition hover:scale-125 bg-black'>
                    <KeyboardArrowUpIcon style={{color:'white', fontSize: '40px'}}  />
                </button>
            )}
        </div>
    )
}