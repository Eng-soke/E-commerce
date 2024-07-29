import { useSelector } from "react-redux"
function PriceCart(){
    const price = useSelector((state)=>state.cart.totalPrice)
    const totalQuantity = useSelector((state)=> state.cart.items)
    return <div className="w-[300px] h-[300px] sm:fixed mt-5 p-4 ml-10 sm:ml-0 mb-10 sm:mb-0  sm:right-24 border-2 border-gray-400 ">
            <h1>Total quantitty</h1>
            <h1 className="font-bold">{totalQuantity.length} </h1>
            <h1 className="mt-8">Total Price</h1>
            <h1 className="font-bold pt-2">${price} </h1>
            <button className="bg-primaryColor px-24 py-2 mt-10 text-white ">Pay Now</button>
    </div>
}
export default PriceCart