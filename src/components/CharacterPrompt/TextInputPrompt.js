import { useState, useRef, useEffect } from 'react';
import refreshButton from '../../images/CharacterPage/refresh.png';
import './TextInputPrompt.css';

const TextInputPrompt = ({
    step,
    setStep,
    steps,
    characterState,
    setCharacterState,
}) => {
    let promptResult = {
        introduction: '',
        name: '',
        personality: '',
        animationStyle: '',
        species: '',
        furDescription: '',
        clothes: '',
        eyes: '',
    };
    const textarea = useRef();
    const nameStep = 0;
    const introductionStep = steps.length - 1;

    const [inputState, setInputState] = useState({
        //사용자 입력 저장하는 state
        name: '',
        style: '',
        personality: '',
        introduction: '',
        furDescription: '',
        clothes: '',
        eyes: '',
    });
    const [randomKeyword, setRandomKeyword] = useState([]);

    const inputEventHandler = (e) => {
        setInputState({
            ...inputState,
            [e.target.name]: e.target.value,
        });
        setCharacterState({
            ...characterState,
            [e.target.name]: e.target.value,
        });
    };

    const resetInputState = () => {
        setInputState({
            name: '',
            style: '',
            personality: '',
            introduction: '',
        });
    };

    const finishButtonEvent = () => {
        promptResult.introduction = inputState.introduction;
        promptResult.name = inputState.name;
        promptResult.personality = inputState.personality;
        if (inputState.animationStyle === 'AMERICAN-CARTOON') {
            promptResult.animationStyle = 'AMERICAN_CARTOON';
        } else if (inputState.animationStyle === 'KOREAN-WEBTOON') {
            promptResult.animationStyle = 'KOREAN_WEBTOON';
        } else {
            promptResult.animationStyle = inputState.style;
        }
        promptResult.furDescription = inputState.furDescription;
        promptResult.clothes = inputState.clothes;
        promptResult.eyes = inputState.eyes;

        if (species === 'human') {
            promptResult.species = `${genderKeyword[genderState]}, ${raceKeyword[raceState]}`;
        } else if (species === 'animal') {
            promptResult.species = `${animalSpeciesState}`;
        } else {
            //옵션 선택 안함
        }

        console.log(promptResult);
        // promptResult = inputState;
        // console.log(promptResult);
        // navigateCharacterImageGeneratePage();
        // resetInputState(); //입력값 초기화
    };

    const nextButtonEvent = () => {
        if (
            (step === 0 && inputState.name.includes(',')) ||
            (step === 1 && inputState.style.includes(','))
        ) {
            alert('Please enter in one word');
            return;
        }
        if (step === 3 && species === '') {
            alert("Please, Enter Character's Type");
            return;
        }
        if (
            step === 3 &&
            !(genderState !== null || raceState) &&
            species === 'human'
        ) {
            alert("Please, Enter Character's Type");
            return;
        }
        if (step === 3 && !confimDetail && species === 'animal') {
            alert('Please, Press the confirm button');
            return;
        }
        if (step === 3) {
            setStep(step + 1);
            return;
        }
        if (textarea.current.value === '') {
            alert('Required field');
            return;
        }

        setStep(step + 1);
    };

    const selectRandomKeywords = () => {
        const shuffled = steps[step].keywords.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 7);
    };

    //옵션 버튼 랜덤 추천 이벤트처리
    useEffect(() => {
        setRandomKeyword(selectRandomKeywords());
    }, [step]);

    //1. 옵션 선택 버튼 애니메이션 처리
    const CustomButton = ({ text }) => {
        const renderText = () => {
            return text.split('').map((char, index) => {
                if (char === ' ') {
                    return <span key={index}>&nbsp;</span>; // 공백을 &nbsp;로 대체
                } else {
                    return <span key={index}>{char}</span>;
                }
            });
        };

        return (
            <button
                onClick={() => {
                    if (
                        (step === 0 || step === 1) &&
                        textarea.current.value !== ''
                    )
                        return;

                    {
                        textarea.current.value === ''
                            ? (textarea.current.value = text)
                            : (textarea.current.value =
                                  textarea.current.value + ', ' + text);
                    }
                    setInputState({
                        ...inputState,
                        [steps[step].textareaName]: textarea.current.value,
                    });
                    setCharacterState({
                        ...characterState,
                        [steps[step].textareaName]: textarea.current.value,
                    });
                }}
            >
                <div>{renderText()}</div>
            </button>
        );
    };

    const AnimalSpeciesCustomButton = ({
        text,
        animalSpeciesInputState,
        setAnimalSpeciesInputState,
    }) => {
        const renderText = () => {
            return text
                .split('')
                .map((char, index) => <span key={index}>{char}</span>);
        };

        return (
            <button
                onClick={() => {
                    setAnimalSpeciesInputState(text);
                }}
            >
                <div>{renderText()}</div>
            </button>
        );
    };

    //3. Recommended keywords
    const RecommendedKeyword = () => {
        return (
            <div>
                <div className="RecommendContainer">
                    <p className="RecommendedKeywords">Recommended Keywords</p>
                    <button
                        className="refreshButton"
                        onClick={() => {
                            setRandomKeyword(selectRandomKeywords());
                        }}
                    >
                        <img src={refreshButton} />
                    </button>
                </div>

                <div className="buttonOptions">
                    {randomKeyword.map((nameText, index) => (
                        <CustomButton key={index} text={nameText} />
                    ))}
                </div>
            </div>
        );
    };

    const genderKeyword = ['boy', 'girl'];
    const raceKeyword = [
        'white',
        'african american',
        'asian',
        'latina',
        'hispanic',
    ];
    const animalSpeciesKeyword = [
        'Lion',
        'Tiger',
        'Bear',
        'Elephant',
        'Giraffe',
        'Monkey',
        'Sheep',
        'Cow',
        'Horse',
        'Rabbit',
        'Turtle',
        'Cat',
        'Dog',
        'Mouse',
        'Whale',
        'Dolphin',
        'Squirrel',
        'Parrot',
        'Fox',
    ];
    const [genderState, setGenderState] = useState(null);
    const [raceState, setRaceState] = useState(null);
    const [animalSpeciesState, setAnimalSpeciesState] = useState(null);
    const [animalRandomKeyword, setAnimalRandomKeyword] = useState([]);
    const selectAnimalRandomKeywords = () => {
        const shuffled = animalSpeciesKeyword.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 7);
    };

    useEffect(() => {
        setAnimalRandomKeyword(selectAnimalRandomKeywords());
    }, []);

    const [confimDetail, setConfirmDetail] = useState(false);
    const DetailBySpecies = () => {
        const [animalSpeciesInputState, setAnimalSpeciesInputState] =
            useState('');
        const animalInputHandler = (e) => {
            setAnimalSpeciesInputState(e.target.value);
        };

        useEffect(() => {
            setAnimalSpeciesInputState(animalSpeciesState);
        }, []);

        if (species === '') return null;
        if (species === 'human')
            return (
                <div>
                    <div className="gender">
                        <p>Gender</p>
                        <div className="speciesButtonOption">
                            {genderKeyword.map((keyword, index) => (
                                <button
                                    key={index}
                                    onClick={() => setGenderState(index)}
                                    className={
                                        genderState === index ? 'selected' : ''
                                    }
                                >
                                    {keyword}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="race">
                        <p>Ethnic Background</p>
                        <div className="speciesButtonOption">
                            {raceKeyword.map((keyword, index) => (
                                <button
                                    key={index}
                                    onClick={() => setRaceState(index)}
                                    className={
                                        raceState === index ? 'selected' : ''
                                    }
                                >
                                    <div>{keyword}</div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            );
        if (species === 'animal') {
            return (
                <div>
                    <div className="Species">
                        <p>Species</p>
                        <textarea
                            name="animalSpecies"
                            className="animalSpeciesTextarea"
                            // ref={textarea}
                            value={animalSpeciesInputState}
                            placeholder={"Enter Animal's Species"}
                            onChange={(e) => {
                                animalInputHandler(e);
                            }}
                        />
                        <div>
                            <div className="RecommendContainer">
                                <p className="RecommendedKeywordsInType">
                                    Recommended Keywords
                                </p>
                                <button
                                    className="refreshButton"
                                    onClick={() => {
                                        setAnimalRandomKeyword(
                                            selectAnimalRandomKeywords()
                                        );
                                    }}
                                >
                                    <img src={refreshButton} />
                                </button>
                            </div>

                            <div className="buttonOptions">
                                {animalRandomKeyword.map((nameText, index) => (
                                    <AnimalSpeciesCustomButton
                                        key={index}
                                        text={nameText}
                                        animalSpeciesInputState={
                                            animalSpeciesInputState
                                        }
                                        setAnimalSpeciesInputState={
                                            setAnimalSpeciesInputState
                                        }
                                    />
                                ))}
                            </div>
                            <div className="confirmButtonContainer">
                                <button
                                    className={
                                        !confimDetail
                                            ? 'saveButton'
                                            : 'saveButtonSelected'
                                    }
                                    onClick={() => {
                                        if (!confimDetail)
                                            setConfirmDetail(true);
                                        else setConfirmDetail(false);
                                        setAnimalSpeciesState(
                                            animalSpeciesInputState
                                        );
                                        setAnimalSpeciesInputState(
                                            animalSpeciesState
                                        );
                                    }}
                                >
                                    {confimDetail ? (
                                        <span>Confirmed!</span>
                                    ) : (
                                        <span>Confirm</span>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };

    const speciesButtonEvent = (input) => {
        if (input === 'human') setSpecies('human');
        else setSpecies('animal');
        console.log('success');
    };
    const [species, setSpecies] = useState('');

    return (
        <div>
            {step === 3 ? (
                <div className="EachPrompt">
                    <p>My Character's {steps[step].stepLabel} is</p>
                    <div className="SpeciesPrompt">
                        <div className="SpeciesPromptButtonContainer">
                            <div className="speciesButtonOption">
                                <button
                                    onClick={() => speciesButtonEvent('human')}
                                    className={
                                        species === 'human' ? 'selected' : ''
                                    }
                                >
                                    Human
                                </button>
                            </div>
                            <div className="speciesButtonOption">
                                <button
                                    onClick={() => speciesButtonEvent('animal')}
                                    className={
                                        species === 'animal' ? 'selected' : ''
                                    }
                                >
                                    Animal
                                </button>
                            </div>
                        </div>
                    </div>
                    <DetailBySpecies />
                </div>
            ) : (
                <div>
                    <div className="EachPrompt">
                        <p>My Character's {steps[step].stepLabel} is</p>
                        <textarea
                            name={steps[step].textareaName}
                            className={steps[step].textareaClassName}
                            ref={textarea}
                            value={inputState[steps[step].textareaName]}
                            placeholder={`(Enter ${steps[step].stepLabel})`}
                            onChange={(e) => {
                                inputEventHandler(e);
                            }}
                        />
                    </div>
                    {step !== introductionStep ? <RecommendedKeyword /> : null}
                </div>
            )}

            <div className="NextBtnContainer">
                {step === steps.length - 1 ? (
                    <div className="NextButton" onClick={finishButtonEvent}>
                        <p className="NextBtnText">FINISH</p>
                        <div className="NextBtnTwo">
                            <p className="NextBtnText2">GO!</p>
                        </div>
                    </div>
                ) : (
                    <div className="NextButton" onClick={nextButtonEvent}>
                        <p className="NextBtnText">NEXT</p>
                        <div className="NextBtnTwo">
                            <p className="NextBtnText2">GO!</p>
                        </div>
                    </div>
                )}

                {step > nameStep && step < steps.length ? (
                    <div
                        class="NextButton"
                        onClick={() => {
                            setStep(step - 1);
                        }}
                    >
                        <p class="NextBtnText">BACK</p>
                        <div class="NextBtnTwo">
                            <p class="NextBtnText2">GO!</p>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default TextInputPrompt;
