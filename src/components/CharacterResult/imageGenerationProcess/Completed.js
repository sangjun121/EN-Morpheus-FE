import { useEffect, useState } from 'react';
import './Completed.css';

const Completed = ({ characterImage, confirmState }) => {
    const imgUrl = characterImage;

    const [loaded, setLoaded] = useState(false); //이미지 완전히 로딩되었는지
    const [imgDarkStyle, setImgDarkStyle] = useState({}); //이미지 음영 처리

    const changeImgDarkStyle = () => {
        setImgDarkStyle({
            filter: 'brightness(50%)', // 예시: 밝기를 50%로 줄임
            transition: 'filter 1s', // 부드러운 전환 효과
        });
    };

    useEffect(() => {
        //이미지 로딩
        const img = new Image();
        img.src = imgUrl;
        img.onload = () => {
            setLoaded(true);
        };
    }, [imgUrl]);

    useEffect(() => {
        //확정시 이미지 밝기 처리
        if (confirmState) changeImgDarkStyle();
    }, [confirmState]);

    const CheckAnimation = () => {
        return (
            <div className="checkMarkWrapper">
                <svg
                    className="checkmark"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 52 52"
                >
                    <circle
                        className="checkmark__circle"
                        cx="26"
                        cy="26"
                        r="25"
                        fill="none"
                    />
                    <path
                        className="checkmark__check"
                        fill="none"
                        d="M14.1 27.2l7.1 7.2 16.7-16.8"
                    />
                </svg>
            </div>
        );
    };

    return (
        <div className="Completed">
            {loaded ? (
                <img src={imgUrl} style={imgDarkStyle} />
            ) : (
                <p>로드 중...</p>
            )}
            {confirmState ? <CheckAnimation /> : null}
        </div>
    );
};

export default Completed;
