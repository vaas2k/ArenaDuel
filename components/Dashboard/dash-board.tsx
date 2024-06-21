
import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"
import { LightningBoltIcon } from "@radix-ui/react-icons"
import { AlertDialog, Button, Flex, Switch } from "@radix-ui/themes"


export function Dashboard_Comp({mode , handleMode ,rating } : any) {
  
  return (
    <div className="flex flex-col h-full w-full p-6 md:p-10">
      {/**Header Section */}
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold dark:text-gray-50">Dashboard</h1>
        <div className="flex items-center justify-center gap-[10px] mr-[10px]">
          <ZapIcon className="w-5 h-5 text-yellow-500" />
          <p>
            {" "}
            <b>{rating}</b>
          </p>
        </div>
      </header>

      {/** This div will take up the remaining space to push the cards to the bottom */}
      <div className="flex-grow"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/**1v1 */}
        <Card className="bg-gradient-to-br from-[#9b59b6] to-[#8e44ad] text-gray-50 hover:shadow-xl transition-shadow duration-300">
          <CardContent className="flex flex-col items-start gap-4 p-6">
            <div className="flex items-center gap-2">
              <UserIcon className="w-10 h-10" />
              <div className="flex items-center gap-1">
                <div className="bg-gray-900 rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium text-gray-50">
                  1
                </div>
                <TrophyIcon className="w-5 h-5 text-yellow-500" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">1v1</h2>
              <p className="text-sm">Go one on one with random.</p>
            </div>
            
            <AlertDialog.Root>
              <AlertDialog.Trigger>
              <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 mr-[20px]"
              href="#"
            >
              Play
            </Link>
              </AlertDialog.Trigger>
              <AlertDialog.Content maxWidth="450px">
                <AlertDialog.Title>Play</AlertDialog.Title>
                <AlertDialog.Description size="2">
                  Do you wanna play Rated ?
                </AlertDialog.Description>

                <Flex gap="3" mt="4" justify="end">
                  <AlertDialog.Cancel>
                    <Button variant="soft" color="gray" onClick={() => handleMode({type : '1v1',rating : 0})}>
                      No
                    </Button>
                  </AlertDialog.Cancel>
                  <AlertDialog.Action>
                    <Button variant="solid" color="red" onClick={() =>  handleMode({type : '1v1',rating : rating})}>
                      Yes
                    </Button>
                  </AlertDialog.Action>
                </Flex>
              </AlertDialog.Content>
            </AlertDialog.Root>
          </CardContent>
        </Card>

        {/**Marathon */}
        <Card className="bg-gradient-to-br from-[#27ae60] to-[#2ecc71] text-gray-50 hover:shadow-xl transition-shadow duration-300">
          <CardContent className="flex flex-col items-start gap-4 p-6">
            <div className="flex items-center gap-2">
              <TrophyIcon className="w-10 h-10" />
              <div className="flex items-center gap-1">
                <div className="bg-gray-900 rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium text-gray-50">
                  3
                </div>
                <TrophyIcon className="w-5 h-5 text-yellow-500" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Marathon</h2>
              <p className="text-sm">
                Compete in a series of matches to climb the leaderboard.
              </p>
            </div>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
              onClick={() => handleMode({type : 'marathon',rated : true})}
            >
              Play
            </Link>
          </CardContent>
        </Card>

        {/**Daily Practice */}
        <Card className="bg-gradient-to-br from-[#e67e22] to-[#f39c12] text-gray-50 hover:shadow-xl transition-shadow duration-300">
          <CardContent className="flex flex-col items-start gap-4 p-6">
            <div className="flex items-center gap-2">
              <ZapIcon className="w-10 h-10" />
              <div className="flex items-center gap-1">
                <div className="bg-gray-900 rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium text-gray-50">
                  7
                </div>
                <ZapIcon className="w-5 h-5 text-yellow-500" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Daily Practice</h2>
              <p className="text-sm">
                Complete a daily challenge to earn points and climb the
                leaderboard.
              </p>
            </div>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
              onClick={() => handleMode({type : 'daily',rated : false,})}
            >
              Practice
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


function SearchIcon(props :any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function TrophyIcon(props : any ) {
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
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}


function UserIcon(props : any ) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function UsersIcon(props : any ) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function ZapIcon(props : any) {
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
  )
}
