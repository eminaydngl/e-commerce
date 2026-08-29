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

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

                    <NavLink
                        to="/shop"
                        className={({ isActive }) =>
                            `flex items-center gap-1 hover:text-brand-dark ${isActive ? "text-black font-bold" : ""}`
                        }
                    >
                        Shop
                        <ChevronDown size={16} />
                    </NavLink>

                    <a href="#" className="hover:text-brand-dark">
                        About
                    </a>

                    <a href="#" className="hover:text-brand-dark">
                        Blog
                    </a>

                    <a href="#" className="hover:text-brand-dark">
                        Contact
                    </a>

                    <a href="#" className="hover:text-brand-dark">
                        Pages
                    </a>

                </nav>


                <div className="hidden md:flex items-center gap-6">

                    <div className="flex items-center gap-1">

                        <a
                            href="#"
                            className="flex items-center gap-1 text-brand-blue font-semibold"
                        >
                            <User size={18} />
                            login /
                        </a>

                        <a
                            href="#"
                            className="text-brand-blue font-semibold"
                        >
                            Register
                        </a>

                    </div>


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

                    <a
                        href="#"
                        className="hover:text-brand-dark"
                    >
                        Home
                    </a>

                    <a
                        href="#"
                        className="hover:text-brand-dark"
                    >
                        Product
                    </a>

                    <a
                        href="#"
                        className="hover:text-brand-dark"
                    >
                        Pricing
                    </a>

                    <a
                        href="#"
                        className="hover:text-brand-dark"
                    >
                        Contact
                    </a>

                </nav>
            )}

        </header>
    );
}

export default Header;