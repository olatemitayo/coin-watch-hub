import {
    PaginationState,
    SortingState,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
  } from "@tanstack/react-table";
  import { Dispatch, SetStateAction, useMemo, useState } from "react";
  
  interface ITableProps {
    tableData: any[] | undefined;
    columns: any[];
  }
  
  function useCustomTable({ tableData, columns }: ITableProps) {
    const data = useMemo(() => tableData || [], [tableData]);
    const [rowSelection, setRowSelection] = useState({});
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnVisibility, setColumnVisibility] = useState({});
  
    const table = useReactTable({
      data,
      columns,
      state: {
        sorting,
        rowSelection,
        columnVisibility,
      },
      onColumnVisibilityChange: setColumnVisibility,
      enableRowSelection: true, //enable row selection for all rows
      // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
      onRowSelectionChange: setRowSelection,
      manualPagination: true,
      onSortingChange: setSorting,
      getSortedRowModel: getSortedRowModel(),
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
    });
    return { table };
  }
  
  export { useCustomTable };
  