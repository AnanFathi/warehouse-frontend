"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  PencilSimpleLineIcon,
  TrashIcon,
} from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

export type Column = {
  header: string;
  value: (item: any) => React.ReactNode;
  sortKey?: string;
};

type Props = {
  items: any[];
  columns: Column[];
  selection?: boolean;
  actions?: React.ReactNode;
};

const DataTable = ({ items, columns, selection, actions }: Props) => {
  const [selectedAll, setSelectedAll] = useState<"indeterminate" | boolean>(
    false
  );
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelectAllRows = (checked: boolean) => {
    if (checked) {
      const allIds = items.map((item) => item.id);
      setSelected(allIds);
      setSelectedAll(true);
    } else {
      setSelected([]);
      setSelectedAll(false);
    }
  };

  const handleSelectRow = (id: string, checked: boolean) => {
    setSelected((currentSelected) => {
      const newSelected = checked
        ? [...currentSelected, id]
        : currentSelected.filter((item) => item !== id);

      if (newSelected.length === items.length) {
        setSelectedAll(true);
      } else if (newSelected.length === 0) {
        setSelectedAll(false);
      } else {
        setSelectedAll("indeterminate");
      }

      return newSelected;
    });
  };

  return (
    <div className="h-full flex flex-col border border-neutral-200 rounded-xl overflow-hidden">
      <Table>
        <TableHeader className="bg-neutral-100 h-12 sticky top-0 z-10">
          <TableRow>
            {selection && (
              <TableHead className="w-10 h-10 text-center">
                <Checkbox
                  checked={selectedAll}
                  onCheckedChange={handleSelectAllRows}
                />
              </TableHead>
            )}
            {columns.map((column) => (
              <TableHead className="w-24 text-black text-nowrap">
                {column.header}
              </TableHead>
            ))}
            <TableHead className="w-20 text-black text-nowrap">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {items &&
            items.map((item) => (
              <TableRow key={item.id}>
                {selection && (
                  <TableCell className="w-10 h-10 text-center">
                    <Checkbox
                      id={item.id}
                      checked={selected.includes(item.id)}
                      onCheckedChange={(checked) =>
                        handleSelectRow(item.id, checked as boolean)
                      }
                    />
                  </TableCell>
                )}

                {columns.map((column) => (
                  <TableCell className="text-nowrap font-medium">
                    {column.value(item)}
                  </TableCell>
                ))}

                <TableCell>
                  <div className="flex gap-4">
                    <button>
                      <PencilSimpleLineIcon
                        className="fill-neutral-600"
                        size={18}
                      />
                    </button>

                    <button>
                      <TrashIcon className="fill-red-600" size={18} />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      {selection && (
        <div className="mt-4 text-sm">Selected {selected.length}</div>
      )}
    </div>
  );
};

export default DataTable;
