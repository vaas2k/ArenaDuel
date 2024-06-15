"use client";
import { Button, DropdownMenu, Flex, TextField } from "@radix-ui/themes";
import { DotsHorizontalIcon, MagnifyingGlassIcon, PersonIcon, BellIcon } from "@radix-ui/react-icons";
import { Rubik } from "next/font/google";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useWidth } from "@/utils/useWidth";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Notifications from "./Notifications";

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
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = typeof window !== undefined ? sessionStorage.getItem('theme') : null;
    if (storedTheme !== null) {
      setTheme(storedTheme === 'true');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    typeof window !== undefined ? sessionStorage.setItem('theme', JSON.stringify(newTheme)) : null;
    typeof window !== undefined ? window.location.reload() : null;
  };

  useEffect(() => {
    setIsMounted(true);
  }, [status]);

  if (!isMounted) return null;

  const AuthButtonRender = () => {
    if (status === 'authenticated') {
      return (
        <>
          {width! > 765 && (
            <div className="px-[10px]">
              <TextField.Root
                type="text"
                name="search"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    router.push(`/search/${searchKeyword}`);
                  }
                }}
              >
                <TextField.Slot side="right">
                  <MagnifyingGlassIcon />
                </TextField.Slot>
              </TextField.Root>
            </div>
          )}

          <Button variant="solid" style={{ cursor: "pointer" }} onClick={() => router.push('/dashboard')}>
            Code
          </Button>

          <Button
            onClick={() => {
              signOut();
              router.push("/sign-in");
            }}
            variant={"solid"}
            style={{ cursor: "pointer" }}
          >
            <p>Sign Out</p>
          </Button>

          <Button
            style={{ cursor: "pointer" }}
            onClick={() => router.push(`/profile/${session.user?.email}`)}
          >
            <PersonIcon />
          </Button>
        </>
      );
    } else if (status === 'unauthenticated') {
      return (
        <>
          <Button onClick={() => router.push('/sign-in')} variant={'solid'} style={{ cursor: "pointer" }}>
            <p>Login</p>
          </Button>
          <Button onClick={() => router.push('/sign-up')} variant={'solid'} style={{ cursor: "pointer" }}>
            <p>Sign Up</p>
          </Button>
        </>
      );
    }
  };

  return (
    <div className={`${rubik.className} flex items-center justify-between sm:px-[30px] px-[15px] pt-[20px] pb-[15px]`}>
      <div
        className="cursor-pointer font-black leading-tight flex flex-row items-center justify-evenly"
        onClick={() => router.push("/")}
      >
        <svg
          className="w-auto h-6 fill-current"
          viewBox="0 0 194 116"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fillRule="evenodd">
            <path d="M96.869 0L30 116h104l-9.88-17.134H59.64l47.109-81.736zM0 116h19.831L77 17.135 67.088 0z" />
            <path d="M87 68.732l9.926 17.143 29.893-51.59L174.15 116H194L126.817 0z" />
          </g>
        </svg>

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
            onChange={(e) => setSearchKeyword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                router.push(`/search/${searchKeyword}`);
              }
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
            <AuthButtonRender />
            <Flex className="flex items-center justify-center hover:opacity-[50%] cursor-pointer">
              <Button variant="soft" radius="full" onClick={toggleTheme}>
                {theme ? <DynamicMoon size={"20px"} /> : <DynamicSun size={"20px"} />}
              </Button>
            </Flex>
          </>
        ) : (
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <DotsHorizontalIcon width={"20px"} />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="p-[10px] gap-[10px]">
              <div className="flex gap-[10px] flex-col">
                <AuthButtonRender />
              </div>
              {status === "authenticated" && (
                <div className="flex items-center justify-center pt-[15px]">
                  {theme ? <DynamicMoon size={"20px"} onClick={toggleTheme} /> : <DynamicSun size={"20px"} onClick={toggleTheme} />}
                </div>
              )}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        )}
      </div>
    </div>
  );
};

export default Navbar;
