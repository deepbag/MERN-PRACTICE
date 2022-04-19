import axios from 'axios';

export async function axiosRequest(URL,METHOD, HEADER, DATA){ 
        return DATA?
                axios({
                    url: URL,
                    method: METHOD,
                    header: HEADER,
                    data: DATA,
                    timeout: 1000
                }) : axios({
                    url: URL,
                    method: METHOD,
                    header: HEADER,
                    data: {},
                    timeout: 1000
                })
}

// Get Data From API
const getDetails = () => {
    const URL = 'http://localhost:3001/users';
    const METHOD = 'GET';
    const HEADER = {
        "Content-Type": 'application/json',
    }
    return axiosRequest(URL, METHOD, HEADER, {})
}


const createDetails = (DATA) => {
    const URL = 'http://localhost:3001/users';
    const METHOD = 'POST';
    const HEADER = {
        "Content-Type": 'application/json',
    }
    return axiosRequest(URL, METHOD, HEADER, DATA) 
}

const updateDetails = (DATA, userid) => {
    const URL = `http://localhost:3001/users/${userid}`;
    const METHOD = 'PUT';
    const HEADER = {
        "Content-Type": 'application/json',
    }
    return axiosRequest(URL, METHOD, HEADER, DATA)
}

const deleteDetails = (deleteuserid) => {
    const URL = `http://localhost:3001/users/${deleteuserid}`;
    const METHOD = 'DELETE';
    const HEADER = {
        "Content-Type": 'application/json',
    }
    return axiosRequest(URL, METHOD, HEADER, {})
}
// export {getDetails, createDetails, updateDetails};
export {getDetails, createDetails, updateDetails, deleteDetails};