"use client";

import { useEffect } from "react";
import useRequest from "@/hooks/useRequest";
import Filter from "@/components/Colors/Filter";
import Table from "@/components/Colors/Table";
import PageLayout from "@/components/PageLayout";
import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { getColors } from "@/actions/colors/getColors";
import { Color, ColorsPayload } from "@/models/color.model";

const ColorsPage = () => {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [name, setName] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>(name);

  const { request: fetch, data } = useRequest<ColorsPayload, Color[]>(
    getColors
  );

  useEffect(() => {
    fetch({ search: debouncedSearch });
  }, [debouncedSearch]);

  useDebounce(
    () => {
      if (name !== debouncedSearch) {
        setPage(1);
      }
      setDebouncedSearch(name);
    },
    500,
    [name]
  );

  return (
    <PageLayout title="COLORS">
      <Filter
        name={name}
        setName={setName}
        onAddUser={() => fetch({ search: debouncedSearch })}
      />
      <Table
        data={data}
        fetch={fetch}
        page={page}
        setPage={setPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        name={debouncedSearch}
      />
    </PageLayout>
  );
};

export default ColorsPage;
