import React, { useEffect, useState, useReducer } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import reducer from "../../api/Reducer";
import "./CompletedFairytale.scss";
import UserRequestApi from "../../api/UserRequestApi";
import Images from "../../images/ex_image1.png";
import { render } from "@testing-library/react";

const Fairytale = () => {
  const inputCount = 18;
  const location = useLocation();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [narrativeText, setNarrativeText] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchFairytaleData = async (fairyId) => {
    dispatch({ type: "LOADING" });
    try {
      const response = await UserRequestApi.get(
        `/fairy/choose?fairyId=${encodeURIComponent(fairyId)}`
      );
      const data = response.data.response.code;
      setNarrativeText(data.map((chapter) => chapter.narrativeText));
      setImageUrl(data.map((chapter) => chapter.imageUrl));
      dispatch({ type: "SUCCESS", data: response.data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  //서버에서 받아온 문자열을 처리하는 함수
  const renderTextWithSpans = (text) => {
    return text.split("").map((char, index) => {
      if (char === " ") {
        return <span dey={index}>&nbsp;</span>;
      } else {
        return <span key={index}>{char}</span>;
      }
    });
  };

  useEffect(() => {
    const fairyId = location.state;
    fetchFairytaleData(fairyId);
  }, [location.state]);

  return (
    <div className="final_image-generate-page">
      <div className="final_pages">
        {Array.from({ length: inputCount }, (_, i) => (
          <input key={i} id={`input-${i + 1}`} type="radio" name="trigger" />
        ))}

        <div className="final_pages_page">
          <div className="final_pages_page__inner">
            <div className="final_logo">Morpheus</div>
            <div className="final_pagenumber">1 2</div>
            <div className="final_content">
              <div className="final_content_center">
                <h4>{renderTextWithSpans("Your Fairytale Title")}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="final_pages_page">
          <div className="final_pages_page__inner">
            <div className="final_content">
              <div className="final_content_center right">
                <h4>{renderTextWithSpans("Your Fairytale Title")}</h4>
              </div>
            </div>
            <div className="final_bg"></div>
            <div className="final_control next">
              <label htmlFor="input-2"></label>
            </div>
          </div>
        </div>

        <div className="final_pages_page">
          <div className="final_pages_page__inner">
            <div className="final_logo">Morpheus</div>
            <div className="final_pagenumber">3 4 </div>

            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 1</h2>
                <p>{narrativeText[0]}</p>
              </div>
            </div>

            <div className="final_control">
              <label htmlFor="input-1"></label>
            </div>
          </div>
        </div>
        <div className="final_pages_page">
          <div
            className="final_pages_page__inner"
            style={{
              backgroundImage: `url(${imageUrl[0]})`,
            }}
          >
            <div className="final_hamburger">
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
            </div>
            <div className="final_control next">
              <label htmlFor="input-3"></label>
            </div>
            <div className="final_bg"></div>
            <div className="final_content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="final_content">{/*Image*/}</div>
            <div className="final_footer">
              <i className="final_fab fa-google-plus-g"></i>
              <i className="final_fas fa-retweet"></i>
              <i className="final_far fa-heart"></i>
              <i className="final_far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="final_pages_page">
          <div className="final_pages_page__inner">
            <div className="final_logo">Morpheus</div>
            <div className="final_pagenumber">5 6 </div>

            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 2</h2>
                <p>{narrativeText[1]}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-2"></label>
            </div>
          </div>
        </div>
        <div className="final_pages_page">
          <div
            className="final_pages_page__inner"
            style={{
              backgroundImage: `url(${imageUrl[1]})`,
            }}
          >
            <div className="final_hamburger">
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
            </div>
            <div className="final_control next">
              <label htmlFor="input-4"></label>
            </div>
            <div className="final_bg"></div>
            <div className="final_content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="final_content">{/* image생성 */}</div>
            <div className="final_footer">
              <i className="final_fab fa-google-plus-g"></i>
              <i className="final_fas fa-retweet"></i>
              <i className="final_far fa-heart"></i>
              <i className="final_far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="final_pages_page">
          <div className="final_pages_page__inner">
            <div className="final_logo">Morpheus</div>
            <div className="final_pagenumber">7 8 </div>

            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 3</h2>
                <p>{narrativeText[2]}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-3"></label>
            </div>
          </div>
        </div>
        <div className="final_pages_page">
          <div
            className="final_pages_page__inner"
            style={{
              backgroundImage: `url(${imageUrl[2]})`,
            }}
          >
            <div className="final_hamburger">
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
            </div>
            <div className="final_control next">
              <label htmlFor="input-5"></label>
            </div>
            <div className="final_bg"></div>
            <div className="final_content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="final_content">{/* image생성 */}</div>
            <div className="final_footer">
              <i className="final_fab fa-google-plus-g"></i>
              <i className="final_fas fa-retweet"></i>
              <i className="final_far fa-heart"></i>
              <i className="final_far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="final_pages_page">
          <div className="final_pages_page__inner">
            <div className="final_logo">Morpheus</div>
            <div className="final_pagenumber">9 10 </div>

            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 4</h2>
                <p>{narrativeText[3]}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-4"></label>
            </div>
          </div>
        </div>
        <div className="final_pages_page">
          <div
            className="final_pages_page__inner"
            style={{
              backgroundImage: `url(${imageUrl[3]})`,
            }}
          >
            <div className="final_hamburger">
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
            </div>
            <div className="final_control next">
              <label htmlFor="input-6"></label>
            </div>
            <div className="final_bg"></div>
            <div className="final_content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="final_content">{/* image생성 */}</div>
            <div className="final_footer">
              <i className="final_fab fa-google-plus-g"></i>
              <i className="final_fas fa-retweet"></i>
              <i className="final_far fa-heart"></i>
              <i className="final_far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="final_pages_page">
          <div className="final_pages_page__inner">
            <div className="final_logo">Morpheus</div>
            <div className="final_pagenumber">11 12 </div>

            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 5</h2>
                <p>{narrativeText[4]}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-5"></label>
            </div>
          </div>
        </div>
        <div className="final_pages_page">
          <div
            className="final_pages_page__inner"
            style={{
              backgroundImage: `url(${imageUrl[4]})`,
            }}
          >
            <div className="final_hamburger">
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
            </div>
            <div className="final_control next">
              <label htmlFor="input-7"></label>
            </div>
            <div className="final_bg"></div>
            <div className="final_content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="final_content">{/* image생성 */}</div>
            <div className="final_footer">
              <i className="final_fab fa-google-plus-g"></i>
              <i className="final_fas fa-retweet"></i>
              <i className="final_far fa-heart"></i>
              <i className="final_far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="final_pages_page">
          <div className="final_pages_page__inner">
            <div className="final_logo">Morpheus</div>
            <div className="final_pagenumber">13 14 </div>

            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 6</h2>
                <p>{narrativeText[5]}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-6"></label>
            </div>
          </div>
        </div>
        <div className="final_pages_page">
          <div
            className="final_pages_page__inner"
            style={{
              backgroundImage: `url(${imageUrl[5]})`,
            }}
          >
            <div className="final_hamburger">
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
            </div>
            <div className="final_control next">
              <label htmlFor="input-8"></label>
            </div>
            <div className="final_bg"></div>
            <div className="final_content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="final_content">{/* image생성 */}</div>
            <div className="final_footer">
              <i className="final_fab fa-google-plus-g"></i>
              <i className="final_fas fa-retweet"></i>
              <i className="final_far fa-heart"></i>
              <i className="final_far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="final_pages_page">
          <div className="final_pages_page__inner">
            <div className="final_logo">Morpheus</div>
            <div className="final_pagenumber">15 16 </div>

            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 7</h2>
                <p>{narrativeText[6]}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-7"></label>
            </div>
          </div>
        </div>
        <div className="final_pages_page">
          <div
            className="final_pages_page__inner"
            style={{
              backgroundImage: `url(${imageUrl[6]})`,
            }}
          >
            <div className="final_hamburger">
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
            </div>
            <div className="final_control next">
              <label htmlFor="input-9"></label>
            </div>
            <div className="final_bg"></div>
            <div className="final_content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="final_content">{/* image생성 */}</div>
            <div className="final_footer">
              <i className="final_fab fa-google-plus-g"></i>
              <i className="final_fas fa-retweet"></i>
              <i className="final_far fa-heart"></i>
              <i className="final_far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="final_pages_page">
          <div className="final_pages_page__inner">
            <div className="final_logo">Morpheus</div>
            <div className="final_pagenumber">17 18 </div>

            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 8</h2>
                <p>{narrativeText[7]}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-8"></label>
            </div>
          </div>
        </div>
        <div className="final_pages_page">
          <div
            className="final_pages_page__inner"
            style={{
              backgroundImage: `url(${imageUrl[7]})`,
            }}
          >
            <div className="final_hamburger">
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
            </div>
            <div className="final_control next">
              <label htmlFor="input-10"></label>
            </div>
            <div className="final_bg"></div>
            <div className="final_content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="final_content">{/* image생성 */}</div>
            <div className="final_footer">
              <i className="final_fab fa-google-plus-g"></i>
              <i className="final_fas fa-retweet"></i>
              <i className="final_far fa-heart"></i>
              <i className="final_far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="final_pages_page">
          <div className="final_pages_page__inner">
            <div className="final_logo">Morpheus</div>
            <div className="final_pagenumber">19 20 </div>

            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 9</h2>
                <p>{narrativeText[8]}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-9"></label>
            </div>
          </div>
        </div>
        <div className="final_pages_page">
          <div
            className="final_pages_page__inner"
            style={{
              backgroundImage: `url(${imageUrl[8]})`,
            }}
          >
            <div className="final_hamburger">
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
            </div>
            <div className="final_control next">
              <label htmlFor="input-11"></label>
            </div>
            <div className="final_bg"></div>
            <div className="final_content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="final_content">{/* image생성 */}</div>
            <div className="final_footer">
              <i className="final_fab fa-google-plus-g"></i>
              <i className="final_fas fa-retweet"></i>
              <i className="final_far fa-heart"></i>
              <i className="final_far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="final_pages_page">
          <div className="final_pages_page__inner">
            <div className="final_logo">Morpheus</div>
            <div className="final_pagenumber">21 22 </div>

            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 10</h2>
                <p>{narrativeText[9]}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-10"></label>
            </div>
          </div>
        </div>
        <div className="final_pages_page">
          <div
            className="final_pages_page__inner"
            style={{
              backgroundImage: `url(${imageUrl[9]})`,
            }}
          >
            <div className="final_hamburger">
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
            </div>
            <div className="final_control next">
              <label htmlFor="input-12"></label>
            </div>
            <div className="final_bg"></div>
            <div className="final_content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="final_content">{/* image생성 */}</div>
            <div className="final_footer">
              <i className="final_fab fa-google-plus-g"></i>
              <i className="final_fas fa-retweet"></i>
              <i className="final_far fa-heart"></i>
              <i className="final_far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="final_pages_page">
          <div className="final_pages_page__inner">
            <div className="final_logo">Morpheus</div>
            <div className="final_pagenumber">23 24 </div>

            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 11</h2>
                <p>{narrativeText[10]}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-11"></label>
            </div>
          </div>
        </div>
        <div className="final_pages_page">
          <div
            className="final_pages_page__inner"
            style={{
              backgroundImage: `url(${imageUrl[10]})`,
            }}
          >
            <div className="final_hamburger">
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
            </div>
            <div className="final_control next">
              <label htmlFor="input-13"></label>
            </div>
            <div className="final_bg"></div>
            <div className="final_content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="final_content">{/* image생성 */}</div>
            <div className="final_footer">
              <i className="final_fab fa-google-plus-g"></i>
              <i className="final_fas fa-retweet"></i>
              <i className="final_far fa-heart"></i>
              <i className="final_far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="final_pages_page">
          <div className="final_pages_page__inner">
            <div className="final_logo">Morpheus</div>
            <div className="final_pagenumber">25 26 </div>

            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 12</h2>
                <p>{narrativeText[11]}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-12"></label>
            </div>
          </div>
        </div>
        <div className="final_pages_page">
          <div
            className="final_pages_page__inner"
            style={{
              backgroundImage: `url(${imageUrl[11]})`,
            }}
          >
            <div className="final_hamburger">
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
            </div>
            <div className="final_control next">
              <label htmlFor="input-14"></label>
            </div>
            <div className="final_bg"></div>
            <div className="final_content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="final_content">{/* image생성 */}</div>
            <div className="final_footer">
              <i className="final_fab fa-google-plus-g"></i>
              <i className="final_fas fa-retweet"></i>
              <i className="final_far fa-heart"></i>
              <i className="final_far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="final_pages_page">
          <div className="final_pages_page__inner">
            <div className="final_logo">Morpheus</div>
            <div className="final_pagenumber">27 28 </div>

            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 13</h2>
                <p>{narrativeText[12]}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-13"></label>
            </div>
          </div>
        </div>
        <div className="final_pages_page">
          <div
            className="final_pages_page__inner"
            style={{
              backgroundImage: `url(${imageUrl[12]})`,
            }}
          >
            <div className="final_hamburger">
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
            </div>
            <div className="final_control next">
              <label htmlFor="input-15"></label>
            </div>
            <div className="final_bg"></div>
            <div className="final_content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="final_content">{/* image생성 */}</div>
            <div className="final_footer">
              <i className="final_fab fa-google-plus-g"></i>
              <i className="final_fas fa-retweet"></i>
              <i className="final_far fa-heart"></i>
              <i className="final_far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="final_pages_page">
          <div className="final_pages_page__inner">
            <div className="final_logo">Morpheus</div>
            <div className="final_pagenumber">29 30 </div>

            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 14</h2>
                <p>{narrativeText[13]}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-14"></label>
            </div>
          </div>
        </div>
        <div className="final_pages_page">
          <div
            className="final_pages_page__inner"
            style={{
              backgroundImage: `url(${imageUrl[13]})`,
            }}
          >
            <div className="final_hamburger">
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
            </div>
            <div className="final_control next">
              <label htmlFor="input-16"></label>
            </div>
            <div className="final_bg"></div>
            <div className="final_content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="final_content">{/* image생성 */}</div>
            <div className="final_footer">
              <i className="final_fab fa-google-plus-g"></i>
              <i className="final_fas fa-retweet"></i>
              <i className="final_far fa-heart"></i>
              <i className="final_far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="final_pages_page">
          <div className="final_pages_page__inner">
            <div className="final_logo">Morpheus</div>
            <div className="final_pagenumber">31 32 </div>

            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 15</h2>
                <p>{narrativeText[14]}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-15"></label>
            </div>
          </div>
        </div>
        <div className="final_pages_page">
          <div
            className="final_pages_page__inner"
            style={{
              backgroundImage: `url(${imageUrl[14]})`,
            }}
          >
            <div className="final_hamburger">
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
            </div>
            <div className="final_control next">
              <label htmlFor="input-17"></label>
            </div>
            <div className="final_bg"></div>
            <div className="final_content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="final_content">{/* image생성 */}</div>
            <div className="final_footer">
              <i className="final_fab fa-google-plus-g"></i>
              <i className="final_fas fa-retweet"></i>
              <i className="final_far fa-heart"></i>
              <i className="final_far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="final_pages_page">
          <div className="final_pages_page__inner">
            <div className="final_logo">Morpheus</div>
            <div className="final_pagenumber">33 34 </div>

            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 16</h2>
                <p>{narrativeText[15]}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-16"></label>
            </div>
          </div>
        </div>
        <div className="final_pages_page">
          <div
            className="final_pages_page__inner"
            style={{
              backgroundImage: `url(${imageUrl[15]})`,
            }}
          >
            <div className="final_hamburger">
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
            </div>
            <div className="final_control next">
              <label htmlFor="input-18"></label>
            </div>
            <div className="final_bg"></div>
            <div className="final_content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div className="final_content">{/* image생성 */}</div>
            <div className="final_footer">
              <i className="final_fab fa-google-plus-g"></i>
              <i className="final_fas fa-retweet"></i>
              <i className="final_far fa-heart"></i>
              <i className="final_far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div className="final_pages_page">
          <div className="final_pages_page__inner">
            <div className="final_logo">Morpheus</div>
            <div className="final_pagenumber">35 36</div>
            <div className="final_content">
              <div className="final_content_center">
                <h4>The End Morpheus</h4>
                <h6>the end</h6>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-17"></label>
            </div>
          </div>
        </div>
        <div className="final_pages_page">
          <div className="final_pages_page__inner">
            <div className="final_hamburger">
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
              <div className="final_hamburger_part"></div>
            </div>
            <div className="final_content">
              <div className="final_content_center right">
                <h4>The End Morpheus</h4>
                <h6>the end</h6>
              </div>
            </div>
            <div className="final_bg"></div>

            <div className="final_footer">
              <i className="final_fab fa-google-plus-g"></i>
              <i className="final_fas fa-retweet"></i>
              <i className="final_far fa-heart"></i>
              <i className="final_far fa-share-square"></i>
            </div>
          </div>
        </div>
      </div>
      <button
        className="final_final_button"
        onClick={() => navigate("/mypage")}
      >
        Exit
      </button>
    </div>
  );
};

export default Fairytale;
