import { Flex, Text, Title } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsEye } from "react-icons/bs";

export function Navbar() {
  const router = useRouter();
  const NavItems = [
    {
      id: 1,
      title: "Market",
      link: "/",
    },
    {
      id: "2",
      title: "Trending",
      link: "/trending",
    },
  ];

  return (
    <Flex className="border-b border-b-[#DBDBDB] py-4 fixed w-full z-10 backdrop-blur-md bg-white/50 mb-14">
      <Flex
        justify="space-between"
        align="center"
        w="100%"
        px="clamp(12px,4vw,48px)"
      >
        <Flex align="center">
          <Title className="text-[clamp(20px,2vw,34px)]" c="#263238">
            Coin
          </Title>
          <BsEye size="clamp(24px,4vw,48px)" color="#263238" />
        </Flex>
        <Flex gap={20}>
          {NavItems?.map((item) => (
            <Link
              key={item?.id}
              className={`${
                router.pathname === item.link ||
                router.pathname === `${item.link}`
                  ? "hover:text-red-300 text-[#212326] clg:text-[14px] border-b border-b-red-300  py-1 font-semibold "
                  : "hover:text-red-300 text-[#212326] clg:text-[14px] py-1"
              }  `}
              href={item?.link}
            >
            {item?.title}
            </Link>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
