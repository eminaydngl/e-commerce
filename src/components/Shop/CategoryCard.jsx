function CategoryCard({ picture , itemCount , title}) {
    return (
        <div className="relative w-50 h-55 overflow-hidden group cursor-pointer">
            
            <img 
                src={picture} 
                alt="" 
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/10"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                <p className="font-bold uppercase">{title}</p>
                <p className="text-sm">{itemCount} Items</p>
            </div>

        </div>
    )
}

export default CategoryCard