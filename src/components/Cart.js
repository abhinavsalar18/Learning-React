import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const handleCLearCart = () => {
        // we will dispatch clearCart action here
        dispatch(clearCart());
    }
    const cartItems = useSelector((store) => store.cart.item);
    return (
        
            <div className="m-4 p-4 text-center">
                <div className="">
                    <h1 className="font-bold text-2xl m-2">Cart</h1>
                    { 
                        cartItems.length != 0 ? 
                        (
                            <button 
                                className="bg-black text-white rounded m-2 mb-4 p-[4px] hover:scale-[102%]"
                                onClick={handleCLearCart}
                                > Clear Cart
                            </button>
                        ) : (
                            <h1>Cart is empty! Feeling hungry let's find something delicious😋😋!!</h1>
                        )
                    }
                </div>
                {/* {`bg-blue-500 ${isConditionMet ? 'text-white' : 'text-gray-800'} p-4`} */}
                <div className={`${cartItems.length != 0 ? "w-6/12 m-auto border border-gray-100 rounded" : ""}`}>
                    
                    <ItemList  data={cartItems} showRemoveButton={true}/>
                </div>
            </div>

    );
}
export default Cart;