import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Avatar, Box, Button, Flex, Text, Title } from "@mantine/core";
import { TrendingItem, TrendingPokedex } from "@/utils/types";

export const ClgTrendingTableColumns: ColumnDef<TrendingItem>[] = [
  {
    accessorKey: "small",
    header: "Name",
    cell: ({ row }) => (
      <Flex gap={9} align="center" py={10}>
        <Avatar
          size='clamp(22px,2vw,32px)'
          src={row.original.small}
          alt="profile picture"
          w={32}
          h={32}
        />
        <Flex direction="column">
          <Text size={16} className="font-[500] text-[#0A0B0D] clg:text-[14px]">
            {" "}
            {row.original.name}
          </Text>
          <Text className="text-[#5B616E] clg:text-[12px]" size={14}>
            {row.original.symbol}
          </Text>
        </Flex>
      </Flex>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "data",
    header: "Price",
    cell: ({ row }) => (
      <Text className="text-[#0A0B0D] clg:text-[12px]">
        {row.original.data.price.slice(0,6) as string}
      </Text>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "market_cap",
    header: "Market Cap",
    cell: ({ row }) => (
      <Text className="text-[#0A0B0D] clg:text-[12px]">{row.original.data.market_cap}</Text>
    ),
    enableSorting: false,
  },
 
  {
    accessorKey: "total_volume",
    header: "Total Volume",
    cell: ({ row }) => (
      <Text className="text-[#0A0B0D] clg:text-[12px]">
        {row.original.data.total_volume as string}
      </Text>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "actions",
    header: "Details",
    cell: ({ row }) => (
      <Button id={row.original.coin_id as unknown as string} className="text-[#0A0B0D] bg-red-300 hover:bg-red-400 text-md clg:hidden">
       Details
      </Button>
    ),
    enableSorting: false,
  },
 
];
