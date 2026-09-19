import { LayoutGrid, List } from "lucide-react";
import { useDispatch } from "react-redux";
import { filterThunk } from "../../store/actions/thunks";

function FilterBar({ setViewMode , filter , setFilter , sort , setSort , setAppliedFilter }) {

    const dispatch = useDispatch();

    function hadnleShortChange(e) {
        setSort(e.target.value);
    }

    function handleFilter() {
        setAppliedFilter(filter);
    }


    return (
        <section className="flex flex-col items-center gap-6 my-6 font-bold text-sm text-brand-gray 
        md:flex-row md:justify-center md:gap-60">

            <div className="flex items-center gap-2">

                <p>Views:</p>

                <button className="border border-gray-300 rounded p-2 hover:bg-gray-100" onClick={() => setViewMode("grid")}>
                    <LayoutGrid size={16} className="text-brand-blue" />
                </button>

                <button className="border border-gray-300 rounded p-2 hover:bg-gray-100" onClick={() => setViewMode("list")}>
                    <List size={16} className="text-gray-400" />
                </button>

            </div>

            <input
            value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Ürün ara..."
                className="pl-2 h-[40px]"
            />

            <div className="flex gap-4 w-full justify-center md:w-auto">

                <select
                    value={sort}
                    onChange={hadnleShortChange}
                    className="font-normal bg-gray-100 rounded-md h-12 px-4 border border-gray-300">

                    <option value="">Sıralama seç</option>
                    <option value="price:asc">Ucuzdan pahalıya</option>
                    <option value="price:desc">Pahalıdan ucuza</option>
                    <option value="rating:desc">En yüksek puanlı</option>
                    <option value="rating:asc">En düşük puanlı</option>

                </select>

                <button
                    onClick={handleFilter}
                    className="bg-brand-blue text-white rounded-md h-12 px-6">
                    Filter
                </button>

            </div>

        </section>
    );
}

export default FilterBar;
