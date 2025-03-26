"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"

import { IPixel } from "@/types/pixel"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"
import CellAction from "./cell-action"
import CellHandleStatus from "./cell-handle-status"

export const columns: ColumnDef<IPixel>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({row}) => <CellHandleStatus data={row.original}/>
  },
  {
    accessorKey: "name",
    header: "Pixel Name",
  },
  {
    accessorKey: "pixelId",
    header: "Pixel ID",
  },
  {
    accessorKey: "testEventCode",
    header: "Test Event Code",
  },
  {
    accessorKey: "targetArea",
    header: "Target Area",
  },
  {
    accessorKey: "isActiveCApi",
    header: "Conversion API",
    cell: ({row}) => {
        const isActiveCApi = row.original.isActiveCApi;

        return(
            isActiveCApi ? ("active") : ("inactive")
        )
    }
  },
  {
    id: "actions",
    // accessorKey: "status",
    header: "Action",
    cell: ({ row }) => <CellAction data={row.original}/>
  },
]
