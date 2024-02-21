import SchoolLayout from "@/layouts/SchoolLayout"
import School from "@/pages/school"
import { Route, Routes } from "react-router-dom"
import HomeLayout from "../layouts/HomeLayout"
import Home from "../pages/home"
import Missing from "../pages/missing"
import News from "../pages/news"
import Admission from "@/pages/admission"
import Signin from "@/pages/signin"
import Signup from "@/pages/signup"
import Ranking from "@/pages/ranking"
function App() {

  return (
    <Routes>
      <Route path="/school" element={<SchoolLayout />}>
        <Route path=":schoolname" element={<School />} />
      </Route>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/signin"  element={<Signin />} />
        <Route path="/signup"  element={<Signup />} />
        <Route path="/news" element={<News />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/ranking"  element={<Ranking />} />
        <Route path="/school/:schoolname" element={<School />} />
      </Route>
      <Route path="*" element={<Missing />} />
    </Routes>
  )
}

export default App
