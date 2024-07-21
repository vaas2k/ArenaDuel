import { Button } from "@radix-ui/themes";
import axios from "axios";
import React, { useState } from "react";
import {Loader2} from "../shared/Loader";
import { revalidatePath } from "next/cache";

const Banner = ({ image , email , background_image }: any) => {


  const [background, setBackground] = useState<string | ArrayBuffer | null>("");
  const [profilePic, setProfile] = useState<string | ArrayBuffer | null>("");
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
      profilePic : profilePic,
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
            className="w-[100%] sm:h-[220px] h-[180px] object-cover rounded-t-lg hover:drop-shadow-xl cursor-pointer"
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
        <label htmlFor="profilePic">
          <img
            alt="profilepic"
            src={profilePic ? profilePic : image}
            className="relative cursor-pointer object-cover rounded-full border-white w-[130px] 
            h-[130px] mt-[-60px] ml-[20px] hover:drop-shadow-xl transition-all ease-linear"
          />
        </label>

        <input
          type="file"
          name="photo"
          id="profilePic"
          style={{ display: "none" }}
          accept="image/jpg, image/jpeg, image/png"
          onChange={handleProfile}
          />
      </div>

      {profilePic || background ? (
        <div className="flex flex-row items-center justify-end gap-[20px] pr-[20px]">
          <Button loading={load} onClick={uploadimage}>Apply</Button>
          <Button variant="outline" onClick={ () => profilePic ? setProfile('') : setBackground('')}>Discard</Button>
        </div>
      ) : (
        <>{""}</>
      )}
    </>
  );
};

export default Banner;
