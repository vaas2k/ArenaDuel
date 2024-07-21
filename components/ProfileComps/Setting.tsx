"use client";
import { Label } from "@radix-ui/react-label";
import { Badge, Button, Select, TextField } from "@radix-ui/themes";
import axios from "axios";
import { X } from "lucide-react";
import { Rubik } from "next/font/google";
import React, { useState } from "react";
import { Loader2 } from "../shared/Loader";

const rubik = Rubik({ subsets: ["latin"] });



const Setting = ({ user , open , handleSettings }: any) => {

  const [load  , setLoad ] = useState<boolean>(false);
  const [error , setError ] = useState<string>('');
  const [skills, setSkills] = useState<string[]>(user.skills);
  const [skill, setSkill] = useState<string>("");
  const [ info  , setInfo] = useState<any>({
    name : null,
    username : null,
    role :null,
    level: null,
    address : null,
    email : user.email
  })

  console.log(info);

  const addSkill = (skill: string) => {
    if(!skills){
      const newskills = [];
      newskills.push(skill);
      setSkills(newskills);
      return;
    }
    setSkills((oldSkills: string[]) => {
      return [...oldSkills, skill];
    });
  };
  const removeSkill = (skill: string) => {
    setSkills((oldSkills: string[]) => {
      return oldSkills.filter((s: string) => s !== skill);
    });
  };
  
  async function handleChangeInSettings() {
    setLoad(true);
    setError('')
    
    let data ;
    if(user.skills){
      data = {
        ...info,
        skills: skills.length !== user.skills.length ? skills : null,
      };
    }else{
      data = {
        ...info,
        skills: skills,
      };
    }
    console.log(data);
    
    try{

      const req = await axios.post('/api/profile/info',data);

      if(req.data.status === 200) {
        setLoad(false);
        typeof window !== undefined ? window.location.reload() : null;
      }
      else{ 
        console.log(req.data);
        if(req.data.msg === 'USERNAME_TAKEN') {
          setError('USERNAME TAKEN ALREADY')
        }
        setLoad(false);
      }
    }catch(error){
      setLoad(false);
      console.log(error);
    }

  }

  return (
    <div
      className={` ${rubik.className} flex items-center justify-center p-[20px]`}
    >
      <div className=" rounded-lg w-[500px] h-full border border-gray">
        <div className="flex items-center justify-end p-[20px]">
          <X
            className="cursor-pointer"
            onClick={() => handleSettings(open)}
            size={"20px"}
          />
        </div>

        <div className="p-[20px]">
          <h1 className="text-lg font-bold">Edit Profile</h1>
          <h2 className="text-sm">
            Make changes to your profile here. Click save when you&apos;re done.
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <div className="flex flex-col p-[15px]">
            <Label htmlFor="name" className="py-[10px]">
              Name
            </Label>
            <TextField.Root
              id="name"
              radius="large"
              className="w-[300px]"
              type="text"
              placeholder={user.name}
              value={info.name}
              onChange={(e) => {
                setInfo({ ...info, name: e.target.value });
              }}
            ></TextField.Root>
          </div>

          <div className="flex flex-col p-[15px]">
            <Label htmlFor="username" className="py-[10px]">
              Username
            </Label>
            <TextField.Root
              id="username"
              radius="large"
              className="w-[300px]"
              type="text"
              placeholder={user.username}
              value={info.username}
              onChange={(e) => {
                setInfo({ ...info, username: e.target.value });
              }}
            ></TextField.Root>
          </div>

          <div className="flex flex-col p-[15px]">
            <Label htmlFor="email" className="py-[10px]">
              Email
            </Label>
            <TextField.Root
              disabled
              id="email"
              radius="large"
              className="w-[300px]"
              type="email"
              placeholder="Email"
              value={info.email}
              onChange={(e) => {
                setInfo({ ...info, email: e.target.value });
              }}
            ></TextField.Root>
          </div>

          <div className="flex flex-col p-[15px]">
            <Label htmlFor="role" className="py-[10px]">
              Role
            </Label>
            <TextField.Root
              id="role"
              radius="large"
              className="w-[300px]"
              type="text"
              placeholder={user.role}
              value={info.role}
              onChange={(e) => {
                setInfo({ ...info, role: e.target.value });
              }}
            ></TextField.Root>
          </div>

          <div className="flex flex-col p-[15px]">
            <Label htmlFor="address" className="py-[10px]">
              Address
            </Label>
            <TextField.Root
              id="address"
              radius="large"
              className="w-[300px]"
              type="text"
              placeholder={user.address ? user.address : "city , country"}
              value={info.address}
              onChange={(e) => {
                setInfo({ ...info, address: e.target.value });
              }}
            ></TextField.Root>
          </div>

            <div className="flex flex-col p-[15px]">
              <Label htmlFor="skill" className="py-[10px]">
                Skills
              </Label>
              <TextField.Root
                id="skill"
                radius="large"
                className="w-[300px]"
                type="text"
                placeholder="skill"
                onChange={(e) => {
                  setSkill(e.target.value);
                }}
              >
                <TextField.Slot side="right">
                  <Button
                    onClick={() => {
                      skill && addSkill(skill);
                    }}
                    variant="ghost"
                  >
                    add
                  </Button>
                </TextField.Slot>
              </TextField.Root>
            </div>

          <div className="flex items-center justify-center flex-row flex-wrap gap-[10px] px-[20px] py-[20px]">
            {skills && skills.map((skill: string) => {
              return (
                <>
                  <div>
                    <Badge
                      className="gap-[5px] cursor-pointer"
                      onClick={() => removeSkill(skill)}
                    >
                      {skill} <X size={"15px"} />
                    </Badge>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-evenly p-[30px]">
          <Label htmlFor="level">Level </Label>
              <Select.Root size="2" defaultValue={user.level} onValueChange={(value)=>setInfo({...info,level : value})}>
                <Select.Trigger radius="large" />
                <Select.Content id="level">
                  <Select.Item value="Junior">Junior</Select.Item>
                  <Select.Item value="Intermediate" >Intermediate</Select.Item>
                  <Select.Item value="Senior" >Senior</Select.Item>
                </Select.Content>
              </Select.Root>
            </div>


        <div className="flex flex-row items-center justify-center gap-[30px] py-[15px]">
          <Button loading={load} onClick={handleChangeInSettings}>
            Save
          </Button>
          <Button onClick={() => handleSettings(open)}>Discard</Button>
        </div>
        <div className="flex items-center justify-center p-[20px]">
          {error && <Badge color="ruby">{error}</Badge>}
        </div>
      </div>
    </div>
  );
};

export default Setting;
