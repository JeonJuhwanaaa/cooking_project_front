/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import * as s from "./style";
import { signinRequest } from "../../apis/signup";

function SigninPage(props) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [infoSave, setInfoSave] = useState(false);

    
    useEffect(() => {
        const saveUsername = localStorage.getItem("savedUsername");
        if(saveUsername) {
            setUsername(saveUsername);
            setInfoSave(true);
        }
    },[]);

    useEffect(() => {
        console.log(username);
        console.log(password);
        console.log(infoSave);
    },[username, password, infoSave]);

    const handleSignin = () => {
        signinRequest({
            username,
            password
        }).then(response => {
            alert(response.data);
        }).catch(error => {
            alert(error.data);
        });
    }


    const handleUsernameOnchange = (e) => {
        const newUsername = e.target.value;
        setUsername(newUsername);
        if (infoSave) {
            // 아이디 저장이 체크된 상태에서만 로컬 스토리지에 저장
            localStorage.setItem("savedUsername", newUsername);
        }
    };

    const handlePasswordOnchange = (e) => {
        setPassword(() => e.target.value);
    }

    const handleUsernameSaveOnchange = (e) => {
        const isChecked = e.target.checked;
        setInfoSave(isChecked);
        if (isChecked) {
            // 체크박스가 선택되었을 때 아이디를 로컬 스토리지에 저장
            localStorage.setItem("savedUsername", username);
        } else {
            // 체크박스가 해제되었을 때 로컬 스토리지에서 아이디 제거
            localStorage.removeItem("savedUsername");
        }
    };


    return (
        <div css={s.layout}>

            <div css={s.head}>
                <span>로그인</span>
            </div>

            <div css={s.login}>
                <input css={s.loginInput} name={"username"} type="text" placeholder="아이디" value={username} onChange={handleUsernameOnchange}/>
                <input css={s.loginInput} name={"password"} type="password" placeholder="비밀번호" value={password} onChange={handlePasswordOnchange}/>
                <div css={s.logincheck}>
                    <input type="checkbox" onChange={handleUsernameSaveOnchange} checked={infoSave}/>
                    <span>아이디 저장</span>
                </div>
                <button css={s.loginButton} onClick={handleSignin} >로그인</button>
                <div css={s.loginFoot}>
                    <a href="/auth/agreement">회원가입</a>
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
                <div css={s.kakao}>
                    <img style={{width: "20px", height: "20px"}} src="https://vendor-cdn.imweb.me/images/kakao_icon.png" alt="" />
                    <button >카카오로 시작하기</button>
                </div>
                <div css={s.naver}>
                    <img style={{width: "20px", height: "20px"}} src="https://vendor-cdn.imweb.me/images/naver_login2x.png" alt="" />
                    <button>네이버로 시작하기</button>
                </div>

            </div>
        </div>
    );
}

export default SigninPage;