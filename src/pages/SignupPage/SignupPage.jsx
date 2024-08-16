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
    const [checkPassword, setCheckPassword] = useState();
    const [email, setEmail] = useState();
    const [foodTypeOption, setFoodTypeOption] = useState([]);
    const [foodTypeId, setFoodTypeId] = useState();


    const handleButton = () => {
        signupRequest({
            username,
            password,
            email
        });
    }

    const foodTypeQuery = useQuery(
        ["foodTypeQuery"], getFoodType,
        {
            onSuccess: response => {
                console.log(response);
                setFoodTypeOption(() => response.data.map(foodType => {
                    return {
                        value: foodType.foodTypeId,
                        label: foodType.foodType
                    }
                }));
            },
            retry: 0,
            refetchOnWindowFocus: false
        }
    );



    const handleUsernameOnChange = (e) => {
        setUsername(() => e.target.value);
    }
    const handlePasswordOnChange = (e) => {
        setPassword(() => e.target.value);
    }
    const handleEmailOnChange = (e) => {
        setEmail(() => e.target.value);
    }

    const handleBackOnClick = () => {
        navigate("/auth/agreement");
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
                    <input type="text" name={"name"} placeholder="이름을 입력해주세요."/>
                </div>

                <div css={s.nameBox}>
                    <span>성별</span>
                    <span><TbPointFilled /></span>
                </div>
                <div css={s.radioBox}>
                    <input id="radio3" type="radio" name="gender" value="male" />
                    <label htmlFor="radio3">남자</label>
                </div>
                <div css={s.radioBox}>
                    <input id="radio4" type="radio" name="gender" value="famale" />
                    <label htmlFor="radio4">여자</label>
                </div>

                <div css={s.nameBox}>
                    <span>이메일</span>
                    <span><TbPointFilled /></span>
                </div>
                <div css={s.nameInputBox}>
                    <input type="text" name={"email"} placeholder="이메일"/>
                </div>

                <div css={s.nameBox}>
                    <span>전화번호</span>
                    <span><TbPointFilled /></span>
                </div>
                <div css={s.nameInputBox}>
                    <input type="text" name={"phoneNumber"} placeholder="전화번호"/>
                </div>

                <div css={s.nameBox}>
                    <span>주소</span>
                    <span><TbPointFilled /></span>
                </div>
                <div css={s.adressInputBox}>
                    <input type="text" name={"adress"} placeholder="주소"/>
                    <input type="text" name={"extraAdress"} placeholder="상세주소"/>
                </div>

                <div css={s.buttonBox}>
                    <button onClick={handleBackOnClick}>뒤로가기</button>
                    <button>가입하기</button>
                </div>

            </div>            
        </div>
    );
}

export default SignupPage;