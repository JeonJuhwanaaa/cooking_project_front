import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: 1px solid black;

    width: 400px;
    height: 400px;


`

export const box = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    border: 1px solid black;

    width: 300px;
    height: 300px;
    
    input {
        width: 150px;
        height: 20px;
    }
`