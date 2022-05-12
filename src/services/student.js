import http from "./http"
// const defFormdata = { "student_id" : localStorage.getItem("student_id")}

export const login = async (formdata) => {
    const response = http.post('auth/login', formdata)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("student_id", res.data.record.student_id)
            localStorage.setItem("user-ID", res.data.record.id)
            localStorage.setItem("user", JSON.stringify(res.data.record))
            return res.data
        })
    return response;
}

export const dashboard = async (formdata) => {
    const response = http.post('webservice/dashboard', {
        student_id: localStorage.getItem("student_id"),
        ...formdata
    })
        .then((res) => {
           
            return res.data
        })
    return response;
}

export const logout = async () => {
    const response = http.post('webservice/logout', {
        deviceToken: localStorage.getItem("deviceToken") ?? "Some Randam"
    })
        .then((res) => {
           
            return res.data
        })
    return response;
}