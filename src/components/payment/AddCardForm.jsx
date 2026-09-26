import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addCreditCard, updateCreditCard } from "../../store/actions/thunks";

function AddCardForm({ setIsAddCardOpen, editingCard }) {

    const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

    const years = [2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035];

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: {
            isValid }
    } = useForm({
        defaultValues: {
            name_on_card: editingCard?.name_on_card || "",
            card_no: editingCard?.card_no || "",
            expire_month: editingCard?.expire_month || "",
            expire_year: editingCard?.expire_year || ""
        }
    });

    const submitFn = (data) => {

        if (editingCard?.id) {

            dispatch(updateCreditCard({ ...data, id: editingCard.id }));

        } else {

            dispatch(addCreditCard(data));
        }

        setIsAddCardOpen(false);
    }
    return (

        <form onSubmit={handleSubmit(submitFn)} className="flex flex-col gap-5 max-w-md">

            <p className="font-bold text-base text-brand-dark">Kart Bilgileri</p>

            <div className="flex flex-col gap-1">

                <label className="text-sm font-medium text-gray-700">
                    Kart Üzerindeki İsim
                </label>

                <input
                    type="text"
                    placeholder="Ad Soyad"
                    className="w-full h-11 border-2 border-gray-300 rounded-md px-3 outline-none focus:border-brand-blue transition"
                    {...register("name_on_card", { required: true })}
                />

            </div>

            <div className="flex flex-col gap-1">

                <label className="text-sm font-medium text-gray-700">Kart Numarası</label>

                <input

                    type="text"
                    placeholder="0000 0000 0000 0000"
                    className="w-full h-11 border-2 border-gray-300 rounded-md px-3 outline-none focus:border-brand-blue transition"
                    {...register("card_no", { required: true, minLength: 16, maxLength: 16 })}
                />

            </div>

            <div className="flex items-end gap-6">

                <div className="flex flex-col gap-1 flex-1">

                    <label className="text-sm font-medium text-gray-700">Son Kullanma Tarihi</label>

                    <div className="flex gap-2">

                        <select
                            {...register("expire_month", { valueAsNumber: true })}
                            className="w-full h-11 border-2 border-gray-300 rounded-md px-2 outline-none focus:border-brand-blue transition">
                            {months.map((month) => (

                                <option key={month} value={Number(month)}>{month}</option>

                            ))}
                        </select>

                        <select
                            {...register("expire_year", { valueAsNumber: true })}
                            className="w-full h-11 border-2 border-gray-300 rounded-md px-2 outline-none focus:border-brand-blue transition">
                            {years.map((year) => (

                                <option key={year} value={year}>{year}</option>

                            ))}
                        </select>

                    </div>

                </div>

            </div>

            <button
                type="submit"
                disabled={!isValid}
                className={`w-full h-11 text-white font-bold rounded-md transition-colors mt-2
                            ${isValid
                        ? "bg-indigo-500 hover:bg-indigo-600"
                        : "bg-gray-300 cursor-not-allowed"
                    }`}

            >
                Kaydet
            </button>

        </form>
    )
}

export default AddCardForm;