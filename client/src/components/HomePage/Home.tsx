import React from "react";
import Logo from "../../assets/Logo.png";
import styles from "./Home.module.css";

export default function Home() {
   const style = {
      backgroundImage:
         "https://images.unsplash.com/photo-1597673030062-0a0f1a801a31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1596&q=80",
   };
   return (
      <>
         <div className={styles.container}>
            <div className={styles.parent}>
               <div className="flex-col">
                  <div className="flex justify-center">
                     <img src={Logo} alt="" width="30%" />
                  </div>
                  <div className={styles.desc_3}>Save your Time & Memory</div>
               </div>
            </div>
         </div>

         <div className="flex justify-center items-center h-[300px] bg-[#eee]">
            <div className="flex-col items-center w-[80%]">
               <div className="text-center text-[26px] font-semibold text-blue-600">
                  We're helping you to remove STRESS
               </div>
               <div className="text-center my-5">
                  As the world moves online, we at Walter Wallet are making sure the small and
                  medium businesses are part of this digital revolution too. With our range of
                  desktop applications we aim to empower these merchants with the internet and make
                  doing business easy for them.
               </div>
            </div>
         </div>
      </>
   );
}
