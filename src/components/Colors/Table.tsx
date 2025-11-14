"use client";

import DataTable, { Column } from "@/components/Table/DataTable";
import {
  PencilSimpleLineIcon,
  TrashIcon,
} from "@phosphor-icons/react/dist/ssr";
import EditCategoryDialog from "./EditCategoryDialog";
import ConfirmationDialog from "@/components/ConfirmationDialog";
import { DialogSettings, Paginated } from "@/models/shared.model";
import { useTranslation } from "react-i18next";
import { formatDate } from "@/lib/utils";
import { deleteCategory } from "@/actions/categories/deleteCategory";
import { Color, ColorsPayload } from "@/models/color.model";

type Props = {
  data: Color[];
  setPage: (val: number) => void;
  page: number;
  setItemsPerPage: (val: number) => void;
  itemsPerPage: number;
  name: string;
  fetch: (payload: ColorsPayload) => Promise<Color[]>;
};

const Table = ({
  data,
  name,
  page = 1,
  setPage,
  itemsPerPage = 10,
  setItemsPerPage,
  fetch,
}: Props) => {
  const { t } = useTranslation();

  const columns: Column[] = [
    {
      header: () => t("NAME"),
      value: (color: Color) =>
        color?.name,
        // <Avatar
        //   label={color?.name}
        //   src={color?.imageURL}
        //   type="color"
        //   className="w-16 h-16"
        // />
    },
    {
      header: () => t("CREATED_AT"),
      value: (color: Color) => formatDate(color?.createdAt),
    },
  ];

  const settings: DialogSettings[] = [
    {
      label: t("EDIT"),
      icon: <PencilSimpleLineIcon className="fill-neutral-600" size={18} />,
      dialog: EditCategoryDialog,
      onAction: async () => {
        fetch({ page, itemsPerPage, name });
      },
      closeOnAction: true,
    },
    {
      label: t("DELETE"),
      icon: <TrashIcon className="fill-red-600" size={18} />,
      dialog: ConfirmationDialog,
      onAction: async (category: Color) => {
        await deleteCategory(category._id);
        fetch({ page, itemsPerPage, name });
      },
      closeOnAction: true,
    },
  ];

  return (
    <DataTable
      items={data}
      columns={columns}
      itemsPerPage={itemsPerPage}
      setItemsPerPage={setItemsPerPage}
      page={page}
      setPage={setPage}
      settings={settings}
    />
  );
};

export default Table;
