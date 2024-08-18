import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 72px auto 0px auto;

    min-width: 1600px;
    height: 1000px;

    background-color: #fcf9f6;

    /* border: 1px solid black; */
`

export const head = css`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 150px;
    width: 700px;

    font-size: 50px;
    font-weight: 700;

    /* border: 1px solid black; */
`

export const signupInput = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 460px;
    height: 100%;

    /* border: 1px solid black; */
`

export const inputBox1 = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 450px;
    height: 130px;

    input {
        width: 346px;
        height: 14px;

        padding: 12px 16px;

        font-size: 14px;
        font-weight: 700;

        background-color: #ffffff;

        border: 1px solid #f0f0f0;
    }

    /* border: 1px solid black; */
`

export const message = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 5px;
    
    width: 450px;
    height: 20px;

    /* border: 1px solid black; */
`

export const messageBox = (type) => css`
    font-size: 14px;
    color: ${type === "error" ? "red" : "#8f8f8f"};
`

export const nameBox = css`
    display: flex;
    align-items: center;

    padding-left: 40px;

    margin-top: 20px;
    margin-bottom: 3px;

    width: 410px;
    height: 20px;

    font-size: 14px;
    font-weight: 700;

    color: #222222;

    span:nth-of-type(2) {
        font-size: 10px;
        height: 10px;
        color: #1A6Dff;
    }

    /* border: 1px solid black; */
`

export const nameInputBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 450px;
    height: 50px;

    input {
        width: 346px;
        height: 14px;

        padding: 12px 16px;

        font-size: 14px;
        font-weight: 700;

        background-color: #ffffff;

        border: 1px solid #f0f0f0;
    }

    /* border: 1px solid black; */
`

export const radioBox = css`
    display: flex;
    align-items: center;

    padding-left: 40px;
    margin-bottom: 5px;

    width: 410px;
    height: 20px;

    font-size: 14px;
    font-weight: 700;

    color: #222222;

    input[type="radio"] {
        transform: scale(1.2);
        accent-color: black;
        cursor: pointer;
    }
    
    label {
        margin-left: 5px;
        cursor: pointer;
    }
    
    /* border: 1px solid black; */
`;

export const adressInputBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 450px;
    height: 90px;

    input {
        width: 346px;
        height: 14px;

        padding: 12px 16px;

        font-size: 14px;
        font-weight: 700;

        background-color: #ffffff;

        border: 1px solid #f0f0f0;
    }

    /* border: 1px solid black; */
`

export const buttonBox = css`
    display: flex;
    align-items: center;
    justify-content: space-around;

    margin-top: 30px;

    width: 460px;
    height: 45px;

    button:nth-of-type(1) {
        width: 150px;
        height: 100%;

        background-color: transparent;

        border: 1px solid #b1b1b1;

        transition: background-color 0.3s ease;

        cursor: pointer;

        :hover {
            background-color: #525252;
            color: #ffffff;
        }
    }

    button:nth-of-type(2) {
        width: 150px;
        height: 100%;

        background-color: transparent;

        border: 1px solid #b1b1b1;

        transition: background-color 0.3s ease;

        cursor: pointer;

        :hover {
            background-color: #525252;
            color: #ffffff;
        }
    }

    /* border: 1px solid black; */
`