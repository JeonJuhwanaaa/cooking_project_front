import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    margin: 72px auto 0px auto;

    min-width: 1600px;
    height: 2000px;

    background-color: #fcf9f6;

    /* border: 1px solid black; */
`

export const recipe = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 1050px;
    height: 100%;

    /* border: 1px solid black; */
`

export const head = css`
    display: flex;
    justify-content: space-between;
    align-items: end;

    width: 1000px;
    height: 100px;

    margin-top: 10px;

    span:nth-of-type(1) {
        display: flex;
        align-items: end;

        width: 500px;
        height: 100px;

        font-size: 35px;
        font-weight: 700;
    }

    button {
        height: 50px;
        width: 200px;

        font-size: 15px;
        font-weight: 700;

        background-color: transparent;

        border: 1px solid #525252;

        transition: background-color 0.3s ease;

        cursor: pointer;

        :hover {
            background-color: #525252;
            color: #ffffff;
        }
    }

    /* border: 1px solid black; */
`

export const title = css`
    display: flex;
    align-items: center;

    width: 1000px;
    height: 30px;

    margin-top: 20px;

    span {
        margin-left: 10px;
    }

    color: #114232;
    font-weight: 700;
    background-color: #E8EFCF;

    font-size: 14px;

    /* border: 1px solid black; */
`

export const inputTitle = css`
    display: flex;
    align-items: center;

    width: 1000px;
    height: 50px;

    input {
        width: 1000px;
        height: 15px;

        padding: 12px 16px;

        font-size: 14px;
        font-weight: 700;

        background-color: #ffffff;

        border: 1px solid #f0f0f0;
    }

    /* border: 1px solid black; */
`

export const infoRecipe = css`
    display: flex;
    align-items: center;

    width: 1000px;
    height: 50px;

    margin-top: 20px;

    textarea {
        width: 1000px;
        height: 50px;

        padding: 12px 16px;

        font-size: 14px;
        font-weight: 700;

        background-color: #ffffff;

        border: 1px solid #f0f0f0;
    }

    /* border: 1px solid black; */
`

export const categoryTitle = css`
    display: flex;
    align-items: center;

    width: 1000px;
    height: 30px;

    margin-top: 40px;

    span {
        margin-left: 10px;
    }

    color: #114232;
    font-weight: 700;
    background-color: #E8EFCF;

    font-size: 14px;

    /* border: 1px solid black; */
`

export const category = css`
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 1000px;
    height: 100px;

    margin-top: 10px;

    background-color: #ffffff;

    border: 1px solid #f0f0f0;
`

export const stepBody = css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;

    width: 1000px;
    height: 300px;

    margin-top: 10px;

    background-color: #ffffff;

    border: 1px solid #f0f0f0;
`

export const step = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 480px;
    height: 230px;

    border: 1px solid #dbdbdb;
`

export const num = css`
    display: flex;
    
    width: 450px;
    height: 20px;
    
    font-size: 15px;

    span {
        margin-left: 10px;
    }

    border: 1px solid #f0f0f0;
`

export const stepContent = css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 450px;
    height: 180px;

    margin-top: 10px;

    textarea {
        width: 40%;
        height: 155px;

        padding: 12px 16px;

        font-size: 14px;
        font-weight: 700;

        background-color: #ffffff;

        border: 1px solid #f0f0f0;
    }

    img {
        width: 220px;
        height: 180px;

        /* border: 1px solid black; */
    }

    /* border: 1px solid black; */
`