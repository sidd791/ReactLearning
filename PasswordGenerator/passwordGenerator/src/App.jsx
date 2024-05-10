import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(5)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "1234567890"
    }
    if (charAllowed) {
      str += "~!@#$%^&*(){}[]"
    }
    for (let index = 1; index <= length; index++) {
      let charIndex = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(charIndex)      
    }
    setPassword(pass)
}, [length, numberAllowed, charAllowed, setPassword])

useEffect(()=>{
  passwordGenerator()
}, [length, numberAllowed, charAllowed])

const passwordRef = useRef(null)
const copyPassword = useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0, 40)
  window.navigator.clipboard.writeText(password)
}, [password])

  return (
    <>
    <body className='bg-slate-500 w-full h-screen'>

     <div className='w-full max-w-md mx-auto shadow-lg rounded  text-orange-700 bg-gray-700 '>
      <h1 className='text-white text-center py-2'>Password Generator</h1>
      <div className='flex shadow-lg rounded-lg overflow-hidden my-3 pb-3 mx-4'>
        
        <input type="text" value={password} className='outline-none w-full py-1 px-3 rounded-lg' placeholder='Password' 
        readOnly ref={passwordRef} />
        <button class="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 outline-none text-white px-3 py-0.5 rounded-lg transition-colors duration-200" onClick={copyPassword} >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2 justify-center'>
        <div className='flex items-center  gap-x-1 pb-4'>
          <input type="range" className='cursor-pointer'  onChange={(e)=>{
            setLength(e.target.value)
          }} value = {length} min={6} max = {40}/>
          <label>Length : {length}</label>
          
          <input type="checkbox" name='num' defaultChecked = {numberAllowed} onChange={()=>{
            setNumberAllowed((prev) => !prev);
          }} />
          <label htmlFor="num">Numbers</label>
          
          <input type="checkbox" defaultChecked = {charAllowed} name='char' onChange={()=>{
            setCharAllowed((prev) => !prev);
          }} />
          <label htmlFor="char">Characters</label>
        </div>
      </div>
     </div>

     </body>
    </>
  )
}

export default App
