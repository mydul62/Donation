import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" max-w-[1320px] mx-auto navbar py-10">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">
      <img src="../../public/Logo.png" alt="" />
    </a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 items-center  *:text-[18px]">
      <li className=" text-[red]"><Link to={'/'}>Home</Link></li>
      <li><Link to={'/donation'} >Donation</Link></li>
      <li><Link to={'/statistic'} >Statictics</Link></li>
    </ul>
  </div>
</div>
  );
};

export default NavBar;