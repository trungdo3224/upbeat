import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";

import logo from "../assets/logo.png";
import { links } from "../assets/constants";

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map(link => (
      <NavLink className="flex flex-row justify-start 
      items-center my-8 text-sm font-medium text-gray-400 
      hover:text-cyan-400"
        key={link.name}
        to={link.to}
        onClick={() => handleClick && handleClick()}
      >
        <link.icon className="w-8 h-8 mr-2" />
        {link.name}
      </NavLink>
    ))}
  </div>
)

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <Link to="/"><img src={logo} alt="logo" className="w-full h-32 object-contain cursor-pointer" /></Link>
        <NavLinks />
      </div>
      <div className="absolute md:hidden block top-6 right-3 text-white cursor-pointer">
        {mobileMenuOpen ? <RiCloseLine size={30} className="mr-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} /> :
          <HiOutlineMenu size={30} className="mr-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />}
      </div>
      <div className={`absolute top-0 h-screen w-2/3 
      bg-gradient-to-tl from-white/20 to-[#483d8b] 
      backdrop:blur-lg z-10 p-6 md:hidden transition-all duration-500 ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
      </div>
    </>
  )
}
export default Sidebar;
