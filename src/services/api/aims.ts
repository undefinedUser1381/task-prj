import type { DataProps } from "../../interfaces/data";
import baseApi from "../configs/config"

const getAllAims = async () => {
    const response = await baseApi.get("/aims");
    return response.data;
};
const createNewAim = async ({ id, title, code, progress }: DataProps) => {
    const response = await baseApi.post("/aims", {
        id,
        title,
        code,
        progress
    });
    return response;
}
const editAim = async (data : DataProps) => {
    const response = await baseApi.put(`/aims/${data.id}`, {
         ...data
    })
    return response
}
const deleteAim = async (id: string) => {
    return await baseApi.delete(`/aims/${id}`)
}

export {
    getAllAims, createNewAim, editAim, deleteAim
}; 