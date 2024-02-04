import Spinner from "../../images/loading_book.gif";

const LoadingBook = () => {
  return (
    <div className="loading-book-wrapper">
      <h3>
        It is expected to take about 1 to 2 minutes<br></br>for the AI to
        complete the scenario.<br></br>Please wait a moment.
      </h3>
      <img src={Spinner} alt="loading" width="10%"></img>
    </div>
  );
};

export default LoadingBook;
