function ProductCard() {
    return (
        <>
            <div className="w-[239px]">
                <img src="https://picsum.photos/id/64/400/500"
                    alt="" className="h-[427px]" />
                <div className="h-[188px] flex-col p-6 flex gap-3">
                    <h5 className="text-center text-base font-bold text-brand-dark">Graphic Design</h5>
                    <p className="text-center font-bold text-sm text-brand-gray">English Department</p>
                    <p className="text-center">$16.50</p>
                    <div className="flex justify-center space-x-2">
                            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                            <div className="w-4 h-4 rounded-full bg-green-500"></div>
                            <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                            <div className="w-4 h-4 rounded-full bg-gray-800"></div>
                        </div>
                </div>
            </div>

        </>
    )
}

export default ProductCard