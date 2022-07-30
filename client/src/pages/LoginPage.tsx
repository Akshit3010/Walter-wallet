import React, { useEffect } from "react";
import Home from "../components/HomePage/Home";
import LoginModal from "../components/LoginModal";

export default function LoginPage() {
   useEffect(() => {
      document.title = "Walter Wallet - Login"
   }, [])
   return (
      <>
         <LoginModal />
         <Home />
      </>
   );
}
