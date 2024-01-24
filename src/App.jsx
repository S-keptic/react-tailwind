import {useState} from 'react'

function App() {
const [color , setColor] = useState("black")

  return (
<div className='w-full h-screen duration-600' style={{backgroundColor: color}}
> <div className='fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2 text-white'>

<div className='flex flex-wrap justify-center gap-4 shadow-lg text-white bg-black rounded-xl p-4'>
<button className='rounded-xl' onClick={()=>{setColor("red")} } >red</button>
<button className='rounded-xl' onClick={()=>{setColor("black")}}>black</button>
<button className='rounded-xl' onClick={()=>{setColor("purple")} } >purple</button>
<button className='rounded-xl' onClick={()=>{setColor("pink")}}>pink</button>
<button className='rounded-xl' onClick={()=>{setColor("green")} } >green</button>
<button className='rounded-xl' onClick={()=>{setColor("olive")}}>olive</button>
<button className='rounded-xl' onClick={()=>{setColor("yellow")} } >yellow</button>
<button className='rounded-xl'onClick={()=>{setColor("blue")}}>blue</button>
</div>
</div>
  
 
</div>
  )}
export default App
