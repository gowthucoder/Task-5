import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import logo from "../assets/logo.png"; // Add a logo in the assets folder

const Navbar = ({ openCart }) => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 mr-2" />
        <h1 className="text-xl font-bold">Fake Store</h1>
      </div>
      <button onClick={openCart} className="bg-white text-blue-600 px-4 py-2 rounded">
        Cart ({cart.length})
      </button>
    </nav>
  );
};

export default Navbar;
