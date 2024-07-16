

import dynamic from "next/dynamic";
import { Badge } from "@radix-ui/themes";

const Card1v1 = dynamic(() => import("./1v1Card"), { ssr: false })
const CardMara = dynamic(() => import("./CardMara"), { ssr: false })
const CardDaily = dynamic(() => import("./CardDaily"), { ssr: false })

export default function Dashboard_Comp({ handleMode, rating }: any) {
  return (
    <div className="flex flex-col h-full w-full p-6 md:p-10">
      {/* Header Section */}
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold dark:text-gray-50">Dashboard</h1>
        <div className="flex items-center justify-center gap-[10px] mr-[10px]">
          <ZapIcon className="w-5 h-5 text-yellow-500" />
          <p>
            <Badge variant={"soft"} color={"amber"} size={"3"}>
              <b className="text-[16px]">{rating}</b>
            </Badge>
          </p>
        </div>
      </header>

      {/* Spacer for pushing cards to bottom */}
      <div className="flex-grow"></div>

      {/* Cards Section - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-[40px]">
        <Card1v1 handleMode={handleMode} rating={rating} />
        <CardMara handleMode={handleMode} rating={rating} />
        <CardDaily handleMode={handleMode} rating={rating} />
      </div>

      {/* Empty Footer */}
      <div className="flex items-center justify-between"></div>
    </div>
  );

}


function ZapIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  );
}
