import { Routes, Route } from "react-router-dom"
import { Home, About, Projects, Contact } from "../pages"

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="about" element={<About />}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="contact" element={<Contact/>}/>
        </Routes>
    </>
  )
}
