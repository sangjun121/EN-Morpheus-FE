import * as React from 'react';
import { useState } from 'react';
import './FairyImageGeneratePage.css';
import MainLoading from '../animation/MainLoading.js';
import Header from '../components/Header/Header.js';
import FairyImageGenerator from '../components/FairyImageGenerator/FairyImageGenerator.js';

const FairyImageGeneratePage = () => {
    const [loading, setLoading] = useState(true);

    const handleLoadingFinished = () => {
        setLoading(false);
    };

    const count = 10; //더미데이터 (서버에서 챕터수 받아오기 - useEffect로 마운트 될때 초기화)

    return (
        <div className="FairyImageGeneratePage">
            {loading && <MainLoading onFinished={handleLoadingFinished} />}
            <Header />
            <FairyImageGenerator chaperCount={count} />
        </div>
    );
};

export default FairyImageGeneratePage;
