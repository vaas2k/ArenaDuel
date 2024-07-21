import { Badge, Card } from '@radix-ui/themes'
import React, { useEffect, useState } from 'react'
import { TextGenerateEffect } from '../ui/TextGeneration'
import axios from 'axios';

const Stats = ( {userid , username} : any ) => {

    const [ stats , setStats ] = useState<any>();

    useEffect(() => {
        (async function getStats () {

            try{
                const req = await axios.get(`/api/profile/stats/${userid+username}`);
                if(req.status == 200) {
                    setStats(req.data.data);
                }

            }catch(error) {
                console.log(error);
            }
        })();
    },[]);

    return (
        <div className='flex items-center justify-center mb-[50px] flex-col'  >
            <div className='flex items-center justify-center mb-[30px]'>
                <TextGenerateEffect words='All Time Stats' className='text-[18px]' />
            </div>

            <div className='flex items-center justify-center gap-[20px] sm:flex-row flex-col'>

                <Badge size={'3'} color={'gray'} variant={'soft'} className='w-[170px] h-[300px] flex items-center justify-center flex-col'>
                    
                    <h1 className='pt-[10px]'>Matchs Played</h1>
                    {stats && <TextGenerateEffect words={`${stats.total == 0 || stats.total == undefined ? 0 : stats.total }`} className='pt-[30px] pb-[60px]' />}
                </Badge>

                <Badge size={'3'} color={'jade'} variant={'soft'} className='w-[170px] h-[300px] flex items-center justify-center flex-col sm:mt-[40px]'>
                    <h1>Wins</h1>
                    { stats && <TextGenerateEffect words={ `${stats.wins == 0 || stats.total == undefined ? 0 : stats.wins}`} className='pt-[30px] pb-[60px]' />}
                </Badge>

                <Badge size={'3'} color={'ruby'} variant={'soft'} className='w-[170px] h-[300px] flex items-center justify-center flex-col'>
                    <h1>Losses</h1>
                    { stats && <TextGenerateEffect words={  `${stats.losses == 0 || stats.total == undefined ? 0 : stats.losses}`} className='pt-[30px] pb-[60px]' />}
                </Badge>

                <Badge size={'3'} color={'amber'} variant={'soft'} className='w-[170px] h-[300px] flex items-center justify-center sm:mt-[40px] flex-col'>
                    <h1>Draws</h1>
                    { stats && <TextGenerateEffect words={  `${stats.draw == 0 || stats.draw == undefined ? 0 : stats.draw}`} className='pt-[30px] pb-[60px]' />}
                </Badge>

            </div>
        </div>
    )
}

export default Stats