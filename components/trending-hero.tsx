import { Flex, Stack, Text, Title } from "@mantine/core";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";

export default function TrendingHero() {
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
  return (
    <Flex
      w="100%"
      justify="space-between"
      align="center"
      className="max-w-[1440px] m-auto clg:flex-col !mt-[clamp(100px,9vw,130px)]"
      px="clamp(12px,4vw,48px)"
    >
      <motion.img
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2 }}
        className="w-[clamp(100px,10vw,160px)]"
        src="/charthero.svg"
        alt=""
      />
      <motion.div
        ref={ref}
        initial={{ x: 0, opacity: 0 }}
        animate={controls}
        className="flex flex-col justify-center text-center max-w-[700px] gap-[10px]"
      >
        <Title className="text-[clamp(40px,5vw,80px)] text-[#212326]">
          Trending Tokens
        </Title>
        <Text className="text-[#797979] text-[clamp(14px,1vw,18px)] text-center">
          Explore the dynamic world of cryptocurrencies with our curated list of
          trending tokens. Stay informed about the latest and most talked-about
          digital assets, empowering you to make informed decisions in the
          fast-evolving crypto landscape.
        </Text>
      </motion.div>
      <motion.img
        initial={{ x: 2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2 }}
        className="w-[clamp(220px,20vw,320px)]"
        src="/coinbag.svg"
        alt=""
      />
    </Flex>
  );
}
