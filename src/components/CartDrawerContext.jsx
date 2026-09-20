import { useDispatch, useSelector } from "react-redux";
import { X } from "lucide-react";
import { setCart } from "../store/actions/shoppingCartActions";
import { NavLink } from "react-router-dom";

function CartDrawerContext({ setisOpenCartCartDrawer }) {

    const dispatch = useDispatch();

    const cart = useSelector((state) => {
        console.log("CartDrawerContext", state.shopping.cart)
        return state.shopping.cart
    });

    const totalPrice = cart.reduce(
        (sum, item) => item.checked === true ? sum + item.product.price * item.count : sum,
        0
    );

    function deleteButton(productId) {
        const updatedCart = cart.filter((item) => item.product.id !== productId);
        dispatch(setCart(updatedCart));
    }

    return (
        <div
            className="
        hidden
        lg:flex
        fixed
        top-0
        right-0
        h-full
        w-[150px]
        bg-white
        shadow-lg
        z-50
        flex-col
    "
        >

            <div className="p-4 flex flex-col gap-3 border-b border-gray-200">

                <NavLink
                    onClick={() => setisOpenCartCartDrawer(false)}
                    to={"/shoppingCard"}
                    className="flex items-center justify-center border border-brand-blue text-brand-blue text-sm font-bold py-3 rounded-md">
                    Sepete Git
                </NavLink>

                <div className="flex flex-col justify-between items-center mt-2">
                    <p className="font-bold text-sm text-brand-dark">Ara Toplam</p>
                    <p className="font-bold text-brand-blue">{totalPrice.toFixed(2)} TL</p>
                </div>

            </div>

            <div className="flex-1 overflow-y-auto min-h-0 p-4 flex flex-col gap-4">
                {cart.map((item) => (
                    <div
                        key={item.product.id}
                        className="flex flex-col items-center gap-2 pb-4 border-b border-gray-100 last:border-b-0"
                    >
                        <img
                            src={item.product.images[0].url}
                            alt={item.product.name}
                            className="w-full h-24 object-cover rounded-md"
                        />

                        <p className="text-xs text-brand-gray text-center line-clamp-2">
                            {item.product.name}
                        </p>

                        <div className="flex items-center justify-between w-full">
                            <span className="text-sm font-bold text-brand-blue">
                                x{item.count}
                            </span>

                            <button
                                onClick={() => deleteButton(item.product.id)}
                                className="p-1.5 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                            >
                                <X size={14} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-4 border-t border-gray-200">
                <button
                    onClick={() => setisOpenCartCartDrawer(false)}
                    className="w-full flex items-center justify-center gap-2 text-sm text-brand-gray py-2 hover:bg-gray-100 rounded-md">
                    Küçült
                </button>
            </div>

        </div>
    );
}

export default CartDrawerContext;