import { Route,Routes } from "react-router-dom"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
function App(){
    return <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
    </Routes>
}
export default App