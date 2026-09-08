import { useState } from "react";
import {
    FaPhone,
    FaInstagram,
    FaYoutube,
    FaFacebookF,
    FaTwitter,
} from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import {
    Search,
    ShoppingCart,
    Heart,
    User,
    ChevronDown,
    Menu,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ShopDropdown from "../components/Shop/ShopDropdown";

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isShopOpen, setIsShopOpen] = useState(false);

    const categories = useSelector((state) => state.product.categories);

    const user = useSelector((state) => state.client.user);

    const userBool = user?.name?.length > 0 ? true : false;




    return (
        <header>

            <div
                className="
                    hidden md:flex
                    bg-brand-dark
                    text-white
                    text-sm
                    py-2
                    px-4 md:px-8
                    items-center
                    justify-between
                "
            >

                <div className="flex items-center space-x-4">

                    <span className="flex items-center font-bold">
                        <FaPhone className="mr-2" />
                        (225) 555-0118
                    </span>

                    <span className="flex items-center font-bold">
                        <FaEnvelope className="mr-2" />
                        michelle.rivera@example.com
                    </span>

                </div>


                <div className="font-semibold">
                    Follow Us and get a chance to win 80% off
                </div>


                <div className="flex items-center space-x-4 font-bold">

                    <span>Follow Us :</span>

                    <a href="#" className="hover:text-brand-blue">
                        <FaInstagram />
                    </a>

                    <a href="#" className="hover:text-brand-blue">
                        <FaYoutube />
                    </a>

                    <a href="#" className="hover:text-brand-blue">
                        <FaFacebookF />
                    </a>

                    <a href="#" className="hover:text-brand-blue">
                        <FaTwitter />
                    </a>

                </div>

            </div>


            <div className="h-[76px] px-4 md:px-8 flex items-center justify-between">

                <span className="font-bold text-2xl text-brand-dark">
                    Bandage
                </span>


                <nav className="hidden md:flex gap-4 items-center text-brand-gray font-medium">

                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "text-black font-bold" : "hover:text-brand-dark"}
                    >
                        Home
                    </NavLink>




                    <div className="relative group">

                        <NavLink
                            to="/shop"
                            className={({ isActive }) =>
                                `flex items-center gap-1 hover:text-brand-dark ${isActive ? "text-black font-bold" : ""
                                }`
                            }
                        >
                            Shop
                            <ChevronDown size={16} />
                        </NavLink>


                        <div className="absolute
                            left-1/2
                            -translate-x-1/2
                            top-full
                            pt-4
                            hidden
                            group-hover:flex
                            bg-white
                            shadow-lg
                            z-50
                            px-8
                            py-6
                            gap-16
                            min-w-[500px]">
                            <ShopDropdown />
                        </div>

                    </div>




                    <NavLink to="/about" className={({ isActive }) =>
                        `flex items-center gap-1 hover:text-brand-dark ${isActive ? "text-black font-bold" : ""}`
                    }>
                        About
                    </NavLink>

                    <NavLink to="/team" className={({ isActive }) =>
                        `flex items-center gap-1 hover:text-brand-dark ${isActive ? "text-black font-bold" : ""}`
                    }>
                        Blog
                    </NavLink>

                    <NavLink to="/contact" className={({ isActive }) =>
                        `flex items-center gap-1 hover:text-brand-dark ${isActive ? "text-black font-bold" : ""}`
                    }>
                        Contact
                    </NavLink>

                    <NavLink to="#" className={({ isActive }) =>
                        `flex items-center gap-1 hover:text-brand-dark`
                    }>
                        Pages
                    </NavLink>

                </nav>


                <div className="hidden md:flex items-center gap-6">

                    {userBool ? (
                        <div className="flex items-center gap-1 text-brand-blue font-semibold">
                            <User size={18} />
                            {user.name}
                        </div>
                    ) : (
                        <div className="flex items-center gap-1">
                            <NavLink to="/login" className="flex items-center gap-1 text-brand-blue font-semibold">
                                <User size={18} />
                                login /
                            </NavLink>
                            <NavLink to="/signup" className="text-brand-blue font-semibold">
                                Register
                            </NavLink>
                        </div>
                    )}


                    <Search
                        size={18}
                        className="text-brand-blue cursor-pointer"
                    />


                    <span className="relative">

                        <ShoppingCart
                            size={18}
                            className="text-brand-blue cursor-pointer"
                        />

                        <span className="absolute -top-2 -right-2 text-xs text-brand-blue">
                            1
                        </span>

                    </span>


                    <span className="relative">

                        <Heart
                            size={18}
                            className="text-brand-blue cursor-pointer"
                        />

                        <span className="absolute -top-2 -right-2 text-xs text-brand-blue">
                            1
                        </span>

                    </span>

                </div>


                <div className="flex md:hidden items-center gap-5">

                    <Search
                        size={22}
                        className="text-brand-blue cursor-pointer"
                    />

                    <span className="relative">

                        <ShoppingCart
                            size={22}
                            className="text-brand-blue cursor-pointer"
                        />

                        <span className="absolute -top-2 -right-2 text-xs text-brand-blue">
                            1
                        </span>

                    </span>

                    <Menu
                        size={25}
                        className="text-brand-blue cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />

                </div>

            </div>


            {isMenuOpen && (
                <nav className="flex md:hidden flex-col items-center gap-6 py-8 text-brand-gray text-xl font-medium">

                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "text-black font-bold" : "hover:text-brand-dark"}
                    >
                        Home
                    </NavLink>

                    <div className="flex flex-col items-center">

                        <button
                            onClick={() => setIsShopOpen(!isShopOpen)}
                            className="flex items-center gap-1 hover:text-brand-dark"
                        >
                            Shop
                            <ChevronDown
                                size={16}
                                className={`transition-transform ${isShopOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {isShopOpen && (
                            <div className="flex flex-col items-center gap-4 mt-5 text-base">
                                <ShopDropdown />
                            </div>
                        )}

                    </div>

                    <NavLink to="/about" className={({ isActive }) =>
                        `flex items-center gap-1 hover:text-brand-dark ${isActive ? "text-black font-bold" : ""}`
                    }>
                        About
                    </NavLink>

                    <NavLink to="/team" className={({ isActive }) =>
                        `flex items-center gap-1 hover:text-brand-dark ${isActive ? "text-black font-bold" : ""}`
                    }>
                        Blog
                    </NavLink>

                    <NavLink to="/contact" className={({ isActive }) =>
                        `flex items-center gap-1 hover:text-brand-dark ${isActive ? "text-black font-bold" : ""}`
                    }>
                        Contact
                    </NavLink>

                    <NavLink to="#" className={({ isActive }) =>
                        `flex items-center gap-1 hover:text-brand-dark`
                    }>
                        Pages
                    </NavLink>

                </nav>
            )}

        </header>
    );



}

export default Header;