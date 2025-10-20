import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import gsap from 'gsap';
import { useLocation } from 'react-router-dom';

const Stairs = (props) => {
    const stairParentRef=useRef(null);
    const pageRef=useRef(null)

    const currentPath=useLocation().pathname

    useGSAP(function(){

        const task1=gsap.timeline()
        task1.to(stairParentRef.current,{
            display: 'block',

        })

        task1.from('.stair',{
            height:0,
            stagger:{
                amount:-0.25,
            }
        })
        task1.to('.stair',{
            y: '100%',
            stagger:{
                amount: -0.25

            },
        })
        task1.to(stairParentRef.current,{
            display:'none'
        })
        task1.to('.stair',{
            y:'0%'
        })

        gsap.from(pageRef.current,{
            opacity:0,
            delay:1,
        })




    },[currentPath])
  return (
    <div>
    <div ref={stairParentRef} className='h-screen w-full fixed z-20 top-0 hidden'>
        <div className='h-full w-full flex'>
            <div className=' stair h-full w-1/5 bg-[#4285F4]'></div>
            <div className=' stair h-full w-1/5 bg-[#DB4437]'></div>
            <div className=' stair h-full w-1/5 bg-[#F4B400]'></div>
            <div className=' stair h-full w-1/5 bg-[#0F9D58]'></div>
            <div className=' stair h-full w-1/5 bg-slate-500'></div>
        </div>
    </div>
        <div ref={pageRef}>
            {props.children}

        </div>


    </div>
  )
}

export default Stairs