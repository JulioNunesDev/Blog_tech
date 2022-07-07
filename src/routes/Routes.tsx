import { Route, Routes } from "react-router-dom"
import Home from "../page/Home/Home"

const RoutesGet = () =>{
    return (
        <Routes>
            <Route  path="/" element={<Home />}/>
            <Route  path="/categorias" element={''}/>
            <Route  path="/blog" element={''}/>
            <Route  path="/lifestyles" element={''}/>
            <Route  path="/contact" element={''}/>
            <Route  path="/blog" element={''}/>
            <Route  path="/404" element={''}/>
            <Route  path="*" element={<Home />}/>

        </Routes>
    )
}

export default RoutesGet