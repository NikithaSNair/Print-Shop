import React from "react";
import { CustomerActionsSection } from "./sectionss/CustomerActionsSection";
import { CustomerTableHeaderSection } from "./sectionss/CustomerTableHeaderSection";
import { CustomerTableSection } from "./sectionss/CustomerTableSection";
import { SearchSection } from "./sectionss/SearchSection";

export const StitchDesign = (): React.JSX.Element => {
  return (
    <div
      className="flex flex-col items-start relative bg-white"
      data-model-id="92:2093"
    >
      <div className="flex flex-col min-h-[800px] items-start relative self-stretch w-full flex-[0_0_auto] bg-white">
        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <SearchSection />
          <div className="items-start justify-center px-40 py-5 flex-1 grow flex relative self-stretch w-full">
            <div className="flex flex-col max-w-[960px] items-start relative flex-1 grow">
              <CustomerTableHeaderSection />
              <CustomerActionsSection />
              <CustomerTableSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
