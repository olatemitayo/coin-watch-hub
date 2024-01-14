import { builder } from "@/api/builder";
import { useCustomTable } from "@/hooks/custom-data";
import { Stack } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { DataTable } from "./custom-table";
import { TrendingTableColumns } from "./trending-table-column";
import { ClgTrendingTableColumns, ProductLoading } from ".";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Trending() {
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
  const {
    data: trendingData,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => builder.use().asset.trending(),
    queryKey: builder.asset.trending.get(),
    select: ({ data }) => data?.coins?.map((item) => item?.item),
  });
  // console.log({ trendingData });
  const { table } = useCustomTable({
    tableData: trendingData,
    columns: TrendingTableColumns,
  });
  const { table:clgtable } = useCustomTable({
    tableData: trendingData,
    columns: ClgTrendingTableColumns,
  });
  return (
    <motion.div  ref={ref}
    initial={{ x: 0, opacity: 0 }}
    animate={controls} className="px-[clamp(8px,4vw,48px)]" >
      <div className="clg:hidden"> 
        {isLoading ? <ProductLoading /> : <DataTable table={table} />}
      </div>
      <div className="hidden clg:block">
        {isLoading ? <ProductLoading /> : <DataTable table={clgtable} />}
      </div>
    </motion.div>
  );
}
