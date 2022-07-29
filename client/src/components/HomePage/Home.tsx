import styles from "./Home.module.css";
import { FcBookmark } from "react-icons/fc";
import Logo from "../../assets/Logo3.png";
import { useEffect } from "react";
import { checkLogin } from "../../redux/user/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Home() {
  const { user } = useSelector((state: any) => state.user);

  const dispatch = useDispatch();
  console.log(user);
  useEffect(() => {
    dispatch(checkLogin());
  }, []);

  if (user?.length > 0) {
    return <Navigate to={"/walter-wallet/dashboard"} />;
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.parent}>
          <div>
            <div className="flex text-6xl font-bold overflow-hidden h-[80px]">
              Manage your Accounts
            </div>
            <div className="mt-14">
              <h2 className="text-3xl font-medium mb-6">
                Pros of using <span>WALTER WALLET</span>
              </h2>
              <ul>
                <li className="flex items-center">
                  <span>{<FcBookmark />}</span>Digital Ledger App
                </li>
                <hr className="my-3 w-[300px] border-y-2" />
                <li className="flex items-center">
                  <span>{<FcBookmark />}</span>Tally your Data from anywhere
                </li>
                <hr className="my-3 w-[300px] border-y-2" />
                <li className="flex items-center">
                  <span>{<FcBookmark />}</span>Deal with Incomes & Expenses
                </li>
                <hr className="my-3 w-[300px] border-y-2" />
              </ul>
            </div>
            <div className="absolute top-[26%] left-[57%]">
              <img className="w-[570px] opacity-80" src={Logo} alt="logo" />
            </div>
            {/* <div className="w-full flex justify-end mt-[-70px]">
                     <MdLaptopWindows />
                     <div className="flex items-center mx-2">Join us</div>
                  </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
