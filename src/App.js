import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import CharacterPage from './pages/CharacterPage';
import FairyImageGeneratePage from './pages/FairyImageGeneratePage';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/character" element={<CharacterPage />} />
                    <Route
                        path="/fairyImageGenerate"
                        element={<FairyImageGeneratePage />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
