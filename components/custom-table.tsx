import { flexRender, Table as ReactTable } from "@tanstack/react-table";
import { RxCaretSort } from "react-icons/rx";
import { css, CSSInterpolation } from "@emotion/css";
import { clsx } from "@mantine/core";
// import { ComponentTablePagination } from "@/common/pagination";
export function DataTable({
  table,
  onRowClick,

  rowHoverStyle,

  excludeFromRowClick = [],
}: {
  table: ReactTable<any>;

  rowHoverStyle?: CSSInterpolation;

  onRowClick?: (param: any) => void;

  excludeFromRowClick?: string[];
}) {
  return (
    <div className="overflow-auto no-scrollbar flex flex-col justify-between h-full  rounded-2xl font-poppins">
      <table className="w-full">
        <thead
          style={{
            color: "#fff",
            backgroundColor: "#263238",
        //  fontSize:'14px' 
          }}
          
         
        >
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} >
              {headerGroup.headers.map((header, index, arr) => {
                return (
                  <th
                    className={clsx(
                      index === arr.length - 1 && "!pr-6 !py-4 clg:!pl-2  !clg:text-[14px] font-poppins",

                      "table-heading !pl-6 !py-4 clg:!pl-2 !clg:text-[14px] font-poppins"
                    )}
                    key={header.id}
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer flex gap-1 items-center font-poppins"
                            : "flex justify-start font-poppins",

                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,

                          header.getContext()
                        )}

                        {{
                          asc: header.column.getCanSort() && <RxCaretSort />,

                          desc: header.column.getCanSort() && <RxCaretSort />,
                        }[header.column.getIsSorted() as string] ??
                          (header.column.getCanSort() && <RxCaretSort />)}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>

        <tbody className="!bg-[#F5F5F5] font-poppins">
          {table.getRowModel().rows.map((row, idx, arr) => {
            return (
              <tr
                className={css`
                  ${rowHoverStyle} 
                `}
                key={row.id}
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      color="#5E606A"
                      
                      onClick={() =>
                        onRowClick &&
                        cell.column.id !== "select" &&
                        cell.column.id !== "action" &&
                        !excludeFromRowClick.includes(cell.column.id)
                          ? onRowClick(row.original)
                          : {}
                      }
                      className={clsx(
                        idx === arr.length - 1 && "!border-b-0 text-xs clg:!pl-2 font-poppins",

                        "table-cells-normal  !pl-6 clg:!pl-2 font-poppins"
                      )}
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,

                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <ComponentTablePagination title=" Showing 1 to 5 of 12 entries" /> */}
    </div>
  );
}
