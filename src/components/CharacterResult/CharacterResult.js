import React, { useReducer, useEffect } from 'react';
import reducer from '../../api/Reducer';
import API from '../../api/API';

const CharacterResult = ({ userCharacterPromptInput }) => {
    //이미지 응답 로딩 state
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null,
    });

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

    const { loading, data: characterImage, error } = state;

    if (loading) return <div>loading...</div>;
    if (error) return <div>server error</div>;
    if (!characterImage) return null;
    return (
        <div className="CharacterResult">
            <p className="confirmSelectionCharacterTitle">
                If you're happy with the character, please confirm your choice!
            </p>
            <img src={characterImage.data[0].url} />
        </div>
    );
};

export default CharacterResult;
