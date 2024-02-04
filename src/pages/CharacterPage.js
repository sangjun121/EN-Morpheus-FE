import * as React from 'react';
import { useState } from 'react';
import CharacterPrompt from '../components/CharacterPrompt/CharacterPrompt.js';
import './CharacterPage.css';
import MainLoading from '../animation/MainLoading.js';
import Header from '../components/Header/Header.js';

const CharacterPage = () => {
    const [loading, setLoading] = useState(true);

    const handleLoadingFinished = () => {
        setLoading(false);
    };

    return (
        <div className="CharacterPage">
            {loading && <MainLoading onFinished={handleLoadingFinished} />}
            <Header />
            <CharacterPrompt />
        </div>
    );
};

export default CharacterPage;
