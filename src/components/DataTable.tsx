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

export const testUsers = [
  {
    id: "0",
    username: "oliver.james",
    password: "w7$Gk9rVb!2q",
    role: "ADMIN",
  },
  {
    id: "1",
    username: "emma.wilson",
    password: "Zr!4pLx8Mv#1",
    role: "SUPER_ADMIN",
  },
  { id: "2", username: "liam.miller", password: "Tq3@Hd9nYv6$", role: "ADMIN" },
  { id: "3", username: "ava.brown", password: "P#8cR2sWm6!z", role: "ADMIN" },
];

const DataTable = () => {
  const [selectedAll, setSelectedAll] = useState<"indeterminate" | boolean>(
    false
  );
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelectAllRows = (checked: boolean) => {
    if (checked) {
      const allIds = testUsers.map((user) => user.id);
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

      if (newSelected.length === testUsers.length) {
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
            <TableHead className="w-10 h-10 text-center">
              <Checkbox
                checked={selectedAll}
                onCheckedChange={handleSelectAllRows}
              />
            </TableHead>
            <TableHead className="w-24 text-black text-nowrap">
              Username
            </TableHead>
            <TableHead className="w-24 text-black text-nowrap">
              Password
            </TableHead>
            <TableHead className="w-24 text-black text-nowrap">Role</TableHead>
            <TableHead className="w-20 text-black text-nowrap">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {testUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="w-10 h-10 text-center">
                <Checkbox
                  id={user.id}
                  checked={selected.includes(user.id)}
                  onCheckedChange={(checked) =>
                    handleSelectRow(user.id, checked as boolean)
                  }
                />
              </TableCell>

              <TableCell className="text-nowrap font-medium">
                {user.username}
              </TableCell>
              <TableCell className="text-nowrap">{user.password}</TableCell>
              <TableCell className="text-nowrap">{user.role}</TableCell>

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

      <div className="mt-4 text-sm">Selected {selected.length}</div>
    </div>
  );
};

export default DataTable;
