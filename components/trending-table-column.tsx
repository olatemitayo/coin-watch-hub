import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Avatar, Button, Flex, Text } from "@mantine/core";
import { TrendingItem } from "@/utils/types";
import Link from "next/link";

export const TrendingTableColumns: ColumnDef<TrendingItem>[] = [
  {
    accessorKey: "small",
    header: "Name",
    cell: ({ row }) => (
      <Flex gap={9} align="center" py={10}>
        <Avatar
          size={32}
          src={row.original.small}
          alt="profile picture"
          w={32}
          h={32}
        />
        <Flex direction="column">
          <Text size={16} className="font-[500]text-[16px] font-poppins text-[#0A0B0D]">
            {" "}
            {row.original.name}
          </Text>
          <Text className="text-[#5B616E] text-[14px] font-poppins" size={14}>
            {row.original.symbol}
          </Text>
        </Flex>
      </Flex>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "market_cap_rank",
    header: "Rank",
    cell: ({ row }) => (
      <Text className="text-[#0A0B0D] text-[14px] font-poppins">{row.original.market_cap_rank}</Text>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "data",
    header: "Price",
    cell: ({ row }) => (
      <Text className="text-[#0A0B0D] text-[14px] font-poppins">
        {row.original.data.price as string}
      </Text>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "market_cap",
    header: "Market Cap",
    cell: ({ row }) => (
      <Text className="text-[#0A0B0D] text-[14px] font-poppins">{row.original.data.market_cap}</Text>
    ),
    enableSorting: false,
  },
 
  {
    accessorKey: "market_cap",
    header: "Total Volume",
    cell: ({ row }) => (
      <Text className="text-[#0A0B0D] text-[14px] font-poppins">
        {row.original.data.total_volume as string}
      </Text>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "actions",
    header: "Details",
    cell: ({ row }) => (
      <Link href={`/${row.original.coin_id}`}>
      <Button id={row.original.coin_id as unknown as string} className="text-[#0A0B0D] bg-red-300 hover:bg-red-400 text-[14px] font-poppins">
       Details
      </Button>
      </Link>
    ),
    enableSorting: false,
  },
];
