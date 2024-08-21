/** @jsxImportSource @emotion/react */

import { useNavigate } from "react-router-dom";
import * as s from "./style";
import Select from "react-select";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { BsPlusLg } from "react-icons/bs";
import camera from "./camera.png";
import { getDifficultyLevel, getFoodType, getIngredientType, getPersonnel, getSituationType, getTakeTime, getWayType } from "../../apis/options";
import { ingredientRequest, recipeRequest } from "../../apis/recipe";


function AddRecipePage(props) {

    const [foodTypeOption, setFoodTypeOption] = useState([]);
    const [situationTypeOption, setSituationTypeOption] = useState([]);
    const [ingredientTypeOption, setIngredientTypeOption] = useState([]);
    const [wayTypeOption, setWayTypeOption] = useState([]);
    const [personnelOption, setPersonnelOption] = useState([]);
    const [takeTimeOption, setTakeTimeOption] = useState([]);
    const [difficultyLevelOption, setDifficultyLevelOption] = useState([]);

    const [userId, setUserId] = useState();
    const [recipeTitle, setRecipeTitle] = useState();
    const [recipeIntro, setRecipeIntro] = useState();
    const [foodTypeId, setFoodTypeId] = useState();
    const [situationTypeId, setSituationTypeId] = useState();
    const [ingredientTypeId, setIngredientTypeId] = useState();
    const [wayTypeId, setWayTypeId] = useState();
    const [takeTimeId, setTakeTimeId] = useState();
    const [personnelId, setPersonnelId] = useState();
    const [difficultyLevelId, setDifficultyLevelId] = useState();
    const [recipeTip, setRecipeTip] = useState();

    const [ingredients, setIngredient] = useState([
        {ingredientName: "", ingredientState: ""},
        {ingredientName: "", ingredientState: ""}
    ]);
    const [seasonings, setSeasonings] = useState([
        {seasoningName:"", seasoningState:""},
        {seasoningName:"", seasoningState:""}
    ]);
    const [steps, setSteps] = useState([
        {id: 1, text: "", image: ""},
        {id: 2, text: "", image: ""}
    ]);

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
                        value: wayType.wayTypeId,
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

    // 재료 ------------------------------------------------------
    const handleAddIngredient = (index, field, value) => {
        const newIngredients = ingredients.map((ingredient, i) => {
            if (i === index) {
                return {
                    ...ingredient,
                    [field]: value
                };
            }
            return ingredient;
        });
        console.log(newIngredients);
        setIngredient(newIngredients);
    };

    const addIngredient = () => {
        setIngredient([
            ...ingredients,
            {text: "", text: ""}
        ]);
    }

    const handleDeleteIngredient = (index) => {
        // console.log(index);
        const newIngredients = ingredients.filter((_,i) => i !== index);
        setIngredient(newIngredients);
    }

    // 양념 ------------------------------------------------------
    const handleAddSeasoning = (index, field, value) => {
        const newSeasonings = seasonings.map((seasoning, i) => {
            if (i === index) {
                return {
                    ...seasoning,
                    [field]: value
                };
            }
            return seasoning;
        });
        console.log(newSeasonings);
        setSeasonings(newSeasonings);
    };

    const addSeasoning = () => {
        setSeasonings([
            ...seasonings,
            {text: "", text: ""}
        ]);
    }

    const handleDeleteSeasoning = (index) => {
        // console.log(index);
        const newSeasonings = seasonings.filter((_,i) => i !== index);
        setSeasonings(newSeasonings);
    }

    
    // 요리 순서 ------------------------------------------------------
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

    const handleDeleteStep = (index) => {
        const newSteps = steps.filter((_,i) => i !== index);
        setSteps(newSteps);
    }

    // 등록하기 버튼 ------------------------------------------------------
    const handleRegistrationButton = () => {
        // recipeRequest({
        //     userId,
        //     recipeTitle,
        //     recipeIntro,
        //     foodTypeId,
        //     situationTypeId,
        //     ingredientTypeId,
        //     wayTypeId,
        //     takeTimeId,
        //     personnelId,
        //     difficultyLevelId,
        //     recipeTip
        // }).then(response => {
        //     alert("레시피가 등록되었습니다.");
        // }).catch(error => {
        //     alert("등록 실패!");
        // });

        const ingredientName = ingredients.map(item => item.ingredientName);
        const ingredientState = ingredients.map(item => item.ingredientState);
    
        ingredientRequest({
            recipeId: 1,
            ingredientName,
            ingredientState
        }).then(response => {
            alert("재료 등록");
        }).catch(error => {
            alert("실패");
        });
    }

    const handleRecipeTitleOnChange = (e) => {
        setRecipeTitle(() => e.target.value);
    }
    const handleRecipeIntroOnChange = (e) => {
        setRecipeIntro(() => e.target.value);
    }
    const handleRecipeTipOnChange = (e) => {
        setRecipeTip(() => e.target.value);
    }

    const handleFoodTypeIdOnChange = (foodTypeId) => {
        setFoodTypeId(() => foodTypeId.value);
    }
    const handleSituationTypeIdOnChange = (situationTypeId) => {
        setSituationTypeId(() => situationTypeId.value);
    }
    const handleIngredientTypeIdOnChange = (ingredientTypeId) => {
        setIngredientTypeId(() => ingredientTypeId.value);
    }
    const handleWayTypeIdOnChange = (wayTypeId) => {
        // console.log(wayTypeId.value);
        setWayTypeId(() => wayTypeId.value);
    }

    const handlePersonnelIdOnChange = (personnelId) => {
        setPersonnelId(() => personnelId.value);
    }
    const handleTakeTimeIdOnChange = (takeTimeId) => {
        setTakeTimeId(() => takeTimeId.value);
    }
    const handleDifficultyLevelIdOnChange = (difficultyLevelId) => {
        setDifficultyLevelId(() => difficultyLevelId.value);
    }



    return (
        <div css={s.layout}>
            <div css={s.recipe}>

                <div css={s.head}>
                    <span>레시피 등록</span>
                    <button onClick={handleRegistrationButton}>등록하기</button>
                </div>

                <div css={s.title}>
                    <span>레시피 제목을 정해주세요. (최대 30자)</span>
                </div>
                <div css={s.inputTitle}>
                    <input type="text" maxLength={30} placeholder="예) 참치 넣은 김치찌개 끊이기" value={recipeTitle} onChange={handleRecipeTitleOnChange}/>
                </div>

                <div css={s.title}>
                    <span>요리를 소개해주세요. (최대 200자)</span>
                </div>
                <div css={s.infoRecipe}>
                    <textarea type="text" maxLength={200} style={{resize: "none"}} placeholder="예) 참치 김치찌개는 깊은 김치 맛에 고소한 참치를 더해 간편하면서도 든든한 한국식 찌개 요리입니다." value={recipeIntro} onChange={handleRecipeIntroOnChange} />
                </div>

                <div css={s.categoryTitle}>
                    <span>카테고리를 정해주세요.</span>
                </div>
                <div css={s.category}>
                    <Select options={foodTypeOption} placeholder="음식 별" styles={selectStyle} onChange={handleFoodTypeIdOnChange}></Select>
                    <Select options={situationTypeOption} placeholder="상황 별" styles={selectStyle} onChange={handleSituationTypeIdOnChange} ></Select>
                    <Select options={ingredientTypeOption} placeholder="재료 별" styles={selectStyle} onChange={handleIngredientTypeIdOnChange}></Select>
                    <Select options={wayTypeOption} placeholder="조리 별" styles={selectStyle} onChange={handleWayTypeIdOnChange}></Select>
                </div>

                <div css={s.title}>
                    <span>요리 정보</span>
                </div>
                <div css={s.category}>
                    <Select options={personnelOption} placeholder="사람 수" styles={selectStyle} onChange={handlePersonnelIdOnChange}></Select>
                    <Select options={takeTimeOption} placeholder="소요 시간" styles={selectStyle} onChange={handleTakeTimeIdOnChange}></Select>
                    <Select options={difficultyLevelOption} placeholder="난이도" styles={selectStyle} onChange={handleDifficultyLevelIdOnChange}></Select>
                </div>

                <div css={s.title}>
                    <span>재료</span>
                </div>
                <div css={s.ingredientCategory}>

                    {ingredients.map((ingredient, index) => (
                        <div key={index} css={s.ingredient}>
                            <div css={s.ingre}>
                                <input type="text" placeholder="예) 참치" value={ingredient.ingredientName} onChange={(e) => handleAddIngredient(index, "ingredientName", e.target.value)} />
                                <input type="text" placeholder="예) 1 캔" value={ingredient.ingredientState} onChange={(e) => handleAddIngredient(index, "ingredientState", e.target.value)} />
                            </div>
                            <div css={s.ingreButton}>
                                <button onClick={() => handleDeleteIngredient(index)}>삭제</button>
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

                    {seasonings.map((seasoning, index) => (
                        <div css={s.ingredient}>
                            <div key={seasoning.id} css={s.ingre}>
                                <input type="text" placeholder="예) 설탕" value={seasoning.seasoningName} onChange={(e) => handleAddSeasoning(index, "seasoningName", e.target.value)}/>
                                <input type="text" placeholder="예) 1 T" value={seasoning.seasoningState} onChange={(e) => handleAddSeasoning(index, "seasoningState", e.target.value)}/>
                            </div>
                            <div css={s.ingreButton}>
                                <button onClick={() => handleDeleteSeasoning(index)}>삭제</button>
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
                                <button onClick={() => handleDeleteStep(index)} >삭제</button>
                            </div>
                            <div css={s.stepContent}>
                                <textarea type="text" style={{ resize: "none" }} placeholder="예)" ></textarea>
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
                    <span>(선택사항)</span>
                </div>
                <div css={s.infoRecipe}>
                    <textarea type="text" maxLength={200} style={{resize: "none"}} placeholder="예) 처음에 참치 기름으로 김치를 먼저 볶아주면 좀 더 풍미있는 김치찌개를 만들 수 있어요." value={recipeTip} onChange={handleRecipeTipOnChange}/>
                </div>

            </div>
        </div>
    );
}

export default AddRecipePage;