import { builder } from "@/api/builder";
import { Navbar } from "@/components";
import { Divider, Flex, Stack, Text, Title } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { BsBack } from "react-icons/bs";

export default function CoinDetails() {
  const { query, back } = useRouter();

  //get individual designation details
  const { data: DetailsDetails } = useQuery({
    queryFn: () => builder.use().asset.details(query?.id as string),
    queryKey: builder.asset.details.use(query?.id as string),
    select: ({ data }) => data,
    enabled: !!query?.id,
  });
  console.log({ DetailsDetails });
  const marketCapChange = DetailsDetails?.market_data?.price_change_percentage_24h;

  const high24hData = DetailsDetails?.market_data.high_24h;

  // Check if high24hData is defined before rendering
  if (high24hData) {
    const usdValue = high24hData["usd"]; // Assuming the key is lowercase 'usd'


      // Function to format market cap
      const formatNumberInBillions = (value: number) => {
        if (isNaN(value) || !isFinite(value)) {
          return 'N/A'; // or any default value
        }
      
        return `${(value / 1e9).toFixed(1)}B`;
      };
    return (
      <Stack className=" gap-[clamp(20px,5vw,60px)] pb-5">
        <Navbar />

        <Flex
          className="!mt-[clamp(80px,9vw,110px)]"
          direction="column"
          px="clamp(12px,4vw,48px)"
        >
          <Flex
            className="cursor-pointer hover:text-red-300"
            onClick={back}
            align="center"
            gap={4}
          >
            <BiArrowBack />
            <Text>back</Text>
          </Flex>
          <Flex mt={40} direction="column" gap="clamp(30px,8vw,100px)">
            {/* hero details  */}
            <Flex w="100%" direction="column" align="center" gap={17}>
              <Flex direction='column' gap={7} w='100%' align='center'>

              <Flex gap={8} align="center" justify="center" wrap='wrap' w='100%'>
                <img
                  className="w-[clamp(60px,4vw,70px)] h-[clamp(60px,4vw,70px)]"
                  src={DetailsDetails?.image?.small as string}
                  alt=""
                />
                <Flex align="center" gap={8} wrap='wrap' justify='center' w='100%'>
                  <Title className="text-[clamp(28px,4vw,80px] cgsm:!text-[24px] text-[#212326] text-center">
                    {DetailsDetails?.name}
                  </Title>
                  <Text className="text-[clamp(18px,2vw,34px)] text-[#797979]">
                    ({DetailsDetails?.symbol})
                  </Text>
                </Flex>
              </Flex>
              <Text className="text-center text-[#797979] lg:text-[14px] leading-7 items-center w-full" maw={500}>
                Free equity investments and flat ₹20 intraday and F&O trades
                even higher earning rates and our lowest borrowing rates.
              </Text>
              </Flex>
              <Flex align="center" justify='center' gap={8} wrap='wrap' w='100%'>
                <Text className="text-[#212326] text-[clamp(20px,2vw,35px)] font-bold">
                  {`$${DetailsDetails?.market_data?.current_price['usd'].toLocaleString()}`}
                </Text>
                <Flex>
                <Text
                  style={{
                    color:
                      marketCapChange && marketCapChange < 0 ? "red" : "green",
                  }}
                  className="text-[clamp(14px,1vw,16px)]"
                >
                  {marketCapChange && marketCapChange.toFixed(2)}%{" "}
                  <span className= "text-[clamp(14px,1vw,16px)] text-[#797979]">(24hrs)</span>
                </Text>

                </Flex>
              </Flex>
            </Flex>
            {/* about token  */}
            <Flex w="100%" gap={43} justify="space-between" className="lg:flex-col">
              <Flex w="49%" direction="column" className="lg:w-full">
                <Flex align="center" gap={8} className="text-[40px]"  wrap='wrap'>
                <Title className="text-[clamp(28px,4vw,80px] cgsm:!text-[24px] text-[#212326] ">
                    {DetailsDetails?.name}
                  </Title>
                  <Text className="text-[clamp(18px,2vw,34px)] text-[#9EA6FF]">
                    ({DetailsDetails?.symbol})
                  </Text>
                 
                </Flex>
                <Text className="text-[#797979] leading-7 lg:text-[14px]">
                  {DetailsDetails?.description?.en.length > 0 ? DetailsDetails?.description?.en.slice(0,1000) : 'No discription yet' }.
                </Text>
              </Flex>
              <Stack
                // direction="column"
                justify='space-between'
                className=" flex-1 max-h-max border bg-[#263238] rounded-[30px] "
              >
                <Flex direction="column" gap={24} className=" py-[clamp(15px,2vw,30px)]">
                  <Title className="px-[clamp(16px,4vw,60px)] text-[clamp(18px,1.5vw,25px)]" c="#fff">24hrs low and high</Title>
                  <Flex gap={8} justify="space-between" c="#fff" className="px-[clamp(16px,4vw,60px)]">
                    <Flex direction="column" className="clg:text-[14px]">
                      <Text>Low </Text>
                      <Text c="#FF4141" className="">
                      ${DetailsDetails?.market_data.low_24h["usd"].toLocaleString()}
                      </Text>
                    </Flex>
                    <Flex direction="column" className="clg:text-[14px]">
                      <Text>High </Text>
                      <Text c="#3EBA59">
                        ${DetailsDetails?.market_data.high_24h["usd"].toLocaleString()}
                      </Text>
                    </Flex>
                    <Flex direction="column" className="clg:text-[14px]">
                      <Text>All Time High </Text>
                      <Text c="#3EBA59">
                      ${DetailsDetails?.market_data.ath["usd"].toLocaleString()}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Divider color="#5B6468"/>
                <Flex direction="column" gap={24} className=" py-[clamp(15px,2vw,30px)]">
                  <Title className="px-[clamp(16px,4vw,60px)] text-[clamp(18px,1.5vw,25px)]" c="#fff">{DetailsDetails?.name} Market Information</Title>
                  <Flex gap={8} justify="space-between" c="#fff" className="px-[clamp(16px,4vw,60px)]">
                    <Flex direction="column" className="clg:text-[14px]">
                      <Text>Popularity </Text>
                      <Text  className="text-[#9EA6FF]">
                      #{DetailsDetails?.market_cap_rank}
                      </Text>
                    </Flex>
                    <Flex direction="column" className="clg:text-[14px]">
                      <Text>Volume (24hours) </Text>
                      <Text c="#3EBA59">
                      ${formatNumberInBillions(Number(DetailsDetails?.market_data?.total_volume['usd']))}
                      </Text>
                    </Flex>
                    <Flex direction="column" className="clg:text-[14px]">
                      <Text>Market Cap</Text>
                      <Text c="#3EBA59">
                      ${formatNumberInBillions(Number(DetailsDetails?.market_data?.market_cap['usd']))}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex></Flex>
              </Stack>
            </Flex>
          </Flex>
        </Flex>
      </Stack>
    );
  }
}
