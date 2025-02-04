import { Routes, Route } from "react-router-dom"
import { Home, Projects } from "../pages"

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
        </Routes>
    </>
  )
}
