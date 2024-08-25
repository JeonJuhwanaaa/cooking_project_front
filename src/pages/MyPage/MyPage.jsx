/** @jsxImportSource @emotion/react */

import * as s from "./style";
import photo from "./photo.png";
import { PiBookmarkSimpleThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { PiCookingPotThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getFoodType } from "../../apis/options";
import { RxBorderSolid } from "react-icons/rx";

function MyPage(props) {

    const navigate = useNavigate();
    const [foodTypeOption, setFoodTypeOption] = useState([]);


    const handleLogout = () => {
        navigate("/auth/signin");
    }

    const handleAddRecipe = () => {
        navigate("/addrecipe");
    }

    


    return (
        <div css={s.layout}>
            <div css={s.myPage}>
                <div css={s.leftProfile}>
                    <div css={s.leftHead}>

                    </div>
                    <div css={s.photolayout}>
                        <div css={s.photo}>
                            <img src={photo} alt="" />
                        </div>
                    </div>
                    <div css={s.line}></div>
                    <div css={s.name}>
                        <span>홍길동</span>
                        <span>님</span>
                    </div>
                    <div css={s.line}></div>
                    <div css={s.menu}>
                        <a href=""><RxBorderSolid /> 회원정보 수정</a>
                        <a href="/allrecipe"><RxBorderSolid /> 나의 레시피</a>
                    </div>
                    <div css={s.line}></div>
                    <div css={s.logout}>
                        <button onClick={handleLogout}>로그아웃</button>
                    </div>

                </div>

                <div css={s.line3}></div>
                
                <div css={s.rightProfile}>
                    <div css={s.rightHead}>
                        <span>나의 활동</span>
                        <button onClick={handleAddRecipe}>레시피 등록</button>
                    </div>
                    <div css={s.body1}>
                        <div css={s.piece}>
                            <span><PiCookingPotThin /></span>
                            <span>나의 레시피</span>
                            <div css={s.count}>
                                <a href="">0</a>
                                <span>회</span>
                            </div>
                        </div>
                        <div css={s.line2}></div>
                        <div css={s.piece}>
                            <span><PiBookmarkSimpleThin /></span>
                            <span>스크랩</span>
                            <div css={s.count}>
                                <a href="">0</a>
                                <span>회</span>
                            </div>
                        </div>
                        <div css={s.line2}></div>
                        <div css={s.piece}>
                            <span><CiHeart /></span>
                            <span>좋아요</span>
                            <div css={s.count}>
                                <a href="">0</a>
                                <span>회</span>
                            </div>
                        </div>
                    </div>
                    <div css={s.body2}>

                    </div>
                    <div css={s.body3}>

                    </div>
                    <div css={s.body4}>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default MyPage;