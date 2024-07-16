"use client";
import { Button, DropdownMenu, Flex, TextField } from "@radix-ui/themes";
import {
  DotsHorizontalIcon,
  MagnifyingGlassIcon,
  PersonIcon,
  BellIcon,
} from "@radix-ui/react-icons";
import { Rubik } from "next/font/google";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useWidth } from "@/hooks/useWidth";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Link from "next/link";
import { LogOutIcon } from "lucide-react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setDark, setLight } from "@/storeRedux/reducers/themeReducer";

const rubik = Rubik({ subsets: ["latin"] });

const DynamicMoon = dynamic(  () => import("lucide-react").then((mod) => mod.Moon),
  {
    ssr: false,
  }
);
const DynamicSun = dynamic( () => import("lucide-react").then((mod) => mod.Sun),
  {
    ssr: false,
  }
);
const Loader2 = dynamic( () => import("./Loader"),
  {
    ssr: false,
  }
);


const Navbar = () => {

  const dispatch = useDispatch();
  const width = useWidth();
  const router = useRouter();
  const { data: session, status } = useSession();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const theme = useSelector((state : any) => { return state.themeReducer.theme});

  const navButtons = 'cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'

  useEffect(() => {
    setIsMounted(true);
  }, [status]);

  if (!isMounted) return <Loader2 />;

  const handleSearchChange = (e: any) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearchKeyDown = (e: any) => {
    if (e.key === "Enter") {
      router.push(`/search/${searchKeyword}`);
    }
  };

  // decide which buttons to render
  const AuthButtonRender = () => {
    if (status === "authenticated") {
      return (
        <>
          <Link href={"/dashboard"}>
          <h1 className={`${navButtons}`} >Dashboard</h1>
          </Link>

          {/**@ts-ignore */}
          <Link href={`/profile/${session.user?.id}`}>
            {session.user?.image ? (
              <img
                src={session.user?.image!}
                alt=""
                className=" flex w-[31px] h-[31px] rounded-full object-cover "
              />
            ) : (
              <PersonIcon />
            )}
          </Link>

          <Link href={''}>
          <h1 className={`${navButtons}`} 
          onClick={() => { signOut(); router.push('/sign-in')}}
          ><LogOutIcon size={'18px'}/></h1>
          </Link>
        </>
      )
    } else if (status === "unauthenticated") {
      return (
        <>
          <Link href={"/sign-in"}>
            <Button variant={"solid"} style={{ cursor: "pointer" }}>
              <p>Login</p>
            </Button>
          </Link>

          <Link href={"/sign-up"}>
            <Button variant={"ghost"} style={{ cursor: "pointer" }}>
              <p>Sign Up</p>
            </Button>
          </Link>
        </>
      );
    }
  };

  return (
    <div
      className={`${rubik.className} flex items-center justify-between sm:px-[30px] px-[15px] pt-[20px] pb-[15px] bg-transparent`}
    >
      
      <Link href={"/"}>
        <Button
          variant="ghost"
          className="cursor-pointer flex flex-row items-center justify-evenly"
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
            <h1 className={`${rubik.className} text-lg ml-[10px]`}>
              <b style={{ color: theme == 'dark' ? "white" : "black" }}>Code</b>
              <b>Arena</b>
            </h1>
          )}
        </Button>
      </Link>

      {width! < 765 && (
        <div className="px-[10px] bg-transparent">
          <TextField.Root
            type="text"
            name="search"
            value={searchKeyword}
            onChange={(e) => {
              setSearchKeyword(e.target.value);
            }}
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

      <div className="flex items-center gap-[30px] bg-transparent">
        {width! > 765 ? (
          <>
            {width! > 765 && session?.user?.name && (
              <div className="px-[10px]">
                <TextField.Root
                  type="text"
                  name="search"
                  value={searchKeyword}
                  onChange={handleSearchChange}
                  onKeyDown={handleSearchKeyDown}
                >
                  <TextField.Slot side="right">
                    <MagnifyingGlassIcon />
                  </TextField.Slot>
                </TextField.Root>
              </div>
            )}
            <AuthButtonRender />
            <Flex className="flex items-center justify-center hover:opacity-[50%] cursor-pointer">
              <Button variant="soft" radius="full" >
                {theme == 'light' ? (
                  <DynamicMoon size={"20px"} onClick={() => { dispatch(setDark())}} />
                ) : (
                  <DynamicSun size={"20px"} onClick={() => { dispatch(setLight())}} />
                )}
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
                  {theme ? (
                    <DynamicMoon size={"20px"} onClick={() => { dispatch(setDark())}} />
                  ) : (
                    <DynamicSun size={"20px"}onClick={() => { dispatch(setLight())}} />
                  )}
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
