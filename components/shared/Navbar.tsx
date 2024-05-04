"use client";

import { Button, DropdownMenu, Text } from "@radix-ui/themes";
import { Moon,Sun } from "lucide-react";
import { useWidth } from "@/utils/useWidth";
import { DotsHorizontalIcon, ExitIcon } from "@radix-ui/react-icons";
import { Rubik } from "next/font/google";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const rubik = Rubik({ subsets:['latin'] });

const Navbar = ({ changeTheme, theme }: any) => {
  const width = useWidth();
  const router = useRouter();

  const { data: session,status } = useSession();


  // render which buttons auth button to render based on status
  const authButtonRender = () => {

    if(status === 'authenticated'){
      return(
           <Button
            onClick={()=>{signOut()}} 
            variant={width < '765' ? 'solid' : 'ghost'} 
            style={{cursor:"pointer"}} >
            <p className={rubik.className}>LOGOUT</p>
            </Button>
      )
    }
    else if(status === 'unauthenticated'){
      return(<>
            <Button 
            onClick={()=>{router.push('/sign-in')}}
            variant={width < '765' ? 'soft' : 'ghost'} 
            style={{cursor:"pointer"}} >
              <p className={rubik.className}>LOGIN</p>
              </Button>
           
            <Button
            onClick={()=>{router.push('/sign-up')}} 
            variant={width < '765' ? 'solid' : 'outline'} 
            style={{cursor:"pointer"}} >
              <p className={rubik.className}>SIGN UP</p>
              </Button>
              </>
              )
    }
  }


  return (
    <div className="flex items-center justify-between px-[30px] pt-[15px] pb-[15px] ">
      <div >Logo</div>

      <div className="flex items-center gap-[30px]">
        {width > "765" ? (
          <>
             {authButtonRender()}  
            <Button variant="soft" radius='full'>
            <div className="flex items-center justify-center hover:opacity-[50%] cursor-pointer">
                    {!theme ? 
                    <Sun onClick={()=>{changeTheme(theme)}} size={'20px'} /> 
                    : 
                    <Moon onClick={()=>{changeTheme(theme)}} size={'20px'}  />}
            </div>
                </Button>
          </>

        ) : (
          
          <>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <DotsHorizontalIcon width={'20px'} />
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="p-[10px] gap-[10px]">
                <DropdownMenu.Item shortcut="">About</DropdownMenu.Item>
                <DropdownMenu.Item shortcut="">Pricing</DropdownMenu.Item>

                <DropdownMenu.Separator />

                <div className="flex gap-[10px] flex-col">
                {authButtonRender()}
                </div>

                <div className="flex items-center justify-center pt-[15px]">
                    {!theme ? 
                    <Sun onClick={()=>{changeTheme(theme)}} size={'20px'} /> 
                    : 
                    <Moon onClick={()=>{changeTheme(theme)}} size={'20px'}  />}
                </div>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
