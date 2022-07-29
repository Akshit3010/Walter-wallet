import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import styles from "./styles/LoginModal.module.css";
import { Cross, Info } from "./Icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch, TypedDispatch } from "../redux/store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginUser } from "../redux/user/action";

export default function LoginModal() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notify = (msg: string) => toast(msg);
  const error = (msg: string) => toast.error(msg);
  const dispatch: (fn: () => any) => AppDispatch = useDispatch<TypedDispatch>();

  const handleSignin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        //dispatch this to backend
        console.log(user);
        const payload = {
          email,
        };
        dispatch(LoginUser(payload, notify, error));
        // ...
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        //show error
        error(err.code.split("/")[1]);
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.modal_head}>
          Sign In
          <Cross />
        </div>

        <form className={styles.modal_mid} onSubmit={handleSignin}>
          <input
            type="text"
            placeholder="Email Address*"
            className={styles.emailInput}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password*"
            className={styles.passInput}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
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
          </div>
          <button type="submit" className={styles.signInBtn}>
            SIGN IN
          </button>
        </form>
        <div className={styles.modal_bottom}>
          Don't have an account?{" "}
          <span
            style={{
              color: "rgb(100, 92, 255)",
              marginLeft: "20px",
              cursor: "pointer",
            }}
          >
            <Link to="/walter-wallet/register"> Sign Up Now</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
