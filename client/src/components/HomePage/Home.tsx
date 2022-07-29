import styles from "./Home.module.css";
import { FcBookmark } from "react-icons/fc";

export default function Home() {
   return (
      <>
         <div className={styles.container}>
            <div className={styles.parent}>
               <div>
                  <div className="flex text-6xl font-bold overflow-hidden h-[80px]">
                     Manage your Accounts
                  </div>
                  <div className={styles.desc_3}>Save your Time & Memory</div>
                  <div>
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
