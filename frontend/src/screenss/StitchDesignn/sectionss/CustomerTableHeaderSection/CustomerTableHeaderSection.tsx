import React from "react";

export const CustomerTableHeaderSection = (): React.JSX.Element => {
  return (
    <header className="flex flex-wrap items-start justify-around gap-[12px_12px] p-4 relative self-stretch w-full flex-[0_0_auto]">
      <div className="inline-flex flex-col min-w-72 gap-3 flex-[0_0_auto] items-start relative">
        <div className="flex flex-col w-72 items-start relative flex-[0_0_auto]">
          <h1 className="relative self-stretch mt-[-1.00px] font-sans font-bold text-[#111416] text-[32px] tracking-[0] leading-10">
            Customers
          </h1>
        </div>

        <div className="flex flex-col w-72 items-start relative flex-[0_0_auto]">
          <p className="relative self-stretch mt-[-1.00px] font-sans font-normal text-[#607289] text-sm tracking-[0] leading-[21px]">
            Manage your customer base
          </p>
        </div>
      </div>
    </header>
  );
};
