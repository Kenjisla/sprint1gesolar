import axios from "axios"

export const api = axios.create({
    baseURL: 'https://api.sharpspring.com/pubapi/v1/accountID=34F960971C47AF75289E5C5F3D34ACF3&secretKey=6D4289F01331D5553EC8C2A228729BD3',
    method: 'getLeads',
    params: {},
})