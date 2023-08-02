"use client";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { contentAbout, toptitleAbout } from "@/constants";
import Link from "next/link";

const About = () => {
  return (
    <div className="containerWrapper_content pt-[100px] pb-[80px] text-primary">
      <Tab.Group>
        <Tab.List className="border-b border-[rgba(1,7,13,0.1)] flex justify-evenly">
          {toptitleAbout.map((title, index) => (
            <Tab
              id={`${index}`}
              key={index}
              className="ui-selected:border-[red] outline-none border-b-2 ui-not-selected:border-transparent ui-not-selected:text-black pb-[30px] transition-all font-bold text-xs lg:text-xl"
            >
              {title.toptile}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {contentAbout.map((content, index) => (
            <Tab.Panel className="pt-[100px]" key={index} id={`${index}`}>
              <div className="flex flex-col lg:flex-row justify-between px-3">
                <div className="max-w-[504px] w-full flex-1 order-2 lg:order-1">
                  <h4 className="text-[22px] lg:text-[40px] text-heading font-bold text-center lg:text-left">
                    {content.title}
                  </h4>
                  <p className="text-content text-sm lg:text-[17px] mt-5 leading-[2.25rem]">
                    {content.des}
                  </p>
                  <div className="grid grid-cols-2 gap-y-5 gap-x-1 mt-[25px]">
                    {content.points.map((point, index) => (
                      <div key={index} className="flex gap-2 items-center">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          color="#3FDBB1"
                          height="20px"
                          width="20px"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z"></path>
                          </g>
                        </svg>
                        <span className="flex-1 text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    className="mt-[35px] text-base text-link font-medium flex items-center gap-1.5 transition-all hover:gap-2.5 duration-300"
                    href={content.morelink}
                  >
                    Explore more
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </Link>
                </div>
                <Image src={content.img} width={581} height={587} alt="about" className=" order-1 lg:order-2" />
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default About;
