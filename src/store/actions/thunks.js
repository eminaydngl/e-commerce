import instance, { setAuthToken } from "../../api/axios";
import { setRoles, setUser } from "./clientActions";
import { setCategories, setFetchState, setProduct, setProductList, setTotal } from "./productActions";


export const getRolesThunk = () => {
    return async (dispatch, getState) => {
        const { client } = getState();

        if (client.roles && client.roles.length > 0) {
            return;
        }

        try {
            const response = await instance.get("/roles");
            dispatch(setRoles(response.data));

        } catch (error) {
            console.error("Roller alinirken hata oluştu:", error);
        }
    }
}

export const loginThunk = (formData) => {
    return async (dispatch) => {
        try {
            const response = await instance.post("/login", formData);
            dispatch(setUser(response.data));
            return response.data.token;
        } catch (error) {
            console.error("Giriş sirasinda hata oluştu: ", error);
            return null;
        }
    }
}

export const categoriesThunk = () => {
    return async (dispatch) => {
        try {
            const response = await instance.get("/categories");
            dispatch(setCategories(response.data));
        } catch (error) {
            console.error("Kategorilerde bir sorun var : ", error);
        }
    }
}

export const verifyThunk = () => {
    return async (dispatch) => {
        const token = localStorage.getItem("token");

        if (!token) {
            return;
        }

        setAuthToken(token);

        try {
            const response = await instance.get("/verify");
            dispatch(setUser(response.data));

            const newToken = response.data.token;
            localStorage.setItem("token", newToken);
            setAuthToken(newToken);
        } catch (error) {
            localStorage.removeItem("token");
            setAuthToken(null);
            console.error("Token doğrulanamadi:", error);
        }
    }
}

export const productThunk = (limit = 12, offset = 0) => {
    return async (dispatch) => {
        try {
            dispatch(setFetchState("FETCHING"));
            const response = await instance.get(`/products?limit=${limit}&offset=${offset}`);
            dispatch(setProductList(response.data.products));
            dispatch(setTotal(response.data.total));
            dispatch(setFetchState("FETCHED"));
        } catch (error) {
            dispatch(setFetchState("FAILED"));
            console.error("Ürünler gelirken bir sorun oluştu: ", error);
        }
    }
}

export const filterThunk = (params = {}) => {
    return async (dispatch) => {
        try {
            const response = await instance.get("/products" , {
                params : params
            });

            console.log(params);

            dispatch(setProductList(response.data.products));
            dispatch(setTotal(response.data.total));
            dispatch(setFetchState("FETCHED"));
            
        } catch (error) {
            dispatch(setFetchState("FAILED"));
            console.error("Ürünler gelirken bir sorun oluştu:", error);
        }

    }
}

export const detailPageThunk = (id) => {
    return async (dispatch) => {

        console.log("THUNK'A GELEN ID:", id);
        console.log("İSTEK ATILAN URL:", `/products/${id}`);

        try {
            const response = await instance.get(`/products/${id}`);

            console.log("DETAIL RESPONSE:", response.data);

            dispatch(setProduct(response.data));
            dispatch(setFetchState("FETCHED"));

        } catch (error) {
            console.error("Ürün gelirken bir sorun oluştu:", error);
            console.log("ERROR RESPONSE:", error.response?.data);
            console.log("ERROR STATUS:", error.response?.status);
            console.log("ERROR URL:", error.config?.url);
        }
    }
}