import Call from "../Reusable/Call";
import NavLinksComponent from "./NavLinks";
import NavHero from "./NavHero";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <NavLinksComponent />
      <NavHero />
      <Call />
    </div>
  );
};

export default Navbar;
