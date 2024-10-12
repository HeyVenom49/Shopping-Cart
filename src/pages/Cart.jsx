import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {cart.length > 0 ? (
        <div className="grid max-w-6xl grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cart.map((item, index) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-lg p-6 mb-6 hover:shadow-xl transition-shadow duration-300"
              >
                <CartItem item={item} itemIndex={index} />
              </div>
            ))}
          </div>

          <div className="bg-white shadow-md rounded-md p-6">
            <div className="mb-6">
              <div className="text-xl font-semibold mb-4">Your Cart</div>
              <div className="text-lg font-semibold">Summary</div>
              <p className="mt-2">Total Items: {cart.length}</p>
            </div>
            <div>
              <p className="text-lg font-semibold mb-4">
                Total Amount: ${totalAmount}
              </p>
              <Link to="/checkout">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded">
                  CheckOut Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-6">Cart Empty</h1>
          <Link to="/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
