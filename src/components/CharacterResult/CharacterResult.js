import React, { useReducer, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import reducer from '../../api/Reducer';
import './CharacterResult.css';
import Loading from './imageGenerationProcess/Loading';
import Error from './imageGenerationProcess/Error';
import Completed from './imageGenerationProcess/Completed';
import UserRequestApi from '../../api/UserRequestApi';

const CharacterResult = ({ userCharacterPromptInput }) => {
    const [loadedImgUrl, setLoadedImgUrl] = useState('');
    const [loadedImgRevisedPrompt, setLoadedImgRevisedPrompt] = useState('');

    const navigate = useNavigate();

    //이미지 응답 로딩 state
    const [serverState, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null,
    });
    const [confirmState, setConfirmState] = useState(false);

    const fetchCharacterImage = async () => {
        console.log('api 호출!');
        dispatch({ type: 'LOADING' });

        try {
            const response = await UserRequestApi.post('/character/create', {
                introduction: '점, 주근깨, 안경',
                name: 'Lilly',
                personality: 'kind',
                animationStyle: 'DISNEY',
                species: 'girl, white',
                furDescription: 'red hair, curly hair',
                clothes: 'Spacesuit',
                eyes: 'green eyes',
            });

            dispatch({
                type: 'SUCCESS',
                data: response.data.response.image_url.data[0].url,
            });

            setLoadedImgUrl(response.data.response.image_url.data[0].url);
            setLoadedImgRevisedPrompt(
                response.data.response.image_url.data[0].revised_prompt
            );
        } catch (e) {
            dispatch({ type: 'ERROR', error: e });
        }
    };

    /****************************************************** */
    const saveCharacterImage = async () => {
        console.log('api 호출!');
        const requestBody = {
            characterCreationForm: {
                introduction: '점, 주근깨, 안경',
                name: 'Lilly',
                personality: 'kind',
                animationStyle: 'DISNEY',
                species: 'girl, white',
                furDescription: 'red hair, curly hair',
                clothes: 'Spacesuit',
                eyes: 'green eyes',
            },
            imageUrl: loadedImgUrl,
            revisedPrompt: loadedImgRevisedPrompt,
        };
        console.log(requestBody);

        try {
            const response = await UserRequestApi.post(
                '/character/add',
                requestBody
            );
        } catch (e) {
            console.log(e);
        }
    };
    /****************************************************** */

    // prompt: `다음 조건을 만족하는 캐릭터를 그려줘. 조건1: 캐릭터는 다음의 옵션을 가지는 캐릭터여야 돼. 조건2: 이미지에는 어떠한 텍스트도 있으면 안돼 .캐릭터의 옵션: 캐릭터의 이름: ${userCharacterPromptInput.name}  캐릭터의 그림체: ${userCharacterPromptInput.style}, 캐릭터의 성격: ${userCharacterPromptInput.personality} 캐릭터의 외형: ${userCharacterPromptInput.appearance} 캐릭터의 소개: ${userCharacterPromptInput.introduction}`,
    const regenerateImage = () => {
        fetchCharacterImage();
    };

    const { loading, data: characterImage, error } = serverState;
    const imageComponentAfterRequest = () => {
        if (loading) return <Loading />;
        if (error) return <Error regenerateImage={regenerateImage} />;
        if (!characterImage) return null;
        return (
            <Completed
                characterImage={characterImage}
                confirmState={confirmState}
            />
        );
    };

    const navigateCharacterPromptPage = () => {
        navigate('/character');
    };
    const navigateMorpheusBuilderPage = () => {
        navigate('/morpheus-builder');
    };
    const navigateMyPage = () => {
        navigate('/mypage');
    };
    //mount 될때 이미지 생성요청
    useEffect(() => {
        fetchCharacterImage();
    }, []);
    return (
        <div className="CharacterResult">
            <p className="CharacterResultPageName">Character Generator</p>
            <p className="CharacterResultGuideText">Generate Your Character</p>
            <div className="CharacterResultContainer">
                {imageComponentAfterRequest()}
            </div>
            {confirmState ? null : (
                <div className="characterResultButtonContainer">
                    <button
                        onClick={regenerateImage}
                        className="characterResultButton"
                    >
                        Regenerate
                    </button>
                    <button
                        onClick={navigateCharacterPromptPage}
                        className="characterResultButton"
                    >
                        Reset Prompt
                    </button>
                </div>
            )}

            {characterImage && !confirmState ? (
                <div>
                    <p className="CharacterResultConfirmTitle">
                        Do you Want to Confirm?
                    </p>
                    <button
                        onClick={() => {
                            setConfirmState(!confirmState);
                            saveCharacterImage();
                        }}
                        className="characterResultButton"
                    >
                        Confirm Character
                    </button>
                </div>
            ) : null}
            {characterImage && confirmState ? (
                <div className="characterResultButtonContainer">
                    <button
                        className="characterResultButton"
                        onClick={navigateMyPage}
                    >
                        Character Inventory
                    </button>
                    <button
                        onClick={navigateMorpheusBuilderPage}
                        className="characterResultButton"
                    >
                        Build Story Book
                    </button>
                </div>
            ) : null}
        </div>
    );
};

export default CharacterResult;
