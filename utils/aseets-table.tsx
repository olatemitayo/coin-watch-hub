// import React from "react";
// import { ColumnDef } from "@tanstack/react-table";
// import { Text } from "@mantine/core";
// import { ColumnDef } from "@tanstack/react-table";
// import { IndeterminateCheckBox } from "@/common";
// import { PositionAndGradesActionIcons } from "../components/administration";
// import { GradeLevelResult } from "@/types";
// import { Box } from "iconsax-react";

// export const PosGradeOneTableColumns: ColumnDef<GradeLevelResult>[] = [
//   {
//     id: "select",
//     header: ({ table }) => (
//       <IndeterminateCheckBox
//         {...{
//           checked: table.getIsAllRowsSelected(),
//           indeterminate: table.getIsSomeRowsSelected(),
//           onChange: table.getToggleAllRowsSelectedHandler(),
//         }}
//       />
//     ),
//     cell: ({ row }) => (
//       <IndeterminateCheckBox
//         {...{
//           checked: row.getIsSelected(),
//           disabled: !row.getCanSelect(),
//           indeterminate: row.getIsSomeSelected(),
//           onChange: row.getToggleSelectedHandler(),
//         }}
//       />
//     ),
//   },

//   {
//     accessorKey: "name",
//     header: "Grade Name ",
//     cell: (info) => (
//       <Text c="grey.4" variant="smrgbody_14" w={500}>
//         {info.getValue() as string}
//       </Text>
//     ),
//     enableSorting: false,
//   },
//   {
//     accessorKey: "action",
//     header: "Action",
//     cell: ({ row }) => (
//       <PositionAndGradesActionIcons id={row.original.id as number} />
//     ),
//     enableSorting: false,
//   },
// ];
