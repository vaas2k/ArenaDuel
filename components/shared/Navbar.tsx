"use client";
import { Button, DropdownMenu, Flex, TextField } from "@radix-ui/themes";
import { DotsHorizontalIcon, MagnifyingGlassIcon, PersonIcon } from "@radix-ui/react-icons";
import { Rubik } from "next/font/google";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useWidth } from "@/utils/useWidth";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import axios from "axios";

const rubik = Rubik({ subsets: ['latin'] });

const DynamicMoon = dynamic(() => import("lucide-react").then((mod) => mod.Moon), {
  ssr: false,
});
const DynamicSun = dynamic(() => import("lucide-react").then((mod) => mod.Sun), {
  ssr: false,
});

const Navbar = () => {
  const width = useWidth();
  const router = useRouter();
  const { data: session, status } = useSession();
  const [ searchKeyword , setSearchKeyword ] = useState<string>('');
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState<boolean>(false); // State to manage theme

  useEffect(() => {
    const storedTheme = typeof window !== undefined ? sessionStorage.getItem('theme') : null;
    console.log(storedTheme)
    if (storedTheme !== null) {
      setTheme(storedTheme === 'true');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    typeof window !== undefined ? sessionStorage.setItem('theme',JSON.stringify(newTheme)) : null;
    typeof window !== undefined ? window.location.reload() : null;

  };

  useEffect(() => {
    setIsMounted(true);
  }, [status]);

  if (!isMounted) return null;

  // render which buttons auth button to render based on status
  const authButtonRender = () => {
    if (status === 'authenticated') {
      return (
        <>
        {/** Only Render Search bar with them if screen is bigger */}
        { width! > 765 && <div className="px-[10px]">
        <TextField.Root type="text" name="search" value={searchKeyword} 
        onChange={(e)=>{setSearchKeyword(e.target.value)}}
        onKeyDown={(e)=>{ e.key == 'Enter' ? router.push(`/search/${searchKeyword}`) : null}}
        >
          <TextField.Slot side="right">
            <MagnifyingGlassIcon />
          </TextField.Slot>
        </TextField.Root>
        </div>}

        <Button  
        onClick={() => {signOut(); router.push('/sign-in');}} variant={'solid'} 
        style={{ cursor: "pointer"}}>
          <p className={rubik.className}>LOGOUT</p>
        </Button>

        <Button
        style={{ cursor: "pointer"}}
        onClick={()=>{ router.push(`/profile/${session.user?.email!}`)}}>
          <PersonIcon />
        </Button>

          </>
      )
    } else if (status === 'unauthenticated') {
      return (
        <>
          <Button onClick={() => router.push('/sign-in')} variant={'solid'} style={{ cursor: "pointer" }}>
            <p className={rubik.className}>LOGIN</p>
          </Button>
          <Button onClick={() => router.push('/sign-up')} variant={'solid'} style={{ cursor: "pointer" }}>
            <p className={rubik.className}>SIGN UP</p>
          </Button>
        </>
      )
    }
  }

  return (
    <div className="flex items-center justify-between sm:px-[30px] px-[15px] pt-[20px] pb-[15px]">
      <div
        className="cursor-pointer font-black leading-tight flex flex-row items-center justify-evenly "
        onClick={() => router.push("/")}
      >
        <svg
          className="w-auto h-6 fill-current"
          viewBox="0 0 194 116"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill-rule="evenodd">
            <path d="M96.869 0L30 116h104l-9.88-17.134H59.64l47.109-81.736zM0 116h19.831L77 17.135 67.088 0z" />
            <path d="M87 68.732l9.926 17.143 29.893-51.59L174.15 116H194L126.817 0z" />
          </g>
        </svg>

        {/** show name only larger screens */}
        {width! > 765 && (
          <span className="ml-3 text-xl">
            DevBuddies<span className="text-pink-500">.</span>
          </span>
        )}
        </div>

        {width! < 765 && (
          <div className="px-[10px]">
            <TextField.Root
              type="text"
              name="search"
              value={searchKeyword}
              onChange={(e) => {
                setSearchKeyword(e.target.value);
              }}
              onKeyDown={(e) => {
                e.key == "Enter" ? router.push(`/search/${searchKeyword}`) : null;
              }}
            >
              <TextField.Slot side="right">
                <MagnifyingGlassIcon />
              </TextField.Slot>
            </TextField.Root>
          </div>
        )}

      <div className="flex items-center gap-[30px]">
        {width! > 765 ? (
          <>
            {authButtonRender()}
            <Flex className="flex items-center justify-center hover:opacity-[50%] cursor-pointer">
              <Button variant="soft" radius="full">
                {!theme ? (
                  <DynamicSun
                    onClick={() => toggleTheme()}
                    size={"20px"}
                  />
                ) : (
                  <DynamicMoon
                    onClick={() => toggleTheme()}
                    size={"20px"}
                  />
                )}
              </Button>
            </Flex>
          </>
        ) : (
          <div>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <DotsHorizontalIcon width={"20px"} />
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="p-[10px] gap-[10px]">
                <DropdownMenu.Item shortcut="">About</DropdownMenu.Item>
                <DropdownMenu.Item shortcut="">Pricing</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <div className="flex gap-[10px] flex-col">
                  {authButtonRender()}
                </div>

                {status === "authenticated" && (
                  <div className="flex items-center justify-center pt-[15px]">
                    {!theme ? (
                      <DynamicSun
                        onClick={() => toggleTheme()}
                        size={"20px"}
                      />
                    ) : (
                      <DynamicMoon
                        onClick={() => toggleTheme()}
                        size={"20px"}
                      />
                    )}
                  </div>
                )}
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;