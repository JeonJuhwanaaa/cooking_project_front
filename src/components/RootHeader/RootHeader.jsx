/** @jsxImportSource @emotion/react */

import * as s from "./style";

function RootHeader({children}) {


    return (
        <>
            <div css={s.haederlayout}>
                <div css={s.left}>
                    <div css={s.leftBox}>
                        <a href="">unknown</a>
                    </div>
                    <div css={s.leftBox}>
                        <a href="">unknown</a>
                    </div>
                    <div css={s.leftBox}>
                        <a href="">unknown</a>
                    </div>
                </div>

                <div css={s.logo}>
                    <a href="/">우리의 요리책</a>
                </div>

                <div css={s.right}>
                    <div css={s.rightBox}>
                        <a href="/auth/signin">Login</a>
                    </div>
                    <div css={s.rightBox}>
                        <a href="">Cart</a>
                    </div>
                    <div css={s.rightBox}>
                        <a href="">Mypage</a>
                    </div>
                    <div css={s.rightBox}>
                        <a href="">Search</a>
                    </div>
                </div>
                
            </div>
            {children}
        </>
    );
}

export default RootHeader;