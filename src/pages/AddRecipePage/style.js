import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    margin: 72px auto 0px auto;

    padding-bottom: 100px;

    min-width: 1600px;
    height: auto;

    background-color: #fcf9f6;

    /* border: 1px solid black; */
`

export const recipe = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 1050px;
    height: 100%;

    /* border: 1px solid black; */
`

export const mainImg = css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 1000px;
    height: 400px;

    margin-top: 10px;

    /* border: 1px solid black; */
`

export const square = css`
    display: flex;
    flex-direction: column;
    align-self: center;
    
    width: 490px;
    height: 400px;

    /* border: 1px solid black; */
`

export const shortTitle = css`
    display: flex;
    align-items: center;

    width: 490px;
    height: 30px;

    span {
        margin-left: 10px;
    }

    color: #114232;
    font-weight: 700;
    background-color: #E8EFCF;

    font-size: 14px;

    /* border: 1px solid black; */
`

export const selectImg = css`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 10px;

    width: 490px;
    height: 360px;

    /* border: 1px solid black; */
`

export const Img = css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 490px;
    height: 355px;

    border: 1px solid #dbdbdb;
`

export const stepImg = css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 220px;
    height: 180px;

    background-color: #dbdbdb;

    /* border: 1px solid black; */
`

export const emptyImg = css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 490px;
    height: 355px;

    background-color: #FFC700;

    cursor: pointer;

    border: 1px solid #f0f0f0;
`
export const stepEmptyImg = css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100px;
    height: 100px;

    /* background-color: #dbdbdb; */

    /* border: 1px solid black; */
`

export const infoRecipe = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 10px;

    textarea {
        width: 455px;
        height: 330px;

        padding: 12px 16px;

        font-size: 14px;
        font-weight: 700;

        background-color: #ffffff;

        border: 1px solid #f0f0f0;
    }

    /* border: 1px solid black; */
`
export const tipRecipe = css`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 10px;

    textarea {
        width: 967px;
        height: 50px;

        padding: 12px 16px;

        font-size: 14px;
        font-weight: 700;

        background-color: #ffffff;

        border: 1px solid #f0f0f0;
    }

    /* border: 1px solid black; */
`

export const head = css`
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

    /* border: 1px solid black; */
`

export const title = css`
    display: flex;
    align-items: center;

    width: 1000px;
    height: 30px;

    margin-top: 20px;

    span {
        margin-left: 10px;
    }

    color: #114232;
    font-weight: 700;
    background-color: #E8EFCF;

    font-size: 14px;

    /* border: 1px solid black; */
`

export const inputTitle = css`
    display: flex;
    align-items: center;

    width: 1000px;
    height: 50px;

    margin-top: 5px;

    input {
        width: 960px;
        height: 15px;

        padding: 12px 16px;

        font-size: 14px;
        font-weight: 700;

        background-color: #ffffff;

        border: 1px solid #f0f0f0;
    }

    /* border: 1px solid black; */
`

export const categoryTitle = css`
    display: flex;
    align-items: center;

    width: 1000px;
    height: 30px;

    margin-top: 20px;

    span {
        margin-left: 10px;
    }

    color: #114232;
    font-weight: 700;
    background-color: #E8EFCF;

    font-size: 14px;

    /* border: 1px solid black; */
`

export const category = css`
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 1000px;
    height: 100px;

    margin-top: 10px;

    background-color: #ffffff;

    border: 1px solid #f0f0f0;
`

export const ingredientCategory = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    width: 1000px;
    height: auto;

    margin-top: 10px;
    padding-bottom: 10px;

    background-color: #ffffff;

    border: 1px solid #f0f0f0;
`

export const ingredient = css`
    display: flex;
    align-self: center;
    justify-content: center;

    width: 970px;
    height: 50px;
    
    margin-top: 10px;

    /* border: 1px solid black; */
`

export const ingre = css`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 70%;
    height: 50px;

    input {
        width: 200px;
        height: 30px;

        padding: 8px;

        font-size: 14px;

        border: none;
        border-bottom: 1px solid #dbdbdb;
    }

    /* border: 1px solid black; */
`

export const ingreButton = css`
    display: flex;
    justify-content: end;
    align-items: center;

    width: 30%;
    height: 100%;

    padding-right: 10px;

    button {
        width: 50px;
        height: 35px;

        font-size: 14px;

        background-color: white;

        transition: background-color 0.3s ease;
        border: 1px solid #dbdbdb;

        cursor: pointer;

        :hover {
            background-color: #F05941;
            color: #ffffff;
        }
    }

    /* border: 1px solid black; */
`

export const stepBody = css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    width: 980px;
    height: auto;

    margin-top: 10px;
    padding: 10px;

    background-color: #ffffff;

    border: 1px solid #f0f0f0;
`

export const recipeStep = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 480px;
    height: 230px;

    margin: 5px 0px;

    border: 1px solid #dbdbdb;
`

export const num = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    width: 450px;
    height: 25px;
    
    font-size: 15px;

    span {
        margin-left: 10px;
    }

    button {
        width: 50px;
        height: 25px;

        font-size: 14px;

        background-color: white;

        transition: background-color 0.3s ease;
        border: 1px solid #dbdbdb;

        cursor: pointer;

        :hover {
            background-color: #F05941;
            color: #ffffff;
        }
    }

    /* border: 1px solid #f0f0f0; */
`

export const stepContent = css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 450px;
    height: 180px;

    margin-top: 10px;

    textarea {
        width: 40%;
        height: 155px;

        padding: 12px 16px;

        font-size: 14px;

        background-color: #ffffff;

        border: 1px solid #f0f0f0;
    }

    /* border: 1px solid black; */
`

export const fic = css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 220px;
    height: 180px;

    background-color: #FFC700;

    cursor: pointer;

    border: 1px solid #f0f0f0;
`

export const addButton = css`
    display: flex;
    align-items: center;
    justify-content: end;

    margin-top: 10px;

    width: 1000px;

    button {
        height: 40px;
        width: 150px;

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