import Header from "../layout/Header"
import { MapPin, Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addressGetThunk, deleteAddressThunk, orderThunk } from "../store/actions/thunks";
import { setAddress } from "../store/actions/shoppingCartActions";
import AddressForm from "../components/AddressForm";
import KreditCard from "../components/payment/KreditCard";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function PaymentPage() {

    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

    const [editingAddress, setEditingAddress] = useState(null);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const user = useSelector((state) => state.client.user);

    const cart = useSelector((state) => state.shopping.cart || []);

    const selectedCard = useSelector((state) => state.shopping.payment);

    const addressList = useSelector((state) => state.client.addressList);

    const selectedAddress = useSelector((state) => state.shopping.address);

    const checkedItems = cart.filter((item) => item.checked);

    const productsTotal = checkedItems.reduce(
        (sum, item) => sum + item.product.price * item.count,
        0
    );

    const shippingTotal = 0;

    const discount = 0;

    const grandTotal = productsTotal + shippingTotal - discount;

    useEffect(() => {
        if (user?.token) {
            dispatch(addressGetThunk());
        }
    }, [user]);


    useEffect(() => {
        if (addressList?.length > 0 && !selectedAddress?.id) {
            dispatch(setAddress(addressList[0]));
        }
    }, [addressList]);


    const openAddModal = () => {
        setEditingAddress(null);
        setIsAddressModalOpen(true);
    };


    const openEditModal = (address) => {
        setEditingAddress(address);
        setIsAddressModalOpen(true);
    };

    const orderProducts = checkedItems.map((item) => ({
        product_id: item.product.id,
        count: item.count,
        detail: ""
    }));

    const remainingCart = cart.filter((item) => !item.checked);

    const formData = {
        "address_id": selectedAddress.id,
        "order_date": new Date().toISOString(),
        "card_no": selectedCard.card_no,
        "card_name": selectedCard.name_on_card,
        "card_expire_month": selectedCard.expire_month,
        "card_expire_year": selectedCard.expire_year,
        "card_ccv": 321,
        "price": productsTotal.toFixed(2),
        "products": orderProducts
    }

    const handleOrder = async () => {

        if (!selectedCard?.card_no) {
        toast.error("Lütfen bir kredi kartı seçin.");
        return;
    }

        const success = await dispatch(orderThunk(formData, remainingCart));

        if (success) {
            toast.success("Siparişiniz başarıyla oluşturuldu! 🎉");
            navigate("/myOrders"); 
        } else {
            toast.error("Sipariş oluşturulurken bir sorun oluştu.");
        }
    };

    return (
        
        <>

            <Header />


            <section className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto px-4 py-10 pb-28 lg:pb-10">

                <div className="basis-2/3 flex flex-col gap-4 border-2 border-gray-200 rounded-sm">

                    <div className="bg-gray-100 rounded-md px-4 py-3">

                        <p className="font-bold text-brand-dark">Teslimat Adresi</p>

                    </div>

                    <div className="flex flex-col gap-3 p-4">

                        <div className="flex items-center justify-between px-1 max-w-md">

                            <p className="font-semibold text-sm text-brand-dark">Kayıtlı Adresim</p>

                            <button
                                onClick={openAddModal}
                                className="flex items-center gap-1 text-sm text-brand-blue font-semibold hover:underline">
                                <Pencil size={14} />
                                Adres Ekle
                            </button>

                        </div>

                        {addressList?.map((address) => {

                            const isSelected = selectedAddress?.id === address.id;

                            return (
                                <label
                                    key={address.id}
                                    onClick={() => dispatch(setAddress(address))}
                                    className={`flex items-start gap-3 border rounded-md p-5 max-w-lg cursor-pointer transition
    ${isSelected ? "bg-blue-50 border-brand-blue" : "bg-white border-gray-200 hover:border-gray-300"}`}
                                >

                                    <input
                                        type="radio"
                                        name="selectedAddress"
                                        checked={isSelected}
                                        onChange={() => dispatch(setAddress(address))}
                                        className="mt-1 accent-brand-blue"
                                    />

                                    <MapPin size={18} className="text-brand-blue shrink-0 mt-0.5" />

                                    <div className="flex flex-col gap-1 flex-1">
                                        <p className="font-bold text-base text-brand-dark">
                                            {address.title} <span className="font-normal text-brand-gray">({address.neighborhood} / {address.district} / {address.city})</span>
                                        </p>
                                        <p className="text-sm text-brand-gray">{address.address}</p>
                                    </div>

                                    <div className="flex flex-col items-end gap-2 shrink-0">
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                openEditModal(address);
                                            }}
                                            className="text-sm font-semibold text-brand-blue hover:underline">
                                            Düzenle
                                        </button>

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                dispatch(deleteAddressThunk(address.id));
                                            }}
                                            className="text-sm font-semibold text-red-500 hover:underline">
                                            Sil
                                        </button>
                                    </div>

                                </label>
                            );
                        })}

                    </div>

                </div>


                <div className="hidden lg:flex w-[280px] shrink-0 border border-gray-200 rounded-md p-5 flex-col gap-4 h-fit">

                    <button
                        onClick={handleOrder}
                        disabled={!selectedAddress?.id || !selectedCard}
                        className={`flex items-center justify-center w-full font-bold text-sm py-3 rounded-md ${selectedAddress?.id ? "bg-brand-blue text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
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

            </section>

            <KreditCard grandTotal={grandTotal} />

            {isAddressModalOpen && (

                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

                    <div className="bg-white rounded-md p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto flex flex-col gap-4">

                        <div className="flex justify-between items-center">

                            <h3 className="font-bold text-lg">
                                {editingAddress ? "Adresi Düzenle" : "Adres Ekle"}
                            </h3>

                            <button onClick={() => setIsAddressModalOpen(false)}>✕</button>

                        </div>

                        <AddressForm
                            editingAddress={editingAddress}
                            onClose={() => setIsAddressModalOpen(false)}
                        />

                    </div>

                </div>
            )}

            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex items-center justify-between gap-4 z-40">

                <div className="flex flex-col">

                    <span className="font-bold text-lg text-brand-dark">{grandTotal.toFixed(2)} TL</span>

                    <span className="text-xs text-brand-blue font-semibold">Kargo Bedava</span>

                </div>

                <button
                    disabled={!selectedAddress?.id}
                    className="flex-1 max-w-[220px] bg-brand-blue text-white font-bold text-sm py-3 rounded-md disabled:opacity-50"
                >
                    Sepeti Onayla
                </button>

            </div>

        </>

    )

}

export default PaymentPage;