import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/navigation-tabs"
import { Bookmark } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const School = () => {
  const schoolIntroduction = `Chính thức thành lập ngày 8/9/2006 theo Quyết định của Thủ tướng Chính phủ, Trường Đại học FPT trở thành trường đại học đầu tiên của Việt Nam do một doanh nghiệp đứng ra thành lập với 100% vốn đầu tư từ Tập đoàn FPT.
Sự khác biệt của Trường Đại học FPT so với các trường đại học khác là đào tạo theo hình thức liên kết chặt chẽ với các doanh nghiệp, gắn đào tạo với thực tiễn, với nghiên cứu – triển khai và các công nghệ hiện đại nhất. Triết lý và phương pháp giáo dục hiện đại; Đào tạo con người toàn diện, hài hòa; Chương trình luôn được cập nhật và tuân thủ các chuẩn công nghệ quốc tế; Đặc biệt chú trọng kỹ năng ngoại ngữ; Tăng cường đào tạo quy trình tổ chức sản xuất, kỹ năng làm việc theo nhóm và các kỹ năng cá nhân khác là những điểm sẽ đảm bảo cho sinh viên tốt nghiệp có những cơ hội việc làm tốt nhất sau khi ra trường.
Trường hiện đang đào tạo các nhóm ngành CNTT, Kinh tế, Ngôn ngữ, Mỹ thuật ứng dụng.
Tất cả sinh viên Đại học FPT đều phải trải qua 1 năm hoàn thiện tiếng Anh, để có thể theo học chương trình chính khoá được đào tạo bằng tiếng Anh. Trong một năm đầu tiên học tiếng Anh, sinh viên được gửi sang các trường đại học ở các nước nói tiếng Anh (trong vòng 2 tháng) để thật sự lưu loát ngôn ngữ bắt buộc cho học tập và làm việc sau này.
Sau 5 học kỳ đầu tiên, với tiếng Anh và các kỹ năng cơ bản của ngành học, sinh viên được gửi vào làm thực tập sinh trong các công ty thành viên của tập đoàn FPT trong vòng 4 đến 8 tháng. Tại đây sinh viên được huấn luyện thực tế về nghề nghiệp tương lai, tham gia vào các dự án thật (real project) và có thể được trả lương. Đó là giai đoạn On-the-Job-Training (OJT) đặc thù của trường đại học FPT. Một số ngành như tiếng Nhật, Quản trị Khách sạn, sinh viên đi OJT tại Nhật Bản, tại Malaysia,…
Tỉ lệ việc làm của trường cũng đạt được con số ấn tượng. 96% sinh viên Đại học FPT có việc làm sau khi tốt nghiệp với mức lương bình quân khoảng 8,3 triệu đồng/người/tháng, 100% sinh viên có cơ hội làm việc ở FPT sau khi tốt nghiệp; 19% cựu sinh viên làm việc tại nước ngoài (số liệu năm 2017).`

  return (
    <section className="border rounded overflow-hidden my-2">
      <img src='/banner/fpt.png' className="w-full h-[10rem] object-cover" />
      <div className="flex justify-between h-[10rem]">
        <div className="p-4 flex gap-4 ">
          <img src='/logo/fpt.jpg' alt="" className="rounded w-32 h-32 border-2 object-contain" />
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold pl-1">Trường đại học FPT</h2>
            <div className="text-black/70 text-xl font-semibold pl-1">
              Code: <span className="">FPTU</span>
            </div>
            <button className="flex items-center text-lg gap-1 group text-gray-500 pt-2">
              <Bookmark size={24} className="group-hover:fill-sky-600 text-accent" />
              <span className="group-hover:text-accent group-hover:font-semibold">Add to My List</span>
            </button>
            {/* <h2 className="text-sm">Code: FPT</h2>
            <p className="text-sm">Address: Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh</p> */}
          </div>
        </div>
      </div>
      {/* <Separator orientation="horizontal"/> */}

      <div>
        <Tabs defaultValue="details" className="pb-4">
          <TabsList className="flex gap-2">
            <TabsTrigger value="details">School details</TabsTrigger>
            <TabsTrigger value="programs">Programs of study</TabsTrigger>
            <TabsTrigger value="methods">Admission methods</TabsTrigger>
          </TabsList>
          <TabsContent value="details">
            <Accordion type="multiple" defaultValue={["introduction", "contact"]}>
              <AccordionItem value="introduction">
                <AccordionTrigger className="text-lg">Introduction</AccordionTrigger>
                <AccordionContent className="">
                  <div className="whitespace-pre-wrap text-base">
                    {schoolIntroduction}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="contact">
                <AccordionTrigger className="text-lg">Contact</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-base">
                  <div>
                    <p>Phone: <span className="font-semibold">+84 24 7300 1866</span></p>
                    <p>Email: <span className="font-semibold">daihocfpt@fpt.edu.vn</span></p>
                    <p>Phone: <span className="font-semibold">Education Zone, Hoa Lac Hi-tech Park, Km29, Thang Long Boulevard, Thach Hoa, Thach That, Ha Noi, Vietnam</span></p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          <TabsContent value="programs">Major list here</TabsContent>
          <TabsContent value="methods">Admission here</TabsContent>
        </Tabs>
      </div>
    </section >
  )
}

export default School