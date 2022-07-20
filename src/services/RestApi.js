import axios from "axios"


const Endpoint = {
    generateToken : '/getToken',
}

const baseUrl = 'http://localhost:8000'

const basicAuth = btoa('YTtzMoIVHR:qNiMOAhRqH')


const _postWithToken = async (url, data= {}) => {
    try {
        let response = await axios.post(baseUrl + url, data, {
            headers : {
                "Authorization" : `Basic ${basicAuth}`,
                "X-Requested-With" : "XMLHttpRequest",
                "Content-Type" : "application/json"
                // "x-token" : 'cbf770c9fe874c96b6e7505e5096c06e45d39651e6a04d4faf5ff58d4757c9fc'
            }
        })
        return response.data

    } catch (error) {
        return {
            log: error.response,
            error: typeof error.response != 'undefined' ? error.response.data?.error : 'Network error',
            success : false
        }

    }
}


export async function getToken() {
    return new Promise( async(resolve, reject) => {
        var body = {
            "bank_code" : "113"
        }
        var result = await _postWithToken(Endpoint.generateToken, body)
        resolve(result)
    }) 
}