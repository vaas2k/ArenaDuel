import { Card, Button, Badge } from "@radix-ui/themes";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loader2 } from "../shared/Loader";
import { useRouter } from "next/navigation";
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

const UserCards = ({ param }: any) => {
  const [users, setUsers] = useState<any>([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();


  useEffect(() => {
    getUsers();
  }, [param]);
  // get users on clicking load more users buttons
  async function getUsers() {
    setLoad(true);
    try {
      let data;
      if (users) {
        data = {
          param: param,
          len: users.length,
        };
      } else {
        data = {
          param: param,
          len: 0,
        };
      }
      const req = await axios.post(`/api/search/`, data);
      if (req.data.status === 200) {
        console.log(req.data);
        setUsers(req.data.users);
        setLoad(false);
      } else {
        setLoad(false);
        setError("Some Error");
      }
    } catch (error) {
      console.log(error);
    }
  }

  

  return (
    <>
      <div className={` ${rubik.className} py-[20px] flex flex-row items-center sm:px-[140px] px-[10px]`}>
        {" "}
        <h1 className=" text-lg font-bold ">Search Results : &nbsp; </h1>{" "}
        <h1>{param}</h1>
      </div>
      {load ? (
        <div className="flex items-center justify-center">
          <Loader2 />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center px-[30px] pb-[30px]">
          {
            users.length > 0 ? 
            (<div className="flex items-center justity-center flex-col w-[100%]">
            <div className=" flex flex-row justify-center flex-wrap gap-[80px] sm:w-[85%] w-[100%] sm:h-[660px] overflow-scroll h-screen  px-[30px] pt-[30px] rounded-lg">
              {users.map((user: any,index:number) => {
                return (
                  <div
                  key={index}
                  onClick={() => router.push(`/profile/${user.email}`)} 
                  className="w-[290px] h-[260px] flex flex-col p-[20px] gap-[10px] items-center justify-center border border-gray rounded-lg dark:bg-gray-900 bg-white cursor-pointer">
                    <img
                      src={user.image}
                      alt="user"
                      className=" w-[120px] h-[120px] rounded-full object-cover "
                    />
                    <div className="flex flex-col items-center flex-wrap gap-[5px]">
                      <h1>{user.name}</h1>
                      <h1 className="opacity-[40%] text-sm">
                        {user.UserInfo[0] ? user.UserInfo[0].role : ""}
                      </h1>
                    </div>
                    <div className="flex gap-[10px]">
                      {user.UserInfo[0] &&
                        user.UserInfo[0].skills
                          .slice(0, 4)
                          .map((skill: string, index: number) => {
                            return <Badge key={index}>{skill}</Badge>;
                          })}
                    </div>
                  </div>
                );
              })}
            </div>
            {users.length > 6 && <Button variant="outline" onClick={getUsers}>Load More</Button>}
          </div>)
          :
          (<div className="">No result found for this query </div>)
          }
        </div>
      )}
    </>
  );
};

export default UserCards;
