import Stars5 from "@/components/Stars5"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/navigation-tabs"
import { Bookmark } from "lucide-react"

const School = () => {
  return (
    <section className="border h-screen">
      <img src='/banner/fpt.png' className="w-full h-[10rem] object-cover" />
      <div className="flex justify-between h-[10rem]">
        <div className="p-4 flex gap-4 ">
          <img src='/logo/fpt.jpg' alt="" className="rounded w-32 h-32 border-2 object-contain" />
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Trường đại học FPT (FPTU) </h2>
            <Stars5 rating={1.1} size="large" />
            <button className="flex items-center text-lg gap-1 group text-gray-500 pt-2">
              <Bookmark size={24} className="group-hover:fill-sky-600 text-sky-700" />
              <span className="group-hover:text-sky-700 group-hover:font-semibold">Add to My List</span>
            </button>
            {/* <h2 className="text-sm">Code: FPT</h2>
            <p className="text-sm">Address: Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh</p> */}
          </div>
        </div>
      </div>
      {/* <Separator orientation="horizontal"/> */}

      <div>
        <Tabs defaultValue="details">
          <TabsList className="flex gap-2">
            <TabsTrigger value="details">School details</TabsTrigger>
            <TabsTrigger value="programs">Programs of study</TabsTrigger>
            <TabsTrigger value="methods">Admission methods</TabsTrigger>
          </TabsList>
          <TabsContent value="details">School details here</TabsContent>
          <TabsContent value="programs">Major list here</TabsContent>
          <TabsContent value="methods">Admission here</TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default School