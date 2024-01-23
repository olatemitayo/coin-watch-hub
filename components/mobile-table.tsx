import { useCustomTable } from '@/hooks/custom-data';
import { CoinContext } from '@/providers';
import React, { useContext } from 'react'
import { ClgTrendingTableColumns, DataTable, ProductLoading } from '.';

export  function MobileTable() {

    const { cryptoData, isLoading } =
    useContext(CoinContext);
//   console.log({ mobileData });
  const { table } = useCustomTable({
    tableData: cryptoData,
    columns: ClgTrendingTableColumns,
  });
//   console.log({cryptoData})
  return (
    <>
     {isLoading ? <ProductLoading /> : <DataTable table={table} />}
    </>
  )
}
