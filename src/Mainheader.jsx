import React from 'react'
import loge from "./assets//audiophile 2.png"
import { BsCart3 } from "react-icons/bs";

export default function Mainheader() {
      let navsytle='font-rope uppercase cursor-pointer text-white text-[13px] font-bold'
  return (
            <header className='w-full  flex py-9   justify-center  '>
              <div className="container  border-b border-[#FFFFFF]/20  flex  items-center justify-between ">
                  <img src={loge} />
              <nav className="flex gap-8.5 "> 
                <a className={navsytle}>Home</a>
                <a className={navsytle}>HEADPHONE</a>
                <a className={navsytle}>SPEAKERS</a>
                <a className={navsytle}>EARPHONES</a>
              </nav>
              < BsCart3 className="text-amber-50" />
              </div>
            
            </header>
  
  )
}
