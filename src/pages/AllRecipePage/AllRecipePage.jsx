/** @jsxImportSource @emotion/react */


import * as s from "./style";
import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { useQuery } from "react-query";
import { getRecipes } from "../../apis/recipe";
import { useState } from "react";

function AllRecipePage(props) {

    const [mainImg, setMainImg] = useState();
    const [recipeTitle, setRecipeTitle] = useState();
    const [recipeUsername, setRecipeUsername] = useState();
    const [recipeInfo, setRecipeInfo] = useState();

    const getRecipesQuery = useQuery(
        ["getRecipesQuery"],getRecipes,
        {
            onSuccess: response => {
                // console.log(response.data[0]);
                setMainImg(response.data[0].recipeMainImg);
                setRecipeTitle(response.data[0].recipeTitle);
                setRecipeInfo(response.data[0].recipeIntro);
            },
            retry: 0,
            refetchOnWindowFocus: false
        }
    );


    return (
        <div css={s.layout}>
            <div css={s.Allrecipe}>
                
                <div css={s.titlelayout}>
                    <span>우리의 레시피</span>
                </div>

                <div css={s.searchlayout}>
                    <input type="text" />
                    <button><IoSearchOutline /></button>
                </div>
                
                <div css={s.category}>
                    카테고리 자리
                </div>

                <div css={s.recipeslayout}>

                    <div css={s.recipes}>
                        <div css={s.mainFic}>
                            <img css={s.foodImg} src={mainImg} alt="" />
                        </div>
                        <div css={s.recipeInfo}>
                            <div css={s.recipeName}>
                                <span>{recipeTitle}</span>
                            </div>
                            <div css={s.recipeNic}>
                                <span>닉네임 자리</span>
                            </div>
                            <div css={s.recipeExp}>
                                <span>{recipeInfo}</span>
                            </div>
                            <div css={s.recipeScor}>
                                <span>별점</span>
                            </div>
                        </div>
                    </div>




                </div>

                <div css={s.pageCount}>
                    <span>1 2 3 4 5</span>
                </div>

            </div>
        </div>
    );
}

export default AllRecipePage;