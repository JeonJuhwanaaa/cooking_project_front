import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    margin: 72px auto 0px auto;

    min-width: 1600px;
    height: 900px;

    background-color: #fcf9f6;

    /* border: 1px solid black; */
`
// --------------------------------------------------

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

// --------------------------------------------------

export const login = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 700px;
    height: 250px;

    /* border: 1px solid black; */
`

export const loginInput = css`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 12px 16px;

    font-size: 14px;

    width: 350px;
    height: 20px;

    background-color: #ffffff;

    border: 1px solid #f0f0f0;
`

export const logincheck = css`
    display: flex;
    align-items: center;

    font-size: 14px;

    margin: 15px 0px;

    width: 380px;
    height: 30px;

    input[type="checkbox"] {
        width: 20px;
        height: 20px;

        accent-color: black;

        margin-right: 10px;
        cursor: pointer;
    }


    /* border: 1px solid black; */
`

export const loginButton = css`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 14px;

    padding: 20px 40px;

    width: 380px;
    height: 30px;

    background-color: transparent;

    transition: background-color 0.3s ease;

    :hover {
        background-color: #525252;
        color: #ffffff;
    }

    cursor: pointer;
    
    border: 1px solid #222222;
`

export const loginFoot = css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 10px;

    width: 380px;
    height: 30px;

    a {
        text-decoration: none;
        color: #222222;
        font-size: 14px;
    }

    /* border: 1px solid black; */
`
// -------------------------------------------------------------

export const bodyLine = css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 700px;

    /* border: 1px solid black; */
`;

export const line1 = css`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 20px;

    width: 35%;
    border-top: 1px solid #d8d8d8;
`;

export const line2 = css`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 14px;
    font-weight: 700;
    height: 50px;
`;

export const line3 = css`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 20px;

    width: 35%;
    border-top: 1px solid #d8d8d8;
`;

// -------------------------------------------------------------

export const oauthLogin = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 700px;
    height: 150px;

    /* border: 1px solid black; */
`

export const kakao = css`
    display: flex;
    align-items: center;

    width: 380px;
    height: 40px;

    margin-bottom: 10px;

    background-color: #FFEB00;

    img {
        margin-left: 10px;
    }

    button {
        margin: 0px auto;
        text-decoration: none;

        color: #3c1e1e;
        background-color: transparent;
        
        width: 100%;
        height: 100%;

        font-size: 14px;
        border: none;

        cursor: pointer;
    }
    
    cursor: pointer;
    /* border: 1px solid black; */
`


export const naver = css`
    display: flex;
    align-items: center;

    width: 380px;
    height: 40px;

    margin-bottom: 10px;

    background-color: #27d34a;

    img {
        margin-left: 10px;
    }
    button {
        margin: 0px auto;
        text-decoration: none;

        color: #ffffff;
        background-color: transparent;
        
        width: 100%;
        height: 100%;

        font-size: 14px;
        border: none;

        cursor: pointer;
    }
    
    cursor: pointer;
    /* border: 1px solid black; */
`