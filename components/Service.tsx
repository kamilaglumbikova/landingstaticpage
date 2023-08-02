import { service } from "@/constants"
import Image from "next/image"
import ServiceItem from "./ServiceItem"

const Service = () => {
  return (
    <div id="services" className="bg-browndLight">
      <div className="containerWrapper_content pt-[130px] pb-[80px]">
        <h2 className="text-[22px] lg;text-4xl text-center block leading-6 font-bold">Grow your startup with our Service</h2>
        <p className="text-center max-w-[490px] w-full text-sm lg:text-base block mx-auto mt-4 leading-9">
        Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-[30px] lg:mt-[120px] gap-[30px]">
            {service.map((item, index) => (
              <ServiceItem item={item} index={index} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Service