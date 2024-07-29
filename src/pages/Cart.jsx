import { useSelector,useDispatch } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import PriceCart from "../Components/PriceCart";
import { removeItemFromCart,calculateTotalPrice } from "../redux/reduse/cart";

function Cart() {

 const dispatch = useDispatch()
  const allItems = useSelector((state) => state.cart.items)

   const handleRemove=(data)=>{
    
    dispatch(removeItemFromCart(data))
    dispatch(calculateTotalPrice())

      toast.success("The item has been Deleted",{
        position: "top-right"
      })
  

   }

  return  <div>

    
   
  
    {
      allItems.length > 0 ?
    
    <div className="sm:flex gap-8 justify-center">

      <div className="sm:mr-36 ml-5 sm:ml-0 mb-20">


    {
      allItems.map((items) => {
        return <div className="border-2 items-center flex mt-5 gap-10 border-gray-400 px-4 py-5 w-[350px]  sm:w-[500px] h-[160px] rounded  ">
                <img className="w-[150px] h-[130px] rounded " src={items.image} />
                <div className="pt-5">
                  <p>{items.title} </p>
                  <h className="font-bold">{items.price}</h>
                  </div>
                  <i onClick={()=> handleRemove(items)} class="text-3xl  fa-solid fa-xmark"></i>
          </div>
          
        })
      }


      </div>
      <PriceCart/>
      </div>
      : 
      <p className="text-center">the Cart is Empty</p>
    }
    <Toaster/>
  </div>

}

export default Cart;