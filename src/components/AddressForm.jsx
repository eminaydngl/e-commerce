import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addAddressThunk, updateAddressThunk } from "../store/actions/thunks";
import { cities } from "../data/cities";

function AddressForm({ onClose, editingAddress }) {

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isValid
        }
    } = useForm({
        defaultValues: {
            title: editingAddress?.title || "",
            name: editingAddress?.name || "",
            surname: editingAddress?.surname || "",
            phone: editingAddress?.phone || "",
            city: editingAddress?.city || "",
            district: editingAddress?.district || "",
            neighborhood: editingAddress?.neighborhood || "",
            address: editingAddress?.address || ""
        },
        mode: "all"
    });

    const submitFn = (data) => {
        if (editingAddress?.id) {
            dispatch(updateAddressThunk({ ...data, id: editingAddress.id }));
        } else {
            dispatch(addAddressThunk(data));
        }
        onClose();
    };

    return (
        <form onSubmit={handleSubmit(submitFn)} className="flex flex-col gap-4">

            <div className="grid grid-cols-2 gap-4">

                <div>

                    <label className="text-sm font-medium text-gray-700">Ad *</label>

                    <input
                        {...register("name", { required: true })}
                        placeholder="Adınızı giriniz"
                        className={`w-full h-11 border-2 rounded-md px-3 outline-none ${errors.name ? "border-red-500" : "border-gray-300"}`} />

                </div>

                <div>


                    <label className="text-sm font-medium text-gray-700">Soyad *</label>

                    <input
                        {...register("surname", { required: true })}
                        placeholder="Soyadınızı giriniz"
                        className={`w-full h-11 border-2 rounded-md px-3 outline-none ${errors.surname ? "border-red-500" : "border-gray-300"}`} />

                </div>

            </div>

            <div>

                <label className="text-sm font-medium text-gray-700">Telefon *</label>

                <input
                    {...register("phone", { required: true })}
                    placeholder="05XX XXX XX XX"
                    className={`w-full h-11 border-2 rounded-md px-3 outline-none ${errors.phone ? "border-red-500" : "border-gray-300"}`} />

            </div>

            <div className="grid grid-cols-2 gap-4">

                <div>
                    <label className="text-sm font-medium text-gray-700">İl *</label>
                    <select
                        {...register("city", { required: true })}
                        className={`w-full h-11 border-2 rounded-md px-3 outline-none ${errors.city ? "border-red-500" : "border-gray-300"}`}>
                        <option value="">Seçiniz</option>
                        {cities.map((city) => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>
                </div>

                <div>

                    <label className="text-sm font-medium text-gray-700">İlçe *</label>

                    <input
                        {...register("district", { required: true })}
                        placeholder="İlçe giriniz"
                        className={`w-full h-11 border-2 rounded-md px-3 outline-none ${errors.district ? "border-red-500" : "border-gray-300"}`} />

                </div>

            </div>

            <div>

                <label className="text-sm font-medium text-gray-700">Mahalle *</label>

                <input
                    {...register("neighborhood", { required: true })}
                    placeholder="Mahalle giriniz"
                    className={`w-full h-11 border-2 rounded-md px-3 outline-none ${errors.neighborhood ? "border-red-500" : "border-gray-300"}`} />

            </div>

            <div>

                <label className="text-sm font-medium text-gray-700">Adres *</label>

                <textarea
                    {...register("address", { required: true })} rows={3}
                    placeholder="Cadde, sokak ve diğer detaylar"
                    className={`w-full border-2 rounded-md px-3 py-2 outline-none resize-none ${errors.address ? "border-red-500" : "border-gray-300"}`} />

            </div>

            <div>

                <label className="text-sm font-medium text-gray-700">Adres Başlığı *</label>

                <input
                    {...register("title", { required: true })}
                    placeholder="Ev, İş vb."
                    className={`w-full h-11 border-2 rounded-md px-3 outline-none ${errors.title ? "border-red-500" : "border-gray-300"}`} />

            </div>

            <button
                type="submit"
                disabled={!isValid}
                className={`w-full py-3 rounded-md font-bold text-white ${isValid ? "bg-brand-blue" : "bg-gray-300 cursor-not-allowed"}`}>
                {editingAddress?.id ? "Güncelle" : "Kaydet"}
            </button>

        </form>
    );
}

export default AddressForm;