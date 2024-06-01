
import ItemList from "./ItemList";
const RestaurantCategory = (props) => {
    const {data, showItems, showIndex, setShowIndex, setShowIndex2} = props;
   
    const handleClick = () => {
        setShowIndex2();
    }
   
    return (
        <div>
            <div className="text- w-6/12 mx-auto my-4 p-4 border-b-[15px] shadow-lg border-gray-100">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text">{data.title}({data.itemCards.length})</span>
                    <span>🔽</span>
                </div>
                
                {showItems && <ItemList data={data.itemCards}/>}
            </div>
            
             
        </div>
    );
}


export default RestaurantCategory;