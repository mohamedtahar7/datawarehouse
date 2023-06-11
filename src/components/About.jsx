import AboutImg from "../assets/img/about.png";
const About = () => {
  const aboutData = {
    image: AboutImg,
    title: "We are a high-level data storage bank",
    subtitle:
      "The place to store various data that you can access at any time through the internet  and where you can carry it. This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse.",
  };
  const { image, title, subtitle } = aboutData;
  return (
    <section
      data-aos="fade-up"
      data-aos-offset="350"
      className="my-[30px] xl:mt-[100px] "
    >
      <div className="container mx-auto">
        <div className="bg-accent-secondary/[15%] rounded-[50px] min-h-[560px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left xl:gap-x-[60px] xl:pb-0 ">
          {/* image */}
          <div className="flex-1" data-aos="zoom-in-left">
            <img src={image} alt="image" />
          </div>
          {/* text */}
          <div className="flex-1 xl:pr-12">
            <h2 data-aos="fade-up" data-aos-delay="300" className="h2 mb-10">
              {title}
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="max-w-[474px] mx-auto xl:mx-0"
            >
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
