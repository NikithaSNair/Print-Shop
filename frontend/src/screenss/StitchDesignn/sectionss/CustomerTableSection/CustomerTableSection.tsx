import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../componentss/ui/table";

export const CustomerTableSection = (): React.JSX.Element => {
  const customers = [
    {
      name: "Ethan Harper",
      email: "ethan.harper@email.com",
      ordersPlaced: "12",
      lastLogin: "2023-11-15",
    },
    {
      name: "Olivia Bennett",
      email: "olivia.bennett@email.com",
      ordersPlaced: "8",
      lastLogin: "2023-11-10",
    },
    {
      name: "Liam Carter",
      email: "liam.carter@email.com",
      ordersPlaced: "5",
      lastLogin: "2023-11-05",
    },
    {
      name: "Sophia Davis",
      email: "sophia.davis@email.com",
      ordersPlaced: "15",
      lastLogin: "2023-11-20",
    },
    {
      name: "Noah Evans",
      email: "noah.evans@email.com",
      ordersPlaced: "3",
      lastLogin: "2023-10-28",
    },
    {
      name: "Ava Foster",
      email: "ava.foster@email.com",
      ordersPlaced: "10",
      lastLogin: "2023-11-18",
    },
    {
      name: "Jackson Green",
      email: "jackson.green@email.com",
      ordersPlaced: "7",
      lastLogin: "2023-11-12",
    },
    {
      name: "Isabella Hayes",
      email: "isabella.hayes@email.com",
      ordersPlaced: "2",
      lastLogin: "2023-10-25",
    },
    {
      name: "Lucas Ingram",
      email: "lucas.ingram@email.com",
      ordersPlaced: "14",
      lastLogin: "2023-11-22",
    },
    {
      name: "Mia Jenkins",
      email: "mia.jenkins@email.com",
      ordersPlaced: "6",
      lastLogin: "2023-11-08",
    },
  ];

  return (
    <div className="flex flex-col items-start px-4 py-3 relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex self-stretch w-full flex-[0_0_auto] bg-white rounded-lg overflow-hidden border border-solid border-[#dbe0e5] items-start relative">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[182px] px-4 py-3 [font-family:'Inter',Helvetica] font-medium text-[#111416] text-sm">
                Name
              </TableHead>
              <TableHead className="w-[265px] px-4 py-3 [font-family:'Inter',Helvetica] font-medium text-[#111416] text-sm">
                Email
              </TableHead>
              <TableHead className="w-[175px] px-4 py-3 [font-family:'Inter',Helvetica] font-medium text-[#111416] text-sm">
                Orders Placed
              </TableHead>
              <TableHead className="w-[172px] px-4 py-3 [font-family:'Inter',Helvetica] font-medium text-[#111416] text-sm">
                Last Login
              </TableHead>
              <TableHead className="w-[131px] px-4 py-3 [font-family:'Inter',Helvetica] font-medium text-[#607289] text-sm">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer, index) => (
              <TableRow
                key={index}
                className="h-[72px] border-t [border-top-style:solid] border-[#e5e8ea]"
              >
                <TableCell className="w-[182px] px-4 py-2 [font-family:'Inter',Helvetica] font-normal text-[#111416] text-sm">
                  {customer.name}
                </TableCell>
                <TableCell className="w-[265px] px-4 py-2 [font-family:'Inter',Helvetica] font-normal text-[#607289] text-sm">
                  {customer.email}
                </TableCell>
                <TableCell className="w-[175px] px-4 py-2 [font-family:'Inter',Helvetica] font-normal text-[#607289] text-sm">
                  {customer.ordersPlaced}
                </TableCell>
                <TableCell className="w-[172px] px-4 py-2 [font-family:'Inter',Helvetica] font-normal text-[#607289] text-sm">
                  {customer.lastLogin}
                </TableCell>
                <TableCell className="w-[131px] px-4 py-2 [font-family:'Inter',Helvetica] font-bold text-[#607289] text-sm">
                  <button className="hover:underline">View History</button> |{" "}
                  <button className="hover:underline">Block</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
