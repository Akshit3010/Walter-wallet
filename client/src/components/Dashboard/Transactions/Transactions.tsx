import { useNavigate } from "react-router-dom";

const Transactions = () => {
  const navigate = useNavigate();
  const Data = [
    {
      name: "John Doe",
      date: "23 May 2022",
      amount: 150,
      gave: 200,
      got: 50,
    },
    {
      name: "John Doe",
      date: "23 May 2022",
      amount: 150,
      gave: 200,
      got: 50,
    },
    {
      name: "John Doe",
      date: "23 May 2022",
      amount: 150,
      gave: 200,
      got: 50,
    },
    {
      name: "John Doe",
      date: "23 May 2022",
      amount: 150,
      gave: 200,
      got: 50,
    },
    {
      name: "John Doe",
      date: "23 May 2022",
      amount: 150,
      gave: 200,
      got: 50,
    },
    {
      name: "John Doe",
      date: "23 May 2022",
      amount: 150,
      gave: 200,
      got: 50,
    },
    {
      name: "John Doe",
      date: "23 May 2022",
      amount: 150,
      gave: 200,
      got: 50,
    },
  ];
  return (
    <>
      <div
        id="transactions"
        className="bg-white rounded-lg px-4 py-2 h-[600px] mt-6 pb-[9rem]"
      >
        <h1 className="font-bold text-xl">Recent Transactions</h1>
        <div>
          <table
            cellSpacing="0"
            cellPadding="0"
            className="border-none outline-none w-full"
          >
            <tbody>
              <tr>
                <th className="text-gray-400 text-[14px] font-bold text-left px-2 py-2">
                  Name
                </th>
                <th className="text-gray-400 text-[14px] font-bold text-left px-2 py-2">
                  Date
                </th>
                <th className="text-gray-400 text-[14px] font-bold text-left px-2 py-2">
                  Amount
                </th>
                <th className="text-gray-400 text-[14px] font-bold text-left px-2 py-2">
                  You Gave
                </th>
                <th className="text-gray-400 text-[14px] font-bold text-left px-2 py-2">
                  You Got
                </th>
              </tr>
              {Data.map((item, i) => {
                return (
                  <tr
                    key={i}
                    className="h-[60px] cursor-pointer hover:shadow-md pb-6 hover:transition-all"
                    onClick={() => navigate("/walter-wallet/user/transaction")}
                  >
                    <td className="text-[14px]  text-left px-2 py-2">
                      {item.name}
                    </td>
                    <td className="text-[14px]  text-left px-2 py-2">
                      {item.date}
                    </td>
                    <td className="text-[16px] font-bold pl-4 text-left px-2 py-2">
                      ₹{item.amount}
                    </td>
                    <td className="text-[16px] font-bold pl-4 text-red-500 text-left px-2 py-2">
                      ₹{item.gave}
                    </td>
                    <td className="text-[16px] font-bold pl-4 text-green-500 text-left px-2 py-2">
                      ₹{item.got}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Transactions;
