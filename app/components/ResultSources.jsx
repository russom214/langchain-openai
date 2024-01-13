import React, {useState, useEffect, useRef} from 'react';
import Image from 'next/image';

const MessageItem = ({messaage, pngFile})=>{
  const userImage = "/assets/images/green-square.png";
  const botImage = '/assets/images/${pngFile}';

  return(
    <div className='flex flex-col'>
      <div className='flex mb-4'>
        <div className='rounded mr-4 h-10 w-10 relative overflow-hidden'>
          <Image className='rounded'
          src={message.type === "user" ? userImage : botImage}
          alt={`${message.type} profile`}
          width={32}
          height={32}
          priority
          optimized
          />
        </div>
        <p 
          className={message.type === "user" ? "user" : "bot"}
          // style={{maxwidth="90%"}}
          >
            {message.text}
          </p>
      </div>
    </div>
  )
}

const ResultSources = ()=>{
    return(
    <div className="bg-white border-gray-100 p-10 rounded-3xl shadow-lg mb-8 overflow-y-auto h-[500px] max-h-[500px] flex flex-col space-y-4">
    </div>
  );
}

export default ResultSources;