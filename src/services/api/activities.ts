import type { DataProps } from "../../interfaces/data";
import baseApi from "../configs/config";

const getAllActivities = async () => {
    const response = await baseApi.get("/activities");
    return response.data;
};

const deleteActivity = async (id: string) => {
    await baseApi.delete(`/activities/${id}`)
}

const editActivity = async (data: DataProps) => {
    const response = await baseApi.put(`/activities/${data.id}`, {
        ...data
    })
    return response
}

const createNewActivity = async ({ id, title, code, progress }: DataProps) => {
    const response = baseApi.post("/activities", {
        id,
        title,
        code,
        progress
    });
    return response
}

export { getAllActivities, deleteActivity, editActivity, createNewActivity }