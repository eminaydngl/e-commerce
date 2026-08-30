function ContactInfo() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-blue-600 to-cyan-500 text-white px-6 md:px-16 py-16 md:py-24 flex items-center">

            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">

                <div className="lg:w-5/12 flex flex-col gap-6 justify-center">

                    <h1 className="text-4xl md:text-5xl font-extrabold">CONTACT US</h1>

                    <p className="text-base md:text-lg max-w-md">

                        We operate across multiple global hubs to provide unparalleled service and support. Reach out to the office nearest you to discuss how we can accelerate your enterprise solutions.
                    </p>

                    <button className="bg-brand-blue text-white px-8 py-4 font-bold uppercase text-sm rounded-md w-fit hover:brightness-110 transition">
                        Contact Us
                    </button>

                </div>

                <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">

                    <div className="flex flex-col gap-2">

                        <h2 className="text-2xl font-bold">Paris</h2>

                        <div className="w-10 h-0.5 bg-white"></div>

                        <p className="text-sm">
                            14 Avenue des Champs-Élysées<br />
                            75008 Paris, France
                        </p>

                        <p className="text-sm"><span className="font-bold uppercase">Phone: </span>+33 1 40 55 60 00</p>
                        <p className="text-sm"><span className="font-bold uppercase">Fax: </span>+33 1 40 55 60 01</p>

                    </div>

                    <div className="flex flex-col gap-2">

                        <h2 className="text-2xl font-bold">New York</h2>

                        <div className="w-10 h-0.5 bg-white"></div>

                        <p className="text-sm">
                            One World Trade Center, Suite 4500<br />
                            New York, NY 10007, USA
                        </p>

                        <p className="text-sm"><span className="font-bold uppercase">Phone: </span>+1 212 555 0198</p>
                        <p className="text-sm"><span className="font-bold uppercase">Fax: </span>+1 212 555 0199</p>

                    </div>

                    <div className="flex flex-col gap-2">

                        <h2 className="text-2xl font-bold">Berlin</h2>

                        <div className="w-10 h-0.5 bg-white"></div>

                        <p className="text-sm">
                            Potsdamer Platz 1<br />
                            10785 Berlin, Germany
                        </p>

                        <p className="text-sm"><span className="font-bold uppercase">Phone: </span>+49 30 2598 0</p>

                        <p className="text-sm"><span className="font-bold uppercase">Fax: </span>+49 30 2598 1111</p>

                    </div>

                    <div className="flex flex-col gap-2">

                        <h2 className="text-2xl font-bold">London</h2>

                        <div className="w-10 h-0.5 bg-white"></div>

                        <p className="text-sm">
                            30 St Mary Axe (The Gherkin)<br />
                            London EC3A 8EP, UK
                        </p>

                        <p className="text-sm"><span className="font-bold uppercase">Phone: </span>+44 20 7123 4567</p>

                        <p className="text-sm"><span className="font-bold uppercase">Fax: </span>+44 20 7123 4568</p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default ContactInfo;