import instance, { setAuthToken } from "../../api/axios";
import { setAddressList, setCreditCard, setRoles, setUser } from "./clientActions";
import { setCategories, setFetchState, setProduct, setProductList, setTotal } from "./productActions";
import { setAddress, setCart, SetOrder } from "./shoppingCartActions";


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
            const response = await instance.get("/products", {
                params: params
            });

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

        try {
            const response = await instance.get(`/products/${id}`);

            dispatch(setProduct(response.data));
            dispatch(setFetchState("FETCHED"));

        } catch (error) {
            console.error("Ürün gelirken bir sorun oluştu:", error);
        }
    }
}

export const addressGetThunk = () => {
    return async (dispatch) => {
        try {
            const response = await instance.get("/user/address");
            console.log("addressGetThunk response : ", response.data);
            dispatch(setAddressList(response.data));
            dispatch(setFetchState("FETCHED"));
        } catch (error) {
            console.error("Adres gelirken bir sorun oluştu : ", error);
        }
    }
}

export const addAddressThunk = (formData) => {
    return async (dispatch) => {
        try {
            await instance.post("/user/address", formData);
            dispatch(addressGetThunk());
        } catch (error) {
            console.error("Adres eklenemedi:", error);
        }
    };
};

export const updateAddressThunk = (formData) => {
    return async (dispatch) => {
        try {
            await instance.put("/user/address", formData);
            dispatch(addressGetThunk());
        } catch (error) {
            console.error("Adres güncellenemedi:", error);
        }
    };
};

export const deleteAddressThunk = (addressId) => {
    return async (dispatch) => {
        try {
            await instance.delete(`/user/address/${addressId}`);
            dispatch(addressGetThunk());
        } catch (error) {
            console.error("ADRES SİLİNİRKEN BİR HATA OLUŞTU : " , error);
        }
    }
}

export const getKreditCard = () => {
    return async (dispatch) => {
        try {
            const response = await instance.get("/user/card");
            dispatch(setCreditCard(response.data));
        } catch (error) {
            console.error("KULLANICI KAYDEDİLEMEDİ :", error);
        }
    }
}

export const addCreditCard = (formData) => {
    return async (dispatch) => {
        try {
            await instance.post("/user/card" , formData);
            dispatch(getKreditCard());
            console.log("USER/CARD KISMINA ATILAN POST İSTEĞİ : " , formData);
        } catch (error) {
            console.error("Cart kaydedilirken bir sorun oluştu : " , error);   
        }
    }
}

export const deleteCreditCard = (creditCardId) => {
    return async (dispatch) => {
        try {
            await instance.delete(`/user/card/${creditCardId}`);
            dispatch(getKreditCard());
        } catch (error) {
            console.error("Cart silinirken bir sorun oluştu : " , error);
        }
    }
}

export const updateCreditCard = (formData) => {
    return async (dispatch) => {
        try {
            await instance.put("/user/card" , formData);
            dispatch(getKreditCard());
        } catch (error) {
            console.error("Kredi kartı güncellenemedi : " , error);
        }
    }
}

export const orderThunk = (formData , remainingCart) => {
    return async (dispatch) => {
        try {
            await instance.post("/order" , formData);
            dispatch(setCart(remainingCart));
            console.log(formData);
            return true;
        } catch (error) {
            console.error("Sipariş oluşturulurken bir sorun oluştu : " , error);
            return false;
        }
    }
}

export const orderGetThunk = () => {
    return async (dispatch) => {
        try {
            const response = await instance.get("/order");
            dispatch(SetOrder(response.data));
            console.log("BURASI SETORDER KISMI : " , response.data);
        } catch (error) {
            console.error("Sipariş gelirken bir hata oldu : " , error);
        }
    }
}