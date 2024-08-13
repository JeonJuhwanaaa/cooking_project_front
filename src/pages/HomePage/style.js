import { css } from "@emotion/react";

export const mainLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 615px;
    width: 100%;

    background-color: #ede2d8;
    
    border: 1px solid #e5e7eb;
`
// -----------------------------------------------------

export const category = css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 130px;

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

    &:nth-child(1) {
        margin-right: 10px;
    }
    &:nth-child(2) {
        margin-right: 10px;
    }
    &:nth-child(3) {
        margin-right: 10px;
    }
    &:nth-child(4) {
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

    color: #191919;
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

    /* background-color: #f4f8d1; */

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