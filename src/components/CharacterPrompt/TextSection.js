import './TextSection.css';

const TextSection = ({ step, steps }) => {
    return (
        <div className="TextSection">
            <p className="simpleMessage">Try it yourself</p>
            <p className="Title">Create Your Own Character</p>
            <p className="Guide">Guide</p>
            <p className="GuideTitle">{steps[step].headLine}</p>
            <p className="GuideDescription">{steps[step].descrition}</p>
        </div>
    );
};

export default TextSection;
