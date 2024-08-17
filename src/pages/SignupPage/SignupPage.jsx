/** @jsxImportSource @emotion/react */


import { useState } from "react";
import * as s from "./style";
import { signupRequest } from "../../apis/signup";
import Select from "react-select";
import { getFoodType } from "../../apis/options";
import { useQuery } from "react-query";
import { TbPointFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function SignupPage(props) {

    const navigate = useNavigate("");
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [genderId, setGenderId] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [checkPassword, setCheckPassword] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [extraAddress, setExtradAddress] = useState();

    // 아이디 입력받기.
    const handleUsernameOnChange = (e) => {
        setUsername(() => e.target.value);
    }
    // 비밀번호 입력받기.
    const handlePasswordOnChange = (e) => {
        setPassword(() => e.target.value);
    }
    // 이름 입력받기.
    const handleNameOnChange = (e) => {
        setName(() => e.target.value);
    }
    // 성별 (남자) 입력받기.
    const handleMaleGenderOnChange = (e) => {
        setGenderId(() => 1);
    }
    // 성별 (여자) 입력받기.
    const handleFamaleGenderOnChange = (e) => {
        setGenderId(() => 2);
    }
    // 이메일 입력받기.
    const handleEmailOnChange = (e) => {
        setEmail(() => e.target.value);
    }
    // 번호 입력받기.
    const handlePhoneNumberOnChange = (e) => {
        setPhoneNumber(() => e.target.value);
    }
    // 주소 입력받기.
    const handleAddressOnChange = (e) => {
        setAddress(() => e.target.value);
    }
    // 추가주소 입력받기.
    const handleExtraAddressOnChange = (e) => {
        setExtradAddress(() => e.target.value);
    }

    // 뒤로가기.
    const handleBackOnClick = () => {
        navigate("/auth/agreement");
    }

    // 가입하기.
    const handleSignupButton = () => {
        signupRequest({
            username,
            password,
            name,
            genderId,
            email,
            phoneNumber,
            address,
            extraAddress
        }).then(response => {
            alert("가입 성공");
            navigate("/auth/signin");
        }).catch(error => {
            alert("입력 정보를 다시 확인해주세요.");
        });
    }

    return (
        <div css={s.layout}>
            <div css={s.signupInput}>

                <div css={s.head}>
                    <span>회원가입</span>
                </div>

                <div css={s.inputBox1}>
                    <input type="text" name={"username"} placeholder="아이디"  value={username} onChange={handleUsernameOnChange}/>
                    <input type="password" name={"password"} placeholder="비밀번호" value={password} onChange={handlePasswordOnChange}/>
                    <input type="password" name={"checkPassword"} placeholder="비밀번호 확인" value={checkPassword} />
                </div>

                <div css={s.nameBox}>
                    <span>이름</span>
                    <span><TbPointFilled /></span>
                </div>
                <div css={s.nameInputBox}>
                    <input type="text" name={"name"} placeholder="이름을 입력해주세요." onChange={handleNameOnChange}/>
                </div>

                <div css={s.nameBox}>
                    <span>성별</span>
                    <span><TbPointFilled /></span>
                </div>
                <div css={s.radioBox}>
                    <input id="radio1" type="radio" name="gender" value="male" onChange={handleMaleGenderOnChange}/>
                    <label htmlFor="radio1">남자</label>
                </div>
                <div css={s.radioBox}>
                    <input id="radio2" type="radio" name="gender" value="famale" onChange={handleFamaleGenderOnChange}/>
                    <label htmlFor="radio2">여자</label>
                </div>

                <div css={s.nameBox}>
                    <span>이메일</span>
                    <span><TbPointFilled /></span>
                </div>
                <div css={s.nameInputBox}>
                    <input type="text" name={"email"} placeholder="이메일" onChange={handleEmailOnChange}/>
                </div>

                <div css={s.nameBox}>
                    <span>전화번호</span>
                    <span><TbPointFilled /></span>
                </div>
                <div css={s.nameInputBox}>
                    <input type="text" name={"phoneNumber"} placeholder="전화번호" onChange={handlePhoneNumberOnChange}/>
                </div>

                <div css={s.nameBox}>
                    <span>주소</span>
                    <span><TbPointFilled /></span>
                </div>
                <div css={s.adressInputBox}>
                    <input type="text" name={"adress"} placeholder="주소" onChange={handleAddressOnChange}/>
                    <input type="text" name={"extraAdress"} placeholder="상세주소" onChange={handleExtraAddressOnChange} />
                </div>

                <div css={s.buttonBox}>
                    <button onClick={handleBackOnClick}>뒤로가기</button>
                    <button onClick={handleSignupButton} >가입하기</button>
                </div>

            </div>            
        </div>
    );
}

export default SignupPage;