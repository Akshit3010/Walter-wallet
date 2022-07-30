import React, { useEffect } from "react";
import Home from "../components/HomePage/Home";
import LoginModal from "../components/LoginModal";
import Navbar from "../components/Navbar";
import SignUpModal from "../components/SignUpModal";

export default function HomePage() {
   useEffect(() => {
      document.title = "Walter Wallet"
   }, [])
   return (
      <>
         <Home />
      </>
   );
}
