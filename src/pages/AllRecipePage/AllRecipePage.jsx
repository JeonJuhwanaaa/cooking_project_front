/** @jsxImportSource @emotion/react */


import * as s from "./style";
import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

function AllRecipePage(props) {


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
                            메인음식 사진
                        </div>
                        <div css={s.recipeInfo}>
                            <div css={s.recipeName}>
                                <span>레시피 이름 자리</span>
                            </div>
                            <div css={s.recipeNic}>
                                <span>닉네임 자리</span>
                            </div>
                            <div css={s.recipeExp}>
                                <span>요리 설명</span>
                            </div>
                            <div css={s.recipeScor}>
                                <span>별점</span>
                            </div>
                        </div>
                    </div>

                    <div css={s.recipes}>
                        <div css={s.mainFic}>
                            메인음식 사진
                        </div>
                        <div css={s.recipeInfo}>
                            <div css={s.recipeName}>
                                <span>레시피 이름 자리</span>
                            </div>
                            <div css={s.recipeNic}>
                                <span>닉네임 자리</span>
                            </div>
                            <div css={s.recipeExp}>
                                <span>요리 설명</span>
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