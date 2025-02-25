import Modal from "react-modal";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

Modal.setAppElement("#root");

const CartModal = ({ isOpen, onClose }) => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="p-6 bg-white w-96 mx-auto mt-20 border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Cart Items</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-2">
            <img src={item.image} alt={item.title} className="h-12 w-12 object-contain" />
            <p className="text-sm">{item.title}</p>
            <button onClick={() => removeFromCart(item.id)} className="bg-red-600 text-white px-2 py-1 rounded">
              Remove
            </button>
          </div>
        ))
      )}
      <button onClick={onClose} className="mt-4 bg-gray-600 text-white px-4 py-2 rounded">
        Close
      </button>
    </Modal>
  );
};

export default CartModal;
