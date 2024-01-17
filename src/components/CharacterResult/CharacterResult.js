import React, { useReducer, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import reducer from '../../api/Reducer';
import API from '../../api/API';
import './CharacterResult.css';

const CharacterResult = ({ userCharacterPromptInput }) => {
    const navigate = useNavigate();

    //이미지 응답 로딩 state
    const [serverState, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null,
    });

    const [confirmState, setConfirmState] = useState(false);

    const fetchCharacterImage = async () => {
        dispatch({ type: 'LOADING' });
        try {
            const response = await API.post('', {
                model: 'dall-e-3',
                prompt: `다음 조건을 만족하는 캐릭터를 그려줘. 조건1: 캐릭터는 다음의 옵션을 가지는 캐릭터여야 돼. 조건2: 이미지에는 어떠한 텍스트도 있으면 안돼 .캐릭터의 옵션: 캐릭터의 이름: ${userCharacterPromptInput.name}  캐릭터의 그림체: ${userCharacterPromptInput.style}, 캐릭터의 성격: ${userCharacterPromptInput.personality} 캐릭터의 외형: ${userCharacterPromptInput.appearance} 캐릭터의 소개: ${userCharacterPromptInput.introduction}`,
                n: 1,
                size: '1024x1024',
            });
            dispatch({ type: 'SUCCESS', data: response.data });
        } catch (e) {
            dispatch({ type: 'ERROR', error: e });
        }
    };

    //mount 될때 이미지 생성요청
    useEffect(() => {
        fetchCharacterImage();
    }, []);

    const { loading, data: characterImage, error } = serverState;

    const imageComponentAfterRequest = () => {
        if (loading) return <div>loading...</div>;
        if (error) return <div>please click the Regenerate Button</div>;
        if (!characterImage) return null;
        return <img src={characterImage.data[0].url} />;
    };

    const regenerateImage = () => {
        fetchCharacterImage();
    };

    const navigateCharacterPromptPage = () => {
        navigate('/character');
    };
    const navigateMorpheusBuilderPage = () => {
        navigate('/morpheus-builder');
    };
    return (
        <div className="CharacterResult">
            <p className="confirmSelectionCharacterTitle">
                If you're happy with the character, please confirm your choice!
            </p>
            {imageComponentAfterRequest()}
            {confirmState ? null : (
                <div className="characterResultButtonContainer">
                    <button onClick={regenerateImage}>Regenerate</button>
                    <button onClick={navigateCharacterPromptPage}>
                        Reset Prompt
                    </button>
                </div>
            )}

            {characterImage && !confirmState ? (
                <div>
                    <p>Do you Want to Confirm?</p>
                    <button
                        onClick={() => {
                            setConfirmState(!confirmState);
                        }}
                    >
                        Confirm Character
                    </button>
                </div>
            ) : null}
            {characterImage && confirmState ? (
                <div className="characterResultButtonContainer">
                    <button>Character Inventory</button>
                    <button onClick={navigateMorpheusBuilderPage}>
                        Build Story Book
                    </button>
                </div>
            ) : null}
        </div>
    );
};

export default CharacterResult;
