import React, { useState } from "react";
import styles from "./styles/SignUpModal.module.css";
import { Cross, Info } from "./Icons";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Link } from "react-router-dom";

export default function SignUpModal() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.modal_head}>
          Sign Up
          <Cross />
        </div>

        <form className={styles.modal_body} onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Name*"
            className={styles.nameInput}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Email Address*"
            className={styles.emailInput}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Create Password*"
            className={styles.passInput}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "30px"
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
          <button type="submit" className={styles.signUnBtn}>
            SIGN UP
          </button>
        </form>
        <div className={styles.modal_bottom}>
          Already have an account?{" "}
          <span
            style={{
              color: "rgb(100, 92, 255)",
              marginLeft: "20px",
              cursor: "pointer",
            }}
          >
            <Link to="/walter-wallet/login"> Sign In</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
