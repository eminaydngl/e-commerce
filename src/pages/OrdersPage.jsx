import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderGetThunk } from "../store/actions/thunks";
import Header from "../layout/Header";

function OrdersPage() {

    const user = useSelector((state) => state.client.user);

    const orders = useSelector((state) => {
        console.log("ORDER KISMI ORDERPAGE : ", state.shopping.order);
        return state.shopping.order
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if (user?.token) {
            dispatch(orderGetThunk());
        }
    }, [user]);

    return (


        <>

            <Header />

            {orders.map((order) => (

                <section key={order.id} className="max-w-5xl mx-auto px-4 py-10 flex flex-col gap-6">

                    <div className="border border-gray-200 rounded-md overflow-hidden">

                        <div className="bg-gray-100 px-6 py-4 flex flex-wrap items-center justify-between gap-6">

                            <div className="flex flex-col gap-1">

                                <p className="text-xs font-bold text-brand-dark uppercase">Sipariş Tarihi</p>

                                <p className="text-sm text-brand-gray">
                                    {new Date(order.order_date).toLocaleDateString("tr-TR", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric"
                                    })}
                                </p>

                            </div>

                            <div className="flex flex-col gap-1">

                                <p className="text-xs font-bold text-brand-dark uppercase">Alıcı</p>

                                <p className="text-sm text-brand-gray">{user.name}</p>

                            </div>



                        </div>

                        <div className="px-6 py-5 flex flex-wrap items-center justify-between gap-4">


                            <div className="flex items-center gap-2">
                                {order.products.map((product) => (
                                    <img
                                        key={product.id}
                                        src={product.images[0]?.url}
                                        alt={product.name}
                                        className="w-16 h-16 object-cover rounded-md border border-gray-200"
                                    />
                                ))}
                            </div>

                            <div className="flex flex-col gap-1">

                                <p className="text-xs font-bold text-brand-dark uppercase">Toplam</p>

                                <p className="text-sm font-bold text-brand-blue">{order?.price} TL</p>

                            </div>

                        </div>

                    </div>

                </section>

            ))}

        </>

    )

}

export default OrdersPage;