import React from "react";

export default function Navbar() {
   return (
      <div className="h-[60px] w-[100vw] bg-[#fff] flex justify-center border-b-2">
         <div className="w-[80%] h-full flex items-center">
            <div className="flex-1 items-center">Logo</div>
            <div className="flex-1">
               <ul className="list-none flex justify-center gap-5">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
               </ul>
            </div>
            <div className="flex flex-1 gap-5 items-center justify-end">
               <div className="flex items-center">Log in</div>
               <div className="flex items-center bg-blue-600 p-2 text-white rounded">
                  Sign up
               </div>
            </div>
         </div>
      </div>
   );
}
