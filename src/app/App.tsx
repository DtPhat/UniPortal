import { Route, Routes } from "react-router-dom"
import RequiredAuth from "../components/RequiredAuth"
import Layout from "../layouts/Layout"
import Home from "../pages/home"
import Missing from "../pages/missing"

function App() {

  return (
    <Routes>

      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        {/* we want to protect these routes */}
        <Route element={<RequiredAuth />}>
          <Route path="/" element={<div></div>} />
        </Route>

        <Route element={<RequiredAuth />}>
        </Route>

        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  )
}

export default App
