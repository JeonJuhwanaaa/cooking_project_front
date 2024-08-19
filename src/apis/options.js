import instance from "../utils/instance"

export const getFoodType = async () => {
    return await instance.get("/recipe/options/foods");
}

export const getSituationType = async () => {
    return await instance.get("/recipe/options/situations");
}

export const getIngredientType = async () => {
    return await instance.get("/recipe/options/ingredients");
}

export const getWayType = async () => {
    return await instance.get("/recipe/options/ways");
}

export const getPersonnel = async () => {
    return await instance.get("/recipe/options/personnels");
}

export const getTakeTime = async () => {
    return await instance.get("/recipe/options/takeTimes");
}

export const getDifficultyLevel = async () => {
    return await instance.get("/recipe/options/difficultyLevels");
}