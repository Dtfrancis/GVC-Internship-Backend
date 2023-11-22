const Header = () =>{
    return(
        <div className="fixed top-0  left-0 w-screen h-350 bg-blue-700">
            <h1 className="text-centertext text-white max-w-none shadow-sm justify-center"> CookUp</h1>
            <p className="text-white">Online Bake Shop</p>
            <div className="links flex justify-end mx-2 p-2 ">
            <p className="text-white mx-2 p-2">Login </p>
            <p className="text-white mx-2 p-2">Sign up</p>
            </div>            
        </div>
    );
}
export default Header;