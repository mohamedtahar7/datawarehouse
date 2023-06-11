import { FaYoutube, FaGithub, FaInstagram } from "react-icons/fa";
import LogoV2 from "../assets/img/logo-v2.png";
import Copyright from "./Copyright";
const Footer = () => {
  const footerData = {
    logo: LogoV2,
    address: "Warehouse Society, 234 Bahagia Ave Street PRBW 29281",
    email: "info@warehouse.project",
    phone: "1-232-3434 (Main)",
    list1: [
      {
        name: "Profile",
        href: "#",
      },
      {
        name: "Features",
        href: "#",
      },
      {
        name: "Careers",
        href: "#",
      },
      {
        name: "DW News",
        href: "#",
      },
    ],
    list2: [
      {
        name: "Support",
        href: "#",
      },
      {
        name: "Sign Up",
        href: "#",
      },
      {
        name: "Guide",
        href: "#",
      },
      {
        name: "Reports",
        href: "#",
      },
      {
        name: "Q & A",
        href: "#",
      },
    ],
    socialList: [
      {
        icon: <FaYoutube />,
        href: "#",
      },
      {
        icon: <FaInstagram />,
        href: "#",
      },
      {
        icon: <FaGithub />,
        href: "#",
      },
    ],
  };
  const { logo, address, email, phone, list1, list2, socialList } = footerData;
  return (
    <footer data-aos="fade-up">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row text-center xl:text-left gap-y-12">
          {/* info */}
          <div className="w-[45%] mx-auto flex flex-col items-center xl:items-start">
            {/* logo */}
            <a href="#">
              <img className="mb-[65px] " src={logo} alt="logo" />
            </a>
            {/* address */}
            <div className="max-w-[260px] mb-5 text-primary font-bold ">
              {address}
            </div>
            {/* email */}
            <div className="font-light italic">{email}</div>
            {/* phone */}
            <div className="font-light italic">{phone}</div>
          </div>
          {/* lists */}
          <div className="flex flex-1 flex-col gap-y-14 xl:flex-row justify-between">
            {/* list 1*/}
            <div>
              <div className="font-extrabold text-primary mb-8">About</div>
              <ul className="flex flex-col gap-y-4">
                {list1.map((item, id) => {
                  return (
                    <li key={id}>
                      <a href={item.href} className="text-primary">
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* list 2 */}
            <div>
              <div className="font-extrabold text-primary mb-8">Help</div>
              <ul className="flex flex-col gap-y-4">
                {list2.map((item, id) => {
                  return (
                    <li key={id}>
                      <a href={item.href} className="text-primary">
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* social list */}
            <div>
              <div className="font-extrabold text-primary mb-8">
                Social Media
              </div>
              <ul className="flex gap-4 justify-center">
                {socialList.map((item, id) => {
                  return (
                    <li
                      className="w-12 h-12 bg-primary/10 flex justify-center items-center rounded-full cursor-pointer hover:bg-accent-secondary transition-all"
                      key={id}
                    >
                      <a
                        href={item.href}
                        className="text-white text-xl hover:text-white"
                      >
                        {item.icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
