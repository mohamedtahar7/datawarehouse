import Swiper from "swiper";
import avatar1 from "../assets/img/testimonials/avatar1.png";
import avatar2 from "../assets/img/testimonials/avatar2.png";
import avatar3 from "../assets/img/testimonials/avatar3.png";

const TestimonialSlider = () => {
  const testimonialsData = [
    {
      image: avatar1,
      name: "John Fang",
      web: "wordfaang.com",
      message:
        "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
      delay: "300",
    },
    {
      image: avatar2,
      name: "Jane Doe",
      web: "janedoee.com",
      message:
        "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
      delay: "600",
    },
    {
      image: avatar3,
      name: "Jim Ferry",
      web: "jimjimf.com",
      message:
        "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
      delay: "900",
    },
  ];
  return (
    <div className="grid place-items-center -mt-16 gap-y-3">
      {testimonialsData.map((slide, id) => (
        <div
          className="bg-white rounded-[20px] border overflow-hidden justify-center border-accent-primary xl:max-w-[645px] max-h-[330px] pt-[60px] px-[35px] xl:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl "
          key={id}
        >
          <img src={slide.image} alt="avatar" />
          <div>
            <div className="text-lg text-primary font-bold">{slide.name}</div>
            <div className="mb-4 font-semibold text-accent-primary">
              {slide.web}
            </div>
            <div className="max-w-[340px]">{slide.message}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialSlider;
