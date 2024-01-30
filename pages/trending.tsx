import {
  Stack,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { Trending } from "@/components/trending";
import { HeroLayout, Navbar } from "@/components";
import { TrendingPokedexData } from "@/utils";

export default function TrendingPage() {
 
  return (
    <Stack>
      {/* Navbar  */}
      <Navbar />
      <HeroLayout
      className='!mt-[clamp(100px,9vw,130px)]'
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
