
import { Outlet } from "react-router-dom"
import TopMenu from "../components/Topmenu";
import Footer from "../components/footer";

const Layout=()=>{ 
    return(<>

    <TopMenu/>
     <Outlet/>
    <Footer/>
    </>)
  
  }
  export default Layout;