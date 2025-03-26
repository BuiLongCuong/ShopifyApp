"use client"

import { ColumnDef } from "@tanstack/react-table"
import { IPixel } from "@/types/pixel"
import CellHandleStatus from "./catalog-table/cell-handle-status"

export const columnsPixel: ColumnDef<IPixel>[] = [
  {
    accessorKey: "name",
    header: "Pixel Name",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({row}) => <CellHandleStatus data={row.original}/>
  }
]
