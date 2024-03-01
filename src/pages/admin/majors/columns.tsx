"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { User } from "@/constants/data";
import { Checkbox } from "@/components/ui/checkbox";
import { Major } from "@/app/types";

export const columns: ColumnDef<Major>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "major",
    header: "MAJOR",
  },
  {
    accessorKey: "majorCode",
    header: "MAJOR CODE",
  },
  {
    accessorKey: "department",
    header: "MAJOR",
  },
  {
    accessorKey: "departmentCode",
    header: "DEPARTMENT CODE",
  },
  {
    accessorKey: "school",
    header: "SCHOOL",
  },
  {
    accessorKey: "schoolCode",
    header: "SCHOOL CODE",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];