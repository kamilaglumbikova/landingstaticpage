"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const Subscribe = () => {
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [message, setMessage] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log('Subscribe: ', subscribeEmail)
  };

  return (
    <div className="relative pt-[70px] pb-[80px]">
      <Image
        src="/subscribe.png"
        fill
        alt="subscribe"
        className="object-fill hidden lg:block"
      />
      <div className="containerWrapper_content">
        <div className="bg-white p-10 relative z-10 rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-[50px]">
          <div>
            <h4 className="text-[24px] lg:text-[36px] font-bold leading-9">
              Like our service? Subscribe us
            </h4>
            <p className="mt-[15px] text-sm lg:text-base leading-8 max-w-[420px]">
              We have more than thousand of creative entrepreneurs and stat
              joining our business
            </p>
          </div>
          <div>
            <form onSubmit={onSubmit} className="flex flex-col">
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-0">
                <input
                  type="text"
                  name="subscribe"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  required
                  className="bg-[#EFF3F7] rounded-[5px] min-h-[60px] lg:mr-[15px] px-[24px] flex-grow w-auto outline-none"
                />
                <button className="min-h-[60px] text-base px-[30px] bg-[#DB4A87] font-bold rounded-[5px] inline-flex items-center justify-center transition-all duration-300 whitespace-nowrap text-white hover:bg-[#10132D]">Subscribe</button>
              </div>
              <div className="mt-4">
                <label className="text-[rgba(144,149,173,0.9)] text-sm flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" name="message" />
                  Don’t provide any promotional message.
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
