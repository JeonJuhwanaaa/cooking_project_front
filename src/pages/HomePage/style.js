import { css } from "@emotion/react";

export const mainLayout = css`
    display: flex;
    justify-content: center;
    align-items: end;

    height: 750px;
    width: 100%;

    min-width: 1600px;

    background-color: #EFD6C0;
    
    border: 1px solid #e5e7eb;
`
// -----------------------------------------------------

export const mainImgBox = css`
    display: flex;
    justify-content: center;
    align-items: end;

    width: 50%;
    height: 100%;

    img {
        margin-left: 350px;
    }

    /* border: 1px solid black; */
`

export const mainTextBox = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-left: 100px;
       
    width: 50%;
    height: 100%;

    /* border: 1px solid black; */
`
export const text1 = css`
    display: flex;
    flex-direction: column;
    justify-content: end;

    font-size: 50px;
    font-weight: 700;

    height: 50%;
    width: 100%;

    /* border: 1px solid black; */
`
export const text2 = css`
    display: flex;
    flex-direction: column;

    padding-top: 10px;

    font-size: 16px;
    color: #444444;

    height: 50%;
    width: 100%;

    /* border: 1px solid black; */
`
export const showButton = css`
    display: flex;

    padding-top: 40px;

    width: 135px;
    height: 40px;
    
    button {
        border-radius: 15px;
        border: none;
        background-color: #222222;
        color: #ffffff;
        font-weight: bolder;

        padding: 10px 25px;

        cursor: pointer;

        transition: background-color 0.3s ease;

        :hover {
            background-color: #8f8f8f;
            
        }
    }

    /* border: 1px solid black; */
`

// -----------------------------------------------------

export const category = css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 130px;

    min-width: 1600px;

    border: 1px solid #e5e7eb;
`

export const inventory = css`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 1050px;

    border: 1px solid black;
`

export const item = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 200px;
    height: 130px;

    &:nth-of-type(1) {
        margin-right: 10px;
    }
    &:nth-of-type(2) {
        margin-right: 10px;
    }
    &:nth-of-type(3) {
        margin-right: 10px;
    }
    &:nth-of-type(4) {
        margin-right: 10px;
    }

    border: 1px solid black;
`
export const img = css`
    display: flex;
    justify-content: center;
    align-items: center;



`
export const img_title = css`

`
// -----------------------------------------------------

export const popular = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-width: 1600px;

    background-color: #f4f8d1;

    border: 1px solid #e5e7eb;
`
// -----------------------------------------------------

export const popularTitle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 180px;
    width: 100%;

    border: 1px solid black;
`

export const subTitle = css`
    display: flex;
    flex-direction: column;
    justify-content: end;

    margin-left: 5px;

    height: 181px;
    width: 1050px;

    color: #444444;
    font-size: 12px;

    /* border: 1px solid black; */
`
export const mainTitle = css`
    display: flex;

    color: #191919;
    font-size: 38px;
    font-weight: 700;

    height: 100%;
    width: 1050px;

    /* border: 1px solid black; */
`
// -----------------------------------------------------
export const popularContents = css`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 450px;
    width: 100%;

    /* border: 1px solid black; */
`
// -----------------------------------------------------

export const choice = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-width: 1600px;

    border: 1px solid #e5e7eb;
`

export const choiceTitle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 180px;
    width: 100%;

    border: 1px solid black;
`
// -----------------------------------------------------