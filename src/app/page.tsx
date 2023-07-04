'use client'
import axios from 'axios';
import React, { useState } from 'react';
import QRCode from 'qrcode.react';
const  Home=()=> {
  const [qrCodeURL, setQRCodeURL] = useState("");

  const urlValue=React.useRef<HTMLInputElement>(null)
  
  const handleClick=()=>{
    const url=urlValue.current?.value
    setQRCodeURL(url!)
  }
  return (
    <div className='h-full gap-4 w-full flex justify-center items-center flex-col'>
      <h1 className='font-bold text-2xl'>Qr Code Generator</h1>
      <input className='border p-2 rounded-2xl w-72 text-zinc-800 border-gray-600' type="text" ref={urlValue} />
      <QRCode value={qrCodeURL} renderAs="canvas" />
      <button className='border p-2 rounded-lg' onClick={handleClick}>submit url</button>
    </div>
  );
}

export default Home;