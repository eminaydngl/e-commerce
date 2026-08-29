import { Link } from "react-router-dom";
function ProductCard({ id, picture, viewMode }) {
    return (
        <>
            <div className={viewMode === "list" ? "flex gap-3" : "w-[239px]"}>

                <Link to={`/product/${id}`} className={viewMode === "list" ? "flex gap-3" : "w-[239px] block"}>

                    <img src={picture}
                        alt="" className={viewMode === "list" ? "h-70" : "h-[427px]"} />

                    <div className="p-6 flex flex-col gap-3">
                        <h5 className="text-center text-base font-bold text-brand-dark">Apple iPhone 15 128/256GB - Fully Unlocked AT&T T-Mobile Verizon - All colors</h5>

                        <p className={viewMode === "list" ? "font-bold text-base text-brand-gray" : "text-center font-bold text-sm text-brand-gray"}>English Department</p>

                        <p className={viewMode === "list" ? "text-start text-xl" : "text-center"}>$16.50</p>

                        <div className={viewMode === "list" ? "flex space-x-2" : "flex justify-center space-x-2"}>
                            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                            <div className="w-4 h-4 rounded-full bg-green-500"></div>
                            <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                            <div className="w-4 h-4 rounded-full bg-gray-800"></div>
                        </div>
                    </div>

                </Link>

            </div>

        </>
    )
}

export default ProductCard