import SchoolLayout from "@/components/layout/SchoolLayout"
import School from "@/pages/school"
import { Route, Routes } from "react-router-dom"
import HomeLayout from "../components/layout/HomeLayout"
import Home from "../pages/home"
import Missing from "../pages/missing"
import News from "../pages/news"
import Admission from "@/pages/admission"
import Signin from "@/pages/signin"
import Signup from "@/pages/signup"
import Ranking from "@/pages/ranking"
import SubjectGroups from "@/pages/admission/subject-group"
import AdminDashboard from "@/pages/admin"
import AdminLayout from "@/components/layout/AdminLayout"
import UserTable from "@/pages/admin/users"
import InstitutionTable from "@/pages/admin/institutions"
import MajorTable from "@/pages/admin/majors"
import DepartmentTable from "@/pages/admin/departments"
import CreateUser from "@/pages/admin/users/create"
import UpdateUser from "@/pages/admin/users/update"
import ProtectedRoute from "@/components/layout/ProtectedRoute"
import CreateInstitution from "@/pages/admin/institutions/create"
import UpdateInstitution from "@/pages/admin/institutions/update"
import { roles } from "./constants"
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
      <Route element={<ProtectedRoute allowedRoles={[roles.ADMIN]} />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<UserTable />} />
          <Route path="users/:id" element={<UpdateUser />} />
          <Route path="users/new" element={<CreateUser />} />

          <Route path="institutions" element={<InstitutionTable />} />
          <Route path="institutions/:id" element={<UpdateInstitution />} />
          <Route path="institutions/new" element={<CreateInstitution />} />

          <Route path="departments" element={<DepartmentTable />} />
          <Route path="departments/:id" element={<CreateUser />} />
          <Route path="departments/new" element={<CreateUser />} />

          <Route path="majors" element={<MajorTable />} />
          <Route path="majors/:id" element={<CreateUser />} />
          <Route path="majors/new" element={<CreateUser />} />
        </Route>
      </Route>
      <Route path="*" element={<Missing />} />
    </Routes>
  )
}

export default App
