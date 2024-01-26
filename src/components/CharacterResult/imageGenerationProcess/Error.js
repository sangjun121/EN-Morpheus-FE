import './Error.css';
import retryIcon from '../../../images/CharacterResultPage/retry.png';

const Error = ({ regenerateImage }) => {
    return (
        <div className="Error">
            <p className="retryTitle">TRY AGAIN</p>
            <img
                src={retryIcon}
                className="errorRetryButton"
                onClick={regenerateImage}
            />
        </div>
    );
};

export default Error;
