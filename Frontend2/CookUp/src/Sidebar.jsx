import { DiAptana } from "react-icons/di";
import { MdPermIdentity, MdHouse, MdOutlineMonetizationOn,MdStyle,MdAddShoppingCart } from "react-icons/md";
const Sidebar = () =>{
    return (
        <div className="fixed top-20 left-0 mx-0 p-2 h-screen flex flex-col bg-blue-700 text-white shadow text-centertext items-center">
            <SidebarIcon icon={<MdHouse/>}/>
            <a href="/">Home </a>
            <SidebarIcon icon={<MdPermIdentity/>}/>
            <a href="/create">Account</a>
            <SidebarIcon icon={<MdOutlineMonetizationOn/>}/>
            <a href="/create">Payment</a>
            <SidebarIcon icon={<MdStyle/>}/>
            <a href="/create">Services</a> 
            <SidebarIcon icon={<MdAddShoppingCart/>}/>
            <a href="/create">Products</a>
             
           
                
        
        </div>
        
        
    );
};
const SidebarIcon = ({icon})=> {
    return(
        <div className="sidebar-icon">
            {icon}
        </div>
    );
}
export default Sidebar