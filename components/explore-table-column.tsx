import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Avatar, Button, Flex, Text } from "@mantine/core";
import { ExplorePokedex } from "@/utils/types";
import Link from "next/link";


export const ExploreTableColumns: ColumnDef<ExplorePokedex>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <Flex gap={9} align="center" py={10}>
        <Avatar
          size="clamp(22px,2vw,32px)"
          src={row.original?.image}
          alt="profile picture"
          w={32}
          h={32}
        />
        <Flex direction="column">
          <Text
            size={16}
            className="font-[500] text-[#0A0B0D]  text-[16px] font-poppins"
          >
            {" "}
            {row.original?.name}
          </Text>
          <Text className="text-[#5B616E] text-[14px]  bg-red-300 rounded px-[4px] w-max font-poppins">
            {row.original?.symbol?.toLocaleUpperCase()}
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
      <Text className="text-[#0A0B0D] text-[14px] font-poppins">
        {`$${row.original?.current_price?.toLocaleString()}`}
      </Text>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "market_cap",
    header: "Market Cap",
    cell: ({ row }) => (
      <Text className="text-[#0A0B0D] text-[14px] font-poppins">
        {`$${row.original?.market_cap?.toLocaleString()}`}
      </Text>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "volume",
    header: '24h %',
    cell: ({ row }) => (
      <Text
        className="text-[#0A0B0D] font-poppins font-medium text-[14px]"
        style={{
          color:
            row.original?.price_change_percentage_24h &&
            row.original?.price_change_percentage_24h < 0
              ? "#FF3636"
              : "#3EBA59",
        }}
      >
        {`${row.original?.price_change_percentage_24h?.toFixed(2)}%` as any}
      </Text>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "total_volume",
    header: "Volume",
    cell: ({ row }) => (
      <Text className="text-[#0A0B0D] text-[14px] font-poppins">
        {`$${row.original?.total_volume?.toLocaleString()}`}
      </Text>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "market_volume",
    header: "Market Cap",
    cell: ({ row }) => (
      <Text className="text-[#0A0B0D] text-[14px] font-poppins">
        {`$${row.original?.market_cap?.toLocaleString()}`}
      </Text>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "market_cap_rank",
    header: "Details",
    cell: ({ row }) => (
      <Link href={`/${row.original?.id}`} className="cursor-pointer">
        <Button
          id={row.original?.total_supply as unknown as string}
          className="text-[#fff] bg-red-300 hover:bg-red-400  font-poppins"
        >
          Details
        </Button>
      </Link>
    ),
    enableSorting: false,
  },
];
