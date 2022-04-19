import { GET_DETAILS, POST_DETAILS, UPDATE_DETAILS, DELETE_DETAILS } from "../type";
import { getDetails, createDetails, updateDetails, deleteDetails } from "../../api/axiosRequest";

const getAPIAction = () => {
    return function (dispatch) {
        return getDetails().then((res) => {
            console.log(res);
            dispatch({
                type: GET_DETAILS,
                payload: res.data
            })
        })
    }
}

const postAPIAction = (request) => {
    return function (dispatch) {
        return createDetails(request).then((res) => {
            console.log(res);
            dispatch({
                type: POST_DETAILS,
                payload: ''
            })
        })
    }
}

const updateAPIAction = (request, userid) => {
    return function (dispatch) {
        return updateDetails(request, userid).then((res) => {
            console.log(`USER UPDATED! ${userid}`);
            dispatch({
                type: UPDATE_DETAILS,
                payload: ''
            })
        })
    }
}

const deleteAPIAction = (deleteuserid) => {
    return function (dispatch) {
        return deleteDetails(deleteuserid).then((res) => {
            console.log(`USER DELETED! ${deleteuserid}`);
            dispatch({
                type: DELETE_DETAILS,
                payload: ''
            })
        })
    }
}


export { getAPIAction, postAPIAction, updateAPIAction, deleteAPIAction };