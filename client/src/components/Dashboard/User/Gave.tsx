import React, { useState } from "react";
import styles from "./Gave.module.css";

export default function Gave() {
   const [amount, setAmount] = useState("0");
   return (
      <div className={styles.container}>
         <div className={styles.parent}>
            <div className={styles.topHeader}>You Gave Rs. {amount} to Yash</div>
            <form className={styles.mid}>
               <div>
                  <div>Enter Amount (Rs.)</div>
                  <input
                     type="text"
                     placeholder="Amount"
                     required
                     onChange={(e) => setAmount(e.target.value)}
                  />
               </div>
               <div>
                  <div>Date</div>
                  <input type="date" required />
               </div>
               <div>
                  <div>Enter Details(Item name, Bill no, Quantity)</div>
                  <textarea
                     placeholder="Message"
                     id="message"
                     className={styles.form_text}
                     required
                  />
               </div>
               <button type="submit">Save</button>
            </form>
         </div>
      </div>
   );
}
