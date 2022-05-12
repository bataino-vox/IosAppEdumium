import axios from "axios";
import { showError, dismiss } from "@/functions/widget";

// const baseURL = 'http://localhost/voxforem/edumiumschoolgit-main/api/'
// const baseURL = 'https://appdemo.smart-school.in/api/webservice/dashboard'
const baseURL = 'http://edumiumschool.voxsupport.in/api/'
const token = localStorage.getItem('token');
const userID = localStorage.getItem('user-ID');
const studentID = localStorage.getItem('student_id');

const http = axios.create({
            baseURL: baseURL,
            timeoutErrorMessage: 'Unknown error ocurred',
            headers:{
                "Accept": 'application/json',
                "Content-Type": "application/json",
                "Client-Service": "edumiumschool",
                "Auth-Key": "schoolAdmin@",
                "Authorization":  token,
                "User-ID" : userID,
                    },

        })

    axios.defaults.params = {}
    axios.defaults.params['student_id'] = studentID

    http.interceptors.response.use((response) => 
        {
            // alert("Response recieved ", response)
            console.log("Response recieved ", response)
            return response
        },
        error => {
            console.log("Response Error",error)
            showError(error)
            dismiss()
        }
    );

        // request.params['student_id'] = studentID ?? ''

    // on successful request
    http.interceptors.request.use((request) => 
        {
            console.log("Request Successfull", request)
            return request
        }, 
        error => {
            showError("Request Error",error)
            dismiss()
            
        }
    );

export default http