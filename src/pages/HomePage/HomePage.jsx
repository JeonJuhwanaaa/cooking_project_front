/** @jsxImportSource @emotion/react */

import * as s from "./style";


function HomePage(props) {



    return (
        <>
            <div css={s.mainLayout}>
                <span>메인 스크린 / 이벤트 or 이슈 / 슬라이드 효과 </span>
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