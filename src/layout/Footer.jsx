import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer(){
    return (
        <footer className="bg-brand-light-gray pt-16 pb-8 border-t border-gray-200" data-purpose="main-footer">
        <div className="container mx-auto px-4 max-w-6xl">

            <div
                className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-gray-200 pb-8">
                    
                <div className="text-2xl font-bold tracking-wider mb-4 md:mb-0">
                    Bernitage
                </div>
                <div className="flex space-x-4">

                    <a className="text-brand-blue hover:text-blue-800 text-xl" href="#"><i className="fab fa-facebook"><FaFacebookF /></i></a>
                    <a className="text-brand-blue hover:text-blue-800 text-xl" href="#"><i className="fab fa-instagram"><FaInstagram /></i></a>
                    <a className="text-brand-blue hover:text-blue-800 text-xl" href="#"><i className="fab fa-twitter"><FaTwitter /></i></a>

                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                <div>
                    <h4 className="font-bold mb-4 text-lg">Company Info</h4>
                    <ul className="space-y-3 text-brand-gray text-sm font-medium">

                        <li><a className="hover:text-brand-blue" href="#">About Us</a></li>
                        <li><a className="hover:text-brand-blue" href="#">Carrier</a></li>
                        <li><a className="hover:text-brand-blue" href="#">We are hiring</a></li>
                        <li><a className="hover:text-brand-blue" href="#">Blog</a></li>

                    </ul>
                </div>
                <div>

                    <h4 className="font-bold mb-4 text-lg">Legal</h4>

                    <ul className="space-y-3 text-brand-gray text-sm font-medium">

                        <li><a className="hover:text-brand-blue" href="#">About Us</a></li>
                        <li><a className="hover:text-brand-blue" href="#">Carrier</a></li>
                        <li><a className="hover:text-brand-blue" href="#">We are hiring</a></li>
                        <li><a className="hover:text-brand-blue" href="#">Blog</a></li>

                    </ul>

                </div>
                <div>

                    <h4 className="font-bold mb-4 text-lg">Features</h4>

                    <ul className="space-y-3 text-brand-gray text-sm font-medium">

                        <li><a className="hover:text-brand-blue" href="#">Business Marketing</a></li>
                        <li><a className="hover:text-brand-blue" href="#">User Analytic</a></li>
                        <li><a className="hover:text-brand-blue" href="#">Live Chat</a></li>
                        <li><a className="hover:text-brand-blue" href="#">Unlimited Support</a></li>

                    </ul>
                </div>

                <div>

                    <h4 className="font-bold mb-4 text-lg">Resources</h4>

                    <ul className="space-y-3 text-brand-gray text-sm font-medium">

                        <li><a className="hover:text-brand-blue" href="#">IOS &amp; Android</a></li>
                        <li><a className="hover:text-brand-blue" href="#">Watch a Demo</a></li>
                        <li><a className="hover:text-brand-blue" href="#">Customers</a></li>
                        <li><a className="hover:text-brand-blue" href="#">API</a></li>

                    </ul>
                </div>

                <div className="lg:col-span-1">

                    <h4 className="font-bold mb-4 text-lg">Get In Touch</h4>

                    <form className="flex rounded overflow-hidden shadow-sm">

                        <input className="w-full px-4 py-3 bg-gray-100 border-none text-sm focus:ring-0 text-brand-gray"
                            placeholder="Your Email" type="email" />
                        <button className="bg-brand-blue text-white px-6 py-3 font-medium text-sm hover:bg-blue-600"
                            type="submit">Subscribe</button>

                    </form>

                    <p className="text-xs text-brand-gray mt-2">Lore imp sum dolor Amit</p>

                </div>

            </div>

            <div
                className="text-center md:text-left text-brand-gray text-sm font-bold bg-gray-100 -mx-4 px-4 py-6 md:bg-transparent md:mx-0 md:px-0 md:py-0">
                Made With Love By Finland All Right Reserved
            </div>

        </div>
    </footer>
    )
}

export default Footer