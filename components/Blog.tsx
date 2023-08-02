import Image from "next/image"

const Blog = () => {
  return (
    <div id="blog" className="py-[80px]">
      <h2 className="text-[22px] lg:text-4xl text-center block leading-6 font-bold">
        Popular blog post we update everyday
      </h2>
      <p className="text-center max-w-[490px] w-full text-sm lg:text-base block mx-auto mt-4 leading-9">
        Focus only on the meaning, we take care of the design. A∂çs soon as the meeting end you can export in one click.
      </p>
      <div className="containerWrapper_content pt-[80px] pb-[80px]">
        <div className="w-full lg:columns-3 gap-[2rem] px-4 lg:px-0">
          <div className="flex flex-col pb-5">
            <div><Image src="/blog1.png" width={376} height={270} alt="How to work with prototype design with adobe xd featuring tools" /></div>
            <div className="text-[20px] leading-7 font-bold mt-5">How to work with prototype design with adobe xd featuring tools</div>
            <div className="text-[rgba(15,33,55,0.6)] mt-[10px] leading-7">
            The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design
            </div>
          </div>
          <div className="flex flex-col pb-5">
            <div><Image src="/blog1.png" width={376} height={270} alt="How to work with prototype design with adobe xd featuring tools" /></div>
            <div className="text-[20px] leading-7 font-bold mt-5">How to work with prototype design with adobe xd featuring tools</div>
            <div className="text-[rgba(15,33,55,0.6)] mt-[10px] leading-7">
            The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design
            </div>
          </div>
          <div className="flex flex-col pb-5">
            <div><Image src="/blog1.png" width={376} height={270} alt="How to work with prototype design with adobe xd featuring tools" /></div>
            <div className="text-[20px] leading-7 font-bold mt-5">How to work with prototype design with adobe xd featuring tools</div>
            <div className="text-[rgba(15,33,55,0.6)] mt-[10px] leading-7">
            The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design
            </div>
          </div>
          <div className="flex flex-col pb-5">
            <div><Image src="/blog1.png" width={376} height={270} alt="How to work with prototype design with adobe xd featuring tools" /></div>
            <div className="text-[20px] leading-7 font-bold mt-5">How to work with prototype design with adobe xd featuring tools</div>
            <div className="text-[rgba(15,33,55,0.6)] mt-[10px] leading-7">
            The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog