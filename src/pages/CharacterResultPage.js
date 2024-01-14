import { useLocation } from 'react-router-dom';
import CharacterResult from '../components/CharacterResult/CharacterResult';
import Header from '../components/Header/Header';

const CharacterResultPage = () => {
    const location = useLocation();
    const userCharacterPromptInput = location.state;

    return (
        <div className="CharacterResultPage">
            <Header />
            <CharacterResult
                userCharacterPromptInput={userCharacterPromptInput}
            />
        </div>
    );
};

export default CharacterResultPage;
