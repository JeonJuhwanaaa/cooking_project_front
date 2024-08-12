import instance from "../utils/instance"

export const getFoodType = async () => {
    return await instance.get("/recipe/options/foods");
}