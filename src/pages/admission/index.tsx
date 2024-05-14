import { Heading } from "@/components/common/Heading";
import Pagination from "@/components/common/Pagination";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
const AdmissionInfo = () => {
  const navigate = useNavigate()
  return (
    <div className="py-2 space-y-4">
      <Heading title="Thông tin tuyển sinh" description="" />
      <div className="flex flex-col gap-4">
        <Card
          onClick={() => navigate('/admission-info/major-codes')}
          className="group text-lg font-semibold hover:shadow-md rounded-lg overflow-hidden cursor-pointer"
        >
          <CardHeader>
            <CardTitle className="group-hover:text-accent">
              {'Danh mục toàn bộ mã ngành tương ứng với các ngành'}
            </CardTitle>
            <CardDescription className="text-gray-500">
              Cập nhật lần cuối: 09/03/2024
            </CardDescription>
          </CardHeader>
        </Card>

        <Card
          onClick={() => navigate('/admission-info/subject-groups')}
          className="group text-lg font-semibold hover:shadow-md rounded-lg overflow-hidden cursor-pointer"
        >
          <CardHeader>
            <CardTitle className="group-hover:text-accent">
              {'Danh sách các khối thi và tổ hợp xét tuyển đại học'}
            </CardTitle>
            <CardDescription className="text-gray-500">
              Cập nhật lần cuối: 03/03/2024
            </CardDescription>
          </CardHeader>
        </Card>

        <Card
          onClick={() => navigate('/admission-info/methods')}
          className="group text-lg font-semibold hover:shadow-md rounded-lg overflow-hidden cursor-pointer"
        >
          <CardHeader>
            <CardTitle className="group-hover:text-accent">
              {'Tổng hợp các phương thức xét tuyển'}
            </CardTitle>
            <CardDescription className="text-gray-500">
              Cập nhật lần cuối: 25/02/2024
            </CardDescription>
          </CardHeader>
        </Card>

      </div>
      <Pagination count={1} page={1} handleChange={() => { }} />
    </div>
  );
};
export default AdmissionInfo;
