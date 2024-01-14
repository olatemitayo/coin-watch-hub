import { Flex, Title } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import { BsEye } from 'react-icons/bs'

export  function Navbar() {
    const NavItems = [
        {
          id: 1,
          title: 'Market',
          link: '/'
        }
        ,
        {
          id: '2',
          title: 'Trending',
          link: '/trending'
        }
       ]
      
  return (
    <Flex className='border-b border-b-[#DBDBDB] py-4' >
        <Flex
          justify="space-between"
          align="center"
          w="100%"
          px='clamp(12px,4vw,48px)'
        >
          <Flex align="center" >
            <Title className='text-[clamp(20px,2vw,34px)]' c="#263238">Coin</Title>
            <BsEye size='clamp(24px,4vw,48px)' color="#263238" />
          </Flex>
         <Flex gap={20}>
          {NavItems?.map((item) => (
            <Link className="hover:text-[#0667d0] text-[#212326] clg:text-[14px]" href={item?.link}>{item?.title}</Link>
          ))}
         </Flex>
        </Flex>
      </Flex>
  )
}
