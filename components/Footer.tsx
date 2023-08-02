import { footerLinks, footerSocialMedia } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {}

const Footer = () => {
  return (
    <div className="containerWrapper">
      <div className="grid-cols-2 lg:grid-cols-5 grid px-4 gap-[30px]">
        <div className="order-5 lg:order-none col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start">
          <Image src="/logo.svg" width={185} height={36} alt="logo" className="w-[128px] lg:w-[185px]" />
          <div className="flex gap-3 text-heading mt-5">
            <Link href="/">Terms of use</Link>|<Link href="/">Privacy</Link>
          </div>
          <div className="text-sm text-[rgba(15,33,55,0.6)] mt-4">
            Copyright by 2023 RedQ, Inc
          </div>
        </div>
        {footerLinks.map((footer, index) => (
          <div key={index}>
            <h4 className="text-heading text-lg font-medium">{footer.title}</h4>
            <div className="mt-7">
              {footer.links.map((link, index) => (
                <Link
                  href="/"
                  key={index}
                  className="flex flex-col text-sm text-[rgba(2,7,62,0.8)] leading-10"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div>
          <div>
            <h4 className="text-heading text-lg font-medium">Connect</h4>
            <div className="mt-7">
              {footerSocialMedia.map((link, index) => (
                <Link
                  href={link.link}
                  key={index}
                  className="flex flex-row gap-3 text-sm text-[rgba(2,7,62,0.8)] leading-10"
                >
                    <Image 
                        src={link.icon}
                        width={20}
                        height={20}
                        alt={link.title}
                    />
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs pt-10">
        <a target="_blank" href="https://icons8.com/icon/uLWV5A9vXIPu/facebook">
          Facebook
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
        <a target="_blank" href="https://icons8.com/icon/13963/twitter">
          Twitter
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
        <a target="_blank" href="https://icons8.com/icon/62856/github">
          GitHub
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
        <a target="_blank" href="https://icons8.com/icon/21075/dribbble">
          dribble
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </div>
    </div>
  );
};

export default Footer;
