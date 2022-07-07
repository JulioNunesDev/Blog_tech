import { useEffect, useState } from "react";

function Scroll(){
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll, { passive: true });
    
         
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        
    },[])
    
    return scrollPosition
}


export default Scroll