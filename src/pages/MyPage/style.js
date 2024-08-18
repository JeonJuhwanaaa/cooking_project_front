import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    margin: 72px auto 0px auto;

    min-width: 1600px;
    height: 1300px;

    background-color: #fcf9f6;

    /* border: 1px solid black; */
`

export const myPage = css`
    display: flex;
    align-items: center;

    width: 1050px;
    height: 100%;

    /* border: 1px solid black; */
`

export const leftProfile = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 350px;
    height: 100%;

    background-color: #fcf9f6;

    /* border: 1px solid black; */
`

export const leftHead = css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 300px;
    height: 100px;

    margin-top: 10px;

    /* border: 1px solid black; */
`

export const photolayout = css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 300px;
    height: 220px;

    margin-top: 10px;
    
    /* border: 1px solid #dbdbdb; */
`

export const photo = css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 180px;
    height: 180px;

    border-radius: 50%;

    // 이건 주석 하지말기.
    border: 1px solid #dbdbdb;
`

export const name = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 10px;

    width: 300px;
    height: 50px;

    span:nth-of-type(1) {
        font-size: 20px;
        font-weight: 700;
    }
    span:nth-of-type(2) {
        margin-top: 5px;
        margin-left: 5px;
    }

    /* border: 1px solid black; */
`

export const menu = css`
    display: flex;
    flex-direction: column;
    
    width: 300px;
    height: 200px;

    margin-top: 10px;

    a:nth-of-type(1) {
        margin-top: 20px;
        margin-left: 20px;
    }
    
    a {
        margin: 2px 20px;
        text-decoration: none;

        color: #222222;
        transition: color 0.3s ease;
        
        :hover {
            color: #adadad;
        }
    }

    border: 1px solid #dbdbdb;
`

export const line = css`
    display: flex;

    width: 300px;

    margin-top: 10px;

    border-top: 1px solid #dbdbdb;
`

export const logout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 300px;
    height: 80px;

    margin-top: 10px;

    button {
        width: 300px;
        height: 50px;

        background-color: transparent;

        border: 1px solid #dbdbdb;

        transition: background-color 0.3s ease;

        cursor: pointer;

        :hover {
            background-color: #525252;
            color: #ffffff;
        }
    }

    /* border: 1px solid black; */
`
// --------------------------------------------------------------------

export const line3 = css`
    height: 90%;

    border-right: 1px solid #dbdbdb;
`
// --------------------------------------------------------------------

export const rightProfile = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 750px;
    height: 100%;

    background-color: #fcf9f6;

    /* border: 1px solid black; */
`

export const rightHead = css`
    display: flex;
    justify-content: space-between;
    align-items: end;

    width: 680px;
    height: 100px;

    margin-top: 10px;

    span {
        font-size: 35px;
        font-weight: 700;
        margin-left: 10px;
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

export const body1 = css`
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 680px;
    height: 220px;

    margin-top: 10px;

    border: 1px solid #dbdbdb;
`

export const line2 = css`
    height: 100px;

    border-right: 1px solid #dbdbdb;
`

export const piece = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 150px;
    height: 150px;

    span:nth-of-type(1) {
        font-size: 40px;
    }

    /* border: 1px solid black; */
`

export const count = css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 130px;
    height: 50px;

    a {
        font-size: 25px;
        color: black;
        text-decoration: none;
    }

    span:nth-of-type(1) {
        display: flex;
        justify-content: center;
        align-items: end;

        margin-left: 5px;
        margin-top: 5px;

        font-size: 14px;
    }

    /* border: 1px solid black; */
`

export const body2 = css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 680px;
    height: 250px;

    margin-top: 10px;

    border: 1px solid #dbdbdb;
`
export const body3 = css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 680px;
    height: 250px;

    margin-top: 10px;

    border: 1px solid #dbdbdb;
`
export const body4 = css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 680px;
    height: 250px;

    margin-top: 10px;

    border: 1px solid #dbdbdb;
`