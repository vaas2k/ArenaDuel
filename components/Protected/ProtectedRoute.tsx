"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { jellyTriangle } from "ldrs";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }: any) => {
  const [ isMounted , setisMounted ] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  jellyTriangle.register();

  useEffect(()=>{
    setisMounted(true);
  },[session])

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <l-jelly-triangle
          size="30"
          speed="1.4"
          color={'whitesmoke'}
        ></l-jelly-triangle>
      </div>
    );
  }

  if (!session) {
    router.push('/sign-in')
    return null;
  }

  return children;
};

export default ProtectedRoute;

