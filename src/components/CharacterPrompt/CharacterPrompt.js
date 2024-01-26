import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CharacterPrompt.css';
import refreshButton from '../../images/CharacterPage/refresh.png';

const CharacterPrompt = () => {
    let promptResult;

    const [inputState, setInputState] = useState({
        //사용자 입력 저장하는 state
        name: '',
        style: '',
        personality: '',
        appearance: '',
        introduction: '',
    });

    const resetInputState = () => {
        setInputState({
            name: '',
            style: '',
            personality: '',
            appearance: '',
            introduction: '',
        });
    };

    const [step, setStep] = useState(0);
    const [randomKeyword, setRandomKeyword] = useState([]);
    const steps = [
        {
            stepLabel: 'Name',
            headLine: 'Enter your character name',
            descrition: `Please write the character's name in one word (e.g., Luna).`,
            textareaClassName: 'nameTextarea',
            keywords: [
                'Twinkle',
                'Milo',
                'Luna',
                'Piper',
                'Finn',
                'Rosie',
                'Ellie',
                'Max',
                'Jasper',
                'Ivy',
                'Benny',
                'Clara',
                'Daisy',
                'Eddie',
                'Freddie',
                'Greta',
                'Hazel',
                'Iris',
                'Jack',
                'Kiki',
                'Leo',
                'Maggie',
                'Nina',
                'Ollie',
                'Polly',
                'Quincy',
                'Rory',
                'Sally',
                'Timmy',
                'Uma',
                'Vinnie',
                'Wendy',
                'Xander',
                'Yara',
                'Zara',
                'Andy',
                'Bella',
                'Charlie',
                'Dora',
                'Evan',
                'Fiona',
                'George',
                'Holly',
                'Ian',
                'Julie',
                'Karl',
                'Lily',
                'Mike',
                'Nora',
                'Oscar',
            ],
            textareaName: 'name',
        },
        {
            stepLabel: 'Style',
            headLine: 'Enter your character style',
            descrition: `Please describe the style of your character. \nFor instance, inspired by the vibrant and detailed aesthetics of Pixar animations.`,
            textareaClassName: 'styleTextarea',
            keywords: [
                'Toy Story',
                'Studio Ghibli',
                'Disney Classic',
                'Anime',
                'Looney Tunes',
                'Nickelodeon',
                'DreamWorks',
                'Cartoon Network',
                'Marvel Animated',
                'DC Animated',
                'South Park',
                'Adventure Time',
                'Rick and Morty',
                'Bojack Horseman',
                'Archer',
                'The Simpsons',
                'Family Guy',
                'Futurama',
                "Bob's Burgers",
                'Steven Universe',
            ],
            textareaName: 'style',
        },
        {
            stepLabel: 'Personality',
            headLine: `Enter your character's Personality`,
            descrition: `Please describe the character's personality, focusing on traits such as their temperament, behavior, and emotional responses. Consider aspects like cheerfulness, bravery, shyness, or curiosity.`,
            textareaClassName: 'personalityTextarea',
            keywords: [
                'Adventurous',
                'Ambitious',
                'Compassionate',
                'Courageous',
                'Curious',
                'Determined',
                'Empathetic',
                'Enthusiastic',
                'Generous',
                'Honest',
                'Imaginative',
                'Independent',
                'Intelligent',
                'Joyful',
                'Kind-hearted',
                'Loyal',
                'Meticulous',
                'Optimistic',
                'Passionate',
                'Patient',
                'Perceptive',
                'Playful',
                'Practical',
                'Quirky',
                'Resilient',
                'Resourceful',
                'Sarcastic',
                'Sincere',
                'Spontaneous',
                'Strategic',
                'Sympathetic',
                'Thoughtful',
                'Trustworthy',
                'Wise',
                'Witty',
                'Assertive',
                'Brave',
                'Calm',
                'Charming',
                'Creative',
                'Diplomatic',
                'Energetic',
                'Friendly',
                'Gracious',
                'Humble',
                'Innovative',
                'Jovial',
                'Keen',
                'Mysterious',
                'Nurturing',
            ],
            textareaName: 'personality',
        },
        {
            stepLabel: 'Appearance',
            headLine: `Enter your character's Appearance`,
            descrition: `Please describe the character's appearance, focusing on aspects such as height, build, hair color, eye color, and distinctive marks. Include details like style of dress, accessories, and any notable characteristics.`,
            textareaClassName: 'appearanceTextarea',
            keywords: [
                'Tall',
                'Short',
                'Slender',
                'Muscular',
                'Curly hair',
                'Straight hair',
                'Blond hair',
                'Red hair',
                'Black hair',
                'Brown hair',
                'Blue eyes',
                'Green eyes',
                'Brown eyes',
                'Hazel eyes',
                'Long beard',
                'Freckles',
                'Glasses',
                'Elegant',
                'Casual style',
                'Sporty',
                'Gothic',
                'Vintage',
                'Punk',
                'Hipster',
                'Business attire',
                'Formal wear',
                'Fantasy attire',
                'Exotic',
                'Tanned skin',
                'Pale skin',
                'Dark skin',
                'Light skin',
                'Robust',
                'Athletic',
                'Chubby',
                'Bald',
                'Flowing hair',
                'Moustache',
                'Sunglasses',
                'Leather jacket',
                'Hat',
                'Cape',
                'Boots',
                'Sneakers',
                'High heels',
                'Gloves',
                'Bow tie',
            ],
            textareaName: 'appearance',
        },
        {
            stepLabel: 'Introduction',
            headLine: 'Enter your character Introduction',
            descrition: `Please describe an introduction for your character, including key details such as their occupation, background, and major personality traits. Highlight any unique qualities or experiences that make them stand out. Remember, \nthe more specific and detailed your description, the higher the accuracy in capturing the essence of your character.`,
            textareaClassName: 'introductionTextarea',
            keywords: [],
            textareaName: 'introduction',
        },
    ];

    const inputEventHandler = (e) => {
        setInputState({
            ...inputState,
            [e.target.name]: e.target.value,
        });
    };

    //옵션 선택 버튼 애니메이션 처리
    const CustomButton = ({ text }) => {
        const renderText = () => {
            return text
                .split('')
                .map((char, index) => <span key={index}>{char}</span>);
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
                }}
            >
                <div>{renderText()}</div>
            </button>
        );
    };

    const selectRandomKeywords = () => {
        const shuffled = steps[step].keywords.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 7);
    };

    //이미지 생성 페이지 넘어가는 함수
    const navigate = useNavigate();
    const navigateCharacterImageGeneratePage = () => {
        navigate('/character/result', { state: promptResult });
    };

    const finishButtonEvent = () => {
        promptResult = inputState;
        console.log(promptResult);
        navigateCharacterImageGeneratePage();
        resetInputState(); //입력값 초기화
    };

    const nextButtonEvent = () => {
        if (
            (step === 0 && inputState.name.includes(',')) ||
            (step === 1 && inputState.style.includes(','))
        ) {
            alert('하나만 입력해 주세요');
            return;
        }

        if (0 <= step && step <= 3 && textarea.current.value === '') {
            alert('필수 입력사항 입니다.');
            return;
        }
        setStep(step + 1);
    };

    //옵션 버튼 랜덤 추천 이벤트처리
    useEffect(() => {
        setRandomKeyword(selectRandomKeywords());
    }, [step]);

    const textarea = useRef();

    return (
        <div className="CharacterPrompt">
            <div className="OptionSection">
                <p className="simpleMessage">Try it yourself</p>
                <p className="Title">Create Your Own Character</p>
                <p className="PromptTitle">PROMPT</p>

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
                            // handleResizeHeight();
                        }}
                    />
                </div>
            </div>
            <div className="DescritionSection">
                <p className="Guide">Guide</p>
                <p className="GuideTitle">{steps[step].headLine}</p>
                <p className="GuideDescription">{steps[step].descrition}</p>
                {step !== 4 ? (
                    <div className="RecommendContainer">
                        <p className="RecommendedKeywords">
                            Recommended Keywords
                        </p>
                        <button
                            className="refreshButton"
                            onClick={() => {
                                setRandomKeyword(selectRandomKeywords());
                            }}
                        >
                            <img src={refreshButton} />
                        </button>
                    </div>
                ) : null}

                <div className="buttonOptions">
                    {randomKeyword.map((nameText, index) => (
                        <CustomButton key={index} text={nameText} />
                    ))}
                </div>

                <div className="NextBtnContainer">
                    {step === 4 ? (
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

                    {step > 0 && step <= 4 ? (
                        <div
                            class="NextButton"
                            onClick={() => {
                                if (step > 4) return;
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
        </div>
    );
};

export default CharacterPrompt;
