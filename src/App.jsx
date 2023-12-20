import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numallowed,setnumallowed]=useState(false);
  const [charallowed,setcharallowed]=useState(false);
  const [password,setpassword]=useState("");

  const genpass=useCallback(()=>{
    let alp="abcdefghijklmnopqrstuvwxyz";
    var newpass="";
    if(numallowed)alp+="0123456789";
    if(charallowed)alp+="@#$%&";
    for (let index = 0; index <length; index++) {
      const i = Math.floor(Math.random() * alp.length);
      const prob=Math.random();
      var char=alp.charAt(i);
      if(prob>=0.5)
        char=char.toUpperCase();
      newpass+=char;
    }
    setpassword(newpass);
  },[length,numallowed,charallowed,setpassword])


  return (
    <>
      <h1 className="font-bold subpixel-antialiased place-content-center text-white">
        Password Generator
      </h1>
      <div className="w-full max-w-3xl mx-auto shadow-md rounded-sm px-4 py-3 my-8 bg-gradient-to-r from-sky-400 to-blue-500">
        <div className="flex mt-2">
        <input 
        className="outline-none text-slate-800 font-mono w-full text-center text-xl font-bold rounded-l-xl py-1 px-3" 
        type="text" 
        value={password}
        placeholder="Password"
        readOnly
        />
        <button
          type="button"
          onClick={genpass}
          className="rounded-l-xl focus:outline-none text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
        >
          Generate
        </button>
        </div>
      <div className='flex flex-wrap place-content-center text-sm px-6'>
      <div className='flex  py-4 items-center gap-x-1'>
        <input 
        type="range"
        min={8}
        max={44}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setlength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex p-4 items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numallowed}
          id="numberInput"
         onChange={()=>{setnumallowed((prev)=>!prev)}}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex p-2 items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charallowed}
              id="characterInput"
              onChange={()=>{setcharallowed((prev)=>!prev)}}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
        </div>
        
    
        
    </>
  );
}

export default App;

