import Logo from "../../assets/Logo.png";
import { RiDashboardFill, RiUserSettingsLine } from "react-icons/ri";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { IoLogOut } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Sidenav = () => {
  return (
    <>
      <aside className="w-[16%] bg-white h-full">
        <div className="flex flex-col justify-between py-6 h-full">
          <div className="w-[100%] my-0 py-0">
            <img className="px-6" src={Logo} alt="Logo" />
            <ul id="dashboard_nav" className="flex flex-col mt-10">
              <NavLink
                to={"/walter-wallet/dashboard"}
                className="flex items-center cursor-pointer gap-2 px-8 py-4 hover:bg-slate-100 hover:pl-10 hover:transition-all duration-300"
              >
                <RiDashboardFill className="text-xl" />
                Dashboard
              </NavLink>
              <NavLink
                to={"/walter-wallet/money"}
                className="flex items-center cursor-pointer gap-2 px-8 py-4 hover:bg-slate-100 hover:pl-10 hover:transition-all duration-300"
              >
                <FaRegMoneyBillAlt className="text-xl" />
                Money
              </NavLink>
              <NavLink
                to={"/walter-wallet/transaction"}
                className="flex items-center cursor-pointer gap-2 px-8 py-4 hover:bg-slate-100 hover:pl-10 hover:transition-all duration-300"
              >
                <GrTransaction className="text-xl" />
                Transactions
              </NavLink>
              <NavLink
                to={"/walter-wallet/settings"}
                className="flex items-center cursor-pointer gap-2 px-8 py-4 hover:bg-slate-100 hover:pl-10 hover:transition-all duration-300"
              >
                <RiUserSettingsLine className="text-xl" />
                Account Settings
              </NavLink>
            </ul>
          </div>

          <div className="flex items-center cursor-pointer gap-2 px-8 py-4 hover:bg-slate-100 hover:pl-10 hover:transition-all duration-300">
            <IoLogOut className="text-xl " />
            <p>Logout</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidenav;
