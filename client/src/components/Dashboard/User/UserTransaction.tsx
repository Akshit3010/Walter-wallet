import React from "react";
import { GrPhone } from "react-icons/gr";
import { MdOutlineTextsms } from "react-icons/md";

export default function UserTransaction() {
   const entries = [
      {
         date: "2022-07-25",
         got: 50,
         gave: 0,
      },
      {
         date: "2022-07-25",
         got: 0,
         gave: 20,
      },
   ];
   return (
      <>
         <div className="flex overflow-hidden pt-10">
            <div className="w-[70%] pl-3 pr-10">
               <div className="flex justify-between font-semibold  px-6 mb-4">
                  <div className="flex-1 flex justify-center">2 Entries</div>
                  <div className="flex-1 flex justify-center">You Got</div>
                  <div className="flex-1 flex justify-center">You Gave</div>
               </div>
               <div className="flex flex-col gap-4">
                  {entries.map((e, i) => {
                     return (
                        <div
                           className="flex justify-between px-6 py-3 shadow-inner hover:shadow-lg bg-white"
                           key={i}
                        >
                           <div className="flex-1 flex justify-center">{e.date}</div>
                           <div className="flex-1 flex justify-center">{e.got ? e.got : ""}</div>
                           <div className="flex-1 flex justify-center">{e.gave ? e.gave : ""}</div>
                        </div>
                     );
                  })}
               </div>
            </div>
            <div className="w-[30%] flex flex-col gap-2 items-center shadow-2xl py-5">
               <div className="w-[35%] aspect-square bg-blue-600 text-white rounded-[50%] flex justify-center items-center text-6xl">
                  Y
               </div>
               <div>Yash</div>
               <div>
                  You'll Get Rs.<span>30</span>
               </div>
               <div className="w-full flex gap-5 justify-center">
                  <div className="w-[40%] text-center py-1 bg-red-600 text-white font-semibold rounded-md cursor-pointer">
                     You Gave Rs.
                  </div>
                  <div className="w-[40%] text-center py-1 bg-green-600 text-white font-semibold rounded-md cursor-pointer">
                     You Got Rs.
                  </div>
               </div>
               <div className="flex gap-2 items-center mt-5 font-semibold">
                  <GrPhone />
                  <span>
                     +91 <span>6387353140</span>
                  </span>
               </div>
               <div className="flex gap-2 items-center font-semibold cursor-pointer">
                  <MdOutlineTextsms />
                  <span>Message</span>
               </div>
            </div>
         </div>
      </>
   );
}
