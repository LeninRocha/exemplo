import axios from "axios";

const apei = axios.create({
    baseURL: "https://leninrocha.github.io/apei/apei"
})

export default apei