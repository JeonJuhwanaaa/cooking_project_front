/** @jsxImportSource @emotion/react */

import { useState } from "react";
import * as s from "./style";
import { signupRequest } from "../../apis/signup";

function SignupPage(props) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();


    const handleButton = () => {
        signupRequest({
            username,
            password,
            email
        });
    }

    const handleUsernameOnChange = (e) => {
        setUsername(() => e.target.value);
    }
    const handlePasswordOnChange = (e) => {
        setPassword(() => e.target.value);
    }
    const handleEmailOnChange = (e) => {
        setEmail(() => e.target.value);
    }

    return (
        <div css={s.layout}>
            <div css={s.box}>                
                <input type="text" name={"username"} placeholder="아이디"  value={username} onChange={handleUsernameOnChange}/>
                <input type="password" name={"password"} placeholder="비밀번호" value={password} onChange={handlePasswordOnChange}/>
                <input type="text" name={"email"} placeholder="이메일" value={email} onChange={handleEmailOnChange}/>

                <button onClick={handleButton}>확인</button>

            </div>
            <div css={s.box}>
                <span>아이디 : {username}</span>
                <span>비밀번호 : {password}</span>
                <span>이메일 : {email}</span>
            </div>
            
        </div>
    );
}

export default SignupPage;