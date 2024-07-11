'use client'
import React, { useState } from 'react'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3dCard'
import Image from 'next/image'
import { Button, Card, Flex } from '@radix-ui/themes'

const Card1v1 = ({handleMode, rating} : any) => {

  const [ option, setOption] = useState(false);

  return (
    <div>
      <CardContainer className="inter-var w-[400px] h-[300px]">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            1v1
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Go one on one with random.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/images/cardimages/1v1.jpeg"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex items-center justify-center mt-20">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              onClick={() => {
                setOption(true);
              }}
            >
              Start
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      {option && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Card className='max-w-[450px]'>
             <h1 className='text-center'>Do want to play ranked ?</h1>
              <Flex gap="3" mt="4" justify="end" p={'3'}>
                <Button variant="soft" color="gray" onClick={() => {setOption(false);}}>
                  cancel
                </Button>
                <Button
                  variant="soft"
                  color="blue"
                  onClick={() => {setOption(false);handleMode({ type: "1v1", rating: 0 })}}
                >
                  No
                </Button>
                <Button
                  variant="solid"
                  color="red"
                  onClick={() =>{setOption(false); handleMode({ type: "1v1", rating: rating })}}
                >
                  Yes
                </Button>
              </Flex>
          </Card>
        </div>
      )}
    </div>
  );
}

export default Card1v1