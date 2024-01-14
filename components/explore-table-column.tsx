import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Avatar, Box, Button, Flex, Text, Title } from "@mantine/core";
import {
  ExplorePokedex,
  ExploreRoi,
  TrendingItem,
  TrendingPokedex,
} from "@/utils/types";
import Link from "next/link";

export const ExploreTableColumns: ColumnDef<ExplorePokedex>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <Flex gap={9} align="center" py={10}>
        <Avatar
          size="clamp(22px,2vw,32px)"
          src={row.original.name}
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
    accessorKey: "price_change_24h",
    header: "Price",
    cell: ({ row }) => (
      <Text className="text-[#0A0B0D] clg:text-[12px]">
        {row.original.price_change_24h}
      </Text>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "market_cap",
    header: "Market Cap",
    cell: ({ row }) => (
      <Text className="text-[#0A0B0D] clg:text-[12px]">
        {row.original.market_cap}
      </Text>
    ),
    enableSorting: false,
  },

  {
    accessorKey: "ath_date",
    header: "ROI",
    cell: ({ row }) => (
      <Text className="text-[#0A0B0D] clg:text-[12px]">
        {row.original.ath_date as any}
      </Text>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "market_cap_rank",
    header: "Details",
    cell: ({ row }) => (
      <Link href={`/${row.original.id}`}>
        <Button
          id={row.original.total_supply as unknown as string}
          className="text-[#0A0B0D] bg-red-300 hover:bg-red-400 text-md clg:hidden"
        >
          Details
        </Button>
      </Link>
    ),
    enableSorting: false,
  },
];
