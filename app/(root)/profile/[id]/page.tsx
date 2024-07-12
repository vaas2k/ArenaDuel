"use client";
import Banner from "@/components/ProfileComps/Banner";
import Info from "@/components/ProfileComps/Info";
import { useEffect, useState } from "react";
import axios from "axios";

import dynamic from "next/dynamic";
const Loader = dynamic( () => import("@/components/shared/Loader"),
  {
    ssr: false,
  }
);
import Settings from "@/components/ProfileComps/Setting";
const Profile = ({ params }: any) => {
  const [user, setUser] = useState<any>();

  const [open, setOpen] = useState(false);
  function hanldeSettings(open: boolean) {
    setOpen(!open);
  }
  useEffect(() => {
    async function getUserData() {
      const req = await axios.get(`/api/profile/${params.id}`);
      if (req.data.status === 200) {
        setUser(req.data.data);
      } else {
        console.log(req.data.msg);
      }
    }
    getUserData(); // user data for the current page
  }, [params]);

  if (!user) {
    return <Loader />;
  }

  return (
    <>
      {!open ? (
        <div className="flex items-center justify-center h-screen">
          <div className="sm:w-[80%] w-[100%] sm:h-[660px] overflow-auto h-screen border rounded-lg ">
            <Banner
              image={user.image}
              email={user.email}
              background_image={user.background_image}
            />
            <Info user={user} open={open} handleSettings={hanldeSettings} email={user.email} />
          </div>
        </div>
      ) : (
        <Settings user={user} handleSettings={hanldeSettings} open={open} />
      )}
    </>
  );
};
export default Profile;
