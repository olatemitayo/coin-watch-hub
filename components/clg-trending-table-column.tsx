import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Avatar, Button, Flex, Text } from "@mantine/core";
import { TrendingItem } from "@/utils/types";
import Link from "next/link";

export const ClgTrendingTableColumns: ColumnDef<TrendingItem>[] = [
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
            {row.original?.name}
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
      <Text className="text-[#0A0B0D] text-[14px] font-poppins">{row.original?.market_cap_rank}</Text>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "current_price",
    header: "Price",
    cell: (info ) => (
      <Text className="text-red-500 text-[14px] font-poppins">
        {(info.getValue() as string) ?? "--"}
      </Text>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "market_cap",
    header: "Market Cap",
    cell: (info ) => (
      <Text className="text-[#0A0B0D] text-[14px] font-poppins">
        {(info.getValue().toLocaleString() as string) ?? "--"}
      </Text>
    ),
  },
  {
    accessorKey: "id",
    header: "Details",
    cell: (info) => (
      <Link href={`/${info.getValue()}`}>
      <Button id={info.getValue()as unknown as string} className="text-[#0A0B0D] bg-red-300 hover:bg-red-400 text-[14px] font-poppins">
       Details
      </Button>
      </Link>
    ),
    enableSorting: false,
  },
];
