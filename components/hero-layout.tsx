import { Flex, Stack, Text, Title, clsx } from "@mantine/core";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
interface IHeroLayout {
    imgLeft: string,
    imgRight: string,
    className?: string,
    title: string,
    text: string,
    children?: React.ReactNode
}
export  function HeroLayout({imgLeft, className, title, text, children}: IHeroLayout) {
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
    maw={1440}
    m='auto'
      w="100%"
      justify="center"
      align="center"
      className={clsx(`max-w-[1440px] m-auto lg:flex-col-reverse `, className)}
      // className="max-w-[1440px] m-auto lg:flex-col-reverse "
      px="clamp(12px,4vw,48px)"
      gap={16}
    >
      {/* <motion.img
        initial={{ x: -2 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
        className="w-[clamp(60px,10vw,160px)] lg:hidden"
        src={imgLeft}
        alt=""
      /> */}
      <motion.div
        ref={ref}
        initial={{ x: 0, opacity: 0 }}
        animate={controls}
        className="flex flex-col justify-center items-center  text-center max-w-[700px] gap-[10px]"
      >
        <Title className="text-[clamp(24px,4vw,42px)] text-[#212326] font-poppins">
          {title}
        </Title>
        <Text className="text-[#797979] text-[clamp(14px,1vw,18px)] text-center font-poppins">
         {text}
        </Text>
        <div className="clg:max-w-[600px] clg:w-full w-[600px]">
        {children}
        </div>
      </motion.div>
      {/* <motion.img
        initial={{ x: 2 }}
        animate={{
          x: 0,
          opacity: 1,
          rotate: inView ? 360 : 0, // Add rotation for spinning effect when in view
        }}
        transition={{ duration: 1.2 }}
        className="w-[clamp(110px,20vw,320px)]"
        src={imgRight}
        alt=""
      /> */}
    </Flex>
  );
}
