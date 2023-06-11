import Feature1Img from "../assets/img/features/feature1.png";
import Feature2Img from "../assets/img/features/feature2.png";
import Feature3Img from "../assets/img/features/feature3.png";
import Feature4Img from "../assets/img/features/feature4.png";
import Feature1BgImg from "../assets/img/features/feature1_bg.png";
import Feature2BgImg from "../assets/img/features/feature2_bg.png";
import Feature3BgImg from "../assets/img/features/feature3_bg.png";
import Feature4BgImg from "../assets/img/features/feature4_bg.png";
import { BsArrowRight } from "react-icons/bs";
const Features = () => {
  const featuresData = {
    title: "Features",
    subtitle:
      "Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.",
    list: [
      {
        image: Feature1Img,
        bgImage: Feature1BgImg,
        title: "Search Data",
        description:
          "Don’t worry if your data is very large, the Data Warehouse provides a search engine, which is useful for making it easier to find data effectively saving time.",
        linkText: "Learn more",
        delay: "400",
      },
      {
        image: Feature2Img,
        bgImage: Feature2BgImg,
        title: "24 Hours Access",
        description:
          "Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent..",
        linkText: "Learn more",
        delay: "700",
      },
      {
        image: Feature3Img,
        bgImage: Feature3BgImg,
        title: "Print Out",
        description:
          "Print out service gives you convenience if someday you need print data, just edit it all and just print it.",
        linkText: "Learn more",
        delay: "1000",
      },
      {
        image: Feature4Img,
        bgImage: Feature4BgImg,
        title: "Security Code",
        description:
          "Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password than you created, so only you can open the file.",
        linkText: "Learn more",
        delay: "1300",
      },
    ],
  };
  const { title, subtitle, list } = featuresData;
  return (
    <section className="my-[70px] xl:my-[150px] ">
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center">
          <h2
            className="h2 mb-6 xl:mb-12"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            {title}
          </h2>
          <p
            data-aos="fade-down"
            data-aos-delay="200"
            className="lead max-w-[584px] mx-auto mb-16 xl:mb-24"
          >
            {subtitle}
          </p>
        </div>
        {/* feature list  */}
        <div className="grid grid-cols-1 gap-[50px] xl:grid-cols-2">
          {list.map((feature, id) => {
            const { image, bgImage, title, description, linkText, delay } =
              feature;
            return (
              <div
                data-aos="zoom-in"
                data-aos-delay={delay}
                data-aos-offset=""
                className="w-full max-w-[530px] h-[358px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto"
                key={id}
              >
                {/* bg img */}
                <div className="hidden xl:flex absolute top-0 right-0 z-10">
                  <img src={bgImage} alt="image" />
                </div>
                {/* icon */}
                <div
                  className="max-w-[120px] xl:mr-7 xl:max-w-[232px]"
                  data-aos="zoom-in-right"
                  data-aos-delay={delay}
                >
                  <img src={image} alt="image" />
                </div>
                {/* text */}
                <div className="max-w-[220px] z-20 ">
                  <h3 className="h3 mb-4 ">{title}</h3>
                  <p className="lead font-light italic mb-4 ">{description}</p>
                  {/* link and arrow icn */}
                  <div className="flex items-center gap-x-2 group">
                    <a className="text-primary font-bold" href="#">
                      {linkText}
                    </a>
                    <BsArrowRight className="text-xl text-accent-primary group-hover:ml-[5px] transition-all" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
