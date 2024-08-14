import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: center;
    align-items: center;

    bottom: 0;
    width: 100%;
    height: 300px;
    min-height: 200px;
    min-width: 1600px;

    margin: 0px auto;

    background-color: #f4f0eb;
    
    /* border: 1px solid black */
`


export const leftBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0px 30px;

    width: 600px;
    height: 100%;

    /* border: 1px solid black; */
`

export const leftText1 = css`
    display: flex;
    align-items: center;

    width: 100%;

    margin: 12px 0px;
    
    a {
      margin-right: 20px;
      text-decoration: none;
      font-size: 14px;
      color: #222222;
      font-weight: 700;

      :hover {
        transition: color 0.3s ease;
        color: #8f8f8f;
      }
    }

    /* border: 1px solid black; */
`

export const leftText2 = css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;

    color: #222222;
    font-size: 12px;
    
    span {
      margin-bottom: 5px;
    }

    /* border: 1px solid black; */
`

export const leftText3 = css`
    display: flex;
    align-items: center;

    width: 100%;

    margin: 10px 0px;

    color: #222222;
    font-size: 12px;

    /* border: 1px solid black; */
`

export const leftText4 = css`
    display: flex;
    align-items: center;

    width: 100%;

    margin: 10px 0px;

    color: #222222;
    font-size: 14px;

    /* border: 1px solid black; */
`


export const rightBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 450px;
    height: 100%;

    /* border: 1px solid black; */
`
export const icon = css`
    display: flex;
    justify-content: end;
    align-items: center;

    height: 100px;

    /* border: 1px solid black; */
`;

export const iconButton = css`
    border: none;
    color: #c9c9c9;
    font-size: 40px;
    
    margin: 0px 10px;

    cursor: pointer;

    background-color: transparent;
`;