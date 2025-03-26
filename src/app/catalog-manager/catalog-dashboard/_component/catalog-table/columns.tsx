"use client"

import { ColumnDef } from "@tanstack/react-table"
import { IPixel } from "@/types/pixel"
import CellAction from "./cell-action"
import CellHandleStatus from "./cell-handle-status"
import { ICatalog } from "@/types/catalog"

export const columns: ColumnDef<ICatalog>[] = [
  {
    accessorKey: "name",
    header: "Catalog Name",
  },
  {
    accessorKey: "productCount",
    header: "Product count",
  },
  {
    accessorKey: "feedCount",
    header: "Feed count",
  },
  // {
  //   accessorKey: "feedCount",
  //   header: "Connect pixel",
  // },
  {
    accessorKey: "viewError",
    header: "Error",
  },
  {
    id: "actions",
    // accessorKey: "status",
    header: "Action",
    cell: ({ row }) => <CellAction data={row.original}/>
  },
]
