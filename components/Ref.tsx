"use client";

import { references } from "@/constants"
import Image from "next/image"
import { useState } from "react"

const Ref = () => {
  const [activeRef, setActiveRef] = useState(0);
  return (
    <div className="bg-browndLight">
      <div className="containerWrapper_content pt-[80px] pb-[80px] flex flex-col">
        <div className="max-w-[846px] relative mx-auto order-2 lg:order-1">
            <Image 
              src="/quotes.png"
              width={128}
              height={43}
              alt="quote"
              className="absolute left-0 top-0 w-[80px] lg:w-[128px]"
            />
            <div className="pl-[40px] lg:pl-[80px] pt-[13px] text-base lg:text-2xl leading-7 lg:leading-[2.8rem] title">
              {references.map((reference, index) => (
                <div key={index}>
                  <div className={`${index == activeRef ? 'block':'hidden'}`} key={index}>"{reference.reference}"</div>
                  <span className={`${index == activeRef ? 'block':'hidden'} text-xs lg:text-base mt-4 block text-[#7E8896]`}>{reference.author}</span>
                </div>
              ))}
            </div>
        </div>
        <div className="grid grid-cols-5 border-t border-[rgba(1,7,13,0.1)] mb-[20px] px-5 lg:mb-0 lg:px-0 lg:mt-20 pt-4 lg:pt-[60px] order-1 lg:order-2">
          {references.map((reference,index) => (
            <div key={index} className="relative h-8 flex justify-center items-center">
              <Image src={reference.logo}
              fill
              alt={reference.company} className="object-contain cursor-pointer" onClick={() => setActiveRef(index)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Ref