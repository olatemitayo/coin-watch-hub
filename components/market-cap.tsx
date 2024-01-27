import { CoinContext } from "@/providers";
import { TrendingItem, TrendingPokedex, TrendingPokedexData } from "@/utils";
import { Box, Button, Flex, Text, Title } from "@mantine/core";
import Link from "next/link";
import React, { useContext } from "react";

export function MarketCap() {
  const { trendingData, trendLoading } = useContext(CoinContext);
  console.log({ trendingData });


  return (
    <Flex
      direction="column"
      gap="clamp(40px,1vw,16px)"
      w="100%"
      className="!mt-[clamp(100px,9vw,130px)] max-w-[1440px] m-auto overflow-auto flex-1 no-scrollbar"
      px="clamp(12px,4vw,48px)"
    >
      <Flex
        direction="column"
        gap={8}
        w="60%"
        className="lg:w-[80%] clg:w-full"
      >
        <Title className="text-[clamp(24px,4vw,42px)] text-[#212326] font-poppins">
          Explore the Top Trending Cryptocurrencies{" "}
        </Title>
        <Text className="text-[#797979] text-[clamp(14px,1vw,18px)] font-poppins">
          Discover the latest trends in cryptocurrency with real-time prices.
          Stay informed about the top trending digital assets based on market
          cap and make informed investment decisions.
        </Text>
       
      </Flex>
      <Flex direction='column' w='100%' gap={8}>
        <Flex w='100%' justify='end' className="clg:hidden">
          <Link href="/trending">
          
      <Button className=" border bg-red-200 border-red-200 text-[#212326] hover:bg-red-300 hover:text-white hover:font-bold" maw={200}>View All</Button>
          </Link>

        </Flex>
        <Flex direction='column' gap={16}>
      <Flex
        justify="space-between"
        className="flex-1 gap-[clamp(10px,1.2vw,20px)] overflow-auto no-scrollbar"
      >
        {trendingData?.slice(0, 3).map((item: TrendingItem, index: number) => (
          <Flex
            key={item.id}
            miw={270}
            w="30%"
            className="rounded-lg px-[clamp(8px,2vw,32px)] py-[clamp(16px,1.5vw,24px)] shadows border "
            justify="space-between"
            align="center"
          >
            <Flex w="100%">
              <Flex direction="column" gap={8} >
                <Flex gap={10} align="center" className="clg:!gap-[5px]">
                  <div className="rounded-full border-2 border-red-200 p-1">
                    <img
                      src={item?.small}
                      className="w-[24px] h-[24px] rounded-full "
                      alt=""
                    />
                  </div>
                  <Title className="text-[#212326] text-[clamp(16px,1.2vw,20px)]">
                    {item?.name}
                  </Title>
                </Flex>
                <Flex gap={12} align="center">
                  <Text className="text-[clamp(14px,1.2vw,20px)] clg:!gap-8">
                    {item?.data?.price?.slice(0,6)}
                  </Text>
                  <Text style={{
          color:
            item?.data?.price_change_percentage_24h["usd"] &&
            item?.data?.price_change_percentage_24h["usd"] < 0
              ? "#FF3636"
              : "#3EBA59",
        }} size={12}>
                    {item?.data?.price_change_percentage_24h["usd"].toFixed(3)}%{" "}
                    <span className="text-gray-400"> (24h)</span>
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            
              <Link className="hover:cursor-pointer" href={`/${item?.id}`}>
                <Button className="border border-red-200 clg:text-[14px] clg:px-2 text-[#212326] hover:bg-red-200 hover:text-white hover:font-bold">View</Button>
              </Link>
            
          </Flex>
        ))}

        {/* bg-[#9EA6FF]/60
            bg-yellow-200/60 */}
      </Flex>
      <Flex w='100%' justify='end' className="clg:flex hidden">
          <Link href="/trending" className="w-full">
          
      <Button className=" border bg-red-200 border-red-200 text-[#212326] hover:bg-red-300 hover:text-white hover:font-bold" w='100%' >View All</Button>
          </Link>

        </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}