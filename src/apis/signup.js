import instance from "../utils/instance";


export const signupRequest = async(data) => {
    return await instance.post("/auth/signup", data);
}

export const signinRequest = async(data) => {
    return await instance.post("/auth/signin", data);
}