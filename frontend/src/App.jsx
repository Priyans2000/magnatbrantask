import Layout from "./layout/layout";
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Home from "./pages/home";

const app=()=>{ 
  return(<>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    
    </Route>
  </Routes>
  </BrowserRouter>
  
  </>)

}
export default app;