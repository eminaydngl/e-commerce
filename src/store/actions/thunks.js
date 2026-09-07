import instance from "../../api/axios";
import { setRoles, setUser } from "./clientActions";


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