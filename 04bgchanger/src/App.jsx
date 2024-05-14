import { useState } from "react"


function App() {
  let [color,setColor]=useState("red")

  return (
    <div className="w-full h-screen duration-200" style={{background:color}}>
      <div className="fixed flex flexwrap justify-center bottom-12 inset-x-0 px-2">
      <div className="fixed flex flexwrap justify-center bg-white shadow-lg  bottom-12 gap-3 px-3 py-2 rounded-3xl">
        <button 
        onClick={()=>setColor("green")}
        className="px-4 py-1 rounded-full bg-white text-white"
        style={{backgroundColor:"green"}}
        >green
        </button>
        <button 
        onClick={()=>setColor("blue")}
        className="px-4 py-1 rounded-full bg-white text-white"
        style={{backgroundColor:"blue"}}
        >blue
        </button>
        <button 
        onClick={()=>setColor("violet")}
        className="px-4 py-1 rounded-full bg-white text-white"
        style={{backgroundColor:"violet"}}
        >violet
        </button>
        <button 
        onClick={()=>setColor("indigo")}
        className="px-4 py-1 rounded-full bg-white text-white"
        style={{backgroundColor:"indigo"}}
        >indigo
        </button>
         <button 
        onClick={()=>setColor("brown")}
        className="px-4 py-1 rounded-full bg-white text-white"
        style={{backgroundColor:"brown"}}
        >brown
        </button>
        <button 
        onClick={()=>setColor("yellow")}
        className="px-4 py-1 rounded-full bg-white text-white"
        style={{backgroundColor:"yellow"}}
        >yellow
        </button>
        <button 
        onClick={()=>setColor("orange")}
        className="px-4 py-1 rounded-full bg-white text-white"
        style={{backgroundColor:"orange"}}
        >orange
        </button>
        <button 
        onClick={()=>setColor("red")}
        className="px-4 py-1 rounded-full bg-white text-white"
        style={{backgroundColor:"red"}}
        >red
        </button>
        <button 
        onClick={()=>setColor("pink")}
        className="px-4 py-1 rounded-full bg-white text-white"
        style={{backgroundColor:"pink"}}
        >pink
        </button>
        
      </div>
      </div>
    </div>
  )
}

export default App
