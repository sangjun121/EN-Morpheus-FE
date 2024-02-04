import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import CharacterPage from './pages/CharacterPage';
import FairyImageGeneratePage from './pages/FairyImageGeneratePage';
import MorpheusBuilderPage from './pages/MorpheusBuilderPage';
import DataControlPage from './pages/DataControlPage';
import ScenarioDraftPage from './pages/ScenarioDraftPage';
import FairyImageGeneratorPage from './pages/FairyImageGeneratorPage';
import CharacterResultPage from './pages/CharacterResultPage';
import MyPage from './pages/MyPage/MyPage';
import PrivateRoute from '../src/route/PrivateRoute';
import PublicRoute from '../src/route/PublicRoute';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainPage />} />

                    <Route
                        path="/login"
                        element={<PublicRoute component={<LoginPage />} />}
                    ></Route>
                    <Route
                        path="/character"
                        element={<PrivateRoute component={<CharacterPage />} />}
                    ></Route>
                    <Route
                        path="/data-control"
                        element={
                            <PrivateRoute component={<DataControlPage />} />
                        }
                    ></Route>
                    <Route
                        path="/fairyImageGenerate"
                        element={
                            <PrivateRoute
                                component={<FairyImageGeneratePage />}
                            />
                        }
                    ></Route>
                    <Route
                        path="/morpheus-builder"
                        element={
                            <PrivateRoute component={<MorpheusBuilderPage />} />
                        }
                    ></Route>
                    <Route
                        path="/scenario-draft"
                        element={
                            <PrivateRoute component={<ScenarioDraftPage />} />
                        }
                    ></Route>
                    <Route
                        path="/fairy-image-generate-page"
                        element={
                            <PrivateRoute
                                component={<FairyImageGeneratorPage />}
                            />
                        }
                    ></Route>
                    <Route
                        path="/character/result"
                        element={
                            <PrivateRoute component={<CharacterResultPage />} />
                        }
                    ></Route>
                    <Route
                        path="/mypage"
                        element={<PrivateRoute component={<MyPage />} />}
                    ></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
