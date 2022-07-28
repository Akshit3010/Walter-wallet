import { MdAccountBalanceWallet } from "react-icons/md";

const Total_balance = () => {
  return (
    <>
      <div className="bg-white rounded-xl px-4 py-4 flex flex-col gap-2">
        <h1 className="font-bold text-2xl flex items-center">
          <MdAccountBalanceWallet className="text-[#FEBD27] mr-2" />
          Total Balance
        </h1>
        <h2 className="text-blue-600 font-bold text-xl">₹ 0</h2>
        <p className="text-[14px]">No customers yet.</p>
      </div>
    </>
  );
};

export default Total_balance;
