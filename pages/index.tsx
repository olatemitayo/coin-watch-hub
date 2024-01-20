import { Stack } from "@mantine/core";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useContext, useEffect } from "react";
import { useCustomTable } from "@/hooks/custom-data";
import { ExploreTableColumns } from "@/components/explore-table-column";
import { DataTable, HeroLayout, Navbar, ProductLoading, Searchcoin } from "@/components";
import { CoinContext } from "@/providers";

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

  const { cryptoData, isLoading } = useContext(CoinContext);
  console.log({ cryptoData });

  const { table } = useCustomTable({
    tableData: cryptoData,
    columns: ExploreTableColumns,
  });

  return (
    <Stack className=" gap-[clamp(20px,5vw,60px)] pb-5">
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
       <Searchcoin />
      </HeroLayout>
      <motion.div
        ref={ref}
        initial={{ x: 0, opacity: 0 }}
        animate={controls}
        className="px-[clamp(8px,4vw,48px)]"
      >
        <div className="clg:hidden">
          {isLoading ? <ProductLoading /> : <DataTable table={table} />}
        </div>
        {/* <DataTable table={table} /> */}
        {/* <div className="hidden clg:block">
        {isLoading ? <ProductLoading /> : <DataTable table={clgtable} />}
      </div> */}
      </motion.div>
    </Stack>
  );
}
