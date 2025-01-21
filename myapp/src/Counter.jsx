import React, { useEffect, useState } from "react";

const Counter = () => {
  const[num,setNum]=useState(0)

  const decrease=()=>{
    if(num>0)
    {
      setNum(num-1)
    }
  }

  const reset=()=>{
    setNum(0)
  }
  useEffect(()=>{
    alert("State changed")
  },num)
  return (
    <>
      <h1>The initial state is {num}.</h1>

      {
        num<11 &&  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>setNum(num+1)}>
        Increse
      </button>
      }
     
      {
        num>0 && <button className="border border-red-700 bg-red-600 hover:bg-neutral-700 text-white font-serif px-2 rounded" onClick={decrease}>Decrease</button>
      }
      {
        num!=0 && <button className="bg-red-600 hover:bg-yellow-700 text-white font-mono p-2 rounded" onClick={reset}>Reset</button>

      }
     

    </>
  );
};

export default Counter;
