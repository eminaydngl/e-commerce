import { useEffect, useState } from "react";
import AddCardForm from "./AddCardForm";
import { useDispatch, useSelector } from "react-redux";
import { deleteCreditCard, getKreditCard } from "../../store/actions/thunks";
import { setPayment } from "../../store/actions/shoppingCartActions";

function KreditCard({ grandTotal }) {

    const [isAddCardOpen, setIsAddCardOpen] = useState(false);

    const [editingCard, setEditingCard] = useState(null);

    const openAddCardForm = () => {
        setEditingCard(null);
        setIsAddCardOpen(true);
    };

    const openEditCardForm = (card) => {
        setEditingCard(card);
        setIsAddCardOpen(true);
    };

    const user = useSelector((state) => state.client.user);

    const dispatch = useDispatch();

    useEffect(() => {
        if (user?.token) {
            dispatch(getKreditCard());
        }
    }, [user]);

    const cards = useSelector((state) => state.client.creditCards);

    const selectedCard = useSelector((state) => state.shopping.payment);

    useEffect(() => {
        if (cards?.length > 0 && !selectedCard?.id) {
            dispatch(setPayment(cards[0]));
        }
    }, [cards]);

    return (

        <>

            <div className="flex flex-col gap-4 border-2 border-gray-200 rounded-sm max-w-6xl mx-auto mb-12">

                <div className="bg-gray-100 rounded-md px-4 py-3">
                    <p className="font-bold text-brand-dark">Ödeme Yöntemi</p>
                </div>

                <div className="flex flex-col md:flex-row md:divide-x md:divide-gray-200">

                    <div className="flex-1 flex flex-col gap-3 p-4">

                        <div className="flex items-center justify-between px-1 max-w-md">

                            <p className="font-semibold text-sm text-brand-dark">Kayıtlı Kartlarım</p>

                            <button
                                onClick={() => {
                                    if (isAddCardOpen) {
                                        setIsAddCardOpen(false);
                                    } else {
                                        openAddCardForm();
                                    }
                                }}
                                className="flex items-center gap-1 text-sm text-brand-blue font-semibold hover:underline">
                                {isAddCardOpen ? "Vazgeç" : "Kart Ekle"}
                            </button>

                        </div>

                        {isAddCardOpen ? (

                            <AddCardForm setIsAddCardOpen={setIsAddCardOpen} editingCard={editingCard} />

                        ) : (

                            cards.map((card) => {

                                const isSelected = selectedCard?.id === card.id;

                                return (

                                    <label
                                        key={card.id}
                                        onClick={() => dispatch(setPayment(card))}
                                        className={`flex flex-col gap-4 border rounded-md p-4 max-w-md cursor-pointer transition
        ${isSelected ? "border-brand-blue bg-blue-50" : "border-gray-200 hover:border-brand-blue"}`}
                                    >

                                        <div className="flex items-start gap-3">

                                            <input
                                                type="radio"
                                                name="selectedCard"
                                                checked={isSelected}
                                                onChange={() => dispatch(setPayment(card))}
                                                className="mt-1 accent-brand-blue"
                                            />

                                            <div className="flex flex-col gap-3 flex-1">

                                                <div className="flex items-center justify-between gap-3">
                                                    <button
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            openEditCardForm(card);
                                                        }}
                                                        className="text-sm font-semibold text-brand-blue hover:underline">
                                                        Düzenle
                                                    </button>
                                                    <p className="font-semibold text-sm text-brand-dark">VakıfBank</p>
                                                </div>

                                                <p className="font-mono text-base tracking-widest text-brand-dark text-right">
                                                    {card.card_no}
                                                </p>

                                                <div className="flex items-center justify-between gap-3">

                                                    <button
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            dispatch(deleteCreditCard(card.id));
                                                        }}
                                                        className="text-sm font-semibold text-red-500 hover:underline">
                                                        Sil
                                                    </button>

                                                    <p className="text-sm text-brand-gray">{card.expire_month} / {card.expire_year}</p>

                                                </div>

                                            </div>

                                        </div>

                                    </label>
                                );
                            })

                        )}

                    </div>

                    <div className="flex-1 flex flex-col gap-3 p-4">

                        <p className="font-semibold text-sm text-brand-dark px-1">Taksit Seçenekleri</p>

                        <label className="flex items-center justify-between gap-3 border border-gray-200 rounded-md p-4 max-w-md cursor-pointer hover:border-brand-blue transition">

                            <div className="flex items-center gap-3">

                                <input
                                    type="radio"
                                    name="taksit"
                                    className="accent-brand-blue"
                                />

                                <p className="text-sm font-semibold text-brand-dark">Tek Çekim</p>

                            </div>

                            <p className="text-sm font-bold text-brand-dark">{grandTotal.toFixed(2)} TL</p>

                        </label>

                    </div>

                </div>

            </div>

        </>

    )

}

export default KreditCard;