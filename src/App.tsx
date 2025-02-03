/// <reference types="node" />

import { useState } from "react";
import Calculator from "./components/Calculator";
import ShaderToText from "./components/ShaderToText";
import "./styles/styles.scss";

export default function App() {
    const [activeTab, setActiveTab] = useState("calculator");

    return (
        <div className="app-container">
            <nav className="nav-bar">
                <button 
                    className={`tab-button ${activeTab === "calculator" ? "active" : ""}`}
                    onClick={() => setActiveTab("calculator")}
                >
                    Calculator
                </button>
                <button 
                    className={`tab-button ${activeTab === "shader" ? "active" : ""}`}
                    onClick={() => setActiveTab("shader")}
                >
                    Text-to-Shader
                </button>
            </nav>

            <div className="content-container">
                {activeTab === "calculator" && <Calculator />}
                {activeTab === "shader" && <ShaderToText />}
            </div>
        </div>
    );
}
