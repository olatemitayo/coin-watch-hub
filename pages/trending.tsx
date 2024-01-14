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

import { HeroLayout, Navbar } from "@/components";

import TrendingHero from "@/components/trending-hero";

export default function TrendingPage() {
  // get trending list
  const { data } = useQuery({
    queryFn: () => builder.use().asset.trending(),
    queryKey: builder.asset.trending.get(),
    select: ({ data }) => data?.coins,
  });

  console.log({ data });
  return (
    <Stack>
      {/* Navbar  */}
      <Navbar />
      <HeroLayout
        imgLeft="/charthero.svg"
        imgRight="/coinbag.svg"
        title=" Trending Tokens"
        text="  Explore the dynamic world of cryptocurrencies with our curated list of
        trending tokens. Stay informed about the latest and most talked-about
        digital assets, empowering you to make informed decisions in the
        fast-evolving crypto landscape."
      />
      <Trending />
    </Stack>
  );
}
