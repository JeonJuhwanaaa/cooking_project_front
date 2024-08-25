import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    margin: 72px auto 0px auto;

    min-width: 1600px;
    height: auto;

    background-color: #fcf9f6;

    /* border: 1px solid black; */
`

export const Allrecipe = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 1050px;
    height: 100%;

    border: 1px solid black;
`

export const titlelayout = css`
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

    border: 1px solid black;
`

export const searchlayout = css`
    display: flex;
    align-items: center;

    margin-top: 10px;

    width: 1000px;
    height: 50px;

    input {
        width: 850px;
        height: 15px;

        padding: 12px 16px;

        font-size: 14px;

        background-color: #ffffff;

        border: 1px solid #f0f0f0;
    }

    button {
        width: 40px;
        height: 40px;

        margin-left: 10px;

        border: none;
        font-size: 20px;

        transition: background-color 0.3s ease;

        cursor: pointer;

        :hover {
            background-color: #525252;
            color: #ffffff;
        }
    }

    border: 1px solid black;
`

export const category = css`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 10px;

    width: 1000px;
    height: 100px;

    border: 1px solid black;
`

export const recipeslayout = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 10px;

    width: 1000px;
    height: auto; // ---------------------------------나중에 auto 로 수정할 것.

    border: 1px solid black;
`

export const recipes = css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 1000px;
    height: 200px;
    
    margin-bottom: 10px;

    border: 1px solid black;
`

export const mainFic = css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 180px;
    height: 180px;

    border: 1px solid black;
`

export const recipeInfo = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 800px;
    height: 180px;

    border: 1px solid black;
`

export const recipeName = css`
    display: flex;
    align-items: center;

    width: 100%;
    height: 30px;

    margin-bottom: 10px;

    border: 1px solid black;
`
export const recipeNic = css`
    display: flex;
    align-items: center;

    width: 100%;
    height: 30px;

    margin-bottom: 10px;

    border: 1px solid black;
`

export const recipeExp = css`
    display: flex;

    width: 100%;
    height: 50px;

    margin-bottom: 10px;

    border: 1px solid black;
`

export const recipeScor = css`
    display: flex;
    align-items: center;

    width: 100%;
    height: 30px;

    border: 1px solid black;
`

export const pageCount = css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 1000px;
    height: 40px;

    margin: 50px 0px;

    font-size: 20px;

    border: 1px solid black;
`