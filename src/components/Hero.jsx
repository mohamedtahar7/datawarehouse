// import hero data
// import heroData from "../data";
import Header from "../components/Header";
import heroImg from "../assets/img/hero-img.png";
const Hero = () => {
  // const { title, subtitle, btnText, image } = heroData;
  return (
    <section className="lg:h-[900px] py-12 ">
      <Header />
      <div className="container mx-auto relative h-full">
        <div className="flex flex-col xl:flex-row items-center h-full md:py-24">
          {/* text */}
          <div className="text-center xl:text-left xl:absolute">
            <h1
              className="h1 xl:max-w-[700px] mb-6 xl:mb-12"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              Save your data storage here
            </h1>
            <p
              className="lead xl:max-w-[380px] mb-6 lg:mb-12 "
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Data Warehouse is a data storage area that has been tested for
              security, so you can store your data here safely but not be afraid
              of being stolen by others.
            </p>
            <button
              className="btn btn-primary mb-8 xl:mb-0"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Learn more
            </button>
          </div>
          {/* image */}
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="xl:absolute xl:-right-12 xl:bottom-16"
          >
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
