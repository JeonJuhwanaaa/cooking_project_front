/** @jsxImportSource @emotion/react */

import * as s from "./style";

function SigninPage(props) {


    return (
        <div css={s.layout}>

            <div css={s.login}>
                <input css={s.loginInput} type="text" placeholder="아이디" />
                <input css={s.loginInput} type="password" placeholder="비밀번호" />
                <div css={s.logincheck}>
                    <input type="checkbox" />
                    <span>로그인상태유지</span>
                </div>
                <button css={s.loginButton} >로그인</button>
                <div css={s.loginFoot}>
                    <a href="/auth/signup">회원가입</a>
                    <a href="">아이디 · 비밀번호 찾기</a>
                </div>
            </div>

            <div css={s.bodyLine}>
                <div css={s.line1}></div>
                <div css={s.line2}>
                    <span>또는</span>
                </div>
                <div css={s.line3}></div>
            </div>

            <div css={s.oauthLogin}>
                
            </div>
        </div>
    );
}

export default SigninPage;