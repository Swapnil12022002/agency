const NavLinksArray = ["TESTIMONIALS", "WORKS", "PRICING"];

const NavLinksComponent = () => {
  return (
    <div className="flex items-center gap-10">
      {NavLinksArray.map((link) => (
        <a href="#" key={link} className="">
          {link}
        </a>
      ))}
    </div>
  );
};

export default NavLinksComponent;
