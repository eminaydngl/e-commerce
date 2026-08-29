import { Star, ChevronLeft, ChevronRight, Heart, ShoppingCart, Eye } from "lucide-react";
import { useState } from "react";

function ProductInfo({ product }) {

    const images = product.images;

    const [activeImage, setActiveImage] = useState(0);

    const nextImage = () => {
        setActiveImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setActiveImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto px-4 mb-14">

            <div className="flex-1">

                <div className="relative">
                    <img
                        src={images[activeImage]}
                        alt=""
                        className="w-full h-[400px] object-cover rounded-md"
                    />

                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

                <div className="flex gap-3 mt-4">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt=""
                            onClick={() => setActiveImage(index)}
                            className={`w-20 h-16 object-cover rounded-md cursor-pointer border-2 ${activeImage === index ? "border-brand-blue" : "border-transparent"
                                }`}
                        />
                    ))}
                </div>

            </div>

            <div className="flex-1 flex flex-col gap-3">

                <h4 className="font-normal text-xl text-brand-dark">{product.title}</h4>

                <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                        <Star size={16} className="fill-yellow-400 text-yellow-400" />
                        <Star size={16} className="fill-yellow-400 text-yellow-400" />
                        <Star size={16} className="fill-yellow-400 text-yellow-400" />
                        <Star size={16} className="fill-yellow-400 text-yellow-400" />
                        <Star size={16} className="fill-none text-yellow-400" />
                    </div>
                    <p className="font-bold text-sm text-brand-gray">{product.reviewCount} Reviews</p>
                </div>

                <h3 className="font-bold text-2xl text-brand-dark">${product.price.toLocaleString()}</h3>

                <h6 className="font-bold text-sm text-brand-gray">
                    Availability : <span className="text-brand-blue">In Stock</span>
                </h6>

                <p className="font-normal text-sm text-brand-gray mt-8 pb-6 border-b border-gray-200">Met minim Mollie non desert Alamo est sit cliquey dolor
                    do met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                </p>

                <div className="flex flex-col gap-11">

                    <div className="flex gap-2 mt-2">

                        <div className="w-7 h-7 rounded-full bg-blue-500"></div>
                        <div className="w-7 h-7 rounded-full bg-green-500"></div>
                        <div className="w-7 h-7 rounded-full bg-orange-500"></div>
                        <div className="w-7 h-7 rounded-full bg-gray-800"></div>

                    </div>

                    <div className="flex items-center gap-3">
                        <button className="bg-brand-bg-blue font-bold text-sm text-white w-[150px] h-[45px] rounded-md">
                            Select Options
                        </button>

                        <button className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                            <Heart size={18} />
                        </button>

                        <button className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                            <ShoppingCart size={18} />
                        </button>

                        <button className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                            <Eye size={18} />
                        </button>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default ProductInfo;