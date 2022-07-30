import React, { useEffect } from "react";
import Contact from "../components/ContactUs/Contact";

export default function ContactPage() {
   useEffect(() => {
      document.title = "Walter Wallet - Contact Us"
   }, [])
   return <Contact />;
}
