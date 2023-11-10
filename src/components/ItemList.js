import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../store/cartSlice";

const ItemList = ({data, showRemoveButton}) => {

     const dispatch = useDispatch();

    const handleAddItem = (item) =>{
        //dispatch an action
        dispatch(addItem(item));
        console.log()
    } 

    const handleRemoveItem = (item) => {
        //removeItem action wiil be displath from here
        dispatch(removeItem(item));
    }
    return (
        <div className="">
            {
                data.map((item, index) => (
                    <div 
                        key={item.card.info.id}
                        className="p-2 m-[] border-gray-200 border-b-2 text-left flex justify-between"  
                    >
                        <div className="w-9/12">
                            <div className="py-2">
                                <span>{item.card.info.name}</span>
                                <span> - ₹
                                  {
                                        item.card.info.price ? 
                                        item.card.info.price / 100 : 
                                        item.card.info.defaultPrice / 100
                                    }
                                </span>
                            </div>
                            <p className="text-xs ">{item.card.info.description}</p> 
                        </div>
                        <div className="w-3/12 p-4 relative">
                            <div className="absolute top-4">
                                    <button 
                                        className="p-[2px] rounded-md bg-black text-white text-sm  hover:scale-[104%]"
                                        onClick={() => handleAddItem(item)}
                                        >Add +
                                    </button>
                            </div>
                           {<img src={CDN_URL + item.card.info.imageId} className="w-full rounded-md h-[5.15rem]"/>}
                        </div>
                        {/* if showRemoveButton is true then only show the button*/}
                        {
                            showRemoveButton
                            && 
                            <button>
                                <img 
                                    src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png" 
                                    alt="filled-trash"
                                    onClick={() => handleRemoveItem(item)}
                                    className="hover:scale-[110%]"
                                />
                                </button>}
                    </div>
                ))
            }
        </div>
        
    );
}

export default ItemList;