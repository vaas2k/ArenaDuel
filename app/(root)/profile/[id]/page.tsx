'use client'
import Banner from "@/components/ProfileComps/Banner";
import Info from "@/components/ProfileComps/Info";
import { useEffect, useState } from "react";
import axios from 'axios'
import Loader from "@/components/shared/Loader";

const Profile = ( {params} : any ) => {    

    
    const [user , setUser ] = useState<any>();
    console.log(user);
    useEffect(()=>{
        async function getUserData() {
            const data = {
                email : params.id
            }
            const req = await axios.get(`/api/profile/${data.email}`)
            if(req.data.status === 200) {
                setUser(req.data.data);
            }
            else{
                console.log(req.data.msg);
            }
        }
        getUserData();
    },[params])

    if(!user){
        return (<Loader />)
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="sm:w-[80%] w-[100%] sm:h-[650px] h-screen border-x rounded-lg ">
                 <Banner image={ user.image } />
                 <Info name={ user.name} username={user.username} />
            </div>
        </div>
    )

}
export default Profile;