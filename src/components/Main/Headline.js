import { useNavigate } from "react-router-dom";
import "./Headline.css";

const Headline = () => {
  let navigate = useNavigate();

  return (
    <div className="headline">
      <div className="headline-first">Bring your imagination</div>
      <div className="headline-second">to life in a story</div>
      <div className="headline-border"></div>
      <div className="headline-third">
        Morpheus <br></br> a tool that utilizes AI technology to create unique,
        animated storybooks in just minutes. <br></br>Create your own characters
        and develop original stories with them.
      </div>
      <div className="try-morpheus">
        <button className="btn">Create Your Character</button>
        <button className="btn" onClick={() => navigate("/data-control")}>
          Try morpheus
        </button>
      </div>
    </div>
  );
};

export default Headline;
