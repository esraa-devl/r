import loge from "./assets//audiophile 2.png"
import { BsCart3 } from "react-icons/bs";

export default function App() {
  let navsytle='font-rope uppercase cursor-pointer text-white text-[13px] font-bold'
  return (
    <div className='w-full h-dvh bg-[#191919] flex flex-col'>
      <header className='w-full h-20 flex  justify-center '>
        <div className="container flex  border-b border-[#FFFFFF]/20  items-center justify-between ">
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
      <div className='w-full h-10  grow'></div>

    </div>
    
  )
}
