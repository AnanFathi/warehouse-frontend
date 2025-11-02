import Filter from "@/components/admin/Sessions/Filter";
import Table from "@/components/admin/Sessions/Table";

export default async function Project({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <Filter />
      <Table />
    </div>
  );
}
