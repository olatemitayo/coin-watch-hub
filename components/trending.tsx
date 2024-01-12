import { builder } from '@/api/builder'
import { useCustomTable } from '@/hooks/custom-data'
import { Stack } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { DataTable } from './custom-table'
import { TrendingTableColumns } from './trending-table-column'

export  function Trending() {
     // get trending list 
 const {data: trendingData, isLoading, isError} = useQuery({
    queryFn: () => builder.use().asset.trending(),
    queryKey: builder.asset.trending.get(),
    select: ({data}) => data?.coins?.map((item) => item?.item)
   })
   console.log({trendingData})
   const { table } = useCustomTable({
    tableData: trendingData,
    columns: TrendingTableColumns,
  });
  return (
    <Stack  px={50}>

<DataTable table={table}/>
    </Stack>
  )
}
