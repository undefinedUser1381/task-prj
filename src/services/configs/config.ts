import axios from "axios";

const baseApi = axios.create({
    baseURL: "https://zen-golick-wj9tuxbnj.liara.run",
    headers: {
        "Content-Type": "application/json",
    },
})

export default baseApi;