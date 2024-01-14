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

import { DataTable, HeroLayout, Navbar, ProductLoading } from "@/components";
import Hero from "@/components/trending-hero";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Home() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  // Set up the animation logic
  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1.75, ease: "easeInOut" },
      });
    } else {
      controls.start({
        x: 0,
        opacity: 0,
      });
    }
  }, [controls, inView]);
  // get trending list
  const { data: exploreData, isLoading } = useQuery({
    queryFn: () => builder.use().asset.coin_list(),
    queryKey: builder.asset.coin_list.get(),
    select: (data ) => data,
  });
  console.log({exploreData})

  return (
    <Stack className="max-w-[1440px] m-auto gap-[clamp(20px,5vw,60px)] pb-5" >
      {/* Navbar  */}
      <Navbar />
      <HeroLayout
        imgLeft="/Pattern.svg"
        imgRight="/coin.png"
        title="Explore"
        text="  Explore the dynamic world of cryptocurrencies with our curated list of
        trending tokens. Stay informed about the latest and most talked-about
        digital assets, empowering you to make informed decisions in the
        fast-evolving crypto landscape."
        
      >
        <TextInput classNames={{input: 'border !border-red-400 py-[25px] px-[18px] rounded rounded-[24px]'}} className="w-full "  placeholder="search an asset" rightSection={<BiSearch size={24} />}/>
      </HeroLayout>
      <motion.div  ref={ref}
    initial={{ x: 0, opacity: 0 }}
    animate={controls} className="px-[clamp(8px,4vw,48px)]" >
      <div className="clg:hidden"> 
        {/* {isLoading ? <ProductLoading /> : <DataTable table={table} />} */}
      </div>
      {/* <div className="hidden clg:block">
        {isLoading ? <ProductLoading /> : <DataTable table={clgtable} />}
      </div> */}
    </motion.div>
     
    </Stack>
  );
}
