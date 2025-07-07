import React from "react";
import { Button } from "../../../../componentss/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../componentss/ui/dropdown";

export const CustomerActionsSection = (): React.JSX.Element => {
  const filterOptions = [
    {
      label: "Status",
      options: ["Active", "Inactive", "Pending", "All"],
    },
    {
      label: "Date",
      options: ["Today", "Last 7 days", "Last 30 days", "Custom range"],
    },
  ];

  return (
    <div className="flex flex-wrap items-start gap-[12px_12px] pl-3 pr-4 py-3 relative self-stretch w-full flex-[0_0_auto]">
      {filterOptions.map((filter, index) => (
        <DropdownMenu key={`filter-${index}`}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="inline-flex h-8 items-center justify-center gap-2 pl-4 pr-2 py-0 relative flex-[0_0_auto] bg-[#eff2f4] rounded-lg border-0 hover:bg-[#e5e8ea]"
            >
              <span className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#111416] text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap">
                {filter.label}
              </span>
              <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                <div className="w-5 bg-[url(https://c.animaapp.com/mcru594c0Zg0HP/img/vector---0-1.svg)] bg-[100%_100%] relative flex-1 grow" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {filter.options.map((option, optionIndex) => (
              <DropdownMenuItem key={`option-${optionIndex}`}>
                {option}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </div>
  );
};
