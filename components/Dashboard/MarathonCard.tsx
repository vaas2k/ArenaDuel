'use client'
import { Badge, Card } from '@radix-ui/themes';
import { TrophyIcon, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Rubik } from "next/font/google";
import { getLeaderBoard } from '@/BACKEND_CALLs/apis';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
const rubik = Rubik({ subsets: ["latin"] });

const MarathonCard = () => {

    const [ currentUser, setCurrentUser] = useState<any>({});
    const [ Allranking , setAllRankings ] = useState<any>([]);
    const { data : session } = useSession();

    useEffect(()=>{
        async function getRankings() {
            try{

            // get user rankings + current user too;
            const req = await getLeaderBoard();
            if(req.data) {
                console.log(req.data);
                setAllRankings(req.data);
            }

            }catch(error) {
                console.log(error);
            }
        }
        getRankings();
    },[]);

    return (
      <div className={`${rubik.className}`}>
        <Card variant={'surface'} className="w-[700px] h-[640px]">
        
          <div className="flex items-center justify-between px-[30px] py-[20px]">
            <div>
              <h1 className={`${rubik.className} text-[19px] font-bold`}>
                Leaderboard
              </h1>
            </div>
            <div>
              <Badge size={"3"} color={"amber"}>
                <TrophyIcon size={"18px"} /> <h1>Top Coders</h1>
              </Badge>
            </div>
          </div>

          <div className="p-[20px]">
            <table className="min-w-full rounded-lg overflow-auto">
              <thead>
                <tr className="dark:bg-gray-800 border rounded-t-lg">
                  <th className="py-3 px-6">Rank</th>
                  <th className="py-3 px-6">User</th>
                  <th className="py-3 px-6">Rating</th>
                  <th className="py-3 px-6">Solved</th>
                  <th className="py-3 px-6">Avg-Time</th>
                </tr>
              </thead>
              <tbody>
                {/* Example row */}
                {Allranking &&
                  Allranking.map((val: any, index: any) => {
                    return (
                      <tr className=" border-t last:rounded-b-lg" key={index}>
                        <td className="py-3 px-6 text-center">{index + 1}</td>
                        <td className="py-3 px-6 text-center flex items-center justify-center gap-[15px]">
                          <img
                            src={val.image}
                            className="h-[40px] w-[40px] object-cover rounded-full"
                            alt=""
                          />
                          {val.username}
                        </td>
                        <td className="py-3 px-6 text-center">{val.rating}</td>
                        <td className="py-3 px-6 text-center">
                          {val.problemsSolved}
                        </td>
                        <td className="py-3 px-6 text-center">...</td>
                      </tr>
                    );
                  })}
                {/* Add more rows as needed */}
              </tbody>
              {/** Current User rating */}
              <tbody>
                {Allranking && Allranking.map((val : any , ind : any) => {
                    return (
                      //@ts-ignore
                      val.username == session?.user.username && (
                        <tr className="border rounded-lg mt-[20px]" key={ind}>
                          <td className="py-3 px-6 text-center">
                            {ind + 1}
                          </td>
                          <td className="py-3 px-6 text-center flex items-center justify-center gap-[15px]">
                            <img
                              src={val.image}
                              className="h-[40px] w-[40px] object-cover rounded-full"
                              alt=""
                            />
                            {val.username}
                          </td>
                          <td className="py-3 px-6 text-center">
                            {val.rating}
                          </td>
                          <td className="py-3 px-6 text-center">
                            {val.problemsSolved}
                          </td>
                          <td className="py-3 px-6 text-center">...</td>
                        </tr>
                      )
                    );
                  })}
              </tbody>
            </table>
          </div>

          <div className='flex items-center justify-center m-[10px]'>
            <Link href={'/dashboard'}>
            <Badge style={{cursor : 'pointer'}} color={'gray'} size={'3'} ><h1 className='p-[10px]'>Go Home</h1></Badge>
            </Link>
          </div>

        </Card>
      </div>
    );
};

export default MarathonCard;
