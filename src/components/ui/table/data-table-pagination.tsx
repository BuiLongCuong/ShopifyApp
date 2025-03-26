import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Button } from '../button';
import { JSX } from 'react';

type PaginatorProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
  showPreviousNext: boolean;
};

export const generatePaginationLinks = (
  currentPage: number,
  totalPages: number,
  onPageChange: (page: number) => void
) => {
  const pages: JSX.Element[] = [];
  if (totalPages <= 6) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            onClick={() => onPageChange(i)}
            isActive={i === currentPage}
            className="cursor-pointer"
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
  } else {
    for (let i = 1; i <= 2; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            onClick={() => onPageChange(i)}
            isActive={i === currentPage}
            className="cursor-pointer"
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    if (2 < currentPage && currentPage < totalPages - 1) {
      pages.push(<PaginationEllipsis />);
      pages.push(
        <PaginationItem key={currentPage}>
          <PaginationLink
            onClick={() => onPageChange(currentPage)}
            isActive={true}
            className="cursor-pointer"
          >
            {currentPage}
          </PaginationLink>
        </PaginationItem>
      );
    }
    pages.push(<PaginationEllipsis />);
    for (let i = totalPages - 1; i <= totalPages; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            onClick={() => onPageChange(i)}
            isActive={i === currentPage}
            className="cursor-pointer"
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
  }
  return pages;
};

export default function Paginator({
  currentPage,
  totalPages,
  onPageChange,
  showPreviousNext
}: PaginatorProps) {
  return (
    <Pagination>
      <PaginationContent>
        {showPreviousNext && totalPages ? (
          <>
            {/* <PaginationItem>
              <Button
                aria-label="Go to first page"
                variant="outline"
                className="hidden h-8 w-8 p-0 lg:flex"
                onClick={() => onPageChange(0)}
                disabled={currentPage - 1 < 1}
              >
                <DoubleArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
              </Button>
            </PaginationItem> */}
            <PaginationItem key={'prev'}>
              <Button
                aria-label="Go to previous page"
                variant="outline"
                className="h-8 w-8 p-0"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage - 1 < 1}
              >
                <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
              </Button>
            </PaginationItem>
          </>
        ) : null}
        {generatePaginationLinks(currentPage, totalPages, onPageChange)}
        {showPreviousNext && totalPages ? (
          <>
            <PaginationItem key={'next'}>
              <Button
                aria-label="Go to next page"
                variant="outline"
                className="h-8 w-8 p-0"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage > totalPages - 1}
              >
                <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
              </Button>
            </PaginationItem>
            {/* <PaginationItem>
              <Button
                aria-label="Go to last page"
                variant="outline"
                className="hidden h-8 w-8 p-0 lg:flex"
                onClick={() => onPageChange(totalPages)}
                disabled={currentPage > totalPages - 1}
              >
                <DoubleArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Button>
            </PaginationItem> */}
          </>
        ) : null}
      </PaginationContent>
    </Pagination>
  );
}
