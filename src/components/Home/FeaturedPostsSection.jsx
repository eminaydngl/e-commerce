import Post from "./Post"

function FeaturedPostsSection() {
    return (
        <>
        <section className="flex flex-col gap-20 ">

            <div className="flex flex-col gap-3">
                <h6 className="text-center text-xl font-bold text-brand-blue">
                    Practice Advice
                </h6>
                <h2 className="text-center font-bold text-5xl text-brand-dark">Featured Posts</h2>

                <p className="text-center font-normal text-xl text-brand-gray max-w-2xl mx-auto">Problems trying to resolve the conflict between
                    the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            
            <div className="flex flex-col items-center md:flex-row gap-7 justify-center">
                <Post picture={"https://picsum.photos/id/222/400/500"} />
                <Post picture={"https://picsum.photos/id/555/400/500"} />
                <Post picture={"https://picsum.photos/id/444/400/500"} />
            </div>

        </section>
            


        </>
    )
}

export default FeaturedPostsSection