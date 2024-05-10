"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Loader from "../shared/Loader";

const ProtectedRoute = ({ children }: any) => {
  const [ isMounted , setisMounted ] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(()=>{
    setisMounted(true);
  },[session])

  if (status === "loading") {
    return (
      <Loader />
    );
  }

  if (!session) {
    router.push('/sign-in')
    return null;
  }

  return children;
};

export default ProtectedRoute;

