import React, { useEffect, useState, useReducer } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import reducer from "../../api/Reducer";
import "./CompletedFairytale.scss";
import UserRequestApi from "../../api/UserRequestAPI";

const Fairytale = () => {
  const inputCount = 18;
  const location = useLocation();
  const navigate = useNavigate();
  const [episode, setEpisode] = useState([]);
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

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
                <h4>{/*title*/}Your Fairytale Title</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="final_pages_page">
          <div className="final_pages_page__inner">
            <div className="final_content">
              <div className="final_content_center right">
                <h4>{/*title*/}Your Fairytale Title</h4>
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
            <div className="final_pagenumber">4 5 </div>
            <button className="final_content_button">generate</button>
            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 1</h2>
                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
              </div>
            </div>

            <div className="final_control">
              <label htmlFor="input-1"></label>
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
            <div className="final_pagenumber">6 7 </div>
            <button className="final_content_button">generate</button>
            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 2</h2>
                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-2"></label>
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
            <div className="final_pagenumber">8 9 </div>
            <button className="final_content_button">generate</button>
            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 3</h2>
                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-3"></label>
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
            <div className="final_pagenumber">10 11 </div>
            <button className="final_content_button">generate</button>
            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 4</h2>
                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-4"></label>
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
            <div className="final_pagenumber">12 13 </div>
            <button className="final_content_button">generate</button>
            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 5</h2>
                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-5"></label>
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
            <div className="final_pagenumber">14 15 </div>
            <button className="final_content_button">generate</button>
            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 6</h2>
                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-6"></label>
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
            <div className="final_pagenumber">16 17 </div>
            <button className="final_content_button">generate</button>
            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 7</h2>
                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-7"></label>
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
            <div className="final_pagenumber">18 19 </div>
            <button className="final_content_button">generate</button>
            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 8</h2>
                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-8"></label>
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
            <div className="final_pagenumber">20 21 </div>
            <button className="final_content_button">generate</button>
            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 9</h2>
                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-9"></label>
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
            <div className="final_pagenumber">22 23 </div>
            <button className="final_content_button">generate</button>
            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 10</h2>
                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-10"></label>
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
            <div className="final_pagenumber">24 25 </div>
            <button className="final_content_button">generate</button>
            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 11</h2>
                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-11"></label>
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
            <div className="final_pagenumber">26 27 </div>
            <button className="final_content_button">generate</button>
            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 12</h2>
                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-12"></label>
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
            <div className="final_pagenumber">28 29 </div>
            <button className="final_content_button">generate</button>
            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 13</h2>
                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-13"></label>
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
            <div className="final_pagenumber">30 31 </div>
            <button className="final_content_button">generate</button>
            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 14</h2>
                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-14"></label>
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
            <div className="final_pagenumber">32 33 </div>
            <button className="final_content_button">generate</button>
            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 15</h2>
                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-15"></label>
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
            <div className="final_pagenumber">34 35 </div>
            <button className="final_content_button">generate</button>
            <div className="final_content">
              <div className="final_content_section">
                <h2>Episode 16</h2>
                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
              </div>
            </div>
            <div className="final_control">
              <label htmlFor="input-16"></label>
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
            <div className="final_pagenumber">36 37</div>
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
