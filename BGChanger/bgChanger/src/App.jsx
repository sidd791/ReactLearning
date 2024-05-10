import React,{ useState } from "react"


function App() {
  const [color, setcolor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-12 rounded-xl">
          <div className="bg-white flex flex-wrap rounded-xl gap-3 px-2 py-2">
          <button onClick={()=>setcolor('red')} className="outline-none px-4 py-1 rounded-xl full text-white shadow-lg bg-red-600">Red</button>
        <button onClick={()=>setcolor('green')} className="outline-none px-4 py-1 rounded-xl full text-white shadow-lg bg-green-600">Green</button>
        <button onClick={()=>setcolor('blue')} className="outline-none px-4 py-1 rounded-xl full text-white shadow-lg bg-blue-600">Blue</button>
          </div>

    </div>
    </div>
  )
}

export default App
