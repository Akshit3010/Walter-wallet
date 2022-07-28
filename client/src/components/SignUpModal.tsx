import React from "react";
import styles from "./styles/SignUpModal.module.css";
import { Cross, Info } from "./Icons";

export default function SignUpModal() {
   return (
      <div className={styles.container}>
         <div className={styles.modal}>
            <div className={styles.modal_head}>
               Sign Up
               <Cross />
            </div>

            <div className={styles.modal_body}>
               <input type="text" placeholder="Name*" className={styles.nameInput} />
               <input type="text" placeholder="Email Address*" className={styles.emailInput} />
               <input type="password" placeholder="Create Password*" className={styles.passInput} />
               <div
                  style={{
                     display: "flex",
                     justifyContent: "space-between",
                  }}
               >
                  <span
                     style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: 14,
                     }}
                  >
                     <input type="checkbox" />
                     Remember Me
                     <Info />
                  </span>
                  <span
                     style={{
                        fontSize: 14,
                        color: "rgb(100, 92, 255)",
                        fontWeight: "bold",
                        cursor: "pointer",
                     }}
                  >
                     Forgot Password?
                  </span>
               </div>
            </div>
            <button type="button" className={styles.signUnBtn}>
               SIGN UP
            </button>
            <div className={styles.mid_footer}>
               By clicking "Create an Account", you agree to our Terms of Use and Privacy Policy,
               including the Use of Cookies and the transfer of your personal information.
            </div>
            <div className={styles.modal_bottom}>
               Already have an account?{" "}
               <span
                  style={{
                     color: "rgb(100, 92, 255)",
                     marginLeft: "20px",
                     cursor: "pointer",
                  }}
               >
                  Sign In
               </span>
            </div>
         </div>
      </div>
   );
}
