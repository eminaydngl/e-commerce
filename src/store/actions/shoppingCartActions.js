import { SET_CART, SET_PAYMENT, SET_ADDRESS, SET_ORDER } from "../actionTypes";

export const setCart = (cart) => ({
    type : SET_CART ,
    payload : cart 
});

export const setAddress = (address) => ({
    type : SET_ADDRESS ,
    payload : address
});

export const setPayment = (payment) => ({
    type : SET_PAYMENT ,
    payload : payment
});

export const SetOrder = (order) => ({
    type : SET_ORDER , 
    payload : order
})

 