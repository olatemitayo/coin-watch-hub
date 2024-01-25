import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Avatar, Button, Flex, Text } from "@mantine/core";
import { TrendingItem } from "@/utils/types";
import Link from "next/link";

export const ClgTrendingTableColumns: ColumnDef<TrendingItem>[] = [
  {
    accessorKey: "large",
    header: "Name",
    cell: ({ row }) => (
      <Flex gap={4} align="center" py={10}>
        <Avatar src={row.original?.large as string} size={24}  alt="profile picture"
          w={24}
          h={24}/>
        <Flex direction="column">
          <Text className="font-[500] text-[16px] font-poppins text-[#0A0B0D]">
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
    accessorKey: "current_price",
    header: "Price",
    cell: (info) => (
      <Text className=" text-[14px] font-poppins">
        {info ? <> {`$${info.getValue() as string} `} </> : <> -- </>}
      </Text>
    ),
    enableSorting: false,
  },

  {
    accessorKey: "id",
    header: "Details",
    cell: (info) => (
      <Link
        id={info.getValue() as unknown as string}
        href={`/${info.getValue()}`}
        className="text-red-300 p-2  hover:text-red-400 text-[12px] font-poppins font-semibold"
      >
        View
      </Link>
    ),
    enableSorting: false,
  },
];
