import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Header({search} ){

    const numberOfItem = useSelector((state)=> state.cart.items)




    const [handlePush, setHandlePush] = useState(false)
        const handleClick = ()=>{
            setHandlePush(true);
        }
        const handleOff = ()=>{
            setHandlePush(false);
        }

    return <div className="bg-primaryColor sm:flex justify-between fixed w-full py-5 sm:px-20 items-center  font-farta text-thirdColor  ">
            <h1 className="sm:text-5xl text-4xl pl-3 sm:pl-0 text-secondColor ">eSuuQ</h1>
            <ul style={{display: handlePush == true ? "block": "" }} className="sm:flex hidden pt-16 pl-5 sm:pl-0 sm:pt-0 gap-10 text-2xl">
                <li>Home</li>
                <li>About</li>
            </ul>

                <form>
                    <input  onChange={search}  className="sm:w-[250px] absolute  right-[80px] top-6  text-black sm:h-[30px] h-[40px] rounded sm:mr-20 "   type="text" placeholder="Search  " />
                    <i onClick={handleClick} style={{display: handlePush == true ? "none": "" }} class="absolute  right-5 top-5 text-4xl sm:hidden  fa-solid fa-bars"></i>
                    <i style={{display: handlePush == true ? "block": "" }} onClick={handleOff} class="absolute hidden  right-5 top-5 text-5xl  fa-solid fa-xmark"></i>
                </form>
                <Link to="/cart">
                 <h1><i style={{display: handlePush == true ? "block": "" }} class=" pt-14  sm:pt-0 pl-5 sm:pl-0 sm:flex  absolute top-4 sm:right-3 hidden text-5xl text-secondColor fa-solid fa-cart-shopping">{numberOfItem.length}</i> </h1>
                </Link>
    </div>
}
export default Header;