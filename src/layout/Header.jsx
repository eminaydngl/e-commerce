import { FaPhone, FaInstagram, FaYoutube, FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { Search, ShoppingCart, Heart, User, ChevronDown } from "lucide-react";

function Header() {
    return (
        <>
            <div className="h-32">
                <div
                    className="bg-brand-dark text-white text-sm py-2 px-4 md:px-8 h-13 flex flex-col md:flex-row justify-between items-center"
                    data-purpose="top-bar"
                >

                    <div className="flex items-center space-x-4 mb-2 md:mb-0">

                        <span className="flex items-center font-bold">
                            <FaPhone className="mr-2" />
                            (225) 555-0118
                        </span>

                        <span className="flex items-center font-bold">
                            <FaEnvelope className="mr-2" />
                            michelle.rivera@example.com
                        </span>

                    </div>


                    <div className="text-center mb-2 md:mb-0 font-semibold">
                        Follow Us and get a chance to win 80% off
                    </div>


                    <div className="flex items-center space-x-4 font-bold">

                        <span>Follow Us :</span>

                        <a className="hover:text-brand-blue" href="#">
                            <FaInstagram />
                        </a>

                        <a className="hover:text-brand-blue" href="#">
                            <FaYoutube />
                        </a>

                        <a className="hover:text-brand-blue" href="#">
                            <FaFacebookF />
                        </a>

                        <a className="hover:text-brand-blue" href="#">
                            <FaTwitter />
                        </a>

                    </div>

                </div>

                <div className="h-[76px] px-4 md:px-8 flex items-center justify-between ">

                    <span className="font-bold text-2xl text-brand-dark">
                        Bandage
                    </span>

                    <span className="flex gap-4 items-center text-brand-dark font-medium text-brand-gray ">
                        <a href="#" className="hover:text-brand-dark">Home</a>
                        <a href="#" className="flex items-center gap-1 hover:text-brand-dark">Shop <ChevronDown size={16} /></a>
                        <a href="#" className="hover:text-brand-dark">About</a>
                        <a href="#" className="hover:text-brand-dark">Blog</a>
                        <a href="#" className="hover:text-brand-dark">Contact</a>
                        <a href="#" className="hover:text-brand-dark">Pages</a>
                    </span>

                    <span className="flex items-center gap-6">


                        <span className="flex items-center gap-1">

                            <a className="flex items-center gap-1 text-brand-blue font-semibold" href="#">
                                <User size={18} />
                                login /
                            </a>

                            <a className="text-brand-blue font-semibold" href="#">
                                Register
                            </a>

                        </span>

                        <Search size={18} className="text-brand-blue" />

                        <span className="relative">
                            <ShoppingCart size={18} className="text-brand-blue" />
                            <span className="absolute -top-2 -right-2 text-xs text-brand-blue">1</span>
                        </span>


                        <span className="relative">
                            <Heart size={18} className="text-brand-blue" />
                            <span className="absolute -top-2 -right-2 text-xs text-brand-blue">1</span>
                        </span>


                    </span>

                </div>
            </div>
        </>
    )
}


export default Header;