import type { DataProps } from "../../interfaces/data";
import baseApi from "../configs/config"

const getAllPlans = async () => {
    const response = await baseApi.get("/plans");
    return response.data;
};

const deletePlan = async (id: string) => {
    await baseApi.delete(`/plans/${id}`)
}

const editPlan = async (data : DataProps) => {
    const response = await baseApi.put(`/plans/${data.id}`, {
         ...data
    })
    return response
}

const createNewPlan = async ({ id, title, code, progress }: DataProps) => {
    const response = await baseApi.post("/plans", {
        id,
        title,
        code,
        progress
    });
    return response;
}


export { getAllPlans, deletePlan, createNewPlan , editPlan };