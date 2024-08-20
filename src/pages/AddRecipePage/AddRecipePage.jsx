/** @jsxImportSource @emotion/react */

import { useNavigate } from "react-router-dom";
import * as s from "./style";
import Select from "react-select";
import { useState } from "react";
import { useQuery } from "react-query";
import { BsPlusLg } from "react-icons/bs";
import camera from "./camera.png";

import { getDifficultyLevel, getFoodType, getIngredientType, getPersonnel, getSituationType, getTakeTime, getWayType } from "../../apis/options";


function AddRecipePage(props) {

    const [foodTypeOption, setFoodTypeOption] = useState([]);
    const [situationTypeOption, setSituationTypeOption] = useState([]);
    const [ingredientTypeOption, setIngredientTypeOption] = useState([]);
    const [wayTypeOption, setWayTypeOption] = useState([]);
    const [personnelOption, setPersonnelOption] = useState([]);
    const [takeTimeOption, setTakeTimeOption] = useState([]);
    const [difficultyLevelOption, setDifficultyLevelOption] = useState([]);


    const selectStyle = {
        control: baseStyles => ({
            ...baseStyles,
            width: "200px",
            border: "1px solid #dbdbdb",
            ":hover": {
                border: "1px solid #E8EFCF" // Hover 시 변경할 스타일
            }
        })
        // option: baseStyles => ({
        //     ...baseStyles,
        //     backgroundColor: "#E8EFCF"
        // }),
        // button: baseStyles => ({
        //     ...baseStyles,
        //     border: "1px solid blue"
        // })
    };

    const foodTypeQuery = useQuery(
        ["foodTypeQuery"],getFoodType,
        {
            onSuccess: response => {
                // console.log(response.data)
                setFoodTypeOption(() => response.data.map(foodtype => {
                    return {
                        value: foodtype.foodTypeId,
                        label: foodtype.foodType
                    }
                }));
            },
            retry: 0,
            refetchOnWindowFocus: false
        }
    );

    const situationTypeQuery = useQuery(
        ["situationTypeQuery"],getSituationType,
        {
            onSuccess: response => {
                // console.log(response)
                setSituationTypeOption(() => response.data.map(situationType => {
                    return {
                        value: situationType.situationTypeId,
                        label: situationType.situationType
                    }
                }));
            },
            retry: 0,
            refetchOnWindowFocus: false
        }
    );

    const ingredientTypeQuery = useQuery(
        ["ingredientTypeQuery"],getIngredientType,
        {
            onSuccess: response => {
                // console.log(response);
                setIngredientTypeOption(() => response.data.map(ingredientType => {
                    return {
                        value: ingredientType.ingredientTypeId,
                        label: ingredientType.ingredientType
                    }
                }));
            },
            retry: 0,
            refetchOnWindowFocus: false
        }
    );

    const wayTypeQuery = useQuery(
        ["wayTypeQuery"],getWayType,
        {
            onSuccess: response => {
                // console.log(response);
                setWayTypeOption(() => response.data.map(wayType => {
                    return {
                        valus: wayType.wayTypeId,
                        label: wayType.wayType
                    }
                }));
            },
            retry: 0,
            refetchOnWindowFocus: false
        }
    );

    const personnelQuery = useQuery(
        ["personnelQuery"],getPersonnel,
        {
            onSuccess: response => {
                setPersonnelOption(() => response.data.map(personnel => {
                    return {
                        value: personnel.personnelId,
                        label: personnel.personnel
                    }
                }));
            },
            retry: 0,
            refetchOnWindowFocus: false
        }
    );

    const takeTimeQuery = useQuery(
        ["takeTimeQuery"],getTakeTime,
        {
            onSuccess: response => {
                setTakeTimeOption(() => response.data.map(takeTime => {
                    return {
                        value: takeTime.takeTimeId,
                        label: takeTime.takeTime
                    }
                }));
            },
            retry: 0,
            refetchOnWindowFocus: false
        }
    );

    const difficultyLevelQuery = useQuery(
        ["difficultyLevelQuery"],getDifficultyLevel,
        {
            onSuccess: response => {
                // console.log(response);
                setDifficultyLevelOption(() => response.data.map(difficultyLevel => {
                    return {
                        value: difficultyLevel.difficultyLevelId,
                        label: difficultyLevel.difficultyLevel
                    }
                }));
            },
            retry: 0,
            refetchOnWindowFocus: false
        }
    );

    // 요리 순서 ------------------------------------------------------
    const [steps, setSteps] = useState([
        {id: 1, text: "", image: ""},
        {id: 2, text: "", image: ""}
    ]);

    const handleAddStep = (e, index) => {
        const newSteps = [...steps];
        newSteps[index].text = e.target.value;
        setSteps(newSteps);
    }

    const addStep = () => {
        setSteps([
            ...steps,
            {id: steps.length + 1, text: "", image: ""}
        ]);
    };

    // 재료 ------------------------------------------------------
    const [ingredients, setIngredient] = useState([
        {text:"", text:""},
        {text:"", text:""}
    ]);

    const handleAddIngredient = (e, index) => {
        const newIngredients = [...ingredients];
        newIngredients[index].text = e.target.value;
        setIngredient(newIngredients);
    }

    const addIngredient = () => {
        setIngredient([
            ...ingredients,
            {text: "", text: ""}
        ]);
    }

    // 양념 ------------------------------------------------------
    const [seasonings, setSeasoning] = useState([
        {text:"", text:""},
        {text:"", text:""}
    ]);

    const handleAddSeasoning = (e, index) => {
        const newSeasonings = [...seasonings];
        newSeasonings[index].text = e.target.value;
        setSeasoning(newSeasonings);
    }

    const addSeasoning = () => {
        setSeasoning([
            ...seasonings,
            {text: "", text: ""}
        ]);
    }


    return (
        <div css={s.layout}>
            <div css={s.recipe}>

                <div css={s.head}>
                    <span>레시피 등록</span>
                    <button>등록하기</button>
                </div>

                <div css={s.title}>
                    <span>레시피 제목을 정해주세요. (최대 30자)</span>
                </div>
                <div css={s.inputTitle}>
                    <input type="text" maxLength={30} placeholder="예) 참치 넣은 김치찌개 끊이기"/>
                </div>

                <div css={s.title}>
                    <span>요리를 소개해주세요. (최대 200자)</span>
                </div>
                <div css={s.infoRecipe}>
                    <textarea type="text" maxLength={200} style={{resize: "none"}} placeholder="예) 참치 김치찌개는 깊은 김치 맛에 고소한 참치를 더해 간편하면서도 든든한 한국식 찌개 요리입니다." />
                </div>

                <div css={s.categoryTitle}>
                    <span>카테고리를 정해주세요.</span>
                </div>
                <div css={s.category}>
                    <Select options={foodTypeOption} placeholder="음식 별" styles={selectStyle}></Select>
                    <Select options={situationTypeOption} placeholder="상황 별" styles={selectStyle}></Select>
                    <Select options={ingredientTypeOption} placeholder="재료 별" styles={selectStyle}></Select>
                    <Select options={wayTypeOption} placeholder="조리 별" styles={selectStyle}></Select>
                </div>

                <div css={s.title}>
                    <span>요리 정보</span>
                </div>
                <div css={s.category}>
                    <Select options={personnelOption} placeholder="사람 수" styles={selectStyle}></Select>
                    <Select options={takeTimeOption} placeholder="소요 시간" styles={selectStyle}></Select>
                    <Select options={difficultyLevelOption} placeholder="난이도" styles={selectStyle}></Select>
                </div>

                <div css={s.title}>
                    <span>재료</span>
                </div>
                <div css={s.ingredientCategory}>

                    {ingredients.map((ingredient) => (
                        <div css={s.ingredient}>
                            <div key={ingredient.id} css={s.ingre}>
                                <input type="text" placeholder="예)"/>
                                <input type="text" placeholder="예)"/>
                            </div>
                            <div css={s.ingreButton}>
                                <button>삭제</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div css={s.addButton}>
                    <button onClick={addIngredient}><BsPlusLg />추가</button>
                </div>

                <div css={s.title}>
                    <span>양념</span>
                </div>

                <div css={s.ingredientCategory}>

                    {seasonings.map((seasoning) => (
                        <div css={s.ingredient}>
                            <div key={seasoning.id} css={s.ingre}>
                                <input type="text" placeholder="예)"/>
                                <input type="text" placeholder="예)"/>
                            </div>
                            <div css={s.ingreButton}>
                                <button>삭제</button>
                            </div>
                        </div>
                    ))}
                    
                </div>
                <div css={s.addButton}>
                    <button onClick={addSeasoning}><BsPlusLg />추가</button>
                </div>

                <div css={s.title}>
                    <span>요리 순서</span>
                </div>

                <div css={s.stepBody}>

                    {steps.map((step, index) => (
                        <div key={step.id} css={s.step}>
                            <div css={s.num}>
                                <span>{index + 1}.</span>
                                <button>삭제</button>
                            </div>
                            <div css={s.stepContent}>
                                <textarea type="text" style={{ resize: "none" }} value={step.text} placeholder="예)"  onChange={handleAddStep}></textarea>
                                <div css={s.fic}>
                                    <img src={camera} alt="" />
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                <div css={s.addButton}>
                    <button onClick={addStep}><BsPlusLg />추가</button>
                </div>

                <div css={s.title}>
                    <span>요리 팁</span>
                </div>
                <div css={s.infoRecipe}>
                    <textarea type="text" maxLength={200} style={{resize: "none"}} placeholder="예) 처음에 참치 기름으로 김치를 먼저 볶아주면 좀 더 풍미있는 김치찌개를 만들 수 있어요." />
                </div>

                

            </div>
        </div>
    );
}

export default AddRecipePage;