import { toast, ToastContainer } from 'react-toastify';
import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './Data/PassChar';

function App() {
  let [upperCase,setUpperCase]=useState(false)
  let [lowerCase,setLowerCase]=useState(false)
  let [number,setNumber]=useState(false)
  let [symbol,setSymbol]=useState(false)
  let [passwordlen,setPasswordlen]=useState(6)
  let [fpass,setFpass]=useState('')

  let createPassword=()=>{
    let FinalPass=''
    let charSet=''
    if(upperCase || lowerCase || number || symbol){
      if(upperCase) charSet+=UC;
      if(lowerCase) charSet+=LC;
      if(number) charSet+=NC;
      if(symbol) charSet+=SC;
      for(let i=0;i<passwordlen;i++){
        FinalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
      }
      setFpass(FinalPass)
    }
    else{
      toast.error("Please select atleast one checkbox!")
    }
  }
  let copyPass=()=>{
    navigator.clipboard.writeText(fpass)
    toast.success("Password copied!")
  }
  return (
    <div>
      <ToastContainer/>
      <div className='passwordBox'>
        <h2>Password Generator</h2>

        <div className='passwordBoxin'>
          <input type='text' value={fpass} readOnly/><button onClick={copyPass}>Copy</button>
        </div>

        <div className='passLength'>
          <label>Password Length</label>
          <input type='number' max={20} min={6} value={passwordlen} onChange={(event)=>setPasswordlen(event.target.value)}/>
        </div>

         <div className='passLength'>
          <label>Include Uppercase Letters</label>
          <input type='checkbox' checked={upperCase} onChange={()=>setUpperCase(!upperCase)}/>
        </div>

        <div className='passLength'>
          <label>Include Lowercase Letters</label>
          <input type='checkbox' checked={lowerCase} onChange={()=>setLowerCase(!lowerCase)}/>
        </div>

        <div className='passLength'>
          <label>Include Numbers</label>
          <input type='checkbox' checked={number} onChange={()=>setNumber(!number)}/>
        </div>

        <div className='passLength'>
          <label>Include Symbols</label>
          <input type='checkbox' checked={symbol} onChange={()=>setSymbol(!symbol)}/>
        </div>

        <button className='btn' onClick={createPassword}>
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
