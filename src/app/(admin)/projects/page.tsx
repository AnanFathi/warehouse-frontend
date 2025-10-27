import Filter from "@/components/admin/Projects/Filter";
import Table from "@/components/admin/Projects/Table";

export default async function Projects() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <Filter />
      <Table />
    </div>
  );
}
