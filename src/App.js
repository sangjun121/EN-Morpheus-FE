import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import MorpheusBuilderPage from "./pages/MorpheusBuilderPage";
import DataControlPage from "./pages/DataControlPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/data-control" element={<DataControlPage />} />
          <Route path="/morpheus-builder" element={<MorpheusBuilderPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
