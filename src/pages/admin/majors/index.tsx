import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";
import { User } from "@/constants/data";
import { Plus } from "lucide-react";
import { columns } from "./columns";
import { useNavigate } from "react-router-dom";
import { users } from "@/constants/data";
import Pagination from "@/components/common/Pagination";
import { useEffect, useState } from "react";
import { useGetDepartmentsQuery, useGetMajorsQuery } from "@/app/services/majors";


export const MajorTable = () => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const { data, isLoading } = useGetMajorsQuery({ page: page, size: 10, sortObj:'id', order: "asc"})
  const majors = data?.majors || []

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  useEffect(() => {
    setTotalPage(data?.totalPages || 1)
  }, [data]);

  const navigate = useNavigate();
  return (
    <div className="flex flex-col py-4 gap-4">
      <div className="flex items-start justify-between">
        <h1 className="text-3xl font-bold">Manage Majors</h1>
        <Button
          className="text-xs md:text-sm"
          onClick={() => navigate(`/admin/majors/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={majors} />
      <Pagination count={totalPage} page={page} handleChange={handlePageChange} />
    </div>
  );
};

export default MajorTable