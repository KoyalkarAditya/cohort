import React from "react";

export default function RevenueCard({ title, amount, orderCount }) {
  return (
    <div className="bg-white-400 rounded shadow-md p-4">
      <div className="text-gray-700">{title}</div>
      <div className="flex justify-between">
        <div className="font-bold text-3xl">${amount}</div>
        {orderCount ? (
          <div className="flex cursor-pointer font-medium">
            {/* {orderCount} orders {">"} */}
            <div className="text-blue-700 underline ">{orderCount} orders</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  className="fill-blue-700"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
