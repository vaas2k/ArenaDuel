import { ChatBubbleIcon, FaceIcon, PersonIcon, SpeakerOffIcon } from '@radix-ui/react-icons'
import { Badge, Button } from '@radix-ui/themes';
import { SunIcon, ImageIcon } from 'lucide-react'
import React from 'react'

const OptionBar = () => {
  return (
    <div className="flex items-center justify-between border  dark:bg-neutral-900 bg-white rounded-lg w-[100%] h-[40px] p-[10px]">
      <div className="flex items-center justify-center gap-[20px]">
        <img src="./client.png" className="w-[30px] h-[30px] rounded-full" />
        <Badge>tourist &nbsp; (280)</Badge>
      </div>

      <div className="flex items-center justify-center gap-[20px]">
        <Button variant='ghost' color='ruby'><ChatBubbleIcon /></Button>
        <Button variant='ghost' color='ruby'><PersonIcon /></Button>
        <Button variant='ghost' color='ruby'><SpeakerOffIcon /></Button>
      </div>

      <div className="flex items-center justify-center gap-[20px]">
        <Badge>erichto &nbsp; (280)</Badge>
        <img src="./client.png" className="w-[30px] h-[30px] rounded-full" />
      </div>
    </div>
  );
}

export default OptionBar