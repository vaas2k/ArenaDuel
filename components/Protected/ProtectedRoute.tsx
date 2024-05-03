"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { jellyTriangle } from "ldrs";

const ProtectedRoute = ({ children }: any) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  jellyTriangle.register();

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

