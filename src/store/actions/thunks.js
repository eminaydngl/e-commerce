import instance, { setAuthToken } from "../../api/axios";
import { setRoles, setUser } from "./clientActions";
import { setCategories } from "./productActions";


export const getRolesThunk = () => {
    return async (dispatch , getState) => {
        const  { client } = getState();

        if(client.roles && client.roles.length > 0){
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
            const response = await instance.post("/login" , formData);
            dispatch(setUser(response.data));
            return response.data.token;
        } catch (error) {
            console.error("Giriş sirasinda hata oluştu: " , error);
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
            console.error("Kategorilerde bir sorun var : " , error);
        }
    }
}

export const verifyThunk = () => {
    return async (dispatch) => {
        const token = localStorage.getItem("token");

        if(!token){
            return;
        }

        setAuthToken(token);

        try {
            const response = await instance.get("/verify");
            dispatch(setUser(response.data));

            const newToken = response.data.token;
            localStorage.setItem("token" , newToken);
            setAuthToken(newToken);
        } catch (error) {
            localStorage.removeItem("token");
            setAuthToken(null);
            console.error("Token doğrulanamadı:", error);
        }
    }   
} 