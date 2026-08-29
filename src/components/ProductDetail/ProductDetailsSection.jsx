import { ChevronRight } from "lucide-react";
function ProductDetailSection() {
    return (
        <>
            <section className="md:px-52 flex flex-col gap-10 mb-10">

                <div className="flex gap-3 pl-2 md:justify-center md:gap-12 font-semibold text-sm text-brand-gray pb-10 border-b border-gray-200">

                    <h3>Description</h3>
                    <h3>Additional Information</h3>
                    <h3>Reviews  (0)</h3>

                </div>

                <div className="flex flex-col md:flex-row md:items-start justify-center gap-5">

                    <div className="flex-1 flex justify-center md:justify-start">
                        <img src="https://picsum.photos/id/14/400/500" alt="" className="w-xs rounded-md" />
                    </div>

                    <div className="flex-1 flex flex-col px-10 md:flex-col gap-6">
                        <h3 className="font-bold text-2xl text-brand-dark md:flex">the quick fox jumps over</h3>
                        <p className="font-normal text-sm text-brand-gray">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                        <p className="font-normal text-sm text-brand-gray">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                        <p className="font-normal text-sm text-brand-gray">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                    </div>

                    <div className="md:flex-1 flex flex-col gap-5">

                        <div className="flex flex-col text-center md:flex-col gap-4">

                            <h3 className="font-bold text-2xl text-brand-dark md:flex">the quick fox jumps over</h3>

                            <ul className="flex flex-col items-center md:items-start gap-3">

                                <li className="flex items-center gap-2 font-bold text-sm text-brand-gray">
                                    <ChevronRight size={14} />
                                    the quick fox jumps over the lazy dog
                                </li>

                                <li className="flex items-center gap-2 font-bold text-sm text-brand-gray">
                                    <ChevronRight size={14} />
                                    the quick fox jumps over the lazy dog
                                </li>

                                <li className="flex items-center gap-2 font-bold text-sm text-brand-gray">
                                    <ChevronRight size={14} />
                                    the quick fox jumps over the lazy dog
                                </li>

                                <li className="flex items-center gap-2 font-bold text-sm text-brand-gray">
                                    <ChevronRight size={14} />
                                    the quick fox jumps over the lazy dog
                                </li>

                            </ul>
                        </div>


                        <div className="flex flex-col text-center md:flex-col gap-4">

                            <h3 className="font-bold text-2xl text-brand-dark md:flex">the quick fox jumps over</h3>

                            <ul className="flex flex-col items-center md:items-start gap-3">

                                <li className="flex items-center font-bold gap-2 text-sm text-brand-gray">
                                    <ChevronRight size={14} />
                                    the quick fox jumps over the lazy dog
                                </li>

                                <li className="flex items-center font-bold gap-2 text-sm text-brand-gray">
                                    <ChevronRight size={14} />
                                    the quick fox jumps over the lazy dog
                                </li>

                                <li className="flex items-center gap-2 font-bold text-sm text-brand-gray">
                                    <ChevronRight size={14} />
                                    the quick fox jumps over the lazy dog
                                </li>

                            </ul>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default ProductDetailSection