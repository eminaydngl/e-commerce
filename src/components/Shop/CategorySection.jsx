import CategoryCard from "./CategoryCard"

function CategorySection() {
    return (
        <>
            <section className="flex flex-col items-center md:flex-row justify-center gap-4">
                <CategoryCard picture={"https://picsum.photos/id/80/400/500"} itemCount={5} title={"CLOTHS"}/>
                <CategoryCard picture={"https://picsum.photos/id/63/400/500"} itemCount={5} title={"CLOTHS"}/>
                <CategoryCard picture={"https://picsum.photos/id/62/400/500"} itemCount={5} title={"CLOTHS"}/>
                <CategoryCard picture={"https://picsum.photos/id/61/400/500"} itemCount={5} title={"CLOTHS"}/>
                <CategoryCard picture={"https://picsum.photos/id/60/400/500"} itemCount={5} title={"CLOTHS"}/>
            </section>
        </>
    )
}

export default CategorySection