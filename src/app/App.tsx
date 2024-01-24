import SchoolLayout from "@/layouts/SchoolLayout"
import School from "@/pages/school"
import { Route, Routes } from "react-router-dom"
import HomeLayout from "../layouts/HomeLayout"
import Home from "../pages/home"
import Missing from "../pages/missing"

function App() {

  return (
    <Routes>
      <Route path="/school" element={<SchoolLayout />}>
        <Route path=":schoolname" element={<School />} />
      </Route>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/school/:schoolname" element={<School />} />
      </Route>
      <Route path="*" element={<Missing />} />
    </Routes>
  )
}

export default App
