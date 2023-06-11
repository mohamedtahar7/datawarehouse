const Nav = () => {
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
    <nav>
      <ul className="flex gap-x-8">
        {navigationData.map((item, id) => {
          return (
            <li key={id}>
              <a href="#">{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
