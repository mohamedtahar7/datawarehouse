import { BsChatDotsFill } from "react-icons/bs";
const Copyright = () => {
  const copyrightData = {
    text: "© Datawarehouse™, 2020. All rights reserved. Company Registration Number: 21479524.",
    icon: <BsChatDotsFill />,
  };
  const { text, icon } = copyrightData;
  return (
    <section data-aos="fade-up" className="mt-24 pb-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center md:text-left lg:flex-row justify-between gap-y-8">
          {/* text */}
          <div className="text-sm font-light italic max-w-[360px]">{text}</div>
          {/* icon */}
          <div className="-order-1 md:order-1">
            <div className="w-[60px] h-[60px] bg-accent-primary/20 flex items-center justify-center rounded-full cursor-pointer group">
              <div className="text-3xl text-accent-primary group-hover:scale-110 transition-all">
                {icon}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Copyright;
