import React from "react";
import { Avatar, AvatarImage } from "../../../../componentss/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../componentss/ui/navigation-menu";

export const SearchSection = (): React.JSX.Element => {
  const navigationItems = [
    { label: "Dashboard", href: "#" },
    { label: "Orders", href: "#" },
    { label: "Products", href: "#" },
    { label: "Customers", href: "#" },
    { label: "Reports", href: "#" },
  ];

  return (
    <header className="items-center justify-between px-10 py-3 flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#e5e8ea] flex relative self-stretch w-full">
      <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
          <div className="relative flex-1 w-4 h-4 bg-[url(https://c.animaapp.com/mcru594c0Zg0HP/img/vector---0.svg)] bg-[100%_100%]" />
        </div>

        <h1 className="inline-flex flex-col items-start relative flex-[0_0_auto]">
          <span className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#111416] text-lg tracking-[0] leading-[23px] whitespace-nowrap">
            Print Shop Admin
          </span>
        </h1>
      </div>

      <div className="flex items-center justify-end gap-8 relative flex-1 grow">
        <NavigationMenu className="h-10">
          <NavigationMenuList className="flex items-center gap-9">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem
                key={index}
                className="inline-flex flex-col items-start relative flex-[0_0_auto]"
              >
                <NavigationMenuLink
                  href={item.href}
                  className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#111416] text-sm tracking-[0] leading-[21px] whitespace-nowrap"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Avatar className="relative w-10 h-10 rounded-[20px]">
          <AvatarImage
            src="https://c.animaapp.com/mcru594c0Zg0HP/img/depth-4--frame-1.png"
            alt="User profile"
          />
        </Avatar>
      </div>
    </header>
  );
};
