import { useState, useCallback ,useEffect , useRef} from 'react'

function App() {
  const [length,setLength] = useState(8)
  const [isNumber,setIsNumber] = useState(false)
  const [issplc,setsplc]=useState(false)
  const [pass,setPass]=useState("")
  const passref=useRef(null)

  const passGenerator = useCallback(()=>{
    let p=""
    let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(isNumber)  str+="1234567890"
    if(issplc)  str+="@#$%!&*{?_-"
    for (let i = 0; i <=length; i++) {
      let char= Math.floor(Math.random()*str.length+1)
      p+=str.charAt(char)
    }
    setPass(p)
  },[length,isNumber,issplc,setPass])

  const copyPass=useCallback(()=>{
    passref.current?.select()
   window.navigator.clipboard.writeText(pass)
  },[pass])

  useEffect(()=>{passGenerator()},
  [length,isNumber,issplc,passGenerator])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center px-2 py-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
        <input
        type='text'
        value={pass}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly 
        ref={passref}
        />
        <button
        onClick={copyPass} 
        className='outline-none bg-blue-700 text-white py-2 px-3 shrink-0'>
          copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1 py-2'>
          <input
          type='range'
          min={8}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input
        type='checkbox'
        defaultChecked={isNumber}
        id="numberInput"
        onChange={()=>{
          setIsNumber((prev)=>!prev)
        }} 
        />
        <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input
        type='checkbox'
        defaultChecked={issplc}
        id="Special Character Input"
        onChange={()=>{
          setsplc((prev)=>!prev)
        }} 
        />
        <label>Special Characters</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
