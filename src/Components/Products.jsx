import { useDispatch } from "react-redux";
import { addItemToCart , calculateTotalPrice} from "../redux/reduse/cart";
import toast, { Toaster } from 'react-hot-toast';

function Product({items} ){

    const dispatch = useDispatch()

    const handleClick = ()=>{
        dispatch(addItemToCart(items))
        dispatch(calculateTotalPrice())

        toast.success("item has been added",{
            position: "top-right"
        })
    }
     



    return <div id="box" className="  border-2 border-black m-3 p-2 rounded  ">
            <img className=" rounded h-[150px]  " src={items.image}  />



            <div className=" flex justify-between pt-5">

            <h1>{items.title.substring(0,2)} </h1>
            <h1>{items.category} </h1>

            </div>
            <div className="flex justify-between mt-5">

            <h1 className="font-semibold ">${items.price} </h1>
            <button>
            <i onClick={handleClick} id="btn" class="text-3xl hidden fa-solid fa-circle-plus"></i>
            </button>

            </div>
        <Toaster/>
    </div>
}
export default Product;