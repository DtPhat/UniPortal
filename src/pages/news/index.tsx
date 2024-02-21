import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
const News = () => {
  const style = {
    filterHover: "text-blue-700 text-lg pr-1 hover:pr-5 ease-out duration-300"  
};
  return (
    <div className="p-8">
      <Card className="w-30 p-2 mb-5 hover:bg-slate-200">
        <div className="flex">
          <img
            src="https://emeritus.org/wp-content/uploads/2023/11/tech.png"
            className="w-100 h-80 object-cover"
          />
          <div className="flex flex-col ml-4">
            <CardHeader>
              <CardTitle className="text-4xl">
                Technology Intelligence
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xl" style={{ display: "flow" }}>
              Something here
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className={style.filterHover}>See more</span>
                <ArrowRight />
              </div>
            </CardContent>
          </div>
        </div>
      </Card>

      <section className="grid grid-cols-3 gap-4">
        <Card className="w-300 hover:bg-slate-200">
          <img src="https://imagev3.vietnamplus.vn/w1000/Uploaded/2024/lepz/2023_11_13/ttxvn-vovinam-5519.jpg.webp" />
          <CardHeader>
            <CardTitle className="text-3xl">Vovinam Performance</CardTitle>
          </CardHeader>
          <CardContent style={{ display: "flow" }}>
            Something here
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className={style.filterHover}>See more</span>
              <ArrowRight />
            </div>
          </CardContent>
        </Card>

        <Card className="w-300 hover:bg-slate-200">
          <img src="https://imagev3.vietnamplus.vn/w1000/Uploaded/2024/lepz/2023_11_13/ttxvn-vovinam-5519.jpg.webp" />
          <CardHeader>
            <CardTitle className="text-3xl">Vovinam Performance</CardTitle>
          </CardHeader>
          <CardContent style={{ display: "flow" }}>
            Something here
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className={style.filterHover}>See more</span>
              <ArrowRight />
            </div>
          </CardContent>
        </Card>
        <Card className="w-300 hover:bg-slate-200">
          <img src="https://imagev3.vietnamplus.vn/w1000/Uploaded/2024/lepz/2023_11_13/ttxvn-vovinam-5519.jpg.webp" />
          <CardHeader>
            <CardTitle className="text-3xl">Vovinam Performance</CardTitle>
          </CardHeader>
          <CardContent style={{ display: "flow" }}>
            Something here
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className={style.filterHover}>See more</span>
              <ArrowRight />
            </div>
          </CardContent>
        </Card>

        <Card className="w-300 hover:bg-slate-200">
          <img src="https://alumninetwork.rmit.edu.vn/wp-content/uploads/formidable/26/news-rmit-class-of-2021-graduates-with-pride-at-its-saigon-south-campus-1.jpg" />
          <CardHeader>
            <CardTitle className="text-3xl">RMIT Pioneer</CardTitle>
          </CardHeader>
          <CardContent style={{ display: "flow" }}>
            Something here
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className={style.filterHover}>See more</span>
              <ArrowRight />
            </div>
          </CardContent>
        </Card>

        <Card className="w-300 hover:bg-slate-200">
          <img src="https://alumninetwork.rmit.edu.vn/wp-content/uploads/formidable/26/news-rmit-class-of-2021-graduates-with-pride-at-its-saigon-south-campus-1.jpg" />
          <CardHeader>
            <CardTitle className="text-3xl">RMIT Pioneer</CardTitle>
          </CardHeader>
          <CardContent style={{ display: "flow" }}>
            Something here
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className={style.filterHover}>See more</span>
              <ArrowRight />
            </div>
          </CardContent>
        </Card>

        <Card className="w-300 hover:bg-slate-200">
          <img src="https://alumninetwork.rmit.edu.vn/wp-content/uploads/formidable/26/news-rmit-class-of-2021-graduates-with-pride-at-its-saigon-south-campus-1.jpg" />
          <CardHeader>
            <CardTitle className="text-3xl">RMIT Pioneer</CardTitle>
          </CardHeader>
          <CardContent style={{ display: "flow" }}>
            Something here
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className={style.filterHover}>See more</span>
              <ArrowRight />
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};
export default News;
