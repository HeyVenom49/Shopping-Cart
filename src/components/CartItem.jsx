// CartItem.jsx
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="border border-gray-200 rounded-md p-4 mb-4 flex items-center justify-between hover:bg-gray-50 transition duration-300">
      <div className="flex items-center space-x-4">
        <img src={item.image} alt="" className="w-24 h-24 rounded-md" />
        <div>
          <h1 className="text-lg font-semibold">{item.title}</h1>
          <p>{item.description}</p>
          <p className="text-lg font-semibold">${item.price}</p>
        </div>
      </div>
      <div>
        <button onClick={removeFromCart} className="text-red-500">
          <FcDeleteDatabase className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
