import React, { useState } from "react";
import styles from "./styles/SignUpModal.module.css";
import { Cross, Info } from "./Icons";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/user/action";
import { AppDispatch, TypedDispatch } from "../redux/store";

export default function SignUpModal() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const notify = (msg: string) => toast(msg);
  const error = (msg: string) => toast.error(msg);
  const dispatch: (fn: () => any) => AppDispatch = useDispatch<TypedDispatch>();

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        const payload = {
          email,
          name,
          role,
        };
        dispatch(createUser(payload, notify, error));
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        error(err.code.split("/")[1]);
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
            className="border border-gray-400 px-2 py-2 text-gray-600"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Email Address*"
            className="border border-gray-400 px-2 py-2 text-gray-600"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Create Password*"
            className="border border-gray-400 px-2 py-2 text-gray-600"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select
            name="role"
            className="border border-gray-400 px-2 py-2 text-gray-600"
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Sing Up As</option>
            <option value="merchant">Merchant</option>
            <option value="customer">Customer</option>
          </select>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "30px",
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
