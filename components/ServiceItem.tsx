import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface Props {
    item: {
        title: string;
        icon: string;
        des: string;
        link: string
      };
    index: any;
}

const ServiceItem = ({item,index}: Props) => {
  return <div className="flex flex-col lg:flex-row justify-center items-center gap-[30px]" key={index}>
  <Image 
    src={item.icon}
    width={88}
    height={88}
    alt={item.title}
    className="object-contain object-top w-[42px] h-[42px] lg:w-[88px] lg:h-[88px]"
  />
  <div className="flex-1 flex flex-col text-center lg:text-left">
    <div className="font-bold text-base lg:text-lg">{item.title}</div>
    <div className="text-sm lg:text-base leading-7 mt-4">{item.des}</div>
    {item.link != '' ? (
        <Link className="mt-[15px] text-base text-link font-medium flex items-center gap-1.5 transition-all hover:gap-2.5 duration-300 justify-center lg:justify-normal" href={item.link}>
            Learn More
            <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </Link>
    ) : ""}
  </div>
</div>
}

export default ServiceItem