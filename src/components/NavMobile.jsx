const NavMobile = () => {
  const navigationData = [
    {
      name: "About",
      href: "#",
    },
    {
      name: "Help",
      href: "#",
    },
    {
      name: "Features",
      href: "#",
    },
    {
      name: "Signup",
      href: "#",
    },
  ];
  return (
    <ul className="flex flex-col px-6 py-8 gap-y-4">
      {navigationData.map((item, id) => {
        return (
          <li key={id}>
            <a className="text-white" href="#">
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavMobile;
