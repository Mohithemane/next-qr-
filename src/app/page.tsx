'use client'
import axios from 'axios';
import React, { useState } from 'react';
import QRCode from 'qrcode.react';
function page() {
  const [qrCodeURL, setQRCodeURL] = useState("");

  const urlValue=React.useRef<HTMLInputElement>(null)
  
  const handleClick=()=>{
    const url=urlValue.current?.value
    setQRCodeURL(url!)
  }
  return (
    <div className='h-screen gap-4 w-full flex justify-center items-center flex-col'>
      <h1 className='font-bold text-2xl'>Qr Code Generator</h1>
      <input className='border p-2 border-black' type="text" ref={urlValue} />
      <QRCode value={qrCodeURL} renderAs="canvas" />
      <button className='border p-2 rounded-lg' onClick={handleClick}>submit url</button>
    </div>
  );
}

export default page;