import Navbar from "./Navbar/Navbar";
import Footer from "./footer/Footer";
const Layout=({children})=>{
   return<>
   <Navbar></Navbar>
   {children}
   <Footer></Footer>
   </>
}
export default Layout;