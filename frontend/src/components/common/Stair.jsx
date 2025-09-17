import {useRef} from 'react'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import {useLocation} from 'react-router-dom'

function Stair(props) {
    const stairDivRef = useRef(null)
    const pageRef = useRef(null)
    const locate = useLocation().pathname;

    useGSAP(()=>{
    	const tl = gsap.timeline();
    	tl.to(stairDivRef.current,{
    		display:'block'
    	})
    	tl.from(".stair",{
    		height:0,
    		stagger:{
    			amount:-0.2
    		}
    	})
    	tl.to(".stair",{
    		y:"100%",
    		stagger:{
    			amount:-0.25
    		}
    	})
    	tl.to(stairDivRef.current,{
    		display:"none"
    	})
    	tl.to(".stair",{
    		y:"0%"
    	})
    	gsap.from(pageRef.current,{
    		opacity:0,
    		delay:1.2,
    		scale:1.3
    	})
    },[locate])

	return (
		<>
		<div ref={stairDivRef} className="h-screen w-screen fixed z-60 top-0">
				<div className="h-full w-full flex">
					<div className="stair h-full w-1/5 bg-[#EF7722]"></div>
					<div className="stair h-full w-1/5 bg-[#EF7722]"></div>
					<div className="stair h-full w-1/5 bg-[#EF7722]"></div>
					<div className="stair h-full w-1/5 bg-[#EF7722]"></div>
					<div className="stair h-full w-1/5 bg-[#EF7722]"></div>
				</div>
		</div>
		<div ref={pageRef}>
		   {props.children}
	    </div>
		</>
	)
}

export default Stair