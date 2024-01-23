import { useCustomTable } from '@/hooks/custom-data';
import { CoinContext } from '@/providers';
import React, { useContext } from 'react'
import { ClgTrendingTableColumns, DataTable, ProductLoading } from '.';

export  function MobileTable() {

    const { cryptoData:mobileData, isLoading } =
    useContext(CoinContext);
//   console.log({ mobileData });
  const { table } = useCustomTable({
    tableData: mobileData,
    columns: ClgTrendingTableColumns,
  });
  console.log({mobileData})
  return (
    <>
     {isLoading ? <ProductLoading /> : <DataTable table={table} />}
    </>
  )
}
