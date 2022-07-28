import React from "react";
import styles from "./styles/LoginModal.module.css";
import { Cross, Info } from "./Icons";

export default function LoginModal() {
   return (
      <div className={styles.container}>
         <div className={styles.modal}>
            <div className={styles.modal_head}>
               Sign In
               <Cross />
            </div>

            <div className={styles.modal_mid}>
               <input type="text" placeholder="Email Address*" className={styles.emailInput} />
               <input type="password" placeholder="Password*" className={styles.passInput} />
               <div
                  style={{
                     display: "flex",
                     justifyContent: "space-between",
                     height: "40px",
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
               <button type="button" className={styles.signInBtn}>
                  SIGN IN
               </button>
               <div className={styles.mid_footer}>
                  This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of
                  Service apply.
               </div>
            </div>
            <div className={styles.modal_bottom}>
               Don't have an account?{" "}
               <span
                  style={{
                     color: "rgb(100, 92, 255)",
                     marginLeft: "20px",
                     cursor: "pointer",
                  }}
               >
                  Sign Up Now
               </span>
            </div>
         </div>
      </div>
   );
}
