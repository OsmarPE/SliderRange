import { useState } from 'react'
import './App.css'

function App() {

  const [value, setValue] = useState(50)

  return (
   <main className='main w-[90%] mx-auto max-w-[300px] rounded-main py-5 px-10 bg-[#F8FFFD] shadow-content'>
        <div className="range bg-[#E0F8F0] relative h-[14px] rounded-main ">
          
          <input onChange={ e => setValue(e.target.value) } className='range__input cursor-pointer block absolute z-20 opacity-0  opacity-1 inset-0  w-full' type="range" name="range" id="range" min={0} max={100} value={value}/>
          
          <div style={{width:`${value}%` }} className="range__progress absolute cursor-pointer top-0 z-30 left-0 pointer-events-none bottom-0  bg-gradient-to-r from-[#1F826E] to-[#0A2925] rounded-main  ">
            <div className="range__circle  pointer-events-none  absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 h-8 w-8 rounded-full bg-[#F2FBF8] shadow-circle ">
             
              <div className='range__circle-number opacity-0 transition-all duration-300 absolute bottom-full  left-1/2   w-[56px] grid place-items-center h-[56px] bg-gradient-to-r -rotate-45 from-[#1F826E] to-[#0A2925] rounded-number '>
                <span className='range__circle-value rotate-45 font-medium text-white text-2xl font-primary '>{value}</span>
             
              </div>
            </div>
          </div>

        </div>
        
   </main>
  )
}

export default App
