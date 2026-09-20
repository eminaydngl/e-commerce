import { Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../store/actions/shoppingCartActions";
import Header from "../layout/Header";
import BestsellerProducts from "../components/ProductDetail/BestsellerProducts";

function ShopingCartPage() {

    const dispatch = useDispatch();

    const cart = useSelector((state) => {
        console.log("ShopingCartPage", state.shopping.cart);
        return state.shopping.cart || [];
    });

    const plusFunction = (item) => {
        const newCart = cart.map((cartItem) => {
            if (cartItem.product.id === item.product.id) {
                return { ...cartItem, count: cartItem.count + 1 };
            }
            return cartItem;
        });
        dispatch(setCart(newCart));
    };

    const MinusFunction = (item) => {
        const newCart = cart.map((cartItem) => {
            if (cartItem.product.id === item.product.id) {
                return { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 };
            }
            return cartItem;
        });
        dispatch(setCart(newCart));
    };

    const toggleChecked = (item) => {
        const newCart = cart.map((cartItem) => {
            if (cartItem.product.id === item.product.id) {
                return { ...cartItem, checked: !cartItem.checked };
            }
            return cartItem;
        });
        dispatch(setCart(newCart));
    };

    function deleteButton(productId) {
        const updatedCart = cart.filter((item) => item.product.id !== productId);
        dispatch(setCart(updatedCart));
    }

    const checkedItems = cart.filter((item) => item.checked);

    const productsTotal = checkedItems.reduce(
        (sum, item) => sum + item.product.price * item.count,
        0
    );

    const shippingTotal = 0;
    const discount = 0;
    const grandTotal = productsTotal + shippingTotal - discount;

    return (
        <>
            <Header />

            {cart.length === 0 && <BestsellerProducts />}

            <section className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto px-4 py-10 pb-28 lg:pb-10">

                <div className="flex-1 w-full">

                    {cart.map((item) => (
                        <div key={item.product.id}>

                            <div className="flex flex-col md:flex-row md:items-center gap-4 py-5 border-b border-gray-200">

                                <div className="flex items-center gap-4 shrink-0">
                                    <input
                                        type="checkbox"
                                        checked={item.checked}
                                        onChange={() => toggleChecked(item)}
                                        className="w-5 h-5 accent-brand-blue"
                                    />
                                    <img
                                        className="w-[100px] h-[80px] object-cover rounded-md"
                                        src={item.product.images[0].url}
                                        alt=""
                                    />
                                </div>

                                <div className="min-w-0 flex-1 max-w-[300px]">
                                    <p className="text-sm text-brand-dark break-words">
                                        {item.product.description}
                                    </p>
                                </div>

                                <div className="flex items-center gap-6 md:gap-10 shrink-0 ml-auto">
                                    <p className="text-sm font-bold text-brand-gray whitespace-nowrap">
                                        Kargo :
                                        <span className="text-brand-blue ml-1">Ücretsiz</span>
                                    </p>
                                    <p className="text-lg font-bold text-brand-dark whitespace-nowrap">
                                        {(item.product.price * item.count).toFixed(2)} TL
                                    </p>
                                </div>

                            </div>

                            <div className="flex items-center gap-3 md:pl-[152px] py-3">
                                <button
                                    onClick={() => MinusFunction(item)}
                                    className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100">
                                    <Minus size={14} />
                                </button>
                                <p className="w-6 text-center font-bold text-brand-dark">{item.count}</p>
                                <button
                                    onClick={() => plusFunction(item)}
                                    className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100">
                                    <Plus size={14} />
                                </button>
                                <button
                                    onClick={() => deleteButton(item.product.id)}
                                    className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100 ml-2">
                                    <Trash2 size={14} />
                                </button>
                            </div>

                        </div>
                    ))}

                </div>

                {/* MASAÜSTÜ: sağ tarafta sabit özet kutusu */}
                {cart.length > 0 && (
                    <div className="hidden lg:flex w-[280px] shrink-0 border border-gray-200 rounded-md p-5 flex-col gap-4 h-fit">

                        <button
                            disabled
                            className="w-full bg-brand-blue text-white font-bold text-sm py-3 rounded-md opacity-90"
                        >
                            Siparişi Oluştur
                        </button>

                        <h3 className="font-bold text-base text-brand-dark border-b border-gray-200 pb-3">
                            Sipariş Özeti
                        </h3>

                        <div className="flex flex-col gap-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-brand-gray">Ürünlerin Toplamı</span>
                                <span className="text-brand-dark font-semibold">{productsTotal.toFixed(2)} TL</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-brand-gray">Kargo Toplam</span>
                                <span className="text-brand-dark font-semibold">{shippingTotal.toFixed(2)} TL</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-brand-gray">İndirim</span>
                                <span className="text-brand-blue font-semibold">-{discount.toFixed(2)} TL</span>
                            </div>
                        </div>

                        <div className="flex justify-between border-t border-gray-200 pt-3">
                            <span className="font-bold text-brand-dark">Toplam</span>
                            <span className="font-bold text-lg text-brand-dark">{grandTotal.toFixed(2)} TL</span>
                        </div>

                    </div>
                )}

            </section>

            {/* MOBİL: alta sabitlenmiş bar */}
            {cart.length > 0 && (
                <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex items-center justify-between gap-4 z-40">

                    <div className="flex flex-col">
                        <span className="font-bold text-lg text-brand-dark">{grandTotal.toFixed(2)} TL</span>
                        <span className="text-xs text-brand-blue font-semibold">Kargo Bedava</span>
                    </div>

                    <button
                        disabled
                        className="flex-1 max-w-[220px] bg-brand-blue text-white font-bold text-sm py-3 rounded-md opacity-90"
                    >
                        Sepeti Onayla
                    </button>

                </div>
            )}

        </>
    );
}

export default ShopingCartPage;