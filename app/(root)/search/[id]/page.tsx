'use client'
import RoomCards from '@/components/SearchComps/RoomCards';
import UserCards from '@/components/SearchComps/UserCards';
import { Tabs } from '@radix-ui/themes';
import React, { useState } from 'react'

const Search = ({params} : any)  => {
    const param = decodeURIComponent(params.id);

    const[ userCards , setUserCards ] = useState(true);
    const[ roomCards , setRoomCards ] = useState(false); 

    const toggle1 = () => { setUserCards(true); setRoomCards(false)}
    const toggle2 = () => { setUserCards(false); setRoomCards(true)}

    return (
    <div className='flex flex-col '>
        <div className='sm:px-[150px] px-[20px]'>
        <Tabs.Root defaultValue="user">
    <Tabs.List color="indigo">
      {/*<Tabs.Trigger value="room" onClick={toggle2}>Rooms</Tabs.Trigger>*/}
      <Tabs.Trigger value="user" onClick={toggle1}>Users</Tabs.Trigger>
    </Tabs.List>
  </Tabs.Root>
        </div>

  {userCards && <UserCards param={param}/>}
  {/* roomCards && <RoomCards param={param}/> */}

    </div>
  )
}

export default Search;