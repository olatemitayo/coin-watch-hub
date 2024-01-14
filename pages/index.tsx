import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Box,
  Button,
  Flex,
  Input,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { BsEye, BsEyeFill, BsEyeSlash, BsEyeglasses } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { TbEyeStar } from "react-icons/tb";
import { GiEyeShield, GiHunterEyes } from "react-icons/gi";
import { ImEyePlus } from "react-icons/im";
import { BiGlasses, BiSearch } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";

import { Trending } from "@/components/trending";

import { Navbar } from "@/components";
import Hero from "@/components/trending-hero";

export default function Home() {
  // get trending list
  const { data } = useQuery({
    queryFn: () => builder.use().asset.trending(),
    queryKey: builder.asset.trending.get(),
    select: ({ data }) => data?.coins,
  });

  console.log({ data });
  return (
    <Stack className="max-w-[1440px] m-auto gap-[clamp(20px,5vw,60px)] pb-5" >
      {/* Navbar  */}
      <Navbar />
      {/* <Hero /> */}
      <Trending />
    </Stack>
  );
}
