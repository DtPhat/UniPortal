import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import Stars5 from "./Stars5";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import ExpandableArea from "./ExpandableArea";
import LinkText from "./LinkText";
import { Bookmark } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface InstitutionCard {
  id: number,
  name: string,
  code: string,
  image?: string,
}

const InstitutionCard = ({name, code, image} : InstitutionCard) => {
  const [tabs, setTabs] = useState<"introduction" | "admission" | "contact">(
    "introduction"
  );
  const style = {
    cardHover:
      "hover:cursor-pointer hover:bg-slate-100 hover:border-slate-300 dark:hover:border-slate-700 w-full",
    tabs: `py-1 gap-4 px-8 text-lg text-slate-500 hover:text-slate-900 `,
    chosenTabs: "text-slate-900 border-b-2 border-accent font-semibold",
  };
  const description =
    "Trường Đại học FPT - trường đào tạo và cung cấp nguồn nhân lực chất lượng cao thuộc ngành Công nghệ thông tin (Chuyên ngành Kỹ thuật phần mềm, An toàn thông tin, Thiết kế Mỹ thuật số), Quản trị kinh doanh (Chuyên ngành Quản trị kinh doanh, Kinh doanh quốc tế, Quản trị du lịch và lữ hành, Quản trị Khách sạn, Truyền thông đa phương tiện), Ngôn ngữ Anh, Ngôn ngữ Hàn, Ngôn ngữa Nhật cho các doanh nghiệp trong nước, các tập đoàn nước ngoài và doanh nghiệp khởi sự từ sinh viên Đại học FPT.";
  // const descriptions = [
  //   "Trường Đại học FPT - trường đào tạo và cung cấp nguồn nhân lực chất lượng cao thuộc ngành Công nghệ thông tin (Chuyên ngành Kỹ thuật phần mềm, An toàn thông tin, Thiết kế Mỹ thuật số), Quản trị kinh doanh (Chuyên ngành Quản trị kinh doanh, Kinh doanh quốc tế, Quản trị du lịch và lữ hành, Quản trị Khách sạn, Truyền thông đa phương tiện), Ngôn ngữ Anh, Ngôn ngữ Hàn, Ngôn ngữa Nhật cho các doanh nghiệp trong nước, các tập đoàn nước ngoài và doanh nghiệp khởi sự từ sinh viên Đại học FPT.",
  //   "Admission: ",
  //   "Contact:  ",
  // ];

  const navigate = useNavigate();
  return (
    <Card className="bg-slate-50/50">
      <div className="flex justify-between h-[7.5rem]">
        <div className="p-4 flex gap-4 ">
          <img
            src={image}
            alt=""
            className="rounded w-24 h-24 border-2 object-fill"
          />
          <div className="flex flex-col gap-1">
            <LinkText navigateTo="/school/fpt" style="text-lg">
              {name}
            </LinkText>
            {/* <Stars5 rating={3.2} /> */}
            <div className="text-black/70 text-base font-semibold">
              Code: <span className="">{code}</span>
            </div>
            <button className="flex items-center text-base gap-1 group text-gray-500 pt-2">
              <Bookmark
                size={18}
                className="group-hover:fill-accent text-accent"
              />
              <span className="group-hover:text-accent group-hover:font-semibold">
                Add to My List
              </span>
            </button>
            {/* <h2 className="text-sm">Code: FPT</h2>
            <p className="text-sm">Address: Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh</p> */}
          </div>
        </div>
        <Button
          variant="ghost"
          className="text-base text-gray-500 flex items-center gap-1 m-2"
          onClick={() => navigate("/school/fpt")}
        >
          <span>Go to school page</span>
          <ArrowRight size={16} className="pt-0.5" />
        </Button>
      </div>
      {/* <Separator orientation="horizontal"/> */}
      <div className="border-b-2 flex">
        <button
          className={`${style.tabs} ${
            tabs == "introduction" ? style.chosenTabs : ""
          }`}
          onClick={() => setTabs("introduction")}
        >
          Introduction
        </button>
        <button
          className={`${style.tabs} ${
            tabs == "admission" ? style.chosenTabs : ""
          }`}
          onClick={() => setTabs("admission")}
        >
          Admission
        </button>
        <button
          className={`${style.tabs} ${
            tabs == "contact" ? style.chosenTabs : ""
          }`}
          onClick={() => setTabs("contact")}
        >
          Contact
        </button>
      </div>
      <CardContent className="py-2 pb-4 px-8 ">
        <div className="">
          <ExpandableArea text={description} limit={300} />
        </div>
        {/* {tabs === 'introduction' && (
      <p className=''>
      <ExpandableArea
        text={descriptions[0]}
        limit={300}
      />
      </p>
    )}
    {tabs === 'admission' && (
      <p className=''>
      <ExpandableArea
        text={descriptions[1]}
        limit={300}
      />
      </p>
    )}
    {tabs === 'contact' && (
      <p className=''>
      <ExpandableArea
        text={descriptions[2]}
        limit={300}
      />
      </p>
    )}
   */}
      </CardContent>
    </Card>
  );
};

export default InstitutionCard;
