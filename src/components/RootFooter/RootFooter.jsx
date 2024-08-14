/** @jsxImportSource @emotion/react */

import * as s from "./style";
import { ImYoutube } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function RootFooter(props) {


    return (
        <div css={s.layout}>
            <div css={s.leftBox}>
                <div css={s.leftText1}>
                    <a href="">이용약관</a>
                    <a href="">개인정보처리방침</a>
                </div>
                <div css={s.leftText2}>
                    <span>상호: 요리레시피공유플렛폼 주식회사 ｜ 대표: 전주환 ｜ 이메일: w7285@naver.com</span>
                    <span>주소: 부산광역시 부산진구 거제대로 22번길 4 더 유나 706호 ｜ 사업자등록번호: 000-00-00000</span>
                    <span>통신판매업신고번호: 0000-0000-0000 ｜ 개인정보보호책임자: 전주환</span>
                </div>
                <div css={s.leftText3}>
                    <span>고객센터:1533-0000 / 평일 09:00~18:00 (점심 12:00~13:30)토,일요일,공휴일 휴무</span>
                </div>
                <div css={s.leftText4}>
                    <span>Copyright © 2024 MyRecipeBook All Rights Reserved.</span>
                </div>
            </div>
            <div css={s.rightBox}>
                <div css={s.icon}>
                    <button css={s.iconButton}><FaInstagramSquare /></button>
                    <button css={s.iconButton}><ImYoutube /></button>
                    <button css={s.iconButton}><RiKakaoTalkFill /></button>
                    <button css={s.iconButton}><FaTwitter /></button>
                    <button css={s.iconButton}><FaFacebookSquare /></button>
                </div>
            </div>
        </div>
    );
}

export default RootFooter;