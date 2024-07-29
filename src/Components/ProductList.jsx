
import axios from "axios"
import { useEffect,useState } from "react"
import Product from "./Products"
import ClipLoader from "react-spinners/ClipLoader";
import Header from "./Header";

function ProductList(){

    const [data, setData] = useState([])
    const [loading , setLoading] = useState(false)
    const [serachItem, setSearchItem] = useState("")

 const handleSearch = (event)=>{
    setSearchItem(event.target.value)

 }
    const getAllProducts=()=>{
        setLoading(true)
        axios.get("https://fakestoreapi.com/products")
        .then((response)=>{
            setData(response.data)
            setLoading(false)
        }).catch((error)=>{ 
            console.log(error)
        })
    }

    useEffect(()=>{
        getAllProducts()
    }, [])
    return <div >     
        <Header search={handleSearch} />
  
    {  loading === true ? <ClipLoader className="ml-[600px] mt-[200px] " loading={loading}/> : <div className="pt-32 px-10 grid sm:grid-cols-[250px_250px_250px_250px] grid-cols-[180px_180px]  sm:gap-5 justify-center ">
        {
            data.filter((products)=>{
                return serachItem.toLowerCase() == "" ? products : 
                products.title.toLowerCase().includes(serachItem.toLowerCase())
            }).map((item)=>{
                return <Product items={item}/>
            })
        }

    </div>
    }
      </div>
}
export default ProductList