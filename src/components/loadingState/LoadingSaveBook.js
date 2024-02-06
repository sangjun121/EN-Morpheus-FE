import Spinner from "../../images/loading_book.gif";
import "./LoadingBook.css";

const LoadingSaveBook = () => {
  return (
    <div className="loading-book-wrapper">
      <h3>
        Saving the fairy tale book<br></br>Please wait a moment.
      </h3>
      <img src={Spinner} alt="loading" width="10%"></img>
    </div>
  );
};

export default LoadingSaveBook;
