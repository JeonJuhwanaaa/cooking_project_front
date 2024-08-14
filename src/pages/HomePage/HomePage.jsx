/** @jsxImportSource @emotion/react */

import * as s from "./style";
import mainFood from "./mainfood.jpg";


function HomePage(props) {



    return (
        <>
            <div css={s.mainLayout}>
                <div css={s.mainImgBox}>
                    <img style={{width: "700px", height: "700px"}} src={mainFood} alt="" />
                </div>
                <div css={s.mainTextBox}>
                    <div css={s.text1}>
                        <span>레시피를 나누고</span>
                        <span>행복을 요리하세요!</span>
                    </div>
                    <div css={s.text2}>
                        <span>이곳은 서로의 다양한 레시피를 공유하고 발견 할 수 있는 공간입니다.</span>
                        <span>회원님이 직접 올린 요리법으로 새로운 맛의 경험을 즐겨보세요.</span>
                        <span>누구나 손쉽게 따라할 수 있는 요리법으로 가족과 친구들과 함께 행복을 만들어 보세요!</span>
                        <div css={s.showButton}>
                            <button>SEE MORE</button>
                        </div>
                    </div>
                </div>
            </div>

            <div css={s.category}>
                <div css={s.inventory}>
                    <div css={s.item}>
                        <div css={s.img}>
                            <img src="" alt="" />
                        </div>
                        <div css={s.img_title}>
                            <span>냉장고 털기</span>
                        </div>
                    </div>
                    <div css={s.item}>
                        <div css={s.img}>
                            <img src="" alt="" />
                        </div>
                        <div css={s.img_title}>
                            <span>오늘 뭐먹지</span>
                        </div>
                    </div>
                    <div css={s.item}>
                        <div css={s.img}>
                            <img src="" alt="" />
                        </div>
                        <div css={s.img_title}>
                            <span>인기 레시피</span>
                        </div>
                    </div>
                    <div css={s.item}>
                        <div css={s.img}>
                            <img src="" alt="" />
                        </div>
                        <div css={s.img_title}>
                            <span>메인 메뉴</span>
                        </div>
                    </div>
                    <div css={s.item}>
                        <div css={s.img}>
                            <img src="" alt="" />
                        </div>
                        <div css={s.img_title}>
                            <span>반찬 메뉴</span>
                        </div>
                    </div>
                </div>
            </div>

            <div css={s.popular}>
                <div css={s.popularTitle}>
                    <div css={s.subTitle}>
                        <span>회원님들이 이번 주 가장 많이 찾은 레시피 입니다.</span>
                    </div>
                    <div css={s.mainTitle}>
                        <span>인기 레시피</span>
                    </div>
                </div>
                <div css={s.popularContents}>
                    <span>인기 레시피 순위 나열</span>
                </div>
            </div>

            <div css={s.choice}>
                <div css={s.choiceTitle}>
                    <div css={s.subTitle}>
                        <span>무엇을 먹을 지 고민이라면!</span>
                        <span>제가 골라줄테니 마음에 드는 레시피를 찾아 보세요.</span>
                    </div>
                    <div css={s.mainTitle}>
                        <span>랜덤 레시피</span>
                    </div>
                </div>
                <div css={s.popularContents}>
                    <span>랜덤 레시피</span>
                </div>
            </div>
        </>
    );
}

export default HomePage;