import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import MorpheusPage from "./pages/MorpheusPage";
import DataControlPage from "./pages/DataControlPage";
import TopicSetupPage from "./pages/MorpheusPage/TopicSetupPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/data-control" element={<DataControlPage />} />
          <Route path="/morpheus" element={<MorpheusPage />} />
          <Route path="/topic-setup" element={<TopicSetupPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
