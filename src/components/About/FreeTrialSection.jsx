import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function FreeTrialSection() {
    return (
        <>
            <section className="flex flex-col gap-9 items-center mb-16">

                <h2 className="font-bold text-4xl text-center text-brand-dark">Start your 14 days free trial</h2>

                <p className="font-normal text-sm text-center text-brand-gray max-w-sm">Met minim Mollie non desert Alamo est sit cliquey dolor
                    do met sent. RELIT official consequent.
                </p>

                <button className="font-bold text-sm text-white bg-brand-blue w-[180px] h-[50px] rounded-md">Try it free now</button>

                <div className="flex gap-8 text-brand-blue">

                    <a href="#" className="hover:opacity-70 transition"><FaFacebookF size={30}/></a>
                    <a href="#" className="hover:opacity-70 transition"><FaInstagram size={30}/></a>
                    <a href="#" className="hover:opacity-70 transition"><FaTwitter size={30}/></a>

                </div>

            </section>
        </>
    )
}

export default FreeTrialSection