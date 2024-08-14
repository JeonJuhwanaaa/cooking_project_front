import { css } from "@emotion/react";

export const haederlayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    
    z-index: 999;

    width: 100%;
    height: 70px;

    background-color: #f4f0eb;

    border: 1px solid #e5e7eb;
`


export const logo = css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 212px;
    height: 100%;

    a {
        font-size: 25px;
        text-decoration: none;
        font-weight: 1000;
        color: #222222;
    }

    /* border: 1px solid black; */
`

export const left = css`
    display: flex;
    justify-content: left;
    align-items: center;

    width: 394px;
    height: 100%;

    /* border: 1px solid black; */
`

export const leftBox = css`
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 100%;
    padding: 0px 20px;

    a {
        font-size: 14px;
        font-weight: 700;
        color: #222222;
        text-decoration: none;

        transition: color 0.3s ease;

        :hover{
            color: rgba(33, 33, 33, 0.5);
        }
    }

    /* border: 1px solid black; */
`

export const right = css`
    display: flex;
    justify-content: right;
    align-items: center;

    width: 394px;
    height: 100%;

    /* border: 1px solid black; */
`


export const rightBox = css`
    display: flex;
    align-items: center;
    
    height: 100%;
    padding-left: 20px;

    a {
        font-size: 12px;
        text-decoration: none;
        color: rgba(33, 33, 33, 0.5);

        transition: color 0.3s ease;

        :hover{
            color: #222222;
        }
    }

    /* border: 1px solid black; */
`