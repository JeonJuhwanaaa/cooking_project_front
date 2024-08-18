import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    margin: 72px auto 0px auto;

    min-width: 1600px;
    height: 1000px;

    background-color: #fcf9f6;

    /* border: 1px solid black; */
`

export const text1 = css`
    display: flex;
    align-items: center;

    width: 400px;
    
    margin-top: 10px;

    font-size: 14px;
    color: #222222;

    input[type="checkbox"] {
        width: 17px;
        height: 17px;

        accent-color: black;

        margin-right: 10px;
        cursor: pointer;
    }
    
    span {
        margin-left: 5px;
    }

    span:nth-of-type(2) {
        color: #8f8f8f;
    }

    /* border: 1px solid black; */
`
export const text2 = css`
    display: flex;
    align-items: center;

    width: 400px;

    font-size: 14px;
    color: #222222;

    margin-top: 15px;

    input[type="checkbox"] {
        width: 17px;
        height: 17px;

        accent-color: black;

        margin-right: 10px;
        cursor: pointer;
    }

    span:nth-of-type(1) {
        padding-left: 5px;
    }
    span:nth-of-type(2) {
        margin-left: 5px;
        color: red;
    }

    /* border: 1px solid black; */

`

export const text3 = css`
    display: flex;

    margin-top: 10px;

    max-height: 200px;
    height: 200px;
    width: 400px;

    overflow-y: auto;
    font-size: 14px;

    background-color: #ffffff;

    span {
        margin: 10px 10px;
    }

    border: 1px solid #dfe0df;
`

export const button = css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 20px;

    width: 400px;
    height: 50px;

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