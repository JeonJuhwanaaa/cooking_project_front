import instance from "../utils/instance";

export const recipeRequest = async(data) => {
    return await instance.post("/recipe/registration", data);
}