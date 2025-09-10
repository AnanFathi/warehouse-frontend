import { DropdownLanguage } from "./DropdownLanguage"

const Navbar = () => {
  return (
    <div className="bg-secondary w-full h-20 flex justify-end items-center pe-10">
        <DropdownLanguage/>
    </div>
  )
}

export default Navbar