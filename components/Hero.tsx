import Image from "next/image";

const Hero = () => {
  return (
    <div className="pt-[105px] lg:pt-[170px] relative">
      <div className="containerWrapper flex flex-col items-center">
        <span className="title text-[32px] lg:text-5xl font-bold text-center block leading-[1.57] lg:leading-[76px] max-w-[730px] w-full mx-auto">
          Creativity starts with viewing the whole world differently
        </span>
        <span className="text-sm lg:text-lg mt-4 block">A service agency with customer satisfaction</span>
        <div className="mt-7 relative">
          <button type="button" className="font-bold rounded-[5px] h-[60px] flex items-center justify-center px-[30px] duration-700 transition-all hover:bg-black  lg:absolute text-white bg-darkGreen top-0 left-0 right-0 mx-auto lg:w-[200px]">Get Started</button>
          <Image 
            src="/hero.png"
            width={1083}
            height={562}
            alt="hero"
            className="hidden lg:block"
          />
        </div>
      </div>
      <div className="absolute w-full bottom-0 h-[72px] bg-browndLight z-[-1]" />
    </div>
  );
};

export default Hero;
