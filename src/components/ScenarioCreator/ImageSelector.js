import React, { useState } from 'react';
import './ScenarioCreator.css';

const ImageSelector = ({ expanded, onClose }) => {
    const handleButtonClick = (event) => {
        event.stopPropagation();
        onClose();
    };
    return (
        <div className={`box-wrapper ${expanded ? 'expanded' : ''}`}>
            <div className="scenario-box-wrapper-headline">
                <span className="step">Step 4</span>
                <br></br>Select Your Image
            </div>
            {expanded && (
                <button
                    className="box-close-button"
                    onClick={handleButtonClick}
                >
                    Close
                </button>
            )}
        </div>
    );
};

export default ImageSelector;
