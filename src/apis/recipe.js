import instance from "../utils/instance";

export const recipeRequest = async(data) => {
    return await instance.post("/recipe/registration", data);
}

export const ingredientRequest = async(data) => {
    return await instance.post("/recipe/ingredient", data);
}

export const seasoningRequest = async(data) => {
    return await instance.post("/recipe/seasoning", data);
}