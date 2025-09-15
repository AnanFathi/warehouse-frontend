import Filter from "@/components/admin/Admins/Filter";
import Table from "@/components/admin/Admins/Table";

export default async function Admins() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <Filter />
      <Table />
    </div>
  );
}
