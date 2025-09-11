import { DropdownLanguage } from "./DropdownLanguage";

const Navbar = () => {
  return (
    <div className="relative bg-white w-full flex flex-col justify-end h-[70px] items-center">
      <div className="absolute top-4 end-4">
        <DropdownLanguage />
      </div>

      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
    </div>
  );
};

export default Navbar;
