"use client";
import { Label } from "@radix-ui/react-label";
import { Badge, Button, TextField } from "@radix-ui/themes";
import { X } from "lucide-react";
import { Rubik } from "next/font/google";
import React, { useState } from "react";
const rubik = Rubik({ subsets: ["latin"] });

const Setting = ({ user , open , handleSettings }: any) => {
  const [skills, setSkills] = useState<any>(user.skills);
  const [skill, setSkill] = useState<string>("");

  const addSkill = (skill: string) => {
    setSkills((oldSkills: string[]) => {
      // Use spread operator to create a new array with the new skill appended
      return [...oldSkills, skill];
    });
  };

  const removeSkill = (skill: string) => {
    setSkills((oldSkills: string[]) => {
      // Use filter to remove the skill from the array
      return oldSkills.filter((s: string) => s !== skill);
    });
  };

  return (
    <div className={` ${rubik.className} flex items-center justify-center p-[20px]`}>
      <div className=" rounded-lg w-[500px] h-full border border-gray">
        <div className="flex items-center justify-end p-[20px]"><X className="cursor-pointer" onClick={()=>handleSettings(open)} size={'20px'} /></div>
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
              placeholder="Name"
              defaultValue={user.name}
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
              placeholder="Username"
              defaultValue={user.username}
            ></TextField.Root>
          </div>

          <div className="flex flex-col p-[15px]">
            <Label htmlFor="email" className="py-[10px]">
              Email
            </Label>
            <TextField.Root
              id="email"
              radius="large"
              className="w-[300px]"
              type="email"
              placeholder="Email"
              defaultValue={user.email}
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
              placeholder="Role"
              defaultValue={user.role}
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
              placeholder="Address"
              defaultValue={'Address'}
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
            {skills.map((skill: string) => {
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


        <div className="flex flex-row items-center justify-center gap-[30px] py-[15px]">
            <Button>Save</Button>
            <Button onClick={()=>handleSettings(open)}>Discard</Button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
