import { serviceMore } from "@/constants";
import ServiceItem from "./ServiceItem";

const MoreService = () => {
  return (
    <div id="whyus" className="bg-graybg pt-[80px] pb-[130px]">
      <div className="containerWrapper_content">
        <h2 className="text-[22px] lg;text-4xl text-center block leading-6 font-bold">
          Other services you must appreciate
        </h2>
        <p className="text-center max-w-[490px] w-full text-sm lg:text-base block mx-auto mt-4 leading-9">
          Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-[120px] gap-x-[30px] gap-y-[80px]">
          {serviceMore.map((item, index) => (
              <ServiceItem item={item} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MoreService;
