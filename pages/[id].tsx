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
  const marketCapChange = DetailsDetails?.market_data?.h;

  const high24hData = DetailsDetails?.market_data.high_24h;

  // Check if high24hData is defined before rendering
  if (high24hData) {
    const usdValue = high24hData["usd"]; // Assuming the key is lowercase 'usd'

    // function to format market cap 
      // Function to format market cap
      const formatMarketCap = (value: number) => {
        const suffixes = ["", "K", "M", "B", "T"];
        const suffixNum = Math.floor(("" + value).length / 3);
        let shortValue = parseFloat((suffixNum !== 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2));
        if (shortValue % 1 !== 0) {
          shortValue = parseFloat(shortValue.toFixed(2));
        }
        return shortValue + suffixes[suffixNum];
      };
    return (
      <Stack className=" gap-[clamp(20px,5vw,60px)] pb-5">
        <Navbar />

        <Flex
          className="!mt-[clamp(100px,9vw,130px)]"
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
          <Flex direction="column" gap="clamp(30px,8vw,100px)">
            {/* hero details  */}
            <Flex w="100%" direction="column" align="center">
              <Flex gap={8} align="center" justify="center">
                <img
                  className="w-[70px] h-[70px]"
                  src={DetailsDetails?.image?.small as string}
                  alt=""
                />
                <Flex align="center" gap={8}>
                  <Title className="text-[80px] text-[#212326]">
                    {DetailsDetails?.name}
                  </Title>
                  <Text className="text-[30px] text-[#797979]">
                    ({DetailsDetails?.symbol})
                  </Text>
                </Flex>
              </Flex>
              <Text className="text-center text-[#797979]" w={500}>
                Free equity investments and flat ₹20 intraday and F&O trades
                even higher earning rates and our lowest borrowing rates.
              </Text>
              <Flex align="center" gap={8}>
                <Text className="text-[#212326] text-[35px] font-bold">
                  $30,000
                </Text>
                <Text
                  style={{
                    color:
                      marketCapChange && marketCapChange < 0 ? "red" : "green",
                  }}
                >
                  {marketCapChange && marketCapChange.toFixed(2)}%{" "}
                  <span className="text-[#797979]">(24hrs)</span>
                </Text>
              </Flex>
            </Flex>
            {/* about token  */}
            <Flex w="100%" gap={43} justify="space-between">
              <Flex w="49%" direction="column">
                <Flex align="center" gap={8} className="text-[40px]">
                  <Title className=" text-[#212326]">
                    {DetailsDetails?.name}
                  </Title>
                  <Text className=" text-[#9EA6FF]">
                    ({DetailsDetails?.symbol})
                  </Text>
                </Flex>
                <Text className="text-[#797979] leading-7">
                  {DetailsDetails?.description?.en.length > 0 ? DetailsDetails?.description?.en.slice(0,1000) : 'No discription yet' }.
                </Text>
              </Flex>
              <Stack
                // direction="column"
                justify='space-between'
                className=" flex-1 max-h-max border bg-[#263238] rounded-[30px] "
              >
                <Flex direction="column" gap={24} className=" py-[clamp(20px,3.5vw,40px)]">
                  <Title className="px-[clamp(24px,4vw,60px)] text-[25px]" c="#fff">24 low and high</Title>
                  <Flex gap={8} justify="space-between" c="#fff" className="px-[clamp(24px,4vw,60px)]">
                    <Flex direction="column">
                      <Text>Low :</Text>
                      <Text c="#FF4141">
                      ${DetailsDetails?.market_data.low_24h["usd"]}
                      </Text>
                    </Flex>
                    <Flex direction="column">
                      <Text>High :</Text>
                      <Text c="#3EBA59">
                        ${DetailsDetails?.market_data.high_24h["usd"]}
                      </Text>
                    </Flex>
                    <Flex direction="column">
                      <Text>All Time High :</Text>
                      <Text c="#3EBA59">
                      ${DetailsDetails?.market_data.ath["usd"]}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Divider color="#5B6468"/>
                <Flex direction="column" gap={24} className=" py-[clamp(20px,3.5vw,40px)]">
                  <Title className="px-[clamp(24px,4vw,60px)] text-[25px]" c="#fff">{DetailsDetails?.name} Market Information</Title>
                  <Flex gap={8} justify="space-between" c="#fff" className="px-[clamp(24px,4vw,60px)]">
                    <Flex direction="column">
                      <Text>Popularity :</Text>
                      <Text >
                      #{DetailsDetails?.market_cap_rank}
                      </Text>
                    </Flex>
                    <Flex direction="column">
                      <Text>Volume (24hours) :</Text>
                      <Text c="#3EBA59">
                        ${DetailsDetails?.market_data?.market_cap['usd']}
                      </Text>
                    </Flex>
                    <Flex direction="column">
                      <Text>Market Cap:</Text>
                      <Text c="#3EBA59">
                      {formatMarketCap()}
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
