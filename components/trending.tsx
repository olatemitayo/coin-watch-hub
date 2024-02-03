import { useCustomTable } from "@/hooks/custom-data";
import React, { useContext, useEffect } from "react";
import { DataTable } from "./custom-table";
import { TrendingTableColumns } from "./trending-table-column";
import { ClgTrendingTableColumns, ProductLoading } from ".";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CoinContext } from "@/providers";

export function Trending() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const {trendingData, trendLoading} = useContext(CoinContext)

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
        {trendLoading ? <ProductLoading /> : <DataTable table={table} />}
      </div>
      <div className="hidden clg:block">
        {trendLoading ? <ProductLoading /> : <DataTable table={clgtable} />}
      </div>
    </motion.div>
  );
}
