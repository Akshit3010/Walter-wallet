import React, { useEffect } from "react";
import Home from "../components/HomePage/Home";
import SignUpModal from "../components/SignUpModal";

export default function SignupPage() {
   useEffect(() => {
      document.title = "Walter Wallet - Register"
   }, [])
   return (
      <>
         <SignUpModal />
         <Home />
      </>
   );
}
