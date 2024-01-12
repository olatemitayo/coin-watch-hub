import { Flex, Title } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import { BsEye } from 'react-icons/bs'

export  function Navbar() {
    const NavItems = [
        {
          id: 1,
          title: 'Market',
          link: '/market'
        }
        ,
        {
          id: '2',
          title: 'Trending',
          link: '/trending'
        }
       ]
      
  return (
    <Flex >
        <Flex
          justify="space-between"
          align="center"
          w="100%"
          px={50}
        >
          <Flex align="center" >
            <Title c="#0667d0">Coin</Title>
            <BsEye size={80} color="#0667d0" />
          </Flex>
         <Flex gap={20}>
          {NavItems?.map((item) => (
            <Link className="hover:text-[#0667d0] text-[#0A0B0D]" href={item?.link}>{item?.title}</Link>
          ))}
         </Flex>
        </Flex>
      </Flex>
  )
}
