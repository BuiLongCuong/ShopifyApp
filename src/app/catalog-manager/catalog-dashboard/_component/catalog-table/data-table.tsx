"use client";

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Paginator from "@/components/ui/table/data-table-pagination";
import { cn } from "@/lib/utils";
import { parseAsInteger, useQueryState } from 'nuqs';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[],
  placeholder: string,
  contentBtn: string,
  hasCreateBtn: boolean,
  totalItems: number;
  pageSizeOptions?: number[];
  fixedHeader?: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  placeholder,
  contentBtn,
  hasCreateBtn,
  totalItems,
  pageSizeOptions = [10, 20, 30, 40, 50],
  fixedHeader = false
}: DataTableProps<TData, TValue>) {  
  const [currentPage, setCurrentPage] = useQueryState(
    'page',
    parseAsInteger.withOptions({ shallow: false }).withDefault(1)
  );
  const [pageSize, setPageSize] = useQueryState(
    'limit',
    parseAsInteger
      .withOptions({ shallow: false, history: 'push' })
      .withDefault(pageSizeOptions[0])
  );

  const paginationState = {
    pageIndex: currentPage - 1,
    pageSize: pageSize
  };

  const pageCount = Math.ceil(totalItems / pageSize);

  const handlePaginationChange = (
    updaterOrValue:
      | PaginationState
      | ((old: PaginationState) => PaginationState)
  ) => {
    const pagination =
      typeof updaterOrValue === 'function'
        ? updaterOrValue(paginationState)
        : updaterOrValue;

        console.log("Pagination:", pagination);

    setCurrentPage(pagination.pageIndex + 1);
    setPageSize(pagination.pageSize);
  };

  const router = useRouter();

  const routerCreatePixel = () => {
    router.push("/catalog-manager/catalog-dashboard/new");
  }


  const table = useReactTable({
    data,
    columns,
    pageCount: pageCount,
    state: {
      pagination: paginationState,
    },
    onPaginationChange: handlePaginationChange,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    manualPagination: true,
    manualSorting: false,
    manualFiltering: false,
    enableSorting: true
  });

  return (
    <div>
      <div className={`flex items-center justify-between gap-5 ${hasCreateBtn ? "mb-" : "mb-2"}`}>
          <div className="flex-1 h-[32px] relative flex items-center">
              <Search className="absolute left-3 text-gray-400 w-4 h-4" />
              <Input
                placeholder={`${hasCreateBtn ? `Search ${placeholder} name` : ""} `}
                value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                onChange={(event) =>
                  table.getColumn("name")?.setFilterValue(event.target.value)
                }
                className="pl-10 flex-1 outline-none"
              />
          </div>
          {
            hasCreateBtn && (
              <Button className="w-[153.46px] h-[32px] flex items-center font-[500] text-[13px] leading-[17px] font-sans" onClick={routerCreatePixel}>
                Create {contentBtn} catalog
              </Button>
            )
          }
      </div>
    <div className="rounded-md border mt-3">
      <Table>
          <TableHeader
            className={cn({
              'sticky top-0 z-20 bg-white dark:bg-black': fixedHeader
            })}
          >
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>

    
    {/* <div className={`flex items-center justify-end ${hasCreateBtn ? "space-x-2 py-4" : "pt-2"}`}>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div> */}

      <div className="flex flex-col items-center justify-end gap-2 space-x-2 py-4 sm:flex-row">
        <div className="flex w-full items-center justify-between">
          <div className="flex-1 text-sm text-muted-foreground">
            {totalItems > 0 ? (
              <>
                Showing{' '}
                {paginationState.pageIndex * paginationState.pageSize + 1} to{' '}
                {Math.min(
                  (paginationState.pageIndex + 1) * paginationState.pageSize,
                  totalItems
                )}{' '}
                of {totalItems} entries
              </>
            ) : (
              'No entries found'
            )}
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6 lg:gap-8">
            <div className="flex items-center space-x-2">
              <p className="whitespace-nowrap text-sm font-medium">
                Rows per page
              </p>
              <Select
                value={`${paginationState.pageSize}`}
                onValueChange={(value) => {
                  table.setPageSize(Number(value));
                }}
              >
                <SelectTrigger className="h-8 w-[70px]">
                  <SelectValue placeholder={paginationState.pageSize} />
                </SelectTrigger>
                <SelectContent side="top">
                  {pageSizeOptions.map((pageSize) => (
                    <SelectItem key={pageSize} value={`${pageSize}`}>
                      {pageSize}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between gap-2 sm:justify-end">
          <div className="flex items-center justify-center text-sm font-medium md:w-[150px]">
            {totalItems > 0 ? (
              <>
                Page {paginationState.pageIndex + 1} of {table.getPageCount()}
              </>
            ) : (
              'No pages'
            )}
          </div>
          <div className="flex justify-end">
            <Paginator
              currentPage={table.getState().pagination.pageIndex + 1}
              totalPages={table.getPageCount()}
              onPageChange={(pageNumber) => table.setPageIndex(pageNumber - 1)}
              showPreviousNext
            />
          </div>
        </div>
      </div>
    </div>
  )
}
