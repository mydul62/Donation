import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" max-w-[1320px] flex items-center mx-auto navbar py-6">
  <div className="md:flex-1 md:flex hidden">
    <a className="btn btn-ghost text-xl">
      <img src="../../public/Logo.png" alt="" />
    </a>
  </div>
  <div className="flex-none">
    <ul className="nav menu menu-horizontal px-1 items-center  *:text-[18px]">
      <li ><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'/donation'} >Donation</NavLink></li>
      <li><NavLink to={'/statistics'} >Statictics</NavLink></li>
    </ul>
  </div>
</div>
  );
};
export default NavBar;