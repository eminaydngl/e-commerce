import { LayoutGrid, List } from "lucide-react";

function FilterBar({setViewMode}) {



    return (
        <section className="flex flex-col items-center gap-6 my-6 font-bold text-sm text-brand-gray 
        md:flex-row md:justify-center md:gap-60">

            <p className="flex items-center">
                Showing all 12 results
            </p>

            <div className="flex items-center gap-2">

                <p>Views:</p>

                <button className="border border-gray-300 rounded p-2 hover:bg-gray-100" onClick={() => setViewMode("grid")}>
                    <LayoutGrid size={16} className="text-brand-blue" />
                </button>

                <button className="border border-gray-300 rounded p-2 hover:bg-gray-100" onClick={() => setViewMode("list")}>
                    <List size={16} className="text-gray-400" />
                </button>

            </div>

            <div className="flex gap-4 w-full justify-center md:w-auto">

                <select className="font-normal bg-gray-100 rounded-md h-12 px-4 border border-gray-300">

                    <option>Popularity</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                    
                </select>

                <button className="bg-brand-blue text-white rounded-md h-12 px-6">
                    Filter
                </button>

            </div>

        </section>
    );
}

export default FilterBar;
