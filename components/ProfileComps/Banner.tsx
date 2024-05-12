import { Button } from "@radix-ui/themes";
import axios from "axios";
import React, { useState } from "react";
import {Loader2} from "../shared/Loader";

const Banner = ({ image , email , background_image }: any) => {


  const [background, setBackground] = useState<any>("");
  const [profile, setProfile] = useState<any>("");
  const [ load , setLoad ] = useState<boolean>(false);
  const [ error , setError ] = useState<string>('')

  const handleBackground = (e: any) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackground(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  async function handleProfile(e: any) {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  
  }
  
  async function uploadimage(e: any) {
    setLoad(true);
    setError('');

    const data = {
      profile : profile,
      background : background,
      email : email,
    }

    try{

      const req = await axios.post('/api/profile/upload/',data);
      if(req.data.status == 200 || req.data.msg == 'success') {
        setLoad(false);
        typeof window !== undefined ? window.location.reload() : null;
      }
      else{
        setLoad(false);
        setError('Internal Server Error');
      }

    }catch(error){
      console.log(error);
    }

  }

  return (
    <>
      <div>
        {/** Background Image */}
        <label htmlFor="background">
          <img
            src={background ? background : (background_image ? background_image : "/back1.jpg")}
            alt="banner"
            className="w-[100%] h-[220px] object-cover rounded-t-lg hover:drop-shadow-xl cursor-pointer"
          />
        </label>
        <input
          type="file"
          name="photo"
          id="background"
          style={{ display: "none" }}
          accept="image/jpg, image/jpeg, image/png"
          onChange={handleBackground}
          />

        {/** Profile Image */}
        <label htmlFor="profile">
          <img
            alt="profilepic"
            src={profile ? profile : image}
            className="relative cursor-pointer object-cover rounded-full border-white w-[130px] 
            h-[130px] mt-[-60px] ml-[20px] hover:drop-shadow-xl transition-all ease-linear"
          />
        </label>

        <input
          type="file"
          name="photo"
          id="profile"
          style={{ display: "none" }}
          accept="image/jpg, image/jpeg, image/png"
          onChange={handleProfile}
          />
      </div>

      {profile || background ? (
        <div className="flex flex-row items-center justify-end gap-[20px] pr-[20px]">
          <Button onClick={uploadimage}>Apply</Button>
          <Button variant="outline">Discard</Button>
        </div>
      ) : (
        <>{""}</>
      )}
    {load && <div className="absolute sm:right-[200px] right-[30px] flex flex-row items-center justify-center"><Loader2 /></div>}
    </>
  );
};

export default Banner;
