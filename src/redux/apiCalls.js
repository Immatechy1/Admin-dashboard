import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethod"
import { 
    getProductFailure, 
    getProductStart, 
    getProductSuccess,
    deleteProductFailure,
    deleteProductSuccess,
    deleteProductStart
} from "./productRedux";

export const login = async (dispatch, user)=>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("auths/login", user);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure())
    }
};

export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try{
        const res = await publicRequest.get("/product");
        dispatch(getProductSuccess(res.data));
    }catch(err){
        dispatch(getProductFailure());
    }
};

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try{
        // const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id));
    }catch(err) {
        dispatch(deleteProductFailure());
    }
};