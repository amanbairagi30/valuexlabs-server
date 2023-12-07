import axios from "axios"
// import toast from "react-hot-toast"
export const RegisterUser = async(payload)=>{
    try {
        const response = await axios.post("http://localhost:8080/api/sendMail",payload);
        return response.data;
    //    response.data = toast.success('email sent sucessfully');
    } catch (error) {
        return error.message 
    }
}