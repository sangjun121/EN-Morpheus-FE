import React, { useEffect, useState, useReducer } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import reducer from "../api/Reducer";
import imageReducer from "../api/ImageReducer";
import "./FairyImageGeneratorPage.scss";
import UserRequestApi from "../api/UserRequestApi";
import LoadingBackgroundImage from "../components/loadingState/loadingBackgroundImage";
import Error from "../components/CharacterResult/imageGenerationProcess/Error";
import LoadingBook from "../components/loadingState/LoadingBook";
import LoadingSaveBook from "../components/loadingState/LoadingSaveBook";

const FairyImageGeneratorPage = () => {
  const inputCount = 19;
  const location = useLocation();
  const navigate = useNavigate();
  const initialState = {
    images: Array(16).fill({ loading: false, error: null, url: null }),
  };
  const [backgroundImageUrls, setBackgroundImageUrls] = useState(
    Array(16).fill(null)
  );
  const [chapterOrder, setChapterOrder] = useState([]);
  const [chapterPlot, setChapterPlot] = useState([]);
  const [narrativeText, setNarrativeText] = useState([]);
  const [chapterBackground, setChapterBackground] = useState([]);
  const [chapterStory, setChapterStory] = useState([]);
  const [characterPosture, setCharacterPosture] = useState([]);
  const [characterId, setCharacterId] = useState(null);
  const [plot, setPlot] = useState("");
  const [title, setTitle] = useState("");
  const [temporaryFairyId, setTemporaryFairyId] = useState("");

  //이미지 생성 리듀서
  const [imageState, imageDispatch] = useReducer(imageReducer, initialState);

  //페이지 들어올 때 리듀서
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  //동화 저장 리듀서
  const [saveState, saveDispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  //서버로 동화 내용을 저장하게 보내주는 함수
  const fetchSaveFairyData = async () => {
    //각 배열을 종합하여 새로운 chapters 배열 생성
    const chapters = chapterOrder.map((order, index) => ({
      story: chapterStory[index],
      plot: chapterPlot[index],
      background: chapterBackground[index],
      narrativeText: narrativeText[index],
      characterPosture: characterPosture[index],
      order: order,
      imageUrl: backgroundImageUrls[index],
    }));

    //전체 요청 본문
    const requestBody = {
      plot: plot,
      title: title,
      chapters: chapters,
      temporaryFairyId: temporaryFairyId,
      public: true,
    };

    saveDispatch({ type: "LOADING" });
    try {
      const response = await UserRequestApi.post("/fairy/save", requestBody);
      console.log(response.data);
      saveDispatch({ type: "SUCCESS", data: response.data });
    } catch (e) {
      saveDispatch({ type: "ERROR", error: e });
    }
  };

  //서버에서 상세 에피소드 받아오는 함수
  const fetchMainScenario = async (
    title,
    story,
    subjectMatter,
    plot,
    characters,
    linguisticExpression
  ) => {
    dispatch({ type: "LOADING" });
    const dataa = {
      title: title,
      story: story,
      subjectMatter: subjectMatter,
      plot: plot,
      characters: characters,
      characterId: characterId,
      linguisticExpression: linguisticExpression,
    };
    console.log(dataa);
    try {
      const response = await UserRequestApi.post("/fairy/actualization", dataa);
      const data = response.data.response.code.chapters;
      setNarrativeText(data.map((chapter) => chapter.narrativeText));
      setChapterBackground(data.map((chapter) => chapter.background));
      setCharacterPosture(data.map((chapter) => chapter.characterPosture));
      setChapterStory(data.map((chapter) => chapter.story));
      setChapterOrder(data.map((chapter) => chapter.order));
      setChapterPlot(data.map((chapter) => chapter.plot));
      setTemporaryFairyId(response.data.response.code.temporaryFairyId);
      dispatch({ type: "SUCCESS", data: response.data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
      console.log(e);
    }
  };

  //이미지 생성 버튼 눌렀을 때 서버에서 이미지 받아오는 함수
  const fetchScenarioImage = async (background, story, posture, id, index) => {
    console.log("이미지 api호출");
    imageDispatch({ type: "LOADING", index });
    try {
      const response = await UserRequestApi.post("/fairy/chapter-image", {
        chapterBackground: background,
        chapterStory: story,
        characterPosture: posture,
        characterId: id,
      });
      const imageUrl = response.data.response.code.data[0].url;
      console.log(imageUrl);
      setBackgroundImageUrls((urls) =>
        urls.map((url, i) => (i === index ? imageUrl : url))
      );
      imageDispatch({ type: "SUCCESS", index, imageUrl });
    } catch (e) {
      imageDispatch({ type: "ERROR", index, error: e });
    }
  };

  //동화 save버튼 클릭했을 때 정보 저장 이벤트
  const saveButtonClickEvent = () => {
    const allImagesLoaded = backgroundImageUrls.every((url) => url !== null);
    if (!allImagesLoaded) {
      alert("Please press the button after all images have been created.");
      return;
    }
    fetchSaveFairyData();
  };

  //이미지 generate버튼 클릭 이벤트
  const imageButtonClickEvent = (index) => {
    fetchScenarioImage(
      chapterBackground[index],
      chapterStory[index],
      characterPosture[index],
      characterId,
      index
    );
  };

  //saveState를 관리하는 useEffect
  useEffect(() => {
    if (saveState.error) {
      alert("An error occurred. Please press the save button again.");
    } else if (saveState.data) {
      navigate("/mypage");
    }
  }, [saveState.error, saveState.data, navigate]);

  //페이지 들어왔을 때 useEffect
  useEffect(() => {
    const title = location.state?.title;
    const story = location.state?.story;
    const subjectMatter = location.state?.subjectMatter;
    const plot = location.state?.plot;
    const characters = location.state?.characters;
    const linguisticExpression = location.state?.linguisticExpression;
    setCharacterId(location.state?.characterId);
    setPlot(plot);
    setTitle(title);
    if (
      title &&
      story &&
      subjectMatter &&
      plot &&
      characters &&
      linguisticExpression
    ) {
      fetchMainScenario(
        title,
        story,
        subjectMatter,
        plot,
        characters,
        linguisticExpression
      );
    }
  }, [location.state]);

  //상세 시나리오 불러오는 과정에서 오류 발생 시 다시 fetch하는 함수
  const retryFetchFairyTale = () => {
    const {
      title,
      story,
      subjectMatter,
      plot,
      characters,
      linguisticExpression,
    } = location.state || {};
    if (
      title &&
      story &&
      subjectMatter &&
      plot &&
      characters &&
      linguisticExpression
    ) {
      fetchMainScenario(
        title,
        story,
        subjectMatter,
        plot,
        characters,
        linguisticExpression
      );
    }
  };

  if (saveState.loading) {
    return <LoadingSaveBook />;
  }

  if (state.loading) {
    return (
      <div className="loading-page">
        <LoadingBook />
      </div>
    );
  }

  if (state.error) {
    return (
      <div className="error-page">
        <h3>An error has occurred. Please try again.</h3>
        <button
          className="error-book-retry-button"
          onClick={() => retryFetchFairyTale()}
        >
          retry
        </button>
      </div>
    );
  }

  return (
    <div className="image-generate-page">
      <div className="pages">
        {Array.from({ length: inputCount }, (_, i) => (
          <input key={i} id={`input-${i + 1}`} type="radio" name="trigger" />
        ))}

        <div className="pages_page">
          <div className="pages_page__inner">
            <div className="logo">Morpheus</div>
            <div className="pagenumber">1 2</div>
            <div className="content">
              <div className="content_center">
                <h4>Congratulation!! You have finally reached the last step</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="pages_page">
          <div className="pages_page__inner">
            <div className="content">
              <div className="content_center right">
                <h4>Congratulation!! You have finally reached the last step</h4>
              </div>
            </div>
            <div className="bg"></div>
            <div className="control next">
              <label htmlFor="input-2"></label>
            </div>
          </div>
        </div>
        <div className="pages_page">
          <div className="pages_page__inner">
            <div className="logo">Morpheus</div>
            <div className="pagenumber">2 3</div>
            <div className="control">
              <label htmlFor="input-1"></label>
            </div>
            <div className="content">
              <div className="content_picture"></div>
              <div className="content_offset">
                <h2>EXPLANATION</h2>
                <p>
                  This is the final step in creating your own fairy tale. When
                  you press the image generation button on the screen, AI will
                  create an image that matches your scenario. Please select an
                  image that suits your fairy tale. If you don't like it, you
                  can simply click the button again for a new image.
                </p>
              </div>
              <h1>
                <span>P</span>
                <span>L</span>
                <span>E</span>
                <span>A</span>
                <span>S</span>
                <span>E</span>
                <span>&nbsp;</span>
                <span>F</span>
                <span>i</span>
                <span>n</span>
                <span>d</span>
                <span>&nbsp;</span>
                <span>a</span>
                <span>n</span>
                <span>&nbsp;</span>
                <span>i</span>
                <span>m</span>
                <span>a</span>
                <span>g</span>
                <span>e</span>
                <span>&nbsp;</span>
                <span>t</span>
                <span>h</span>
                <span>a</span>
                <span>t</span>
                <br />
                <span>m</span>
                <span>a</span>
                <span>t</span>
                <span>c</span>
                <span>h</span>
                <span>e</span>
                <span>s</span>
                <span>&nbsp;</span>
                <span>y</span>
                <span>o</span>
                <span>u</span>
                <span>r</span>
                <span>&nbsp;</span>
                <span>f</span>
                <span>a</span>
                <span>i</span>
                <span>r</span>
                <span>y</span>
                <span>&nbsp;</span>
                <span>t</span>
                <span>a</span>
                <span>l</span>
                <span>e</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="pages_page">
          <div className="pages_page__inner">
            <div className="hamburger">
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
            </div>
            <div className="control next">
              <label htmlFor="input-3"></label>
            </div>
            <div className="bg"></div>
            <div className="footer">
              <i className="fab fa-google-plus-g"></i>
              <i className="fas fa-retweet"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-share-square"></i>
            </div>
            <div className="content">
              <div className="content_quote">
                <h5>
                  <span className="quo">
                    <i>"</i>
                  </span>
                  <span>This is your</span>
                  <span>own fairy tale</span>
                  <span className="name">Morpheus</span>
                  <span className="auth">- En# Morpheus</span>
                  <span className="quo">"</span>
                </h5>
              </div>
              <div className="content_picture"></div>
              <h1>
                <span>P</span>
                <span>L</span>
                <span>E</span>
                <span>A</span>
                <span>S</span>
                <span>E</span>
                <span>&nbsp;</span>
                <span>F</span>
                <span>i</span>
                <span>n</span>
                <span>d</span>
                <span>&nbsp;</span>
                <span>a</span>
                <span>n</span>
                <span>&nbsp;</span>
                <span>i</span>
                <span>m</span>
                <span>a</span>
                <span>g</span>
                <span>e</span>
                <span>&nbsp;</span>
                <span>t</span>
                <span>h</span>
                <span>a</span>
                <span>t</span>
                <br />
                <span>m</span>
                <span>a</span>
                <span>t</span>
                <span>c</span>
                <span>h</span>
                <span>e</span>
                <span>s</span>
                <span>&nbsp;</span>
                <span>y</span>
                <span>o</span>
                <span>u</span>
                <span>r</span>
                <span>&nbsp;</span>
                <span>f</span>
                <span>a</span>
                <span>i</span>
                <span>r</span>
                <span>y</span>
                <span>&nbsp;</span>
                <span>t</span>
                <span>a</span>
                <span>l</span>
                <span>e</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="pages_page">
          <div className="pages_page__inner">
            <div className="logo">Morpheus</div>
            <div className="pagenumber">4 5 </div>
            <button
              className="content_button"
              onClick={() => imageButtonClickEvent(0)}
            >
              generate
            </button>
            <div className="content">
              <div className="content_section">
                <h2>Episode 1</h2>
                <p>{narrativeText[0]}</p>
              </div>
            </div>

            <div className="control">
              <label htmlFor="input-2"></label>
            </div>
          </div>
        </div>
        <div className="pages_page">
          <div
            className="pages_page__inner"
            style={{
              backgroundImage: `url(${backgroundImageUrls[0]})`,
            }}
          >
            <div className="hamburger">
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
            </div>
            <div className="control next">
              <label htmlFor="input-4"></label>
            </div>
            <div className="bg"></div>
            <div className="content_centerimage"></div>
            <div className="content">
              {imageState.images[0].loading ? (
                <LoadingBackgroundImage />
              ) : imageState.images[0].error ? (
                <Error
                  regenerateImage={() =>
                    fetchScenarioImage(
                      chapterBackground[0],
                      chapterStory[0],
                      characterPosture[0],
                      characterId,
                      0
                    )
                  }
                />
              ) : null}
            </div>
            <div className="footer">
              <i className="fab fa-google-plus-g"></i>
              <i className="fas fa-retweet"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="pages_page">
          <div className="pages_page__inner">
            <div className="logo">Morpheus</div>
            <div className="pagenumber">6 7 </div>
            <button
              className="content_button"
              onClick={() => imageButtonClickEvent(1)}
            >
              generate
            </button>
            <div className="content">
              <div className="content_section">
                <h2>Episode 2</h2>
                <p>{narrativeText[1]}</p>
              </div>
            </div>
            <div className="control">
              <label htmlFor="input-3"></label>
            </div>
          </div>
        </div>
        <div className="pages_page">
          <div
            className="pages_page__inner"
            style={{
              backgroundImage: `url(${backgroundImageUrls[1]})`,
            }}
          >
            <div className="hamburger">
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
            </div>
            <div className="control next">
              <label htmlFor="input-5"></label>
            </div>
            <div className="bg"></div>
            <div className="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="content">
              {imageState.images[1].loading ? (
                <LoadingBackgroundImage />
              ) : imageState.images[1].error ? (
                <Error
                  regenerateImage={() =>
                    fetchScenarioImage(
                      chapterBackground[1],
                      chapterStory[1],
                      characterPosture[1],
                      characterId,
                      1
                    )
                  }
                />
              ) : null}
            </div>
            <div className="footer">
              <i className="fab fa-google-plus-g"></i>
              <i className="fas fa-retweet"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="pages_page">
          <div className="pages_page__inner">
            <div className="logo">Morpheus</div>
            <div className="pagenumber">8 9 </div>
            <button
              className="content_button"
              onClick={() => imageButtonClickEvent(2)}
            >
              generate
            </button>
            <div className="content">
              <div className="content_section">
                <h2>Episode 3</h2>
                <p>{narrativeText[2]}</p>
              </div>
            </div>
            <div className="control">
              <label htmlFor="input-4"></label>
            </div>
          </div>
        </div>
        <div className="pages_page">
          <div
            className="pages_page__inner"
            style={{
              backgroundImage: `url(${backgroundImageUrls[2]})`,
            }}
          >
            <div className="hamburger">
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
            </div>
            <div className="control next">
              <label htmlFor="input-6"></label>
            </div>
            <div className="bg"></div>
            <div className="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="content">
              {imageState.images[2].loading ? (
                <LoadingBackgroundImage />
              ) : imageState.images[2].error ? (
                <Error
                  regenerateImage={() =>
                    fetchScenarioImage(
                      chapterBackground[2],
                      chapterStory[2],
                      characterPosture[2],
                      characterId,
                      1
                    )
                  }
                />
              ) : null}
            </div>
            <div className="footer">
              <i className="fab fa-google-plus-g"></i>
              <i className="fas fa-retweet"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="pages_page">
          <div className="pages_page__inner">
            <div className="logo">Morpheus</div>
            <div className="pagenumber">10 11 </div>
            <button
              className="content_button"
              onClick={() => imageButtonClickEvent(3)}
            >
              generate
            </button>
            <div className="content">
              <div className="content_section">
                <h2>Episode 4</h2>
                <p>{narrativeText[3]}</p>
              </div>
            </div>
            <div className="control">
              <label htmlFor="input-5"></label>
            </div>
          </div>
        </div>
        <div className="pages_page">
          <div
            className="pages_page__inner"
            style={{
              backgroundImage: `url(${backgroundImageUrls[3]})`,
            }}
          >
            <div className="hamburger">
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
            </div>
            <div className="control next">
              <label htmlFor="input-7"></label>
            </div>
            <div className="bg"></div>
            <div className="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="content">
              {imageState.images[3].loading ? (
                <LoadingBackgroundImage />
              ) : imageState.images[3].error ? (
                <Error
                  regenerateImage={() =>
                    fetchScenarioImage(
                      chapterBackground[3],
                      chapterStory[3],
                      characterPosture[3],
                      characterId,
                      1
                    )
                  }
                />
              ) : null}
            </div>
            <div className="footer">
              <i className="fab fa-google-plus-g"></i>
              <i className="fas fa-retweet"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="pages_page">
          <div className="pages_page__inner">
            <div className="logo">Morpheus</div>
            <div className="pagenumber">12 13 </div>
            <button
              className="content_button"
              onClick={() => imageButtonClickEvent(4)}
            >
              generate
            </button>
            <div className="content">
              <div className="content_section">
                <h2>Episode 5</h2>
                <p>{narrativeText[4]}</p>
              </div>
            </div>
            <div className="control">
              <label htmlFor="input-6"></label>
            </div>
          </div>
        </div>
        <div className="pages_page">
          <div
            className="pages_page__inner"
            style={{
              backgroundImage: `url(${backgroundImageUrls[4]})`,
            }}
          >
            <div className="hamburger">
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
            </div>
            <div className="control next">
              <label htmlFor="input-8"></label>
            </div>
            <div className="bg"></div>
            <div className="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="content">
              {imageState.images[4].loading ? (
                <LoadingBackgroundImage />
              ) : imageState.images[4].error ? (
                <Error
                  regenerateImage={() =>
                    fetchScenarioImage(
                      chapterBackground[4],
                      chapterStory[4],
                      characterPosture[4],
                      characterId,
                      1
                    )
                  }
                />
              ) : null}
            </div>
            <div className="footer">
              <i className="fab fa-google-plus-g"></i>
              <i className="fas fa-retweet"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="pages_page">
          <div className="pages_page__inner">
            <div className="logo">Morpheus</div>
            <div className="pagenumber">14 15 </div>
            <button
              className="content_button"
              onClick={() => imageButtonClickEvent(5)}
            >
              generate
            </button>
            <div className="content">
              <div className="content_section">
                <h2>Episode 6</h2>
                <p>{narrativeText[5]}</p>
              </div>
            </div>
            <div className="control">
              <label htmlFor="input-7"></label>
            </div>
          </div>
        </div>
        <div className="pages_page">
          <div
            className="pages_page__inner"
            style={{
              backgroundImage: `url(${backgroundImageUrls[5]})`,
            }}
          >
            <div className="hamburger">
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
            </div>
            <div className="control next">
              <label htmlFor="input-9"></label>
            </div>
            <div className="bg"></div>
            <div className="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="content">
              {imageState.images[5].loading ? (
                <LoadingBackgroundImage />
              ) : imageState.images[5].error ? (
                <Error
                  regenerateImage={() =>
                    fetchScenarioImage(
                      chapterBackground[5],
                      chapterStory[5],
                      characterPosture[5],
                      characterId,
                      1
                    )
                  }
                />
              ) : null}
            </div>
            <div className="footer">
              <i className="fab fa-google-plus-g"></i>
              <i className="fas fa-retweet"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="pages_page">
          <div className="pages_page__inner">
            <div className="logo">Morpheus</div>
            <div className="pagenumber">16 17 </div>
            <button
              className="content_button"
              onClick={() => imageButtonClickEvent(6)}
            >
              generate
            </button>
            <div className="content">
              <div className="content_section">
                <h2>Episode 7</h2>
                <p>{narrativeText[6]}</p>
              </div>
            </div>
            <div className="control">
              <label htmlFor="input-8"></label>
            </div>
          </div>
        </div>
        <div className="pages_page">
          <div
            className="pages_page__inner"
            style={{
              backgroundImage: `url(${backgroundImageUrls[6]})`,
            }}
          >
            <div className="hamburger">
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
            </div>
            <div className="control next">
              <label htmlFor="input-10"></label>
            </div>
            <div className="bg"></div>
            <div className="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="content">
              {imageState.images[6].loading ? (
                <LoadingBackgroundImage />
              ) : imageState.images[6].error ? (
                <Error
                  regenerateImage={() =>
                    fetchScenarioImage(
                      chapterBackground[6],
                      chapterStory[6],
                      characterPosture[6],
                      characterId,
                      1
                    )
                  }
                />
              ) : null}
            </div>
            <div className="footer">
              <i className="fab fa-google-plus-g"></i>
              <i className="fas fa-retweet"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="pages_page">
          <div className="pages_page__inner">
            <div className="logo">Morpheus</div>
            <div className="pagenumber">18 19 </div>
            <button
              className="content_button"
              onClick={() => imageButtonClickEvent(7)}
            >
              generate
            </button>
            <div className="content">
              <div className="content_section">
                <h2>Episode 8</h2>
                <p>{narrativeText[7]}</p>
              </div>
            </div>
            <div className="control">
              <label htmlFor="input-9"></label>
            </div>
          </div>
        </div>
        <div className="pages_page">
          <div
            className="pages_page__inner"
            style={{
              backgroundImage: `url(${backgroundImageUrls[7]})`,
            }}
          >
            <div className="hamburger">
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
            </div>
            <div className="control next">
              <label htmlFor="input-11"></label>
            </div>
            <div className="bg"></div>
            <div className="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="content">
              {imageState.images[7].loading ? (
                <LoadingBackgroundImage />
              ) : imageState.images[7].error ? (
                <Error
                  regenerateImage={() =>
                    fetchScenarioImage(
                      chapterBackground[7],
                      chapterStory[7],
                      characterPosture[7],
                      characterId,
                      1
                    )
                  }
                />
              ) : null}
            </div>
            <div className="footer">
              <i className="fab fa-google-plus-g"></i>
              <i className="fas fa-retweet"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="pages_page">
          <div className="pages_page__inner">
            <div className="logo">Morpheus</div>
            <div className="pagenumber">20 21 </div>
            <button
              className="content_button"
              onClick={() => imageButtonClickEvent(8)}
            >
              generate
            </button>
            <div className="content">
              <div className="content_section">
                <h2>Episode 9</h2>
                <p>{narrativeText[8]}</p>
              </div>
            </div>
            <div className="control">
              <label htmlFor="input-10"></label>
            </div>
          </div>
        </div>
        <div className="pages_page">
          <div
            className="pages_page__inner"
            style={{
              backgroundImage: `url(${backgroundImageUrls[8]})`,
            }}
          >
            <div className="hamburger">
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
            </div>
            <div className="control next">
              <label htmlFor="input-12"></label>
            </div>
            <div className="bg"></div>
            <div className="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="content">
              {imageState.images[8].loading ? (
                <LoadingBackgroundImage />
              ) : imageState.images[8].error ? (
                <Error
                  regenerateImage={() =>
                    fetchScenarioImage(
                      chapterBackground[8],
                      chapterStory[8],
                      characterPosture[8],
                      characterId,
                      1
                    )
                  }
                />
              ) : null}
            </div>
            <div className="footer">
              <i className="fab fa-google-plus-g"></i>
              <i className="fas fa-retweet"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="pages_page">
          <div className="pages_page__inner">
            <div className="logo">Morpheus</div>
            <div className="pagenumber">22 23 </div>
            <button
              className="content_button"
              onClick={() => imageButtonClickEvent(9)}
            >
              generate
            </button>
            <div className="content">
              <div className="content_section">
                <h2>Episode 10</h2>
                <p>{narrativeText[9]}</p>
              </div>
            </div>
            <div className="control">
              <label htmlFor="input-11"></label>
            </div>
          </div>
        </div>
        <div className="pages_page">
          <div
            className="pages_page__inner"
            style={{
              backgroundImage: `url(${backgroundImageUrls[9]})`,
            }}
          >
            <div className="hamburger">
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
            </div>
            <div className="control next">
              <label htmlFor="input-13"></label>
            </div>
            <div className="bg"></div>
            <div className="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="content">
              {imageState.images[9].loading ? (
                <LoadingBackgroundImage />
              ) : imageState.images[9].error ? (
                <Error
                  regenerateImage={() =>
                    fetchScenarioImage(
                      chapterBackground[9],
                      chapterStory[9],
                      characterPosture[9],
                      characterId,
                      1
                    )
                  }
                />
              ) : null}
            </div>
            <div className="footer">
              <i className="fab fa-google-plus-g"></i>
              <i className="fas fa-retweet"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="pages_page">
          <div className="pages_page__inner">
            <div className="logo">Morpheus</div>
            <div className="pagenumber">24 25 </div>
            <button
              className="content_button"
              onClick={() => imageButtonClickEvent(10)}
            >
              generate
            </button>
            <div className="content">
              <div className="content_section">
                <h2>Episode 11</h2>
                <p>{narrativeText[10]}</p>
              </div>
            </div>
            <div className="control">
              <label htmlFor="input-12"></label>
            </div>
          </div>
        </div>
        <div className="pages_page">
          <div
            className="pages_page__inner"
            style={{
              backgroundImage: `url(${backgroundImageUrls[10]})`,
            }}
          >
            <div className="hamburger">
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
            </div>
            <div className="control next">
              <label htmlFor="input-14"></label>
            </div>
            <div className="bg"></div>
            <div className="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="content">
              {imageState.images[10].loading ? (
                <LoadingBackgroundImage />
              ) : imageState.images[10].error ? (
                <Error
                  regenerateImage={() =>
                    fetchScenarioImage(
                      chapterBackground[10],
                      chapterStory[10],
                      characterPosture[10],
                      characterId,
                      1
                    )
                  }
                />
              ) : null}
            </div>
            <div className="footer">
              <i className="fab fa-google-plus-g"></i>
              <i className="fas fa-retweet"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="pages_page">
          <div className="pages_page__inner">
            <div className="logo">Morpheus</div>
            <div className="pagenumber">26 27 </div>
            <button
              className="content_button"
              onClick={() => imageButtonClickEvent(11)}
            >
              generate
            </button>
            <div className="content">
              <div className="content_section">
                <h2>Episode 12</h2>
                <p>{narrativeText[11]}</p>
              </div>
            </div>
            <div className="control">
              <label htmlFor="input-13"></label>
            </div>
          </div>
        </div>
        <div className="pages_page">
          <div
            className="pages_page__inner"
            style={{
              backgroundImage: `url(${backgroundImageUrls[11]})`,
            }}
          >
            <div className="hamburger">
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
            </div>
            <div className="control next">
              <label htmlFor="input-15"></label>
            </div>
            <div className="bg"></div>
            <div className="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="content">
              {imageState.images[11].loading ? (
                <LoadingBackgroundImage />
              ) : imageState.images[11].error ? (
                <Error
                  regenerateImage={() =>
                    fetchScenarioImage(
                      chapterBackground[11],
                      chapterStory[11],
                      characterPosture[11],
                      characterId,
                      1
                    )
                  }
                />
              ) : null}
            </div>
            <div className="footer">
              <i className="fab fa-google-plus-g"></i>
              <i className="fas fa-retweet"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="pages_page">
          <div className="pages_page__inner">
            <div className="logo">Morpheus</div>
            <div className="pagenumber">28 29 </div>
            <button
              className="content_button"
              onClick={() => imageButtonClickEvent(12)}
            >
              generate
            </button>
            <div className="content">
              <div className="content_section">
                <h2>Episode 13</h2>
                <p>{narrativeText[12]}</p>
              </div>
            </div>
            <div className="control">
              <label htmlFor="input-14"></label>
            </div>
          </div>
        </div>
        <div className="pages_page">
          <div
            className="pages_page__inner"
            style={{
              backgroundImage: `url(${backgroundImageUrls[12]})`,
            }}
          >
            <div className="hamburger">
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
            </div>
            <div className="control next">
              <label htmlFor="input-16"></label>
            </div>
            <div className="bg"></div>
            <div className="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="content">
              {imageState.images[12].loading ? (
                <LoadingBackgroundImage />
              ) : imageState.images[12].error ? (
                <Error
                  regenerateImage={() =>
                    fetchScenarioImage(
                      chapterBackground[12],
                      chapterStory[12],
                      characterPosture[12],
                      characterId,
                      1
                    )
                  }
                />
              ) : null}
            </div>
            <div className="footer">
              <i className="fab fa-google-plus-g"></i>
              <i className="fas fa-retweet"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="pages_page">
          <div className="pages_page__inner">
            <div className="logo">Morpheus</div>
            <div className="pagenumber">30 31 </div>
            <button
              className="content_button"
              onClick={() => imageButtonClickEvent(13)}
            >
              generate
            </button>
            <div className="content">
              <div className="content_section">
                <h2>Episode 14</h2>
                <p>{narrativeText[13]}</p>
              </div>
            </div>
            <div className="control">
              <label htmlFor="input-15"></label>
            </div>
          </div>
        </div>
        <div className="pages_page">
          <div
            className="pages_page__inner"
            style={{
              backgroundImage: `url(${backgroundImageUrls[13]})`,
            }}
          >
            <div className="hamburger">
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
            </div>
            <div className="control next">
              <label htmlFor="input-17"></label>
            </div>
            <div className="bg"></div>
            <div className="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="content">
              {imageState.images[13].loading ? (
                <LoadingBackgroundImage />
              ) : imageState.images[13].error ? (
                <Error
                  regenerateImage={() =>
                    fetchScenarioImage(
                      chapterBackground[13],
                      chapterStory[13],
                      characterPosture[13],
                      characterId,
                      1
                    )
                  }
                />
              ) : null}
            </div>
            <div className="footer">
              <i className="fab fa-google-plus-g"></i>
              <i className="fas fa-retweet"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="pages_page">
          <div className="pages_page__inner">
            <div className="logo">Morpheus</div>
            <div className="pagenumber">32 33 </div>
            <button
              className="content_button"
              onClick={() => imageButtonClickEvent(14)}
            >
              generate
            </button>
            <div className="content">
              <div className="content_section">
                <h2>Episode 15</h2>
                <p>{narrativeText[14]}</p>
              </div>
            </div>
            <div className="control">
              <label htmlFor="input-16"></label>
            </div>
          </div>
        </div>
        <div className="pages_page">
          <div
            className="pages_page__inner"
            style={{
              backgroundImage: `url(${backgroundImageUrls[14]})`,
            }}
          >
            <div className="hamburger">
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
            </div>
            <div className="control next">
              <label htmlFor="input-18"></label>
            </div>
            <div className="bg"></div>
            <div className="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="content">
              {imageState.images[14].loading ? (
                <LoadingBackgroundImage />
              ) : imageState.images[14].error ? (
                <Error
                  regenerateImage={() =>
                    fetchScenarioImage(
                      chapterBackground[14],
                      chapterStory[14],
                      characterPosture[14],
                      characterId,
                      1
                    )
                  }
                />
              ) : null}
            </div>
            <div className="footer">
              <i className="fab fa-google-plus-g"></i>
              <i className="fas fa-retweet"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="pages_page">
          <div className="pages_page__inner">
            <div className="logo">Morpheus</div>
            <div className="pagenumber">34 35 </div>
            <button
              className="content_button"
              onClick={() => imageButtonClickEvent(15)}
            >
              generate
            </button>
            <div className="content">
              <div className="content_section">
                <h2>Episode 16</h2>
                <p>{narrativeText[15]}</p>
              </div>
            </div>
            <div className="control">
              <label htmlFor="input-17"></label>
            </div>
          </div>
        </div>
        <div className="pages_page">
          <div
            className="pages_page__inner"
            style={{
              backgroundImage: `url(${backgroundImageUrls[15]})`,
            }}
          >
            <div className="hamburger">
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
            </div>
            <div className="control next">
              <label htmlFor="input-19"></label>
            </div>
            <div className="bg"></div>
            <div className="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="content">
              {imageState.images[15].loading ? (
                <LoadingBackgroundImage />
              ) : imageState.images[15].error ? (
                <Error
                  regenerateImage={() =>
                    fetchScenarioImage(
                      chapterBackground[15],
                      chapterStory[15],
                      characterPosture[15],
                      characterId,
                      1
                    )
                  }
                />
              ) : null}
            </div>
            <div className="footer">
              <i className="fab fa-google-plus-g"></i>
              <i className="fas fa-retweet"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="pages_page">
          <div className="pages_page__inner">
            <div className="logo">Morpheus</div>
            <div className="pagenumber">36 37</div>
            <div className="content">
              <div className="content_center">
                <h4>The End Morpheus</h4>
                <h6>the end</h6>
              </div>
            </div>
            <div className="control">
              <label htmlFor="input-18"></label>
            </div>
          </div>
        </div>
        <div className="pages_page">
          <div className="pages_page__inner">
            <div className="hamburger">
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
            </div>
            <div className="content">
              <div className="content_center right">
                <h4>The End Morpheus</h4>
                <h6>the end</h6>
              </div>
            </div>
            <div className="bg"></div>

            <div className="footer">
              <i className="fab fa-google-plus-g"></i>
              <i className="fas fa-retweet"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-share-square"></i>
            </div>
          </div>
        </div>
      </div>
      <button className="final_button" onClick={() => saveButtonClickEvent()}>
        Save
      </button>
    </div>
  );
};

export default FairyImageGeneratorPage;
