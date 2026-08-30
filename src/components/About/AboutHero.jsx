function AboutHero() {
    return (
        <section>

            <div className="flex flex-col items-center gap-4 md:gap-6 text-center py-10 md:py-16">

                <h5 className="font-bold text-sm md:text-base text-brand-gray">WHAT WE DO</h5>

                <h1 className="font-bold text-3xl md:text-6xl text-brand-dark">Innovation tailored for you</h1>

            </div>

            <div className="flex flex-col md:flex-row gap-2">

                <div className="flex-1">

                    <img
                        src="https://picsum.photos/id/120/400/500"
                        alt=""
                        className="h-[300px] md:h-[530px] w-full object-cover"
                    />

                </div>

                <div className="flex-1 flex gap-2">

                    <div className="flex-1 flex flex-col gap-2">

                        <img
                            src="https://picsum.photos/id/124/400/500"
                            alt=""
                            className="h-[145px] md:h-[260px] w-full object-cover"
                        />

                        <img
                            src="https://picsum.photos/id/204/400/500"
                            alt=""
                            className="h-[145px] md:h-[260px] w-full object-cover"
                        />

                    </div>

                    <div className="flex-1 flex flex-col gap-2">

                        <img
                            src="https://picsum.photos/id/145/400/500"
                            alt=""
                            className="h-[145px] md:h-[260px] w-full object-cover"
                        />

                        <img
                            src="https://picsum.photos/id/743/400/500"
                            alt=""
                            className="h-[145px] md:h-[260px] w-full object-cover"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}

export default AboutHero;