import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Avatar, Box, Flex, Text, Title } from "@mantine/core";
import { TrendingItem, TrendingPokedex } from "@/utils/types";

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
          <Text size={16} className="font-[500] text-[#0A0B0D]">
            {" "}
            {row.original.name}
          </Text>
          <Text className="text-[#5B616E]" size={14}>
            {row.original.symbol}
          </Text>
        </Flex>
      </Flex>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "symbol",
    header: "Symbol",
    cell: ({ row }) => (
      <Text className="text-[#0A0B0D]">{row.original.symbol}</Text>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "market_cap_rank",
    header: "Rank",
    cell: ({ row }) => (
      <Text className="text-[#0A0B0D]">{row.original.market_cap_rank}</Text>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "market_cap",
    header: "Market Cap",
    cell: ({ row }) => (
      <Text className="text-[#0A0B0D]">{row.original.data.market_cap}</Text>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "data",
    header: "Price",
    cell: ({ row }) => (
      <Text className="text-[#0A0B0D]">
        {row.original.data.price as string}
      </Text>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "market_cap",
    header: "Total Volume",
    cell: ({ row }) => (
      <Text className="text-[#0A0B0D]">
        {row.original.data.total_volume as string}
      </Text>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "slug",
    header: "Slug",
    cell: ({ row }) => (
      <Text className="text-[#0A0B0D] text-md ">
        {row.original.slug as string}
      </Text>
    ),
    enableSorting: false,
  },
];
