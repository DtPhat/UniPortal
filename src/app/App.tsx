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
import SubjectGroups from "@/pages/admission/subject-group"
import AdminDashboard from "@/pages/admin"
import AdminLayout from "@/layouts/AdminLayout"
import UserTable from "@/pages/admin/users"
import InstitutionTable from "@/pages/admin/institutions"
import MajorTable from "@/pages/admin/majors"
import DepartmentTable from "@/pages/admin/departments"
import CreateUser from "@/pages/admin/users/create"
import EditUser from "@/pages/admin/users/edit"
function App() {

  return (
    <Routes>
      <Route path="/school" element={<SchoolLayout />}>
        <Route path=":schoolname" element={<School />} />
      </Route>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/news" element={<News />} />
        <Route path="/admission">
          <Route index element={<Admission />} />
          <Route path="subject-group" element={<SubjectGroups />} />
        </Route>
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/school/:schoolname" element={<School />} />
      </Route>
      <Route path="*" element={<Missing />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<UserTable />} />
        <Route path="users/:id" element={<CreateUser />} />
        <Route path="users/new" element={<CreateUser />} />

        <Route path="institutions" element={<InstitutionTable />} />
        <Route path="institutions/:id" element={<CreateUser />} />
        <Route path="institutions/new" element={<CreateUser />} />

        <Route path="departments" element={<DepartmentTable />} />
        <Route path="departments/:id" element={<CreateUser />} />
        <Route path="departments/new" element={<CreateUser />} />

        <Route path="majors" element={<MajorTable />} />
        <Route path="majors/:id" element={<CreateUser />} />
        <Route path="majors/new" element={<CreateUser />} />
      </Route>
    </Routes>
  )
}

export default App
