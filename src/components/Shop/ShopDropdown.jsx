import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function ShopDropdown() {

    const categories = useSelector((state) =>  state.product.categories);

    return (
        <>
                <div className="flex flex-col gap-3">

                    <h3 className="font-bold text-brand-dark">
                        Kadın
                    </h3>

                    {categories
                        ?.filter((category) => category.gender === "k")
                        .map((category) => (
                            <NavLink
                                key={category.id}
                                to={`/shop/k/${category.code.split(":")[1]}/${category.id}`}
                                className="text-brand-gray hover:text-brand-dark"
                            >
                                {category.title}
                            </NavLink>
                        ))}

                </div>


                <div className="flex flex-col gap-3">

                    <h3 className="font-bold text-brand-dark">
                        Erkek
                    </h3>

                    {categories
                        ?.filter((category) => category.gender === "e")
                        .map((category) => (
                            <NavLink
                                key={category.id}
                                to={`/shop/e/${category.code.split(":")[1]}/${category.id}`}
                                className="text-brand-gray hover:text-brand-dark"
                            >
                                {category.title}
                            </NavLink>
                        ))}

                </div>
        </>
    )
}

export default ShopDropdown;