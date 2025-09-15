"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
// import { DropdownItemsPerPage } from "./DropdownItemsPerPage";
import { useTranslation } from "react-i18next";
import { PaginatedResponse } from "@/model/shared.models";
import {
  CaretLineRightIcon,
  CaretRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import { DropdownItemsPerPage } from "./DropdownItemsPerPage";

type Props = {
  currentPage: number;
  setPage: (val: number) => void;
  dataPagination: PaginatedResponse<any>;
  itemsPerPage?: number;
  setItemsPerPage?: (val: number) => void;
  className?: string;
  maxPageButtons?: number;
};

const Pagination = ({
  currentPage,
  setPage,
  dataPagination,
  itemsPerPage,
  setItemsPerPage,
  className,
  maxPageButtons = 5,
}: Props) => {
  const { t } = useTranslation();
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (dataPagination) {
      setTotalPages(dataPagination?.data?.totalPages);
    }
  }, [dataPagination]);

  useEffect(() => {
    setPage?.(1);
  }, [itemsPerPage]);

  const startPage = Math.max(
    Math.min(
      currentPage - Math.floor(maxPageButtons / 2) - 1,
      totalPages - maxPageButtons
    ),
    0
  );

  const pageButtons = Array.from(
    { length: Math.min(maxPageButtons, totalPages) },
    (_, i) => startPage + i + 1
  );

  const totalItems = dataPagination?.data?.totalItems;
  const startItem =
    (currentPage - 1) * dataPagination?.data?.itemsPerPage +
    (totalItems > 0 && 1);
  const endItem = Math.min(
    currentPage * dataPagination?.data?.itemsPerPage,
    totalItems
  );

  return (
    <div
      className={twMerge(
        "flex flex-col sm:flex-row items-center justify-between gap-0.5 sm:gap-1 lg:gap-2 transition-all",
        className
      )}
    >
      <span className="text-xs sm:text-sm">
        {startItem || 0} - {endItem || 0} {t("OF")} {totalItems || 0}
      </span>

      <div className="flex items-center">
        <button
          className="p-2 group"
          disabled={currentPage === 1}
          onClick={() => setPage?.(1)}
        >
          <CaretLineRightIcon
            className={`w-3 h-3 ltr:rotate-180 ${
              currentPage === 1 ? "opacity-30" : "group-hover:fill-neutral-500"
            }`}
          />
        </button>

        <button
          className="p-2 group"
          disabled={currentPage === 1}
          onClick={() => setPage?.(currentPage - 1)}
        >
          <CaretRightIcon
            className={`w-3 h-3 ltr:rotate-180 ${
              currentPage === 1 ? "opacity-30" : "group-hover:fill-neutral-500"
            }`}
          />
        </button>

        {pageButtons.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setPage?.(pageNumber)}
            className={`px-1 sm:px-2 h-8 text-sm sm:text-base rounded transition-all ${
              currentPage === pageNumber
                ? "bg-secondary text-primary"
                : "hover:text-primary text-neutral-500"
            }`}
          >
            {pageNumber}
          </button>
        ))}

        <button
          className="p-2 group"
          disabled={currentPage >= totalPages}
          onClick={() => setPage?.(currentPage + 1)}
        >
          <CaretRightIcon
            className={`w-3 h-3 rtl:rotate-180 ${
              currentPage >= totalPages
                ? "opacity-30"
                : "group-hover:fill-neutral-500"
            }`}
          />
        </button>

        <button
          className="p-2 group"
          disabled={currentPage >= totalPages}
          onClick={() => setPage?.(totalPages)}
        >
          <CaretLineRightIcon
            className={`w-3 h-3 rtl:rotate-180 ${
              currentPage >= totalPages
                ? "opacity-30"
                : "group-hover:fill-neutral-500"
            }`}
          />
        </button>
      </div>

      <DropdownItemsPerPage
        itemsPerPage={itemsPerPage}
        setCurrentItemsPerPage={setItemsPerPage}
      />
    </div>
  );
};

export default Pagination;
